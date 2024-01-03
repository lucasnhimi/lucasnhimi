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
        <Sidebar />
        <main className='flex-1 md:pl-64 overflow-auto '>{children}</main>
      </div>
    </div>
  );
}
