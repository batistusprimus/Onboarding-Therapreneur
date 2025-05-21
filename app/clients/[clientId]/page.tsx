'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

// Composant de protection pour les pages client
export default function ClientPageProtection({ children, params }: { children: React.ReactNode, params: { clientId: string } }) {
  const router = useRouter();

  useEffect(() => {
    const clientInfo = localStorage.getItem('clientInfo');
    if (!clientInfo) {
      router.push('/login');
      return;
    }

    const { id } = JSON.parse(clientInfo);
    if (id !== params.clientId) {
      router.push('/login');
    }
  }, [router, params.clientId]);

  return <>{children}</>;
} 