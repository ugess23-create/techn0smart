'use client';

import { useState, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  User,
  MessageSquare,
  Loader2,
  CheckCircle,
  AlertCircle,
  Camera,
  X,
} from 'lucide-react';
import Image from 'next/image';

const formSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  phone: z.string().min(5, 'Phone is required'),
  email: z.string().email('Invalid email').optional().or(z.literal('')),
  device: z.string().min(1, 'Please select a device'),
  message: z.string().optional(),
  privacy: z.boolean().refine((val) => val === true, 'You must accept the privacy policy'),
});

type FormData = z.infer<typeof formSchema>;

export default function Contact() {
  const t = useTranslations('contact');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPhotoFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removePhoto = () => {
    setPhotoPreview(null);
    setPhotoFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const getDeviceLabel = (device: string) => {
    const labels: Record<string, string> = {
      smartphone: t('form.smartphone'),
      laptop: t('form.laptop'),
      tablet: t('form.tablet'),
      other: t('form.other'),
    };
    return labels[device] || device;
  };

  const onSubmit = async (data: FormData) => {
    setStatus('loading');
    try {
      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('phone', data.phone);
      formData.append('device', data.device);
      formData.append('deviceLabel', getDeviceLabel(data.device));

      if (data.email) {
        formData.append('email', data.email);
      }

      if (data.message) {
        formData.append('message', data.message);
      }

      if (photoFile) {
        formData.append('photo', photoFile);
      }

      const response = await fetch('/api/telegram', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setStatus('success');
        reset();
        removePhoto();
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 3000);
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: t('address'),
      value: 'Offenbacher Landstraße 306, 60599 Frankfurt am Main',
      href: 'https://maps.google.com/?q=Offenbacher+Landstraße+306,+60599+Frankfurt+am+Main',
    },
    {
      icon: Phone,
      label: t('phone'),
      value: '+49 152 5913 7289',
      href: 'tel:+4915259137289',
    },
    {
      icon: Mail,
      label: t('email'),
      value: 'techn0smartffm@gmail.com',
      href: 'mailto:techn0smartffm@gmail.com',
    },
    {
      icon: Clock,
      label: t('hours'),
      value: t('hoursValue'),
    },
  ];

  return (
    <section id="contact" className="section gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">{t('title')}</h2>
          <p className="section-subtitle">{t('subtitle')}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div>
            <div className="space-y-6">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-800 rounded-xl flex items-center justify-center flex-shrink-0 border border-primary-700">
                    <Icon size={24} className="text-accent-blue" />
                  </div>
                  <div>
                    <p className="text-text-secondary text-sm">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith('http') ? '_blank' : undefined}
                        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-text-primary hover:text-accent-blue transition-colors"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-text-primary">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="mt-8 rounded-xl overflow-hidden border border-primary-700 h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2561.8234567890!2d8.7123!3d50.0856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd0ea6b7a89c3d%3A0x0!2sOffenbacher+Landstra%C3%9Fe+306%2C+60599+Frankfurt+am+Main!5e0!3m2!1sde!2sde!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-primary-800 rounded-2xl p-6 md:p-8 border border-primary-700">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {/* Name */}
              <div>
                <label className="block text-text-secondary text-sm mb-2">{t('form.name')}</label>
                <div className="relative">
                  <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" />
                  <input
                    {...register('name')}
                    type="text"
                    className="form-input text-center"
                    disabled={status === 'loading'}
                  />
                </div>
                {errors.name && (
                  <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-text-secondary text-sm mb-2">{t('form.phone')}</label>
                <div className="relative">
                  <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" />
                  <input
                    {...register('phone')}
                    type="tel"
                    className="form-input text-center"
                    disabled={status === 'loading'}
                  />
                </div>
                {errors.phone && (
                  <p className="text-red-400 text-sm mt-1">{errors.phone.message}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-text-secondary text-sm mb-2">{t('form.email')}</label>
                <div className="relative">
                  <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" />
                  <input
                    {...register('email')}
                    type="email"
                    className="form-input text-center"
                    disabled={status === 'loading'}
                  />
                </div>
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              {/* Device */}
              <div>
                <label className="block text-text-secondary text-sm mb-2">{t('form.device')}</label>
                <select {...register('device')} className="form-input" disabled={status === 'loading'}>
                  <option value="">{t('form.devicePlaceholder')}</option>
                  <option value="smartphone">{t('form.smartphone')}</option>
                  <option value="laptop">{t('form.laptop')}</option>
                  <option value="tablet">{t('form.tablet')}</option>
                  <option value="other">{t('form.other')}</option>
                </select>
                {errors.device && (
                  <p className="text-red-400 text-sm mt-1">{errors.device.message}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block text-text-secondary text-sm mb-2">{t('form.message')}</label>
                <div className="relative">
                  <MessageSquare size={18} className="absolute left-4 top-4 text-text-muted" />
                  <textarea
                    {...register('message')}
                    placeholder={t('form.messagePlaceholder')}
                    rows={4}
                    className="form-input text-center placeholder:text-center resize-none"
                    disabled={status === 'loading'}
                  />
                </div>
              </div>

              {/* Photo Upload */}
              <div>
                <label className="block text-text-secondary text-sm mb-2">{t('form.addPhoto')}</label>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoChange}
                  className="hidden"
                  id="photo-upload-contact"
                  disabled={status === 'loading'}
                />

                {photoPreview ? (
                  <div className="relative">
                    <div className="relative w-full h-32 rounded-lg overflow-hidden border border-primary-600">
                      <Image
                        src={photoPreview}
                        alt="Preview"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <button
                      type="button"
                      onClick={removePhoto}
                      className="absolute top-2 right-2 p-1 bg-red-500 rounded-full hover:bg-red-600 transition-colors"
                      disabled={status === 'loading'}
                    >
                      <X size={16} className="text-white" />
                    </button>
                  </div>
                ) : (
                  <label
                    htmlFor="photo-upload-contact"
                    className={`flex items-center justify-center gap-2 p-4 border-2 border-dashed border-primary-600 rounded-lg cursor-pointer hover:border-accent-cyan hover:bg-primary-700/50 transition-colors ${status === 'loading' ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    <Camera size={20} className="text-text-muted" />
                    <span className="text-text-secondary text-sm">{t('form.addPhoto')}</span>
                  </label>
                )}
              </div>

              {/* Privacy */}
              <div>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    {...register('privacy')}
                    type="checkbox"
                    className="mt-1 w-4 h-4 rounded border-primary-600 bg-primary-700 text-accent-blue focus:ring-accent-blue"
                    disabled={status === 'loading'}
                  />
                  <span className="text-sm text-text-secondary">{t('form.privacy')}</span>
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
                {status === 'idle' && t('form.submit')}
                {status === 'loading' && 'Sending...'}
                {status === 'success' && t('form.success')}
                {status === 'error' && t('form.error')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
