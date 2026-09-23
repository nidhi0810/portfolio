import React, { useState } from 'react';
import { Mail, Linkedin, Github, FileText, Send, Check, Copy, Sparkles, ArrowUpRight } from 'lucide-react';

interface ContactSectionProps {
  onOpenResumeModal: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  onOpenResumeModal
}) => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const emailAddress = 'nidhiputhrannp@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 6000);
    }, 800);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-gradient-to-tr from-[#F4E8E5]/40 via-[#E8EFE8]/30 to-[#EFEBF5]/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Main Editorial Card for Contact */}
        <div className="card-moodboard bg-white rounded-3xl sm:rounded-[2.5rem] border border-[#EDE8DE] p-8 sm:p-12 lg:p-16 relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left Column: Headline, Invitation & Direct Links */}
            <div className="lg:col-span-6 space-y-7">
              <div>
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#964F43] font-semibold mb-3">
                  <span>Say Hello</span>
                  <span aria-hidden="true">·</span>
                  <span>Get in Touch</span>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#1F2421] leading-[1.1] tracking-tight">
                  Have an idea? <br />
                  <span className="italic font-normal text-[#964F43]">Let’s build something.</span>
                </h2>
              </div>

              <p className="text-base text-[#4A5568] leading-relaxed font-normal">
                I’m always excited to discuss software engineering opportunities, product design ideas, 
                hackathons, or open-source collaborations. Drop me a note and I’ll get back to you soon.
              </p>

              {/* Direct Email Pill with Copy & Mailto */}
              <div className="p-4 bg-[#FBF9F5] rounded-2xl border border-[#EDE8DE] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-white rounded-xl border border-[#EDE8DE] text-[#964F43]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-[#8A92A6] block">Direct Email</span>
                    <span className="text-sm font-medium text-[#1F2421] select-all">
                      {emailAddress}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopyEmail}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#1F2421] bg-white hover:bg-[#F6F3EC] border border-[#DDD5C7] rounded-xl transition-colors"
                    title="Copy email address"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#3D664E]" />
                        <span className="text-[#3D664E]">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-[#8A92A6]" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>

                  <a
                    href={`mailto:${emailAddress}`}
                    className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-white bg-[#1F2421] hover:bg-[#343B38] rounded-xl transition-colors"
                  >
                    <span>Compose</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Social and Resume Links Strip */}
              <div className="pt-2">
                <span className="text-xs uppercase tracking-wider font-semibold text-[#8A92A6] block mb-3">
                  Professional Channels
                </span>
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href="https://www.linkedin.com/in/nidhi-puthran-2824a9299/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-[#1F2421] bg-[#FBF9F5] hover:bg-[#F6F3EC] border border-[#EDE8DE] transition-colors"
                  >
                    <Linkedin className="w-4 h-4 text-[#3B5A75]" />
                    <span>LinkedIn</span>
                    <ArrowUpRight className="w-3 h-3 text-[#8A92A6]" />
                  </a>

                  <a
                    href="https://github.com/nidhi0810"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-[#1F2421] bg-[#FBF9F5] hover:bg-[#F6F3EC] border border-[#EDE8DE] transition-colors"
                  >
                    <Github className="w-4 h-4 text-[#1F2421]" />
                    <span>GitHub</span>
                    <ArrowUpRight className="w-3 h-3 text-[#8A92A6]" />
                  </a>

                  <button
                    onClick={onOpenResumeModal}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-[#1F2421] bg-[#F4E8E5]/70 hover:bg-[#F4E8E5] border border-[#F2DDD9] transition-colors"
                  >
                    <FileText className="w-4 h-4 text-[#964F43]" />
                    <span>Curated Resume</span>
                  </button>
                </div>
              </div>

            </div>

            {/* Right Column: Interactive Note / Contact Form */}
            <div className="lg:col-span-6 bg-[#FBF9F5] rounded-2xl p-6 sm:p-8 border border-[#EDE8DE]">
              <h3 className="font-serif text-2xl text-[#1F2421] mb-1">
                Send a Message
              </h3>
              <p className="text-xs text-[#6B7280] mb-6">
                Have a project or opportunity in mind? Leave a quick note below.
              </p>

              {isSubmitted ? (
                <div className="p-6 bg-white rounded-2xl border border-[#D5E2D5] text-center space-y-3 animate-in fade-in zoom-in-95">
                  <div className="w-12 h-12 rounded-full bg-[#E8EFE8] text-[#3D664E] flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-xl text-[#1F2421]">Thank you for reaching out!</h4>
                  <p className="text-xs text-[#4A5568] max-w-sm mx-auto">
                    Your message has been captured. I look forward to connecting with you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#4A5568] mb-1">
                      Your Name <span className="text-[#964F43]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#EDE8DE] text-sm text-[#1F2421] focus:outline-none focus:ring-2 focus:ring-[#1F2421]/20 focus:border-[#1F2421] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#4A5568] mb-1">
                      Your Email <span className="text-[#964F43]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@company.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#EDE8DE] text-sm text-[#1F2421] focus:outline-none focus:ring-2 focus:ring-[#1F2421]/20 focus:border-[#1F2421] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#4A5568] mb-1">
                      Topic / Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Internship opportunity, project collaboration, or just saying hi"
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#EDE8DE] text-sm text-[#1F2421] focus:outline-none focus:ring-2 focus:ring-[#1F2421]/20 focus:border-[#1F2421] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#4A5568] mb-1">
                      Message <span className="text-[#964F43]">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your idea, role, or team..."
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#EDE8DE] text-sm text-[#1F2421] focus:outline-none focus:ring-2 focus:ring-[#1F2421]/20 focus:border-[#1F2421] transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 rounded-xl bg-[#1F2421] hover:bg-[#343B38] text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending note...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
