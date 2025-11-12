type SocialKind = "instagram" | "facebook" | "twitter";

interface SocialIconProps {
  kind: SocialKind;
  size?: number;
  className?: string;
}

export default function SocialIcon({ kind, size = 20, className }: SocialIconProps) {
  const props = { width: size, height: size, className, fill: "currentColor" };
  if (kind === "instagram") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm0 2h10c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3zm10 1a1 1 0 100 2 1 1 0 000-2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z" />
      </svg>
    );
  }
  if (kind === "facebook") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2.2V12h2.2V9.8c0-2.2 1.3-3.4 3.3-3.4.96 0 1.97.17 1.97.17v2.16h-1.11c-1.1 0-1.44.68-1.44 1.38V12h2.46l-.39 2.9h-2.07v7A10 10 0 0 0 22 12z" />
      </svg>
    );
  }
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.29 4.29 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04 4.28 4.28 0 0 0-7.29 3.9 12.15 12.15 0 0 1-8.82-4.47 4.28 4.28 0 0 0 1.32 5.71c-.64-.02-1.24-.2-1.76-.49v.05a4.28 4.28 0 0 0 3.43 4.19c-.3.08-.62.12-.95.12-.23 0-.46-.02-.68-.06a4.28 4.28 0 0 0 4 2.97A8.58 8.58 0 0 1 2 19.54a12.1 12.1 0 0 0 6.56 1.92c7.88 0 12.2-6.53 12.2-12.2l-.01-.56A8.7 8.7 0 0 0 24 5.1c-.83.37-1.72.62-2.64.72z" />
    </svg>
  );
}


