import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Language, translations } from '../data/translations';
import { Mail, Phone, Copy, Check, Send, MapPin, Calendar, Clock, Loader2, AlertCircle, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { LinkedInIcon } from './icons/LinkedInIcon';

interface ContactSectionProps {
  lang: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ lang }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const t = translations[lang].contact;

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: t.subjectOptions[0] || 'Oportunidad BDR / AE',
    message: ''
  });

  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [submittedData, setSubmittedData] = useState<{ name: string; email: string; subject: string } | null>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleResetForm = () => {
    setSubmissionStatus('idle');
    setSubmittedData(null);
    setFormState({
      name: '',
      email: '',
      subject: t.subjectOptions[0] || 'Oportunidad BDR / AE',
      message: ''
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) return;

    setSubmissionStatus('loading');

    try {
      // POST directly to FormSubmit endpoint configured for Nicolas Coronel's protonmail
      const response = await fetch(`https://formsubmit.co/ajax/${PERSONAL_INFO.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          subject: formState.subject,
          message: formState.message,
          _subject: `[Portfolio Web] ${formState.subject} · ${formState.name}`,
          _replyto: formState.email,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      if (response.ok) {
        setSubmittedData({
          name: formState.name,
          email: formState.email,
          subject: formState.subject,
        });
        setSubmissionStatus('success');
      } else {
        setSubmissionStatus('error');
      }
    } catch {
      setSubmissionStatus('error');
    }
  };

  // Pre-formatted direct mailto fallback link with all fields
  const mailtoLink = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
    `[Portfolio] ${formState.subject || 'Contacto'} - ${formState.name || 'Mensaje'}`
  )}&body=${encodeURIComponent(
    `Hola Nicolás,\n\n${formState.message || ''}\n\n---\nRemitente: ${formState.name || 'Sin especificar'}\nEmail de respuesta: ${formState.email || 'Sin especificar'}`
  )}`;

  return (
    <section id="contact" className="py-16 md:py-24 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 tracking-wider uppercase mb-2">
            {t.badge}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t.title}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {t.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Contact Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* Email Card */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">{t.emailLabel}</div>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-sm font-bold text-slate-900 dark:text-white hover:text-blue-600 transition-colors"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                title="Copy email"
                className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">{t.phoneLabel}</div>
                  <a
                    href={`tel:${PERSONAL_INFO.phone}`}
                    className="text-sm font-bold text-slate-900 dark:text-white hover:text-emerald-600 transition-colors"
                  >
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>
              <button
                onClick={handleCopyPhone}
                title="Copy phone"
                className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* LinkedIn Card */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="p-2.5 rounded-xl bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400">
                  <LinkedInIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">{t.linkedinLabel}</div>
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-slate-900 dark:text-white hover:text-blue-600 transition-colors"
                  >
                    linkedin.com/in/nicolasjuancoronel
                  </a>
                </div>
              </div>
            </div>

            {/* Fast Logistics Card */}
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800 space-y-2.5 text-xs text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                <span>{t.locationNote}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                <span>{t.responseNote}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-slate-400 shrink-0" />
                <span>{t.availNote}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Message Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                    {t.formTitle}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {t.formSubtitle}
                  </p>
                </div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-[11px] font-medium text-slate-600 dark:text-slate-300 self-start sm:self-auto border border-slate-200 dark:border-slate-700/60">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>{t.directNotice}</span>
                </div>
              </div>

              {/* SUCCESS STATE */}
              {submissionStatus === 'success' && (
                <div className="p-6 sm:p-8 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="inline-flex p-3 rounded-full bg-emerald-100 dark:bg-emerald-900/80 text-emerald-600 dark:text-emerald-300 shadow-xs">
                    <Check className="w-6 h-6 stroke-[2.5]" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white">
                      {t.successTitle}
                    </h4>
                    <p className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                      {t.successMessage}
                    </p>
                  </div>

                  {submittedData && (
                    <div className="p-3.5 rounded-lg bg-white/80 dark:bg-slate-900/80 border border-emerald-200/60 dark:border-emerald-900 text-left text-xs text-slate-600 dark:text-slate-300 space-y-1 max-w-md mx-auto">
                      <div><strong className="text-slate-900 dark:text-white">{t.nameLabel}:</strong> {submittedData.name}</div>
                      <div><strong className="text-slate-900 dark:text-white">Email:</strong> {submittedData.email}</div>
                      <div><strong className="text-slate-900 dark:text-white">{t.subjectLabel}:</strong> {submittedData.subject}</div>
                    </div>
                  )}

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={handleResetForm}
                      className="w-full sm:w-auto px-4 py-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg shadow-xs transition-colors cursor-pointer"
                    >
                      {t.sendAnother}
                    </button>
                    <a
                      href={mailtoLink}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-medium text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700/80 border border-slate-200 dark:border-slate-700 rounded-lg transition-colors"
                    >
                      <span>{t.mailtoAlternative}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                    </a>
                  </div>
                </div>
              )}

              {/* ERROR STATE */}
              {submissionStatus === 'error' && (
                <div className="p-6 rounded-xl bg-amber-50 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-800 text-center space-y-4 animate-in fade-in duration-300 mb-6">
                  <div className="inline-flex p-2.5 rounded-full bg-amber-100 dark:bg-amber-900/80 text-amber-600 dark:text-amber-300">
                    <AlertCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                      {t.errorTitle}
                    </h4>
                    <p className="mt-1 text-xs text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                      {t.errorMessage}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-1">
                    <a
                      href={mailtoLink}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-xs transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      <span>{t.mailtoAlternative}</span>
                    </a>
                    <button
                      onClick={() => setSubmissionStatus('idle')}
                      className="w-full sm:w-auto px-4 py-2.5 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-200/60 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg transition-colors cursor-pointer"
                    >
                      {t.retryButton}
                    </button>
                  </div>
                </div>
              )}

              {/* FORM (Visible when idle, loading, or retry) */}
              {submissionStatus !== 'success' && (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        {t.nameLabel} <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        disabled={submissionStatus === 'loading'}
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder={t.namePlaceholder}
                        className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-60 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Email <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        disabled={submissionStatus === 'loading'}
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder={t.emailPlaceholder}
                        className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-60 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      {t.subjectLabel}
                    </label>
                    <select
                      value={formState.subject}
                      disabled={submissionStatus === 'loading'}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-60 transition-colors"
                    >
                      {t.subjectOptions.map((opt, oIdx) => (
                        <option key={oIdx} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      {t.messageLabel} <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      rows={4}
                      required
                      disabled={submissionStatus === 'loading'}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder={t.messagePlaceholder}
                      className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none disabled:opacity-60 transition-colors"
                    ></textarea>
                  </div>

                  <div className="pt-1 space-y-3">
                    <button
                      type="submit"
                      disabled={submissionStatus === 'loading'}
                      className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 disabled:bg-blue-400 rounded-lg shadow-xs transition-colors cursor-pointer"
                    >
                      {submissionStatus === 'loading' ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>{t.submittingButton}</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>{t.submitButton}</span>
                        </>
                      )}
                    </button>

                    <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 pt-1">
                      <span>Destino: <strong className="text-slate-700 dark:text-slate-300">{PERSONAL_INFO.email}</strong></span>
                      <a
                        href={mailtoLink}
                        className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1"
                      >
                        <span>{t.mailtoAlternative}</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

