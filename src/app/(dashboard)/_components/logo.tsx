import Image from 'next/image';

export function Logo() {
  return <Image height={130} width={130} src='/logo.svg' alt='logo' />;
}
