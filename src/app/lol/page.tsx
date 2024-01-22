import { Suspense } from 'react';
import Clock from '@/app/components/Clock';
import Basic from '@/app/components/Basic';
import Client from '@/app/components/Client';
import ClientWithServerData from '@/app/components/ClientWithServerData';
import Async from '@/app/components/Async';
import Dynamic from '@/app/components/Dynamic';

export default function Lol() {
  return (
    <main>
      <Suspense>
        <Clock label="Clock" />
        <Basic label="Basic" />
        <Client label="Client" />
        <ClientWithServerData label="Client with server data" />
        <Async label="Async" />
        <Dynamic label="Dynamic" />
      </Suspense>
    </main>
  );
}
