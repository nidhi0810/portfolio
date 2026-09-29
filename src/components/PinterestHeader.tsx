import React, { useState, useRef, useEffect } from 'react';
import { Search, Bell, MessageCircle, X, Check, Bookmark, ArrowUpRight, ChevronDown } from 'lucide-react';
import { NOTIFICATIONS, PROFILE_DATA } from '../data/portfolioData';

interface PinterestHeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  savedCount: number;
  activeTab: 'created' | 'saved';
  onTabChange: (tab: 'created' | 'saved') => void;
  onOpenContact: () => void;
  onOpenResume: () => void;
}

export const PinterestHeader: React.FC<PinterestHeaderProps> = ({
  searchQuery,
  onSearchChange,
  savedCount,
  activeTab,
  onTabChange,
  onOpenContact,
  onOpenResume
}) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [unreadCount, setUnreadCount] = useState(2);
  const notifRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (notifRef.current && !notifRef.current.contains(e.target as Node)) {
        setShowNotifications(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#E9E9E9] px-4 sm:px-6 py-2.5 transition-all">
      <div className="max-w-[1920px] mx-auto flex items-center gap-3 sm:gap-4">
        
        {/* Left: Pinterest Iconic Red Logo & Nav */}
        <div className="flex items-center gap-2 shrink-0">
          <a
            href="#"
            className="w-10 h-10 rounded-full bg-[#E60023] hover:bg-[#b8001c] flex items-center justify-center transition-transform hover:scale-105 active:scale-95 shadow-xs"
            aria-label="Pinterest Home"
            title="Nidhi Puthran — Pinterest Portfolio"
          >
            {/* Iconic Pinterest Styled 'P' */}
            <svg
              className="w-6 h-6 fill-white"
              viewBox="0 0 24 24"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </a>

          {/* Quick Tab Selector (Created vs Saved) */}
          <div className="hidden sm:flex items-center gap-1 ml-1">
            <button
              onClick={() => onTabChange('created')}
              className={`px-4 py-2.5 rounded-full text-sm font-semibold transition-colors ${
                activeTab === 'created'
                  ? 'bg-[#111111] text-white'
                  : 'text-[#111111] hover:bg-[#F0F0F0]'
              }`}
            >
              Created
            </button>
            <button
              onClick={() => onTabChange('saved')}
              className={`flex items-center gap-1.5 px-4 py-2.5 rounded-full text-sm font-semibold transition-colors ${
                activeTab === 'saved'
                  ? 'bg-[#111111] text-white'
                  : 'text-[#111111] hover:bg-[#F0F0F0]'
              }`}
            >
              <span>Saved</span>
              {savedCount > 0 && (
                <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                  activeTab === 'saved' ? 'bg-[#E60023] text-white' : 'bg-[#E60023] text-white'
                }`}>
                  {savedCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Center: Iconic Pinterest Pill Search Bar */}
        <div className="flex-1 relative">
          <div className="flex items-center w-full bg-[#E9E9E9] hover:bg-[#E2E2E2] focus-within:bg-white focus-within:ring-4 focus-within:ring-[#E60023]/20 focus-within:border-[#111111] rounded-full px-4 py-2.5 transition-all">
            <Search className="w-4 h-4 text-[#767676] shrink-0 mr-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search Nidhi's projects, skills, tech stacks..."
              className="w-full bg-transparent text-sm text-[#111111] placeholder-[#767676] focus:outline-none"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="p-1 rounded-full hover:bg-black/10 text-[#767676] transition-colors"
                title="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Right: Notifications, Messages, Profile Avatar, Resume */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          
          {/* Notifications Bell */}
          <div className="relative" ref={notifRef}>
            <button
              onClick={() => {
                setShowNotifications(!showNotifications);
                setUnreadCount(0);
              }}
              className="relative p-2.5 rounded-full hover:bg-[#F0F0F0] text-[#767676] hover:text-[#111111] transition-colors"
              title="Notifications"
            >
              <Bell className="w-5 h-5" />
              {unreadCount > 0 && (
                <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 rounded-full bg-[#E60023] ring-2 ring-white" />
              )}
            </button>

            {/* Notifications Dropdown */}
            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 sm:w-96 bg-white rounded-3xl shadow-2xl border border-[#E9E9E9] p-4 z-50 animate-in fade-in zoom-in-95 duration-150">
                <div className="flex items-center justify-between pb-3 border-b border-[#F0F0F0]">
                  <h4 className="font-bold text-sm text-[#111111]">Portfolio Updates</h4>
                  <span className="text-xs text-[#767676]">Recent milestones</span>
                </div>
                <div className="divide-y divide-[#F0F0F0] max-h-80 overflow-y-auto mt-2">
                  {NOTIFICATIONS.map((n) => (
                    <div key={n.id} className="py-3 px-1 hover:bg-[#FAFAFA] rounded-xl transition-colors">
                      <div className="flex items-start justify-between gap-2">
                        <span className="text-xs font-semibold text-[#111111]">{n.title}</span>
                        <span className="text-[10px] text-[#767676] shrink-0">{n.time}</span>
                      </div>
                      <p className="text-xs text-[#5F5F5F] mt-1 leading-snug">{n.message}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Messages / Contact button */}
          <button
            onClick={onOpenContact}
            className="p-2.5 rounded-full hover:bg-[#F0F0F0] text-[#767676] hover:text-[#111111] transition-colors"
            title="Send Message / Contact Nidhi"
          >
            <MessageCircle className="w-5 h-5" />
          </button>

          {/* Curated Resume Pill Button */}
          <button
            onClick={onOpenResume}
            className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-[#111111] bg-[#F0F0F0] hover:bg-[#E2E2E2] rounded-full transition-colors"
          >
            <span>Resume</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#767676]" />
          </button>

          {/* Profile Avatar */}
          <a
            href="#profile"
            className="w-9 h-9 rounded-full overflow-hidden border-2 border-transparent hover:border-[#111111] transition-colors shrink-0"
            title={`${PROFILE_DATA.name} Profile`}
          >
            <img
              src={PROFILE_DATA.avatar}
              alt={PROFILE_DATA.name}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </a>

        </div>

      </div>
    </header>
  );
};
