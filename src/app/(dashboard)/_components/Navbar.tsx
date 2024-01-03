import { UserButton } from '@clerk/nextjs';
import { Logo } from './logo';

export default function Navbar() {
  return (
    <nav className='fixed inset-x-0 flex items-center border-b px-4 z-10 h-16 '>
      <Logo />
      <div className='ml-auto'>
        <UserButton afterSignOutUrl='/' />
      </div>
    </nav>
  );
}
