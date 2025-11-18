import { GlobeIcon, MailIcon } from "lucide-react";

export type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
  globe: (props: IconProps) => <GlobeIcon {...props} />,
  email: (props: IconProps) => <MailIcon {...props} />,

  // ⭐ LinkedIn
  linkedin: (props: IconProps) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 
        2.24 5 5 5h14c2.76 0 5-2.24 
        5-5v-14c0-2.76-2.24-5-5-5zm-11 
        20h-3v-11h3v11zm-1.5-12.3c-.97 
        0-1.75-.79-1.75-1.75s.78-1.75 
        1.75-1.75 1.75.79 1.75 
        1.75-.78 1.75-1.75 1.75zm13.5 
        12.3h-3v-5.6c0-1.33-.03-3.04-1.85-3.04-1.85 
        0-2.13 1.45-2.13 2.94v5.7h-3v-11h2.88v1.5h.04c.4-.76 
        1.38-1.55 2.84-1.55 3.04 0 3.6 
        2 3.6 4.59v6.46z"
      />
    </svg>
  ),

  // ⭐ X (Twitter)
  x: (props: IconProps) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.9 1.15h3.68l-8.04 9.19 9.46 12.5h-7.41l-5.8-7.58-6.64 
        7.58H.47l8.6-9.83L0 1.15h7.59l5.24 6.93 6.07-6.93z"
      />
    </svg>
  ),

  // ⭐ YouTube
  youtube: (props: IconProps) => (
    <svg viewBox="0 0 32 32" fill="currentColor" {...props}>
      <path d="M29.4 9.26a3.5 3.5 0 0 0-2.47-2.47C24.76 6.2 
        16 6.2 16 6.2s-8.76 0-10.94.59A3.5 3.5 
        0 0 0 2.59 9.26 36.13 36.13 0 0 0 
        2 16a36.13 36.13 0 0 0 .59 
        6.74 3.5 3.5 0 0 0 2.47 
        2.47C7.24 25.8 16 25.8 16 
        25.8s8.76 0 10.94-.59a3.5 3.5 
        0 0 0 2.47-2.47A36.13 36.13 
        0 0 0 30 16a36.13 36.13 0 0 0-.6-6.74zM13.2 
        20.2v-8.4L20.47 16z"
      />
    </svg>
  ),

  // ⭐ GitHub
  github: (props: IconProps) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 
      3.3 9.4 7.9 10.9.6.1.8-.2.8-.5v-1.8c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.2-1.7-1.2-1.7-1-.7.1-.7.1-.7 
      1.1.1 1.7 1.2 1.7 1.2 1 
      1.7 2.6 1.2 3.2.9.1-.7.4-1.2.7-1.5-2.5-.3-5.2-1.3-5.2-5.7 
      0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 
      0 0 1-.3 3.3 1.2.9-.2 1.9-.4 2.9-.4s2 .1 
      2.9.4c2.2-1.5 3.3-1.2 3.3-1.2.6 
      1.7.2 2.9.1 3.2.8.8 1.2 1.9 
      1.2 3.2 0 4.4-2.7 5.4-5.2 
      5.7.4.3.7.9.7 1.8V22c0 .3.2.6.8.5C20.2 
      21.4 23.5 17.1 23.5 12 23.5 5.65 18.35.5 12 .5z"/>
    </svg>
  ),

  // ⭐ React
  react: (props: IconProps) => (
    <svg viewBox="0 0 32 32" fill="currentColor" {...props}>
      <path d="M16 13.1a2.9 2.9 0 1 0 0 5.8 2.9 2.9 0 0 0 0-5.8zm7.5 8.5c1.3-.8 
      2.5-1.9 3.3-3.3l1.6-2.7 7.6-13.3c.8-1.4 
      1.2-3 1.2-4.5h-27.5l5.9 11.5z"/>
    </svg>
  ),

  // ⭐ Next.js Logo
  nextjs: (props: IconProps) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 0c-6.6 0-12 5.4-12 
      12s5.4 12 12 12 12-5.4 
      12-12S18.6 0 12 0zm5.2 17.5l-6.3-9.6v9.6H9.4V6.5h1.7l6.8 
      10.5h-1.7z"/>
    </svg>
  ),
};
