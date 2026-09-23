import React, { useState, useEffect } from 'react';
import { PinItem, PROFILE_DATA, PINS } from '../data/portfolioData';
import { X, ArrowUpRight, Share2, MoreHorizontal, Bookmark, Heart, Send, CheckCircle2, Github, ExternalLink, Calendar, User, Tag } from 'lucide-react';

interface PinterestPinModalProps {
  pin: PinItem | null;
  onClose: () => void;
  isSaved: boolean;
  onSave: (pin: PinItem) => void;
  onSelectPin: (pin: PinItem) => void;
  onOpenContact: () => void;
}

interface Comment {
  id: string;
  name: string;
  avatar: string;
  text: string;
  time: string;
}

export const PinterestPinModal: React.FC<PinterestPinModalProps> = ({
  pin,
  onClose,
  isSaved,
  onSave,
  onSelectPin,
  onOpenContact
}) => {
 
  const [copiedLink, setCopiedLink] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (pin) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [pin, onClose]);

  if (!pin) return null;

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2400);
  };

  // Find related pins
  const relatedPins = PINS.filter((p) => p.id !== pin.id && p.board === pin.board).slice(0, 3);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-8 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/65 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Floating Close Button Top Right of Screen */}
      <button
        onClick={onClose}
        className="fixed top-4 right-4 sm:top-6 sm:right-6 z-50 w-11 h-11 rounded-full bg-white/90 hover:bg-white text-[#111111] flex items-center justify-center shadow-lg transition-transform hover:scale-105 active:scale-95"
        aria-label="Close pin view"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Pinterest 2-Column Pin Lightbox Card */}
      <div
        role="dialog"
        aria-modal="true"
        className="relative bg-white w-full max-w-4xl max-h-[92vh] rounded-[2rem] shadow-2xl overflow-hidden flex flex-col md:flex-row z-10 animate-in fade-in zoom-in-95 duration-200"
      >
        
        {/* Left Column: Pin Image Full Bleed */}
        <div className="md:w-1/2 bg-[#F0F0F0] flex items-center justify-center overflow-hidden relative group">
        <img
          src={pin.image}
          alt={pin.title}
          className="w-full h-full object-contain max-h-[460px] md:max-h-full"
          referrerPolicy="no-referrer"
        />

          {/* Destination URL badge overlay on image */}
          {pin.linkText && (
            <div className="absolute bottom-4 left-4 z-10">
              <a
                href={pin.externalUrl || '#'}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-full bg-white/95 backdrop-blur-md text-[#111111] text-xs font-bold flex items-center gap-1.5 shadow-md hover:bg-white transition-all"
              >
                <span>{pin.linkText}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#767676]" />
              </a>
            </div>
          )}
        </div>

        {/* Right Column: Pin Content, Metadata  */}
        <div className="md:w-1/2 flex flex-col max-h-[92vh] overflow-y-auto">
          
          {/* Top Control Bar */}
          <div className="sticky top-0 bg-white/95 backdrop-blur-md p-4 sm:p-5 flex items-center justify-between border-b border-[#F0F0F0] z-20">
            <div className="flex items-center gap-2">
              <button
                onClick={handleShare}
                className="p-2.5 rounded-full hover:bg-[#F0F0F0] text-[#111111] transition-colors"
                title="Share link"
              >
                <Share2 className="w-4 h-4" />
              </button>
              {copiedLink && (
                <span className="text-xs font-semibold text-[#00875A]">Copied!</span>
              )}
            </div>

            <div className="flex items-center gap-2.5">
              <button
                onClick={() => onSave(pin)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all shadow-sm active:scale-95 flex items-center gap-1.5 ${
                  isSaved
                    ? 'bg-[#111111] text-white hover:bg-black'
                    : 'bg-[#E60023] hover:bg-[#ad081b] text-white'
                }`}
              >
                <span>{isSaved ? 'Saved to Board' : 'Save'}</span>
              </button>
            </div>
          </div>

          {/* Pin Body Information */}
          <div className="p-6 sm:p-7 space-y-6 flex-1">
            
            {/* Board Tag & Date */}
            <div className="flex items-center justify-between text-xs text-[#767676]">
              <span className="font-semibold text-[#111111] bg-[#F0F0F0] px-3 py-1 rounded-full">
                {pin.board}
              </span>
              <span>{pin.date}</span>
            </div>

            {/* Title */}
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#111111] leading-tight tracking-tight">
              {pin.title}
            </h1>

            {/* Creator Row */}
            <div className="flex items-center justify-between py-2 border-y border-[#F0F0F0]">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full overflow-hidden border border-[#E9E9E9]">
                  <img
                    src={PROFILE_DATA.avatar}
                    alt={PROFILE_DATA.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#111111] leading-snug">{PROFILE_DATA.name}</h4>
                  <p className="text-xs text-[#767676]">IT Engineering Undergrad '27</p>
                </div>
              </div>

              <button
                onClick={onOpenContact}
                className="px-4 py-2 rounded-full bg-[#F0F0F0] hover:bg-[#E2E2E2] text-xs font-bold text-[#111111] transition-colors"
              >
                Contact
              </button>
            </div>

            {/* Full Description */}
            <div className="space-y-3">
              <p className="text-sm text-[#333333] leading-relaxed">
                {pin.fullDescription}
              </p>
            </div>

            {/* Engineering Highlights / Features */}
            {pin.metadata?.highlights && pin.metadata.highlights.length > 0 && (
              <div className="space-y-2.5 p-4 bg-[#FAFAFA] rounded-2xl border border-[#F0F0F0]">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#767676]">
                  Key Highlights & Architecture
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-[#333333]">
                  {pin.metadata.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#00875A] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Skills List if present */}
            {pin.metadata?.skillsList && (
              <div className="space-y-2 p-4 bg-[#FAFAFA] rounded-2xl border border-[#F0F0F0]">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#767676]">
                  Core Competencies
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {pin.metadata.skillsList.map((skill, idx) => (
                    <div key={idx} className="p-2 bg-white rounded-lg border border-[#EDE8DE] flex justify-between">
                      <span className="font-semibold text-[#111111]">{skill.name}</span>
                      {skill.note && <span className="text-[#767676]">{skill.note}</span>}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tags (Neat Pinterest pill tags) */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#767676] mb-2">
                Tags & Tech Stack
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {pin.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-full bg-[#F0F0F0] text-xs font-semibold text-[#111111] hover:bg-[#E2E2E2] transition-colors"
                  >
                    #{tag.replace(/\s+/g, '')}
                  </span>
                ))}
              </div>
            </div>

            {/* External Links */}
            <div className="pt-2 flex flex-wrap gap-3">

              {pin.showGithub && (
                <a
                  href={pin.externalUrl || 'https://github.com'}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#111111] text-white text-xs font-bold hover:bg-[#333333] transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>View on GitHub</span>
                </a>
              )}

              {pin.showDemo && (
                <button
                  onClick={() => alert(`Opening live demo for ${pin.title}`)}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#F0F0F0] text-[#111111] text-xs font-bold hover:bg-[#E2E2E2] transition-colors"
                >
                  <ExternalLink className="w-4 h-4 text-[#767676]" />
                  <span>Live Project Demo</span>
                </button>
              )}

            </div>

           

            {/* Related Pins Section */}
            {relatedPins.length > 0 && (
              <div className="pt-6 border-t border-[#F0F0F0]">
                <h4 className="font-bold text-sm text-[#111111] mb-3">
                  More like this
                </h4>
                <div className="grid grid-cols-3 gap-2">
                  {relatedPins.map((rel) => (
                    <div
                      key={rel.id}
                      onClick={() => onSelectPin(rel)}
                      className="rounded-xl overflow-hidden bg-[#F0F0F0] cursor-pointer hover:opacity-90 transition-opacity"
                    >
                      <img
                        src={rel.image}
                        alt={rel.title}
                        className="w-full aspect-square object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </div>
  );
};
