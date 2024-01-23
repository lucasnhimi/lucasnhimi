import { UserButton, SignedIn, SignedOut, SignInButton } from '@clerk/nextjs';
import { Logo } from './logo';
import { MobileSidebar } from './mobile-sidebar';

export default function Navbar() {
  return (
    <nav className='fixed inset-x-0 flex items-center border-b px-4 z-10 h-16 '>
      <Logo />
      <MobileSidebar />
      <div className='ml-auto'>
        <SignedIn>
          <UserButton afterSignOutUrl='/' />
        </SignedIn>
        <SignedOut>
          <SignInButton mode='modal'>
            <button className='border rounded-md border-gray-400 px-3 py-2'>
              Fazer Login
            </button>
          </SignInButton>
        </SignedOut>
      </div>
    </nav>
  );
}
