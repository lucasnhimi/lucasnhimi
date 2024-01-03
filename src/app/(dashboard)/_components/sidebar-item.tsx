'use client';
import { LucideIcon } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';

type SidebarItemProps = {
  icon: LucideIcon;
  label: string;
  href: string;
};

export function SidebarItem({ icon: Icon, label, href }: SidebarItemProps) {
  const pathname = usePathname();
  const router = useRouter();

  const isActive =
    (pathname === '/' && href === '/') ||
    pathname === href ||
    pathname?.startsWith(`${href}/`);

  const onClick = () => {
    router.push(href);
  };

  return (
    <button
      onClick={onClick}
      type='button'
      className={cn(
        'flex w-full text-sm text-muted-foreground items-center py-3.5 px-3 hover:bg-muted rounded-lg transition-background group',
        isActive && 'bg-muted text-primary font-medium'
      )}
    >
      <Icon
        size={22}
        className={cn(
          'text-muted-foreground h-5 w-5 mr-2',
          isActive && 'text-primary animate-spin-once'
        )}
      />
      {label}
    </button>
  );
}
