import Image from 'next/image';
import Link from 'next/link';

const SOCIAL_LINKS = [
  {
    label: 'Facebook',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M14 8.5V6.75C14 6.1 14.45 6 14.8 6H17V2.25L13.97 2.24C10.6 2.24 9.83 4.77 9.83 6.38V8.5H7V12.5H9.83V22H14V12.5H16.85L17.35 8.5H14Z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: '#',
    icon: (
      <svg width="19" height="19" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
        <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: '#',
    icon: (
      <svg width="21" height="21" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23 7.1C22.87 6.56 22.59 6.07 22.19 5.68C21.79 5.29 21.28 5.03 20.73 4.9C18.75 4.38 12 4.38 12 4.38C12 4.38 5.25 4.38 3.27 4.9C2.72 5.03 2.21 5.29 1.81 5.68C1.41 6.07 1.13 6.56 1 7.1C0.63 9.13 0.45 11.19 0.47 13.25C0.45 15.31 0.63 17.37 1 19.4C1.13 19.94 1.41 20.43 1.81 20.82C2.21 21.21 2.72 21.47 3.27 21.6C5.25 22.12 12 22.12 12 22.12C12 22.12 18.75 22.12 20.73 21.6C21.28 21.47 21.79 21.21 22.19 20.82C22.59 20.43 22.87 19.94 23 19.4C23.37 17.37 23.55 15.31 23.53 13.25C23.55 11.19 23.37 9.13 23 7.1ZM9.7 16.95V9.55L15.9 13.25L9.7 16.95Z" />
      </svg>
    ),
  },
  {
    label: 'Telegram',
    href: '#',
    icon: (
      <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor">
        <path d="M21.9 4.1C21.6 3.85 21.16 3.78 20.75 3.94L2.86 10.86C2.34 11.06 2 11.45 2 11.9C2 12.35 2.36 12.73 2.9 12.89L7.44 14.23L9.17 19.68C9.33 20.18 9.68 20.5 10.12 20.53H10.2C10.61 20.53 10.96 20.3 11.2 19.89L13.47 16.11L18.15 19.55C18.42 19.75 18.72 19.85 19.02 19.85C19.2 19.85 19.38 19.82 19.55 19.75C20 19.57 20.3 19.18 20.39 18.65L22.24 5.18C22.31 4.74 22.18 4.35 21.9 4.1ZM19.25 6.6L10.32 14.57C10.22 14.66 10.15 14.77 10.1 14.89L9.3 17.08L8.24 13.75L15.88 9.4C16.1 9.27 16.18 8.99 16.06 8.77C15.94 8.55 15.66 8.46 15.44 8.57L6.95 12.68L4.6 11.99L19.25 6.6Z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M6.94 8.98H3.5V20.5H6.94V8.98ZM5.22 3.5C4.12 3.5 3.23 4.39 3.23 5.49C3.23 6.58 4.12 7.48 5.22 7.48C6.32 7.48 7.21 6.58 7.21 5.49C7.21 4.39 6.32 3.5 5.22 3.5ZM20.77 14.07C20.77 10.98 19.12 8.72 15.58 8.72C13.95 8.72 12.86 9.61 12.41 10.45H12.36V8.98H9.06V20.5H12.5V14.8C12.5 13.3 12.79 11.85 14.65 11.85C16.47 11.85 16.5 13.55 16.5 14.9V20.5H19.94V14.07H20.77Z" />
      </svg>
    ),
  },
];

const Footer = () => (
  <footer className="bg-blue-accent py-6 w-full">
    <div className="px-4 sm:px-6 lg:px-8 mx-auto w-full max-w-330">

      <div className="sm:flex-row sm:items-center gap-4 flex flex-col items-center justify-between">
        <Link href="/home"><Image
          src="/logo_light.svg"
          alt="ITStep Logo"
          width={179}
          height={60}
          className="w-32 sm:w-36 lg:w-44.75 h-auto"
        /></Link>

        <div className="gap-3 flex items-center">
          {SOCIAL_LINKS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              className="h-9 w-9 sm:h-10 sm:w-10 border-white/25 text-white hover:bg-white hover:text-blue-accent flex items-center justify-center rounded-[13px] border transition"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>


      <div className="mt-4 mb-4 border-white/20 border-t" />
      
      
      <div className="sm:flex-row gap-2 sm:text-left flex flex-col items-center justify-between text-center">
        <p className="text-white/80 sm:text-[14px] font-body font-medium text-[13px]">
          © 2026 STEP IT Academy.&nbsp; Всі академічні права захищені.
        </p>
        <a
          href="#"
          className="text-white/80 sm:text-[14px] font-body hover:text-white text-[13px] underline underline-offset-2 transition-colors"
        >
          Політика конфіденційності
        </a>
      </div>

    </div>
  </footer>
);

export default Footer;