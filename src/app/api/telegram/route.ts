import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    // Check if environment variables are set
    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
      console.error('Missing Telegram credentials:', {
        hasToken: !!TELEGRAM_BOT_TOKEN,
        hasChatId: !!TELEGRAM_CHAT_ID,
      });
      return NextResponse.json(
        { error: 'Telegram credentials not configured' },
        { status: 500 }
      );
    }

    const formData = await request.formData();

    const name = formData.get('name') as string;
    const phone = formData.get('phone') as string;
    const email = formData.get('email') as string | null;
    const device = formData.get('device') as string;
    const deviceLabel = formData.get('deviceLabel') as string;
    const message = formData.get('message') as string | null;
    const photo = formData.get('photo') as File | null;

    // Build message text
    const lines = [
      '📱 *Новая заявка с сайта*',
      '',
      `👤 *Имя:* ${name}`,
      `📞 *Телефон:* ${phone}`,
    ];

    if (email) {
      lines.push(`📧 *Email:* ${email}`);
    }

    lines.push(`🔧 *Устройство:* ${deviceLabel || device}`);

    if (message) {
      lines.push('', `💬 *Описание проблемы:*`, message);
    }

    const text = lines.join('\n');

    // Send text message first
    const messageResponse = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text,
          parse_mode: 'Markdown',
        }),
      }
    );

    if (!messageResponse.ok) {
      const error = await messageResponse.json();
      console.error('Telegram message error:', error);
      return NextResponse.json(
        { error: 'Failed to send message to Telegram' },
        { status: 500 }
      );
    }

    // If there's a photo, send it separately
    if (photo && photo.size > 0) {
      const photoFormData = new FormData();
      photoFormData.append('chat_id', TELEGRAM_CHAT_ID);
      photoFormData.append('photo', photo);
      photoFormData.append('caption', `📷 Фото от ${name}`);

      const photoResponse = await fetch(
        `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendPhoto`,
        {
          method: 'POST',
          body: photoFormData,
        }
      );

      if (!photoResponse.ok) {
        console.error('Telegram photo error:', await photoResponse.json());
        // Don't fail the whole request if just the photo fails
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Telegram API error:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}
