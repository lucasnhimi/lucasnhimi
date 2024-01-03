export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='flex flex-col h-screen bg-slate-600'>
      <nav className='fixed inset-x-0 flex items-center border-b px-4 z-10 h-16 bg-red-400'>
        <h1>navbar</h1>
      </nav>
      <div className='flex flex-1 overflow-hidden pt-16'>
        <aside className='hidden md:flex fixed h-full border-r w-64 bg-green-400 overflow-auto z-10'>
          sidebar
        </aside>
        <main className='flex-1 md:pl-64 overflow-auto bg-blue-400'>
          {children}
        </main>
      </div>
    </div>
  );
}
