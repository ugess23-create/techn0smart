'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { X, Phone, User, MessageSquare, Loader2, CheckCircle, AlertCircle } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  phone: z.string().min(5, 'Phone is required'),
  device: z.string().min(1, 'Please select a device'),
  message: z.string().optional(),
  privacy: z.boolean().refine((val) => val === true, 'You must accept the privacy policy'),
});

type FormData = z.infer<typeof formSchema>;

interface CallbackModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CallbackModal({ isOpen, onClose }: CallbackModalProps) {
  const t = useTranslations('callback');
  const tForm = useTranslations('contact.form');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setStatus('loading');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus('success');
        reset();
        setTimeout(() => {
          onClose();
          setStatus('idle');
        }, 2000);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="bg-primary-800 rounded-2xl p-6 md:p-8 w-full max-w-md mx-4 border border-primary-600 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-2xl font-bold text-text-primary">{t('title')}</h2>
            <p className="text-text-secondary mt-1">{t('subtitle')}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-primary-700 rounded-lg transition-colors"
            aria-label={t('close')}
          >
            <X size={24} className="text-text-secondary" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name */}
          <div>
            <div className="relative">
              <User size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
              <input
                {...register('name')}
                type="text"
                placeholder={tForm('name')}
                className="form-input pl-10"
              />
            </div>
            {errors.name && (
              <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <div className="relative">
              <Phone size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
              <input
                {...register('phone')}
                type="tel"
                placeholder={tForm('phone')}
                className="form-input pl-10"
              />
            </div>
            {errors.phone && (
              <p className="text-red-400 text-sm mt-1">{errors.phone.message}</p>
            )}
          </div>

          {/* Device */}
          <div>
            <select {...register('device')} className="form-input">
              <option value="">{tForm('devicePlaceholder')}</option>
              <option value="laptop">{tForm('laptop')}</option>
              <option value="smartphone">{tForm('smartphone')}</option>
              <option value="console">{tForm('console')}</option>
              <option value="monitor">{tForm('monitor')}</option>
              <option value="headphones">{tForm('headphones')}</option>
              <option value="other">{tForm('other')}</option>
            </select>
            {errors.device && (
              <p className="text-red-400 text-sm mt-1">{errors.device.message}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <div className="relative">
              <MessageSquare size={18} className="absolute left-3 top-3 text-text-muted" />
              <textarea
                {...register('message')}
                placeholder={tForm('messagePlaceholder')}
                rows={3}
                className="form-input pl-10 resize-none"
              />
            </div>
          </div>

          {/* Privacy */}
          <div>
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                {...register('privacy')}
                type="checkbox"
                className="mt-1 w-4 h-4 rounded border-primary-600 bg-primary-700 text-accent-blue focus:ring-accent-blue"
              />
              <span className="text-sm text-text-secondary">
                {tForm('privacy')}
              </span>
            </label>
            {errors.privacy && (
              <p className="text-red-400 text-sm mt-1">{errors.privacy.message}</p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={status === 'loading'}
            className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {status === 'loading' && <Loader2 size={20} className="animate-spin" />}
            {status === 'success' && <CheckCircle size={20} />}
            {status === 'error' && <AlertCircle size={20} />}
            {status === 'idle' && tForm('submit')}
            {status === 'loading' && 'Sending...'}
            {status === 'success' && tForm('success')}
            {status === 'error' && tForm('error')}
          </button>
        </form>
      </div>
    </div>
  );
}
