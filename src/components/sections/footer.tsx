import * as React from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { headerData } from '@/data/header-data';
import { socialsData } from '@/data/socials-data';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#25213b] py-6">
      <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
        {/* Brand */}
        <div className="flex flex-col items-center sm:items-start gap-1">
          <Link href="/" className="text-[#16f2b3] text-2xl font-bold">
            KIM CHANTHORN
          </Link>
          <p className="text-xs text-gray-400 flex items-center gap-1">
            <span>© {currentYear} Kim Chanthorn (ThornieDev). Made with</span>
            <span className="text-pink-500">♥</span>
            <span>using Next.js</span>
          </p>
        </div>

        {/* Nav links */}
        <div className="flex items-center gap-5 text-sm text-gray-400">
          <Link href="/#about" className="hover:text-pink-500 transition-colors">About</Link>
          <Link href="/#projects" className="hover:text-pink-500 transition-colors">Projects</Link>
          <Link href="/blog" className="hover:text-pink-500 transition-colors">Blog</Link>
          <Link href="/#contact" className="hover:text-pink-500 transition-colors">Contact</Link>
        </div>

        {/* Socials */}
        <div className="flex items-center gap-3">
          {socialsData.github && (
            <a href={socialsData.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"
              className="text-gray-400 hover:text-[#16f2b3] transition-all hover:scale-110">
              <FaGithub size={20} />
            </a>
          )}
          {socialsData.linkedIn && (
            <a href={socialsData.linkedIn} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
              className="text-gray-400 hover:text-[#16f2b3] transition-all hover:scale-110">
              <FaLinkedin size={20} />
            </a>
          )}
          {socialsData.twitter && (
            <a href={socialsData.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter"
              className="text-gray-400 hover:text-[#16f2b3] transition-all hover:scale-110">
              <FaTwitter size={20} />
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}
