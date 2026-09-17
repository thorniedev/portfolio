'use client';

import * as React from 'react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { headerData } from '@/data/header-data';

const navLinks = [
  { name: 'ABOUT', href: '/#about' },
  { name: 'EXPERIENCE', href: '/#experience' },
  { name: 'SKILLS', href: '/#skills' },
  { name: 'EDUCATION', href: '/#education' },
  { name: 'BLOGS', href: '/blog' },
  { name: 'PROJECTS', href: '/#projects' },
];

export function Navbar() {
  return (
    <nav className="bg-transparent" aria-label="Main Navigation">
      <div className="flex items-center justify-between py-5">
        <div className="flex flex-shrink-0 items-center">
          <Link className="text-[#16f2b3] text-3xl font-bold" href="/" aria-label="Kim Chanthorn (ThornieDev) — Portfolio Home">
            KIM CHANTHORN
          </Link>
        </div>
        <ul className="hidden md:flex md:flex-row md:space-x-1 md:items-center">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                className="block px-4 py-2 no-underline outline-none hover:no-underline"
                href={link.href}
              >
                <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
                  {link.name}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
