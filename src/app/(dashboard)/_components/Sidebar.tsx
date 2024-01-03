import { SidebarRoutes } from './sidebar-routes';

export default function Sidebar() {
  return (
    <aside className='hidden md:flex fixed h-full border-r w-64 overflow-auto z-10'>
      <SidebarRoutes />
    </aside>
  );
}
