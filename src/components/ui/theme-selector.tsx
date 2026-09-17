'use client';

import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import { Check, X } from 'lucide-react';
import { THEMES, useTheme, type ThemeId } from '@/lib/theme';

export function ThemeSelector() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => { setMounted(true); }, []);

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    function handler(e: MouseEvent) {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    function handler(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false);
    }
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [open]);

  if (!mounted) return null;

  const activeTheme = THEMES.find(t => t.id === theme)!;

  return (
    <div ref={panelRef} style={{ position: 'fixed', bottom: '80px', right: '24px', zIndex: 50 }}>

      {/* ── Panel ───────────────────────────────────────────────────────── */}
      {open && (
        <div
          role="dialog"
          aria-label="Select theme"
          style={{
            position: 'absolute',
            bottom: 'calc(100% + 12px)',
            right: 0,
            width: '272px',
            borderRadius: '18px',
            padding: '18px 14px 14px',
            background: '#111827',
            border: '1px solid rgba(255,255,255,0.09)',
            boxShadow: '0 20px 60px rgba(0,0,0,0.65), 0 0 0 1px rgba(255,255,255,0.04)',
            animation: 'tsPanelIn 0.18s cubic-bezier(0.34,1.56,0.64,1)',
          }}
        >
          {/* Header */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
            <span style={{ fontFamily: 'Consolas, Monaco, monospace', fontSize: '12px', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.06em' }}>
              _select-theme
            </span>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close theme selector"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '26px', height: '26px', borderRadius: '6px', border: 'none', background: 'transparent', color: 'rgba(255,255,255,0.3)', cursor: 'pointer', transition: 'color 0.15s' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.75)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.3)')}
            >
              <X size={13} />
            </button>
          </div>

          {/* Divider */}
          <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)', marginBottom: '12px' }} />

          {/* Theme options */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
            {THEMES.map((t) => {
              const isActive = theme === t.id;
              const s = CARD_STYLES[t.id];
              return (
                <button
                  key={t.id}
                  id={`theme-option-${t.id}`}
                  onClick={() => { setTheme(t.id); setOpen(false); }}
                  aria-pressed={isActive}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '12px 14px',
                    borderRadius: '11px',
                    border: isActive ? `1.5px solid ${s.border}` : '1.5px solid transparent',
                    background: s.bg,
                    cursor: 'pointer',
                    transition: 'all 0.14s ease',
                    outline: 'none',
                    boxShadow: isActive ? `0 0 0 3px ${s.border}22` : 'none',
                  }}
                  onMouseEnter={e => { if (!isActive) (e.currentTarget as HTMLElement).style.border = `1.5px solid ${s.border}55`; }}
                  onMouseLeave={e => { if (!isActive) (e.currentTarget as HTMLElement).style.border = '1.5px solid transparent'; }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    {isActive
                      ? <Check size={13} strokeWidth={2.8} style={{ color: s.border, flexShrink: 0 }} />
                      : <div style={{ width: '13px', flexShrink: 0 }} />
                    }
                    <span style={{ fontSize: '14px', fontWeight: isActive ? 600 : 500, color: s.textColor, letterSpacing: '0.01em' }}>
                      {t.label}
                    </span>
                  </div>

                  {/* 4 swatches */}
                  <div style={{ display: 'flex', gap: '4px' }}>
                    {t.swatches.map((color, i) => (
                      <div key={i} style={{ width: '14px', height: '14px', borderRadius: '50%', background: color, border: '1.5px solid rgba(0,0,0,0.15)', flexShrink: 0 }} />
                    ))}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* ── FAB — neutral pill with 2×2 swatch grid (matches screenshot) ── */}
      <button
        id="theme-selector-trigger"
        onClick={() => setOpen(o => !o)}
        aria-label={open ? 'Close theme selector' : 'Open theme selector'}
        aria-expanded={open}
        title="Change theme"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '46px',
          height: '46px',
          borderRadius: '50%',
          border: 'none',
          background: 'rgba(30,36,58,0.92)',
          cursor: 'pointer',
          boxShadow: '0 4px 18px rgba(0,0,0,0.45)',
          backdropFilter: 'blur(10px)',
          transition: 'transform 0.2s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.2s',
          outline: 'none',
          padding: 0,
        }}
        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'scale(1.08)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 6px 24px rgba(0,0,0,0.55)'; }}
        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'scale(1)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 18px rgba(0,0,0,0.45)'; }}
      >
        {/* 2×2 swatch grid from the active theme */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3px', padding: '2px' }}>
          {activeTheme.swatches.map((color, i) => (
            <div
              key={i}
              style={{
                width: '10px',
                height: '10px',
                borderRadius: '3px',
                background: color,
              }}
            />
          ))}
        </div>
      </button>

      <style>{`
        @keyframes tsPanelIn {
          from { opacity: 0; transform: translateY(8px) scale(0.95); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </div>
  );
}

// Per-theme card visual styles (all hardcoded so panel stays legible regardless of page theme)
const CARD_STYLES: Record<ThemeId, { bg: string; border: string; textColor: string }> = {
  dark:  { bg: 'rgba(27,32,62,0.8)',  border: '#16f2b3', textColor: '#e2e8f0' },
  light: { bg: '#f8fafc',             border: '#7c3aed', textColor: '#1e293b' },
  aqua:  { bg: '#cffafa',             border: '#0d9488', textColor: '#134e4a' },
  retro: { bg: '#fef3c7',             border: '#d97706', textColor: '#3b2a1a' },
};
