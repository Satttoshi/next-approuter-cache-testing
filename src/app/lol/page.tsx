import { Suspense } from 'react';
import Basic from '@/app/components/Basic';
import ClientWithServerData from '@/app/components/ClientWithServerData';
import Async from '@/app/components/Async';
import Dynamic from '@/app/components/Dynamic';
import Navigation from '@/app/components/Navigation';
import dynamic from 'next/dynamic';

export default function Lol() {
  const Client = dynamic(() => import('@/app/components/Client'), {
    ssr: false,
  });
  return (
    <main>
      <Suspense>
        <Navigation />
        <Basic label="Basic" />
        <Client label="Client" />
        <ClientWithServerData label="Client with server data" />
        <Async label="Async" />
        <Dynamic label="Dynamic" />
      </Suspense>
    </main>
  );
}
