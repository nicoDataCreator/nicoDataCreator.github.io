import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Menu, X, Mail, Phone, MessageCircle, Copy, Check, ChevronUp, ArrowUpRight, MapPin } from 'lucide-react';
import { LinkedInIcon } from './icons/LinkedInIcon';

interface FloatingContactDockProps {
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}

export const FloatingContactDock: React.FC<FloatingContactDockProps> = ({
  isOpen,
  onToggle,
  onClose,
}) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <>
      {/* Expanded Popover Sheet */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed bottom-20 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-96 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl p-5 space-y-4 animate-in fade-in slide-in-from-bottom-5 duration-200"
        >
          {/* Header of the popover */}
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img
                  src={PERSONAL_INFO.avatarUrl}
                  alt="Nicolas Coronel"
                  className="w-10 h-10 rounded-full object-cover border-2 border-blue-500"
                />
                <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white dark:border-slate-900"></span>
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white leading-tight">
                  Nicolas Coronel
                </h4>
                <div className="flex items-center gap-1 text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">
                  <span>Available for BDR / AE Roles</span>
                </div>
              </div>
            </div>

            <button
              onClick={onClose}
              aria-label="Close menu"
              className="p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Contact Links */}
          <div className="space-y-2">
            <div className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
              Direct Contact
            </div>

            {/* Email link with quick copy */}
            <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200/80 dark:border-slate-800">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-2.5 text-xs font-semibold text-slate-900 dark:text-white hover:text-blue-600 transition-colors truncate"
              >
                <Mail className="w-4 h-4 text-blue-500 shrink-0" />
                <span className="truncate">{PERSONAL_INFO.email}</span>
              </a>
              <button
                onClick={handleCopyEmail}
                title="Copy email address"
                className="p-1.5 text-slate-400 hover:text-blue-600 hover:bg-white dark:hover:bg-slate-800 rounded-md transition-colors"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>

            {/* Phone & WhatsApp */}
            <a
              href={`tel:${PERSONAL_INFO.phone}`}
              className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200/80 dark:border-slate-800 hover:border-emerald-500 transition-all text-xs font-semibold text-slate-900 dark:text-white"
            >
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>{PERSONAL_INFO.phone}</span>
              </div>
              <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-mono">Call / WA</span>
            </a>

            {/* LinkedIn */}
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200/80 dark:border-slate-800 hover:border-blue-500 transition-all text-xs font-semibold text-slate-900 dark:text-white"
            >
              <div className="flex items-center gap-2.5">
                <LinkedInIcon className="w-4 h-4 text-sky-500 shrink-0" />
                <span>LinkedIn Profile</span>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
            </a>
          </div>

          {/* Quick Jump Navigation in Menu */}
          <div className="pt-2 border-t border-slate-100 dark:border-slate-800 space-y-1 text-xs">
            <div className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1.5">
              Portfolio Jump Links
            </div>
            {[
              { label: 'Professional Career & Playbook', href: '#career' },
              { label: 'Pro Rugby Career & Leadership', href: '#sports' },
              { label: 'Projects & Interactive Systems', href: '#projects' },
              { label: 'Education & Curiosities', href: '#education' },
              { label: 'Full Contact Form', href: '#contact' },
            ].map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                onClick={onClose}
                className="block py-1.5 px-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-blue-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-1 text-[10px] text-slate-400 dark:text-slate-500 text-center flex items-center justify-center gap-1">
            <MapPin className="w-3 h-3" />
            <span>Madrid, Spain · Open to Relocation / Remote</span>
          </div>
        </div>
      )}

      {/* The Sticky Bottom Floating Dock with Profile Picture & Hamburger Icon */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
        <button
          onClick={onToggle}
          aria-label={isOpen ? "Close contact menu" : "Open contact menu with Nicolas's profile"}
          className="group flex items-center gap-3 pl-1.5 pr-4 py-1.5 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-950 shadow-2xl hover:scale-103 active:scale-98 transition-all border border-slate-700 dark:border-slate-200"
        >
          {/* Nicolas's Profile Photo inside the Dock */}
          <div className="relative">
            <img
              src={PERSONAL_INFO.avatarUrl}
              alt="Nicolas Coronel"
              className="w-9 h-9 rounded-full object-cover border-2 border-blue-500"
            />
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border border-slate-900 dark:border-white"></span>
          </div>

          {/* Label + Hamburger / Close Icon */}
          <div className="flex items-center gap-2">
            <div className="text-left hidden xs:block">
              <div className="text-xs font-bold leading-tight flex items-center gap-1">
                <span>Contact</span>
              </div>
              <div className="text-[10px] opacity-80 leading-tight">
                {isOpen ? 'Close' : 'Menu'}
              </div>
            </div>

            <div className="p-1 rounded-full bg-slate-800 dark:bg-slate-100 text-white dark:text-slate-900">
              {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </div>
          </div>
        </button>
      </div>
    </>
  );
};
