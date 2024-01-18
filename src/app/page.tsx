import Basic from '@/app/components/Basic';
import Clock from '@/app/components/Clock';
import Async from '@/app/components/Async';
import Client from '@/app/components/Client';
import ClientWithServerData from '@/app/components/ClientWithServerData';

export default function Home() {
  return (
    <main>
      <Clock label="Clock" />
      <Basic label="Basic" />
      <Client label="Client" />
      <ClientWithServerData label="Client with server data" />
      <Async label="Async 1" />
      <Async label="Async 2" />
      <Async label="Async 3" />
    </main>
  );
}
