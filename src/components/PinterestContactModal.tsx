import React, { useState } from 'react';
import { X, Send, Mail, Copy, Check, Linkedin, Github, Sparkles } from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolioData';

interface PinterestContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PinterestContactModal: React.FC<PinterestContactModalProps> = ({
  isOpen,
  onClose
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE_DATA.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => {
        setIsSent(false);
        onClose();
      }, 2500);
    }, 600);
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
        className="relative bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Header */}
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
              <h3 className="font-bold text-base text-[#111111] leading-tight">
                Message {PROFILE_DATA.name}
              </h3>
              <p className="text-xs text-[#767676]">Active student developer · Typically replies within 24h</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-[#F0F0F0] text-[#767676] hover:text-[#111111] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Quick email copy pill */}
          <div className="mb-5 p-3 bg-[#FAFAFA] rounded-2xl border border-[#F0F0F0] flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs">
              <Mail className="w-4 h-4 text-[#E60023]" />
              <span className="font-medium text-[#111111]">{PROFILE_DATA.email}</span>
            </div>
            <button
              onClick={handleCopyEmail}
              className="flex items-center gap-1 text-xs font-semibold px-2.5 py-1 bg-white hover:bg-[#F0F0F0] rounded-lg border border-[#E9E9E9] transition-colors"
            >
              {copiedEmail ? <Check className="w-3.5 h-3.5 text-[#00875A]" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
            </button>
          </div>

          {isSent ? (
            <div className="text-center py-8 space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#E8EFE8] text-[#00875A] flex items-center justify-center mx-auto">
                <Check className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-lg text-[#111111]">Message Sent!</h4>
              <p className="text-xs text-[#5F5F5F] max-w-xs mx-auto">
                Thank you for reaching out. Your note has been delivered to Nidhi.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-bold text-[#111111] mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Alex Morgan"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAFAFA] border border-[#E9E9E9] text-xs text-[#111111] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#111111]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#111111] mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="alex@company.com"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAFAFA] border border-[#E9E9E9] text-xs text-[#111111] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#111111]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#111111] mb-1">
                  Topic / Opportunity
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Internship, hackathon, collaboration..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAFAFA] border border-[#E9E9E9] text-xs text-[#111111] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#111111]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#111111] mb-1">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Hi Nidhi, I came across your portfolio and wanted to discuss..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAFAFA] border border-[#E9E9E9] text-xs text-[#111111] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#111111] resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 rounded-full bg-[#E60023] hover:bg-[#ad081b] text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors disabled:opacity-50 mt-4 active:scale-95"
              >
                {isSubmitting ? (
                  <span>Sending message...</span>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Note to Nidhi</span>
                  </>
                )}
              </button>
            </form>
          )}

          {/* Social Links Footer */}
          <div className="mt-5 pt-4 border-t border-[#F0F0F0] flex items-center justify-center gap-4 text-xs font-semibold text-[#5F5F5F]">
            <a
              href={PROFILE_DATA.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#111111] transition-colors flex items-center gap-1"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <span aria-hidden="true" className="text-[#DCDCDC]">·</span>
            <a
              href={PROFILE_DATA.socials.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#111111] transition-colors flex items-center gap-1"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};
