import Navbar from './_components/navbar';
import Sidebar from './_components/sidebar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='flex flex-col h-screen'>
      <Navbar />
      <div className='flex flex-1 overflow-hidden pt-16'>
        <aside className='hidden md:flex fixed h-full border-r w-64 overflow-auto z-10'>
          <Sidebar />
        </aside>
        <main className='flex-1 md:pl-64 overflow-auto '>{children}</main>
      </div>
    </div>
  );
}
