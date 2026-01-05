import React from 'react';

export const ScribbleArrow: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10,50 C30,40 70,20 90,50 C95,60 85,70 75,65" />
    <path d="M90,50 L85,40" />
    <path d="M90,50 L95,45" />
  </svg>
);

export const ScribbleUnderline: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 200 20" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M5,15 Q50,5 100,15 T195,5" />
  </svg>
);

export const ScribbleLoop: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M20,50 C20,20 80,20 80,50 C80,80 20,80 20,50 M20,50 C20,30 70,30 70,50" opacity="0.5" />
  </svg>
);

export const Sparkle: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
  </svg>
);