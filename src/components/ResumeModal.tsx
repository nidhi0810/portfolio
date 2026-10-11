
import React, { useEffect } from 'react';
import { X, Download, ExternalLink, FileText } from 'lucide-react';
const resumePdf = "/nidhip_resume.pdf";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
}) => {
  const resumeUrl = resumePdf
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">

      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#1F2421]/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Resume PDF viewer"
        className="relative z-10 flex flex-col w-full max-w-5xl
        h-[90vh] overflow-hidden rounded-3xl bg-white
        border border-[#E8DFC8] shadow-2xl"
      >

        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-5 py-4
        border-b border-[#EDE8DE] bg-[#FBF9F5] shrink-0">

          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-[#964F43]" />
            <span className="text-xs font-semibold uppercase
            tracking-wider text-[#1F2421]">
              My Resume
            </span>
          </div>

          <div className="flex items-center gap-2">

            {/* Open PDF in a new tab */}
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-2
              rounded-lg text-xs font-medium text-[#1F2421]
              hover:bg-[#F4E8E5] transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Open in new tab</span>
            </a>

            {/* Close */}
            <button
              onClick={onClose}
              className="p-2 rounded-full text-[#6B7280]
              hover:text-[#1F2421] hover:bg-[#F6F3EC]
              transition-colors"
              aria-label="Close resume"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* PDF Viewer */}
        <div className="flex-1 min-h-0 bg-[#E8E5DF]">
          <iframe
            src={resumeUrl}
            title="Nidhi Puthran Resume"
            className="w-full h-full border-0"
          />
        </div>

      </div>
    </div>
  );
};