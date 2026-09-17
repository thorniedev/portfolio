'use client';

import * as React from 'react';
import { useEffect, useState } from 'react';

export function TypedText({ strings }: { strings: string[] }) {
  const initialText = strings[0] || 'Full-Stack Developer.';
  const [currentText, setCurrentText] = useState(initialText);
  const [stringIndex, setStringIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(initialText.length);
  const [isDeleting, setIsDeleting] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    // Hold the initial title for 2 seconds before starting the deletion/typing cycle
    if (!hasStarted) {
      const initialTimer = setTimeout(() => {
        setHasStarted(true);
        setIsDeleting(true);
      }, 2000);
      return () => clearTimeout(initialTimer);
    }

    const currentString = strings[stringIndex % strings.length];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < currentString.length) {
          setCurrentText(currentString.slice(0, charIndex + 1));
          setCharIndex((prev) => prev + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        if (charIndex > 0) {
          setCurrentText(currentString.slice(0, charIndex - 1));
          setCharIndex((prev) => prev - 1);
        } else {
          setIsDeleting(false);
          setStringIndex((prev) => (prev + 1) % strings.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, hasStarted, isDeleting, stringIndex, strings]);

  return (
    <span className="text-[#16f2b3]">
      {currentText}
      <span className="animate-pulse" aria-hidden="true">|</span>
    </span>
  );
}

