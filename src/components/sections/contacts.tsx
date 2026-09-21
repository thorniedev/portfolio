'use client';

import * as React from 'react';
import { useState, useRef } from 'react';
import { contactsData } from '@/data/contacts-data';
import { useLanguage } from '@/context/language-context';

// ── Web3Forms endpoint (no backend needed) ─────────────────────────────────
const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';
const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? '';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

interface FormState {
  name: string;
  email: string;
  message: string;
}

const EMPTY_FORM: FormState = { name: '', email: '', message: '' };

export function Contacts() {
  const { t, isKhmer } = useLanguage();
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  // Honeypot ref — must stay unchecked for real humans
  const honeypotRef = useRef<HTMLInputElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    // Clear status when user starts typing again
    if (status === 'error' || status === 'success') setStatus('idle');
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Honeypot check — if bot filled it, fake success silently without wasting quota
    if (honeypotRef.current?.checked) {
      setStatus('success');
      setForm(EMPTY_FORM);
      return;
    }

    if (!ACCESS_KEY) {
      setStatus('error');
      setErrorMsg('Contact form is not configured yet. Please email me directly.');
      return;
    }

    setStatus('submitting');
    setErrorMsg('');

    try {
      const payload = {
        access_key: ACCESS_KEY,
        name: form.name.trim(),
        email: form.email.trim(),
        message: form.message.trim(),
        from_name: 'Portfolio Contact Form — chanthorndev.site',
        subject: `New message from Portfolio - chanthorndev.site (${form.name.trim()})`,
      };

      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (data.success) {
        setStatus('success');
        setForm(EMPTY_FORM);
        // Reset button back to idle after 6 seconds so user can send another message if needed
        setTimeout(() => {
          setStatus((prev) => (prev === 'success' ? 'idle' : prev));
        }, 6000);
      } else {
        throw new Error(data.message ?? 'Submission failed.');
      }
    } catch (err: unknown) {
      setStatus('error');
      setErrorMsg(
        err instanceof Error
          ? err.message
          : 'Something went wrong. Please try again or email me directly.'
      );
    }
  };

  const isSubmitting = status === 'submitting';

  const inputBase =
    'w-full rounded-md border border-[#353a52] bg-[#10172d] px-3 py-2 text-sm text-white placeholder:text-gray-500 ' +
    'focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500/30 ' +
    'transition-colors disabled:opacity-50 disabled:cursor-not-allowed';

  return (
    <div id="contact" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      {/* Gradient separator */}
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      {/* Section title */}
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]" />
          <h2 className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">{t.contact.sectionTitle}</h2>
          <span className="w-24 h-[2px] bg-[#1a1443]" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 py-8">
        {/* LEFT: Contact info */}
        <div className="flex flex-col gap-5 text-gray-300">
          <p className="text-[#16f2b3] text-xl font-medium uppercase">{t.contact.letsConnect}</p>
          <p className="text-sm lg:text-base text-gray-300">
            {t.contact.subtitle}
          </p>
          <div className="flex flex-col gap-3">
            {contactsData.email && (
              <div className="flex items-center gap-3">
                <span className="text-[#16f2b3] font-bold">{t.contact.emailLabel}</span>
                <a
                  href={`mailto:${contactsData.email}`}
                  className="text-gray-300 hover:text-violet-400 transition-colors text-sm break-all"
                >
                  {contactsData.email}
                </a>
              </div>
            )}
            {contactsData.phone && (
              <div className="flex items-center gap-3">
                <span className="text-[#16f2b3] font-bold">{t.contact.phoneLabel}</span>
                <a
                  href={`tel:${contactsData.phone}`}
                  className="text-gray-300 hover:text-violet-400 transition-colors text-sm"
                >
                  {contactsData.phone}
                </a>
              </div>
            )}
            {contactsData.address && (
              <div className="flex items-center gap-3">
                <span className="text-[#16f2b3] font-bold">{t.contact.locationLabel}</span>
                <span className="text-gray-300 text-sm">{contactsData.address}</span>
              </div>
            )}
          </div>
        </div>

        {/* RIGHT: Web3Forms contact form */}
        <div className="from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37]">
          {/* Top gradient border */}
          <div className="flex flex-row">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600" />
            <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent" />
          </div>

          <div className="px-6 py-6">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4"
              noValidate
              aria-label="Contact form"
            >
              {/* ── Honeypot — hidden from humans, catches bots ── */}
              <input
                type="checkbox"
                name="botcheck"
                ref={honeypotRef}
                className="hidden"
                tabIndex={-1}
                aria-hidden="true"
                defaultChecked={false}
              />

              {/* ── Success banner ── */}
              {status === 'success' && (
                <div
                  role="alert"
                  className="flex items-start gap-2 rounded-md bg-green-500/10 border border-green-500/30 p-3 text-green-400 text-sm"
                >
                  <svg className="h-4 w-4 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                  </svg>
                  <span>{t.contact.thankYou}</span>
                </div>
              )}

              {/* ── Error banner ── */}
              {status === 'error' && (
                <div
                  role="alert"
                  className="flex items-start gap-2 rounded-md bg-red-500/10 border border-red-500/30 p-3 text-red-400 text-sm"
                >
                  <svg className="h-4 w-4 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clipRule="evenodd" />
                  </svg>
                  <span>{errorMsg || 'Something went wrong. Please try again.'}</span>
                </div>
              )}

              {/* ── Name ── */}
              <div>
                <label
                  htmlFor="contact-name"
                  className="text-xs text-gray-300 font-medium uppercase tracking-wider block mb-1"
                >
                  {t.contact.nameField}
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  value={form.name}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  placeholder={t.contact.namePlaceholder}
                  className={inputBase}
                />
              </div>

              {/* ── Email ── */}
              <div>
                <label
                  htmlFor="contact-email"
                  className="text-xs text-gray-300 font-medium uppercase tracking-wider block mb-1"
                >
                  {t.contact.emailField}
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={form.email}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  placeholder={t.contact.emailPlaceholder}
                  className={inputBase}
                />
              </div>

              {/* ── Message ── */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="text-xs text-gray-300 font-medium uppercase tracking-wider block mb-1"
                >
                  {t.contact.messageField}
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  placeholder={t.contact.messagePlaceholder}
                  className={`${inputBase} resize-none`}
                />
              </div>

              {/* ── Submit ── */}
              <button
                type="submit"
                id="contact-submit"
                disabled={isSubmitting || status === 'success'}
                aria-label={isSubmitting ? t.contact.sendingBtn : t.contact.sendBtn}
                className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-pink-500 px-8 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:from-pink-500 hover:to-violet-600 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting && (
                  <svg
                    className="h-4 w-4 animate-spin"
                    fill="none"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                )}
                {isSubmitting ? t.contact.sendingBtn : status === 'success' ? (isKhmer ? 'ផ្ញើរួចរាល់ ✓' : 'Message Sent ✓') : t.contact.sendBtn}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
