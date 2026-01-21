'use client';

import { useState, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { X, Phone, User, MessageSquare, Mail, Camera, Loader2, CheckCircle } from 'lucide-react';
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

interface CallbackModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CallbackModal({ isOpen, onClose }: CallbackModalProps) {
  const t = useTranslations('callback');
  const tForm = useTranslations('contact.form');
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
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
      smartphone: tForm('smartphone'),
      laptop: tForm('laptop'),
      tablet: tForm('tablet'),
      other: tForm('other'),
    };
    return labels[device] || device;
  };

  const resetForm = () => {
    reset();
    setPhotoPreview(null);
    setPhotoFile(null);
    setError(null);
  };

  const handleClose = () => {
    if (!isSubmitting) {
      resetForm();
      setIsSuccess(false);
      onClose();
    }
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setError(null);

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

      if (!response.ok) {
        throw new Error('Failed to send');
      }

      setIsSuccess(true);
      resetForm();

      // Auto close after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
      }, 3000);
    } catch (err) {
      console.error('Submit error:', err);
      setError(tForm('error'));
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div
        className="bg-primary-800 rounded-2xl p-6 md:p-8 w-full max-w-md mx-4 border border-primary-600 shadow-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-2xl font-bold text-text-primary">{t('title')}</h2>
            <p className="text-text-secondary mt-1">{t('subtitle')}</p>
          </div>
          <button
            onClick={handleClose}
            className="p-2 hover:bg-primary-700 rounded-lg transition-colors"
            aria-label={t('close')}
            disabled={isSubmitting}
          >
            <X size={24} className="text-text-secondary" />
          </button>
        </div>

        {/* Success Message */}
        {isSuccess ? (
          <div className="text-center py-8">
            <CheckCircle size={64} className="mx-auto text-green-500 mb-4" />
            <p className="text-lg text-text-primary">{tForm('success')}</p>
          </div>
        ) : (
          /* Form */
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Name */}
            <div>
              <div className="relative">
                <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" />
                <input
                  {...register('name')}
                  type="text"
                  placeholder={tForm('name')}
                  className="form-input text-center placeholder:text-center"
                  disabled={isSubmitting}
                />
              </div>
              {errors.name && (
                <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <div className="relative">
                <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" />
                <input
                  {...register('phone')}
                  type="tel"
                  placeholder={tForm('phone')}
                  className="form-input text-center placeholder:text-center"
                  disabled={isSubmitting}
                />
              </div>
              {errors.phone && (
                <p className="text-red-400 text-sm mt-1">{errors.phone.message}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <div className="relative">
                <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" />
                <input
                  {...register('email')}
                  type="email"
                  placeholder={tForm('email')}
                  className="form-input text-center placeholder:text-center"
                  disabled={isSubmitting}
                />
              </div>
              {errors.email && (
                <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            {/* Device */}
            <div>
              <select {...register('device')} className="form-input" disabled={isSubmitting}>
                <option value="">{tForm('devicePlaceholder')}</option>
                <option value="smartphone">{tForm('smartphone')}</option>
                <option value="laptop">{tForm('laptop')}</option>
                <option value="tablet">{tForm('tablet')}</option>
                <option value="other">{tForm('other')}</option>
              </select>
              {errors.device && (
                <p className="text-red-400 text-sm mt-1">{errors.device.message}</p>
              )}
            </div>

            {/* Message */}
            <div>
              <div className="relative">
                <MessageSquare size={18} className="absolute left-4 top-4 text-text-muted" />
                <textarea
                  {...register('message')}
                  placeholder={tForm('messagePlaceholder')}
                  rows={3}
                  className="form-input text-center placeholder:text-center resize-none"
                  disabled={isSubmitting}
                />
              </div>
            </div>

            {/* Photo Upload */}
            <div>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handlePhotoChange}
                className="hidden"
                id="photo-upload"
                disabled={isSubmitting}
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
                    disabled={isSubmitting}
                  >
                    <X size={16} className="text-white" />
                  </button>
                </div>
              ) : (
                <label
                  htmlFor="photo-upload"
                  className={`flex items-center justify-center gap-2 p-4 border-2 border-dashed border-primary-600 rounded-lg cursor-pointer hover:border-accent-cyan hover:bg-primary-700/50 transition-colors ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  <Camera size={20} className="text-text-muted" />
                  <span className="text-text-secondary text-sm">{tForm('addPhoto')}</span>
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
                  disabled={isSubmitting}
                />
                <span className="text-sm text-text-secondary">
                  {tForm('privacy')}
                </span>
              </label>
              {errors.privacy && (
                <p className="text-red-400 text-sm mt-1">{errors.privacy.message}</p>
              )}
            </div>

            {/* Error Message */}
            {error && (
              <p className="text-red-400 text-sm text-center">{error}</p>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="btn-primary w-full flex items-center justify-center gap-2"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={20} className="animate-spin" />
                  <span>Sending...</span>
                </>
              ) : (
                tForm('submit')
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
