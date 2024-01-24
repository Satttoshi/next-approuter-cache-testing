import Basic from '@/app/components/Basic';
import Async from '@/app/components/Async';
import ClientWithServerData from '@/app/components/ClientWithServerData';
import { Suspense } from 'react';
import Navigation from '@/app/components/Navigation';
import WorldTimeApi from '@/app/components/WorldTimeApi';
import dynamic from 'next/dynamic';
import CacheButton from '@/app/components/CacheButton';

export default function Home() {
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
        <WorldTimeApi label="WorldTimeApi" />
        <CacheButton tag="test" />
      </Suspense>
    </main>
  );
}
