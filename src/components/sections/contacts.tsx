'use client';

import * as React from 'react';
import { useState } from 'react';
import { contactsData } from '@/data/contacts-data';

export function Contacts() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setStatusMessage('Please fill all fields.');
      return;
    }
    setStatus('loading');
    await new Promise((r) => setTimeout(r, 800));
    setStatus('success');
    setStatusMessage('Thank you! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const inputClass =
    'w-full rounded-md border border-[#353a52] bg-[#10172d] px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:border-violet-500 focus:outline-none transition-colors';

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
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">Contact</span>
          <span className="w-24 h-[2px] bg-[#1a1443]" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 py-8">
        {/* LEFT: Contact info */}
        <div className="flex flex-col gap-5 text-gray-300">
          <p className="text-[#16f2b3] text-xl font-medium uppercase">Let&apos;s Connect</p>
          <p className="text-sm lg:text-base">
            Have a project or opportunity? I&apos;d love to hear from you.
          </p>
          <div className="flex flex-col gap-3">
            {contactsData.email && (
              <div className="flex items-center gap-3">
                <span className="text-[#16f2b3] font-bold">Email:</span>
                <a href={`mailto:${contactsData.email}`} className="text-gray-300 hover:text-violet-400 transition-colors text-sm break-all">
                  {contactsData.email}
                </a>
              </div>
            )}
            {contactsData.phone && (
              <div className="flex items-center gap-3">
                <span className="text-[#16f2b3] font-bold">Phone:</span>
                <a href={`tel:${contactsData.phone}`} className="text-gray-300 hover:text-violet-400 transition-colors text-sm">
                  {contactsData.phone}
                </a>
              </div>
            )}
            {contactsData.address && (
              <div className="flex items-center gap-3">
                <span className="text-[#16f2b3] font-bold">Location:</span>
                <span className="text-gray-300 text-sm">{contactsData.address}</span>
              </div>
            )}
          </div>
        </div>

        {/* RIGHT: Form */}
        <div className="from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37]">
          <div className="flex flex-row">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600" />
            <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent" />
          </div>
          <div className="px-6 py-6">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
              {status === 'success' && (
                <div className="rounded-md bg-green-500/10 border border-green-500/30 p-3 text-green-400 text-sm">
                  {statusMessage}
                </div>
              )}
              {status === 'error' && (
                <div className="rounded-md bg-red-500/10 border border-red-500/30 p-3 text-red-400 text-sm">
                  {statusMessage}
                </div>
              )}

              <div>
                <label className="text-xs text-gray-400 uppercase tracking-wider block mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Jane Doe"
                  className={inputClass}
                />
              </div>
              <div>
                <label className="text-xs text-gray-400 uppercase tracking-wider block mb-1">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="jane@example.com"
                  className={inputClass}
                />
              </div>
              <div>
                <label className="text-xs text-gray-400 uppercase tracking-wider block mb-1">Message</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Your message..."
                  className={`${inputClass} resize-none`}
                />
              </div>
              <button
                type="submit"
                disabled={status === 'loading'}
                className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-pink-500 px-8 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:from-pink-500 hover:to-violet-600 disabled:opacity-60"
              >
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
