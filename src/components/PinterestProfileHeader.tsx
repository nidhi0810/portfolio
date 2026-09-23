import React, { useState } from 'react';
import { PROFILE_DATA, BOARDS_LIST } from '../data/portfolioData';
import { Check, Share2, Mail, ExternalLink, Github, Linkedin, FileText, CheckCircle2 } from 'lucide-react';

interface PinterestProfileHeaderProps {
  selectedBoard: string;
  onSelectBoard: (board: string) => void;
  activeTab: 'created' | 'saved';
  onTabChange: (tab: 'created' | 'saved') => void;
  onOpenContact: () => void;
  onOpenResume: () => void;
}

export const PinterestProfileHeader: React.FC<PinterestProfileHeaderProps> = ({
  selectedBoard,
  onSelectBoard,
  activeTab,
  onTabChange,
  onOpenContact,
  onOpenResume
}) => {
  const [copiedShare, setCopiedShare] = useState(false);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedShare(true);
    setTimeout(() => setCopiedShare(false), 2400);
  };

  return (
    <div id="profile" className="pt-6 pb-6 text-center max-w-4xl mx-auto px-4">
      
      {/* Profile Avatar with Verified Badge */}
      <div className="relative inline-block mx-auto mb-4">
        <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-white shadow-lg mx-auto bg-[#F0F0F0]">
          <img
            src={PROFILE_DATA.avatar}
            alt={PROFILE_DATA.name}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div 
          className="absolute bottom-1 right-2 w-7 h-7 rounded-full bg-[#E60023] text-white flex items-center justify-center border-2 border-white shadow-xs"
          title="Verified IT Engineering Creator"
        >
          <Check className="w-4 h-4 stroke-[3]" />
        </div>
      </div>

      {/* Name & Handle */}
      <h1 className="text-3xl sm:text-4xl font-extrabold text-[#111111] tracking-tight">
        {PROFILE_DATA.name}
      </h1>
      
      <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-[#767676] mt-1.5 font-medium">
        <span>{PROFILE_DATA.handle}</span>
        <span aria-hidden="true">·</span>
        <span className="text-[#111111] font-semibold">{PROFILE_DATA.title}</span>
      </div>

      {/* Bio */}
      <p className="text-sm sm:text-base text-[#111111] max-w-2xl mx-auto mt-3 font-normal leading-relaxed">
        {PROFILE_DATA.bio}
      </p>

      {/* Stats Counter Row */}
      <div className="flex items-center justify-center gap-6 sm:gap-8 text-xs sm:text-sm text-[#5F5F5F] font-semibold mt-4">
        <span><strong className="text-[#111111]">{PROFILE_DATA.stats.boardsCount}</strong> Boards</span>
        <span aria-hidden="true" className="text-[#DCDCDC]">·</span>
        <span><strong className="text-[#111111]">{PROFILE_DATA.stats.pinsCount}</strong> Curated Pins</span>
        <span aria-hidden="true" className="text-[#DCDCDC]">·</span>
        <span><strong className="text-[#111111]">{PROFILE_DATA.stats.monthlyViews}</strong> Monthly Views</span>
      </div>

      {/* Primary Action Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 mt-5">
        
        {/* Share Button */}
        <button
          onClick={handleShare}
          className="px-4 py-3 rounded-full bg-[#F0F0F0] hover:bg-[#E2E2E2] text-xs sm:text-sm font-bold text-[#111111] transition-colors flex items-center gap-2"
        >
          {copiedShare ? (
            <>
              <Check className="w-4 h-4 text-[#00875A]" />
              <span>Link Copied</span>
            </>
          ) : (
            <>
              <Share2 className="w-4 h-4 text-[#767676]" />
              <span>Share</span>
            </>
          )}
        </button>

        {/* Contact (Pinterest Red primary action) */}
        <button
          onClick={onOpenContact}
          className="px-5 py-3 rounded-full bg-[#E60023] hover:bg-[#ad081b] text-xs sm:text-sm font-bold text-white transition-all shadow-sm hover:shadow flex items-center gap-2 active:scale-95"
        >
          <Mail className="w-4 h-4" />
          <span>Contact Nidhi</span>
        </button>

        {/* Curated Resume */}
        <button
          onClick={onOpenResume}
          className="px-4 py-3 rounded-full bg-[#F0F0F0] hover:bg-[#E2E2E2] text-xs sm:text-sm font-bold text-[#111111] transition-colors flex items-center gap-2"
        >
          <FileText className="w-4 h-4 text-[#767676]" />
          <span>Resume</span>
        </button>

        {/* External Social Profiles */}
        <div className="flex items-center gap-1.5 ml-1">
          <a
            href={PROFILE_DATA.socials.github}
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-full bg-[#F0F0F0] hover:bg-[#E2E2E2] text-[#111111] transition-colors"
            title="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={PROFILE_DATA.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-full bg-[#F0F0F0] hover:bg-[#E2E2E2] text-[#111111] transition-colors"
            title="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Pinterest Tab Switcher: Created vs Saved */}
      <div className="flex items-center justify-center gap-6 mt-8 border-b border-[#E9E9E9]">
        <button
          onClick={() => onTabChange('created')}
          className={`pb-3 text-sm sm:text-base font-bold transition-colors relative ${
            activeTab === 'created'
              ? 'text-[#111111] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#111111]'
              : 'text-[#767676] hover:text-[#111111]'
          }`}
        >
          Created Pins
        </button>
        <button
          onClick={() => onTabChange('saved')}
          className={`pb-3 text-sm sm:text-base font-bold transition-colors relative ${
            activeTab === 'saved'
              ? 'text-[#111111] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#111111]'
              : 'text-[#767676] hover:text-[#111111]'
          }`}
        >
          Saved Pins
        </button>
      </div>

      {/* Board Category Filter Chips (Visible when in Created mode) */}
      {activeTab === 'created' && (
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto py-5 scrollbar-none px-2">
          {BOARDS_LIST.map((board) => (
            <button
              key={board.id}
              onClick={() => onSelectBoard(board.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                selectedBoard === board.id
                  ? 'bg-[#111111] text-white shadow-xs'
                  : 'bg-[#F0F0F0] text-[#111111] hover:bg-[#E2E2E2]'
              }`}
            >
              <span>{board.name}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                selectedBoard === board.id ? 'bg-white/20 text-white' : 'bg-black/10 text-[#5F5F5F]'
              }`}>
                {board.count}
              </span>
            </button>
          ))}
        </div>
      )}

    </div>
  );
};
