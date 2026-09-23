
import React, { useEffect } from 'react';
import { X, Download, ExternalLink, FileText } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
}) => {
  const resumeUrl = 'https://job-finder-resumes-nidhi.s3.ap-south-1.amazonaws.com/resumes/6a72270d8075e7a52dad2618/6a8eee524970df4e2168d9b5/nidhip_resume_%20%282%29.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIA6I6YWJETHCQ554JG%2F20260923%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20260923T154238Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCmFwLXNvdXRoLTEiRzBFAiEAiZnSy5XANZJQccHhDCX1GGsm0hySLPHXM7EpiZVHSVoCIEUUZwKZqZI9Vb6dxe7l35zxz1NX%2FPTniKkZn%2F%2FZnSHJKuMCCMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMOTgxMzE3NjAxNTc0IgzJkBaIScnKjGTP7gsqtwJhiiTqStuNPbzXDbNNnnKWCB0XE9agt%2FJRW4HoYsOQ1ROSP2YsWDFTgARInbXP8Q1%2F7UEf6e%2FEs9BaKZqaclgOtOzHXORZ%2BEmJXtEJxEmO1fgOlcISmJUvm0czXwbuoCadII%2B8ev1J6U8IZ%2BVG3ziKUhGNnK%2B%2BTWW68DcRBloagug7ULh0pnBBvKTLtnUdqLKmf7dCdiv6upgwXL0%2BPCBihyiEaaOLD%2Bjx3DaLtN7QXjPwY2TZgpkidn7DnwZUGwDANjZZEt%2FYmYI4UVRrX8abZF%2B3Uu5ArZsHpkbr3Mjvgx0U8PdTSZmMxdg2VNgIbXwuTKlx2Fl7keksWk1laGxRfeH9tb4dNH6F7PxKmBcCquUj5Zt6KKWY3%2FwAEY%2FHKS78RWJc1jdaA%2FI2yBYnqcIepaUDlEUDrjC%2B2s%2FVBjqtAmHyMCJKD3QjDcSagU%2FeHp4nZgG%2FsdYQkFZiFP1GA9nxQuLz2UuaidxyC0URDghdVkqgpqF%2BCe%2FUZiTUamFqL%2BpAh1eMhwDWcG%2FUmFlKHJZHP%2FFNS%2FIXUc6S4nCdWb6Som1O1pmLrHfRPjAfgNP4npmQm5O%2B%2B3%2FLpycO9rMVJdgYSFwaX%2F%2F1mtmIbWeqtUru8Hw5bDF2QBj1DtB0%2Fp1%2FrcScR9P%2B5xwoN4PVj3io0j8GDUIktu0NQEyfqUY0dH7hP%2Ba5OFdxZr%2BsqrH35eT8WQf%2FsFrZwLwa5Q%2FYWugfncVeNpzOvzVMVLOMF4nXM35KgWbF59%2F65PEw6FdITY3IcIuyurbred97E1kQXED6sMYLA28Ew%2Bs1m56EOZdgYFwzVr7F%2BiJ6%2FhuA8yLUw6U%3D&X-Amz-Signature=760e9c6b77786c3a31da2ea83f7de9ce3341008ba171a8d0863a34532558b453&X-Amz-SignedHeaders=host&response-content-disposition=inline';

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