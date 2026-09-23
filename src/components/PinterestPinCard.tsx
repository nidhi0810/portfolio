import React, { useState } from 'react';
import { PinItem, PROFILE_DATA } from '../data/portfolioData';
import { ArrowUpRight, Share2, MoreHorizontal, Bookmark, Heart, Sparkles, ExternalLink } from 'lucide-react';

interface PinterestPinCardProps {
  pin: PinItem;
  isSaved: boolean;
  onSave: (pin: PinItem) => void;
  onClick: (pin: PinItem) => void;
}

export const PinterestPinCard: React.FC<PinterestPinCardProps> = ({
  pin,
  isSaved,
  onSave,
  onClick
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(pin.savesCount);
  const [copiedLink, setCopiedLink] = useState(false);

  const handleToggleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsLiked(!isLiked);
    setLikesCount(isLiked ? likesCount - 1 : likesCount + 1);
  };

  const handleShare = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="pin-grid-item group">
      {/* Pin Visual Card Container */}
      <div
        onClick={() => onClick(pin)}
        className="pin-card-wrapper relative rounded-2xl sm:rounded-3xl overflow-hidden bg-[#F0F0F0] cursor-zoom-in transition-all duration-300"
      >
        {/* Cover Image */}
        <img
          src={pin.image}
          alt={pin.title}
          className="w-full h-auto object-cover group-hover:brightness-95 transition-all duration-300"
          loading="lazy"
          referrerPolicy="no-referrer"
        />

        {/* Pinterest Dark Gradient Hover Scrim */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none" />

        {/* Top-Right: Iconic Pinterest Red Save Button */}
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onSave(pin);
            }}
            className={`px-4 py-2.5 rounded-full text-xs font-bold transition-all shadow-md active:scale-95 flex items-center gap-1.5 ${
              isSaved
                ? 'bg-[#111111] text-white hover:bg-black'
                : 'bg-[#E60023] hover:bg-[#ad081b] text-white'
            }`}
            title={isSaved ? 'Saved to your board' : 'Save pin'}
          >
            <span>{isSaved ? 'Saved' : 'Save'}</span>
          </button>
        </div>

        {/* Bottom Left: Destination Link Pill */}
        {pin.linkText && (
          <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10 max-w-[65%]">
            <div className="px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-[#111111] text-xs font-semibold flex items-center gap-1 truncate shadow-md hover:bg-white transition-colors">
              <ArrowUpRight className="w-3.5 h-3.5 shrink-0 text-[#767676]" />
              <span className="truncate">{pin.linkText}</span>
            </div>
          </div>
        )}

        {/* Bottom Right: Quick Share & Options */}
        <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10 flex items-center gap-1.5">
          <button
            onClick={handleShare}
            className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-md hover:bg-white text-[#111111] flex items-center justify-center shadow-md transition-transform hover:scale-105 active:scale-95"
            title="Share Pin"
          >
            <Share2 className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Pin Description & Metadata below image */}
      <div className="pt-2 px-1">
        {/* Title */}
        <h3
          onClick={() => onClick(pin)}
          className="text-sm font-bold text-[#111111] hover:underline cursor-pointer line-clamp-2 leading-snug"
        >
          {pin.title}
        </h3>

        {/* Short snippet */}
        <p className="text-xs text-[#5F5F5F] line-clamp-2 mt-1 leading-normal">
          {pin.shortDescription}
        </p>

        {/* Creator Attribution Row + Likes */}
        <div className="flex items-center justify-between mt-2 pt-1 text-xs text-[#767676]">
          <div className="flex items-center gap-1.5">
            <div className="w-5 h-5 rounded-full overflow-hidden shrink-0 border border-[#E9E9E9]">
              <img
                src={PROFILE_DATA.avatar}
                alt={PROFILE_DATA.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="text-xs font-medium text-[#111111] truncate max-w-[120px]">
              {PROFILE_DATA.name}
            </span>
          </div>

          {/* Like Heart Button */}
          <button
            onClick={handleToggleLike}
            className="flex items-center gap-1 text-[11px] text-[#767676] hover:text-[#E60023] transition-colors"
            title="Like this pin"
          >
            <Heart className={`w-3.5 h-3.5 ${isLiked ? 'fill-[#E60023] text-[#E60023]' : ''}`} />
            <span>{likesCount}</span>
          </button>
        </div>

      </div>
    </div>
  );
};
