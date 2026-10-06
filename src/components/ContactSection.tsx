import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Language } from '../data/translations';
import { Mail, Phone, Copy, Check, Send, Clock, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { LinkedInIcon } from './icons/LinkedInIcon';

interface ContactSectionProps {
  lang: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ lang }) => {
  const isEs = lang === 'es';
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: 'bdr-ae',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) return;

    setStatus('loading');

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${PERSONAL_INFO.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
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
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch {
      // In case of network blocker, fallback gracefully
      setStatus('error');
    }
  };

  const directMailto = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
    `[Portfolio Web] ${formState.subject} - ${formState.name}`
  )}&body=${encodeURIComponent(
    `Hola Nicolás,\n\n${formState.message}\n\nDe: ${formState.name} (${formState.email})`
  )}`;

  return (
    <section id="contact" className="py-16 md:py-24 border-t border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="font-mono text-[11px] font-bold uppercase text-blue-600 dark:text-blue-400 tracking-wider">
            {isEs ? 'Contacto Directo' : 'Get in Touch'}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-1">
            {isEs
              ? 'Hablemos de Pipeline, Ejecución Comercial y Oportunidades'
              : "Let's Discuss Pipeline, Sales Execution & Tech Opportunities"}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {isEs
              ? 'Disponible para roles de BDM y Account Executive en Madrid o 100% remoto. Contáctame por email, WhatsApp o LinkedIn.'
              : 'I am actively interviewing for BDM and Account Executive roles in Madrid or fully remote. Reach out via email, phone, or LinkedIn.'}
          </p>
        </div>

        {/* Contact Layout (Split 2 Columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Direct Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            {/* Email Card */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs flex items-center justify-between">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-3.5 group min-w-0"
              >
                <div className="w-11 h-11 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="font-mono text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500">
                    {isEs ? 'Correo Electrónico' : 'Primary Email'}
                  </span>
                  <div className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors truncate">
                    {PERSONAL_INFO.email}
                  </div>
                </div>
              </a>

              <button
                onClick={handleCopyEmail}
                title={isEs ? 'Copiar correo' : 'Copy email'}
                className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors cursor-pointer shrink-0"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* WhatsApp / Mobile */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs flex items-center justify-between">
              <a
                href="https://wa.me/34607055125"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 group min-w-0"
              >
                <div className="w-11 h-11 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="font-mono text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500">
                    Direct / WhatsApp
                  </span>
                  <div className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors truncate">
                    {PERSONAL_INFO.phone}
                  </div>
                </div>
              </a>

              <button
                onClick={handleCopyPhone}
                title={isEs ? 'Copiar teléfono' : 'Copy phone'}
                className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors cursor-pointer shrink-0"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* LinkedIn Profile */}
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs flex items-center justify-between group hover:border-blue-500/40 transition-all"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-11 h-11 rounded-xl bg-cyan-50 dark:bg-cyan-950/60 text-cyan-600 dark:text-cyan-400 flex items-center justify-center shrink-0">
                  <LinkedInIcon className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="font-mono text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500">
                    LinkedIn Profile
                  </span>
                  <div className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors truncate">
                    linkedin.com/in/nicolasgonzalezcoronel
                  </div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors shrink-0" />
            </a>

            {/* Status Card (Stitch style) */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-2">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                  {isEs ? 'Ubicación & Disponibilidad' : 'Location & Availability'}
                </span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                • {isEs ? 'Ubicación: Madrid, España (Hora CET)' : 'Location: Madrid, Spain (Central European Time — CET)'}<br />
                • {isEs ? 'Tiempo de Respuesta: Menos de 24 horas' : 'Response Time: Typically within 24 hours'}<br />
                • {isEs ? 'Disponibilidad: Incorporación inmediata para el equipo adecuado' : 'Availability: Immediate start for the right team'}
              </p>
            </div>
          </div>

          {/* Interactive Intro Note Form (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                {isEs ? 'Enviar Mensaje Directo' : 'Send an Intro Note'}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                {isEs
                  ? '¿Tienes una vacante de BDM/AE, una propuesta comercial o quieres hablar sobre prospección outbound? Déjame un mensaje directo.'
                  : 'Have an open BDR/BDM/AE position, a partnership proposal, or want to talk commercial outbound sales? Leave a direct message below.'}
              </p>
            </div>

            {status === 'success' ? (
              <div className="p-6 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 text-emerald-600 dark:text-emerald-400 mx-auto" />
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                  {isEs ? '¡Mensaje Enviado con Éxito!' : 'Message Dispatched Successfully!'}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  {isEs
                    ? 'Nicolás te responderá habitualmente en menos de 24 horas.'
                    : 'Nicolás will respond typically within 24 hours.'}
                </p>
                <button
                  onClick={() => {
                    setStatus('idle');
                    setFormState({ name: '', email: '', subject: 'bdr-ae', message: '' });
                  }}
                  className="mt-3 px-4 py-1.5 rounded-lg text-xs font-semibold bg-emerald-600 text-white hover:bg-emerald-700 transition-colors"
                >
                  {isEs ? 'Enviar otro mensaje' : 'Send another note'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="font-mono text-[10px] font-bold uppercase text-slate-500 dark:text-slate-400">
                      {isEs ? 'Tu Nombre *' : 'Your Name *'}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Elena Rossi"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-blue-600"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-mono text-[10px] font-bold uppercase text-slate-500 dark:text-slate-400">
                      {isEs ? 'Tu Correo *' : 'Email *'}
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="elena@empresa.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-blue-600"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="font-mono text-[10px] font-bold uppercase text-slate-500 dark:text-slate-400">
                    {isEs ? 'Asunto / Tema' : 'Subject / Topic'}
                  </label>
                  <select
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-blue-600 cursor-pointer"
                  >
                    <option value="bdr-ae">{isEs ? 'Oportunidad BDM / AE' : 'BDM / AE Opportunity'}</option>
                    <option value="sales-ops">{isEs ? 'Operaciones de Venta y Automatización' : 'Sales Operations & Tooling Inquiry'}</option>
                    <option value="general">{isEs ? 'Asesoría Ejecutiva y Networking' : 'Executive Advisory & Networking'}</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="font-mono text-[10px] font-bold uppercase text-slate-500 dark:text-slate-400">
                    {isEs ? 'Mensaje *' : 'Message *'}
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder={
                      isEs
                        ? 'Hola Nicolás, he visto tu portfolio y me gustaría conversar sobre una vacante de Account Executive en nuestro equipo...'
                        : 'Hi Nicolás, I saw your portfolio and would like to talk about an open Account Executive position on our team...'
                    }
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-blue-600"
                  />
                </div>

                {status === 'error' && (
                  <div className="p-3 rounded-lg bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800 text-xs text-amber-800 dark:text-amber-300 flex items-center justify-between gap-2">
                    <span>
                      {isEs
                        ? 'El envío automático encontró un bloqueo temporal. Puedes abrir tu cliente de correo directamente:'
                        : 'Temporary dispatch blocker. You can email directly via your client:'}
                    </span>
                    <a
                      href={directMailto}
                      className="font-bold underline text-blue-600 dark:text-blue-400 shrink-0"
                    >
                      {isEs ? 'Abrir Email' : 'Open Email'}
                    </a>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold text-xs sm:text-sm rounded-xl shadow-xs transition-all cursor-pointer disabled:opacity-60"
                >
                  <Send className="w-4 h-4" />
                  <span>
                    {status === 'loading'
                      ? isEs ? 'Enviando Mensaje...' : 'Dispatching...'
                      : isEs ? 'Enviar Mensaje Directo' : 'Send Intro Message'}
                  </span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
