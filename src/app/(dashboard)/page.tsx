import { UserButton } from '@clerk/nextjs';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Desc Home',
};

export default function Home() {
  return (
    <div>
      <UserButton afterSignOutUrl='/' />
    </div>
  );
}
