/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo } from 'react';
import { PinterestHeader } from './components/PinterestHeader';
import { PinterestProfileHeader } from './components/PinterestProfileHeader';
import { PinterestPinCard } from './components/PinterestPinCard';
import { PinterestPinModal } from './components/PinterestPinModal';
import { PinterestContactModal } from './components/PinterestContactModal';
import { ResumeModal } from './components/ResumeModal';
import { PINS, PinItem, PROFILE_DATA } from './data/portfolioData';
import { Bookmark, Search, Sparkles, Filter, Plus, ArrowUpRight } from 'lucide-react';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBoard, setSelectedBoard] = useState('All');
  const [activeTab, setActiveTab] = useState<'created' | 'saved'>('created');
  const [selectedPin, setSelectedPin] = useState<PinItem | null>(null);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Saved pins stored in local storage
  const [savedPinIds, setSavedPinIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('nidhi_pinterest_saved');
      if (saved) return JSON.parse(saved);
    } catch {
      // Ignore
    }
    // Default with RoleRadar and Hangout saved for a lively initial experience
    return ['roledar', 'hangout'];
  });

  useEffect(() => {
    try {
      localStorage.setItem('nidhi_pinterest_saved', JSON.stringify(savedPinIds));
    } catch {
      // Ignore
    }
  }, [savedPinIds]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((c) => (c === msg ? null : c));
    }, 2800);
  };

  const handleToggleSave = (pin: PinItem) => {
    if (savedPinIds.includes(pin.id)) {
      setSavedPinIds(savedPinIds.filter((id) => id !== pin.id));
      showToast(`Removed "${pin.title.split('—')[0]}" from your board`);
    } else {
      setSavedPinIds([pin.id, ...savedPinIds]);
      showToast(`Saved "${pin.title.split('—')[0]}" to your board`);
    }
  };

  const isPinSaved = (id: string) => savedPinIds.includes(id);

  // Filter pins based on active tab, search query, and selected board
  const filteredPins = useMemo(() => {
    let list = PINS;

    // Filter by tab
    if (activeTab === 'saved') {
      list = list.filter((p) => savedPinIds.includes(p.id));
    }

    // Filter by board (only applicable in created tab)
    if (activeTab === 'created' && selectedBoard !== 'All') {
      list = list.filter((p) => p.board === selectedBoard);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter((p) => 
        p.title.toLowerCase().includes(q) ||
        p.shortDescription.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q)) ||
        p.board.toLowerCase().includes(q)
      );
    }

    return list;
  }, [activeTab, selectedBoard, searchQuery, savedPinIds]);

  return (
    <div className="min-h-screen bg-white text-[#111111] antialiased selection:bg-[#E60023] selection:text-white">
      
      {/* 1. Iconic Pinterest Top Bar Navigation */}
      <PinterestHeader
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        savedCount={savedPinIds.length}
        activeTab={activeTab}
        onTabChange={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenContact={() => setIsContactOpen(true)}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      <main className="max-w-[1920px] mx-auto px-3 sm:px-6 pb-20">
        
        {/* 2. Authentic Pinterest Creator Profile Header */}
        <PinterestProfileHeader
          selectedBoard={selectedBoard}
          onSelectBoard={setSelectedBoard}
          activeTab={activeTab}
          onTabChange={setActiveTab}
          onOpenContact={() => setIsContactOpen(true)}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        {/* 3. The Authentic Pinterest Masonry Pins Grid */}
        <div className="mt-2">
          {filteredPins.length === 0 ? (
            <div className="text-center py-24 space-y-4 max-w-md mx-auto">
              <div className="w-16 h-16 rounded-full bg-[#F0F0F0] text-[#767676] flex items-center justify-center mx-auto">
                <Search className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-[#111111]">
                {activeTab === 'saved' ? 'No saved pins yet' : 'No pins found'}
              </h3>
              <p className="text-sm text-[#5F5F5F] leading-relaxed">
                {activeTab === 'saved'
                  ? 'Click the red "Save" button on any project, skill card, or reflection to add it to your personal board.'
                  : `We couldn't find any pins matching "${searchQuery}". Try searching for React, Python, RoleRadar, or Dance.`}
              </p>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="px-5 py-2.5 rounded-full bg-[#111111] text-white text-xs font-bold hover:bg-black transition-colors"
                >
                  Clear search query
                </button>
              )}
            </div>
          ) : (
            <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 xl:columns-6 gap-4 [column-fill:_balance]">
              {filteredPins.map((pin) => (
                <PinterestPinCard
                  key={pin.id}
                  pin={pin}
                  isSaved={isPinSaved(pin.id)}
                  onSave={handleToggleSave}
                  onClick={(p) => setSelectedPin(p)}
                />
              ))}
            </div>
          )}
        </div>

      </main>

      {/* 4. Pinterest 2-Column Pin Lightbox Detail Modal */}
      <PinterestPinModal
        pin={selectedPin}
        onClose={() => setSelectedPin(null)}
        isSaved={selectedPin ? isPinSaved(selectedPin.id) : false}
        onSave={handleToggleSave}
        onSelectPin={(pin) => setSelectedPin(pin)}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* 5. Pinterest Contact & Direct Messaging Dialog */}
      <PinterestContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      {/* 6. Curated Resume Printable Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2.5 px-5 py-3 bg-[#111111] text-white text-xs font-bold rounded-full shadow-2xl animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div className="w-2 h-2 rounded-full bg-[#E60023]" />
          <span>{toastMessage}</span>
          {activeTab !== 'saved' && (
            <button
              onClick={() => setActiveTab('saved')}
              className="ml-2 underline text-[#DCDCDC] hover:text-white"
            >
              View Board
            </button>
          )}
        </div>
      )}

    </div>
  );
}
