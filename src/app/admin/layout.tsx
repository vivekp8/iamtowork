import { createClient } from '@/utils/supabase/server';
import { AdminNav } from './AdminNav';

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  return (
    <>
      <AdminNav userEmail={user?.email} />
      {children}
    </>
  );
}
