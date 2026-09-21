'use client';

import * as React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/language-context';
import { LanguageSwitcher } from '@/components/ui/language-switcher';

export function Navbar() {
  const { t } = useLanguage();

  const navLinks = [
    { name: t.nav.about, href: '/#about' },
    { name: t.nav.experience, href: '/#experience' },
    { name: t.nav.skills, href: '/#skills' },
    { name: t.nav.projects, href: '/#projects' },
    { name: t.nav.activity, href: '/#activity' },
    { name: t.nav.education, href: '/#education' },
    { name: t.nav.blogs, href: '/blog' },
  ];

  return (
    <nav className="bg-transparent" aria-label="Main Navigation">
      <div className="flex items-center justify-between py-5">
        <div className="flex flex-shrink-0 items-center">
          <Link
            className="text-[#16f2b3] text-xl sm:text-3xl font-bold tracking-tight"
            href="/"
            aria-label="Kim Chanthorn (ThornieDev) — Portfolio Home"
          >
            KIM CHANTHORN
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <ul className="hidden md:flex md:flex-row md:space-x-1 md:items-center">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  className="block px-3 py-2 no-underline outline-none hover:no-underline"
                  href={link.href}
                >
                  <div className="text-sm font-medium text-white transition-colors duration-300 hover:text-[#16f2b3]">
                    {link.name}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
}
