import React, { useState } from 'react';
import { X, Send, Mail, Copy, Check, Linkedin, Github } from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolioData';

interface PinterestContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PinterestContactModal: React.FC<PinterestContactModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submitError, setSubmitError] = useState('');

  if (!isOpen) return null;

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE_DATA.email);
      setCopiedEmail(true);
      window.setTimeout(() => setCopiedEmail(false), 2000);
    } catch (error) {
      console.error('Could not copy email address:', error);
      setSubmitError('Could not copy the email address. Please copy it manually.');
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      return;
    }

    setIsSubmitting(true);
    setSubmitError('');

    try {
      const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
      if (!accessKey) {
        throw new Error(
          'The contact form is not configured yet. Please try emailing me directly.'
        );
      }

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name.trim(),
          email: formData.email.trim(),
          subject:
            formData.subject.trim() ||
            `Portfolio message from ${formData.name.trim()}`,
          message: formData.message.trim(),
        }),
      });

      const result: { success?: boolean; message?: string } = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Failed to send your message. Please try again.');
      }

      setIsSent(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      window.setTimeout(() => {
        setIsSent(false);
        onClose();
      }, 2500);
    } catch (error) {
      console.error('Contact form submission failed:', error);
      setSubmitError(
        error instanceof Error
          ? error.message
          : 'Something went wrong. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="pinterest-contact-title"
        className="relative bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200"
      >
        <div className="p-5 border-b border-[#F0F0F0] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-[#E9E9E9]">
              <img
                src={PROFILE_DATA.avatar}
                alt={PROFILE_DATA.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h3 id="pinterest-contact-title" className="font-bold text-base text-[#111111] leading-tight">
                Message {PROFILE_DATA.name}
              </h3>
              <p className="text-xs text-[#767676]">Active student developer · Typically replies within 24h</p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close contact form"
            className="p-2 rounded-full hover:bg-[#F0F0F0] text-[#767676] hover:text-[#111111] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          <div className="mb-5 p-3 bg-[#FAFAFA] rounded-2xl border border-[#F0F0F0] flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs min-w-0">
              <Mail className="w-4 h-4 text-[#E60023] shrink-0" />
              <span className="font-medium text-[#111111] break-all">{PROFILE_DATA.email}</span>
            </div>
            <button
              type="button"
              onClick={handleCopyEmail}
              className="flex items-center gap-1 text-xs font-semibold px-2.5 py-1 bg-white hover:bg-[#F0F0F0] rounded-lg border border-[#E9E9E9] transition-colors shrink-0"
            >
              {copiedEmail ? <Check className="w-3.5 h-3.5 text-[#00875A]" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
            </button>
          </div>

          {submitError && (
            <div role="alert" className="mb-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              {submitError}
            </div>
          )}

          {isSent ? (
            <div className="text-center py-8 space-y-3" role="status" aria-live="polite">
              <div className="w-12 h-12 rounded-full bg-[#E8EFE8] text-[#00875A] flex items-center justify-center mx-auto">
                <Check className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-lg text-[#111111]">Message submitted!</h4>
              <p className="text-xs text-[#5F5F5F] max-w-xs mx-auto">
                Thanks for reaching out. Your message was accepted for delivery.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label htmlFor="pinterest-contact-name" className="block text-xs font-bold text-[#111111] mb-1">Your Name</label>
                <input
                  id="pinterest-contact-name"
                  type="text"
                  autoComplete="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Alex Morgan"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAFAFA] border border-[#E9E9E9] text-xs text-[#111111] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#111111]"
                />
              </div>

              <div>
                <label htmlFor="pinterest-contact-email" className="block text-xs font-bold text-[#111111] mb-1">Your Email</label>
                <input
                  id="pinterest-contact-email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="alex@company.com"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAFAFA] border border-[#E9E9E9] text-xs text-[#111111] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#111111]"
                />
              </div>

              <div>
                <label htmlFor="pinterest-contact-subject" className="block text-xs font-bold text-[#111111] mb-1">Topic / Opportunity</label>
                <input
                  id="pinterest-contact-subject"
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Internship, hackathon, collaboration..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAFAFA] border border-[#E9E9E9] text-xs text-[#111111] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#111111]"
                />
              </div>

              <div>
                <label htmlFor="pinterest-contact-message" className="block text-xs font-bold text-[#111111] mb-1">Message</label>
                <textarea
                  id="pinterest-contact-message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Hi, I came across your portfolio and wanted to discuss..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAFAFA] border border-[#E9E9E9] text-xs text-[#111111] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#111111] resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 rounded-full bg-[#E60023] hover:bg-[#ad081b] text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors disabled:opacity-50 mt-4 active:scale-95"
              >
                {isSubmitting ? <span>Sending message...</span> : <><Send className="w-3.5 h-3.5" /><span>Send Note to Nidhi</span></>}
              </button>
            </form>
          )}

          <div className="mt-5 pt-4 border-t border-[#F0F0F0] flex items-center justify-center gap-4 text-xs font-semibold text-[#5F5F5F]">
            <a href={PROFILE_DATA.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-[#111111] transition-colors flex items-center gap-1">
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <span aria-hidden="true" className="text-[#DCDCDC]">·</span>
            <a href={PROFILE_DATA.socials.github} target="_blank" rel="noreferrer" className="hover:text-[#111111] transition-colors flex items-center gap-1">
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
