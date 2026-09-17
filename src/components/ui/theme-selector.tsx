'use client';

import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import { Check, X, Palette } from 'lucide-react';
import { THEMES, useTheme, type ThemeId } from '@/lib/theme';

export function ThemeSelector() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

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

  return (
    <div ref={panelRef} className="fixed bottom-20 right-6 z-50">
      {/* ── Theme Panel ─────────────────────────────────────────────────── */}
      {open && (
        <div
          className="theme-panel mb-3"
          role="dialog"
          aria-label="Select theme"
          style={{
            position: 'absolute',
            bottom: '100%',
            right: 0,
            marginBottom: '12px',
            width: '280px',
            borderRadius: '16px',
            padding: '20px 16px 16px',
            background: '#0d1224',
            border: '1px solid rgba(255,255,255,0.08)',
            boxShadow: '0 24px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04)',
            animation: 'themePanelIn 0.18s cubic-bezier(0.34,1.56,0.64,1)',
          }}
        >
          {/* Header */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
            <span
              style={{
                fontFamily: 'Consolas, Monaco, monospace',
                fontSize: '13px',
                color: 'rgba(255,255,255,0.45)',
                letterSpacing: '0.05em',
              }}
            >
              _select-theme
            </span>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close theme selector"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '28px',
                height: '28px',
                borderRadius: '6px',
                border: 'none',
                background: 'transparent',
                color: 'rgba(255,255,255,0.35)',
                cursor: 'pointer',
                transition: 'color 0.15s, background 0.15s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.8)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.35)')}
            >
              <X size={14} />
            </button>
          </div>

          {/* Divider */}
          <div style={{ height: '1px', background: 'rgba(255,255,255,0.07)', marginBottom: '14px' }} />

          {/* Theme options */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {THEMES.map((t) => {
              const isActive = theme === t.id;
              const styles = THEME_CARD_STYLES[t.id];
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
                    padding: '14px 16px',
                    borderRadius: '12px',
                    border: isActive ? `1.5px solid ${styles.border}` : '1.5px solid transparent',
                    background: styles.bg,
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                    outline: 'none',
                    boxShadow: isActive ? `0 0 0 2px ${styles.border}30` : 'none',
                  }}
                  onMouseEnter={e => {
                    if (!isActive) {
                      (e.currentTarget as HTMLElement).style.border = `1.5px solid ${styles.border}60`;
                    }
                  }}
                  onMouseLeave={e => {
                    if (!isActive) {
                      (e.currentTarget as HTMLElement).style.border = '1.5px solid transparent';
                    }
                  }}
                >
                  {/* Label */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    {isActive && (
                      <Check size={14} style={{ color: styles.checkColor, flexShrink: 0 }} strokeWidth={2.5} />
                    )}
                    {!isActive && <div style={{ width: '14px', flexShrink: 0 }} />}
                    <span
                      style={{
                        fontSize: '15px',
                        fontWeight: isActive ? 600 : 500,
                        color: styles.textColor,
                        fontFamily: 'inherit',
                        letterSpacing: '0.01em',
                      }}
                    >
                      {t.label}
                    </span>
                  </div>

                  {/* Swatches */}
                  <div style={{ display: 'flex', gap: '5px' }}>
                    {t.swatches.map((color, i) => (
                      <div
                        key={i}
                        style={{
                          width: '16px',
                          height: '16px',
                          borderRadius: '50%',
                          background: color,
                          border: '1.5px solid rgba(0,0,0,0.12)',
                          flexShrink: 0,
                        }}
                      />
                    ))}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* ── FAB Button ──────────────────────────────────────────────────── */}
      <button
        id="theme-selector-trigger"
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? 'Close theme selector' : 'Open theme selector'}
        aria-expanded={open}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '44px',
          height: '44px',
          borderRadius: '50%',
          border: '2px solid rgba(255,255,255,0.12)',
          background: '#0d1224',
          cursor: 'pointer',
          boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
          transition: 'transform 0.2s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.2s',
          outline: 'none',
          padding: 0,
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLElement).style.transform = 'scale(1.1)';
          (e.currentTarget as HTMLElement).style.boxShadow = '0 6px 24px rgba(0,0,0,0.6)';
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
          (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 20px rgba(0,0,0,0.5)';
        }}
      >
        {/* Multi-color icon matching the screenshot */}
        <ThemePaletteIcon />
      </button>

      {/* Animation keyframes */}
      <style>{`
        @keyframes themePanelIn {
          from { opacity: 0; transform: translateY(8px) scale(0.96); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </div>
  );
}

/** 4-quadrant palette icon — mirrors the screenshot FAB exactly */
function ThemePaletteIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      {/* top-left: red */}
      <circle cx="7"  cy="7"  r="5" fill="#ef4444" />
      {/* top-right: green */}
      <circle cx="15" cy="7"  r="5" fill="#22c55e" />
      {/* bottom-left: blue */}
      <circle cx="7"  cy="15" r="5" fill="#3b82f6" />
      {/* bottom-right: yellow */}
      <circle cx="15" cy="15" r="5" fill="#eab308" />
    </svg>
  );
}

// Per-theme card visual styles
const THEME_CARD_STYLES: Record<ThemeId, {
  bg: string;
  border: string;
  textColor: string;
  checkColor: string;
}> = {
  dark: {
    bg: 'rgba(27,32,62,0.7)',
    border: '#16f2b3',
    textColor: '#e2e8f0',
    checkColor: '#16f2b3',
  },
  light: {
    bg: '#ffffff',
    border: '#7c3aed',
    textColor: '#1e293b',
    checkColor: '#7c3aed',
  },
  aqua: {
    bg: '#cffafa',
    border: '#0d9488',
    textColor: '#134e4a',
    checkColor: '#0d9488',
  },
  retro: {
    bg: '#fef3c7',
    border: '#d97706',
    textColor: '#3b2a1a',
    checkColor: '#d97706',
  },
};
