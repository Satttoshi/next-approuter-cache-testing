import Basic from '@/app/components/Basic';
import Async from '@/app/components/Async';
import Client from '@/app/components/Client';
import ClientWithServerData from '@/app/components/ClientWithServerData';
import { Suspense } from 'react';
import Navigation from '@/app/components/Navigation';
import WorldTimeApi from '@/app/components/WorldTimeApi';

export default function Home() {
  return (
    <main>
      <Suspense>
        <Navigation />
        <Basic label="Basic" />
        <Client label="Client" />
        <ClientWithServerData label="Client with server data" />
        <Async label="Async" />
        <WorldTimeApi label={'WorldTimeApi'} />
      </Suspense>
    </main>
  );
}
