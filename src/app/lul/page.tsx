import { Suspense } from 'react';
import Navigation from '@/app/components/Navigation';
import WorldTimeApi from '@/app/components/WorldTimeApi';
import WorldTimeApi2 from '@/app/components/WorldTimeApi2';
import WorldTimeApi3 from '@/app/components/WorldTimeApi3';
import WorldTimeApi4 from '@/app/components/WorldTimeApi4';
import CacheButton from '@/app/components/CacheButton';

export default function Lol() {
  return (
    <main>
      <Suspense>
        <Navigation />
        <WorldTimeApi label="WorldTimeApi tag 'test'" />
        <WorldTimeApi2 label="WorldTimeApi 2 tag 'test2'" />
        <WorldTimeApi3 label="Another TimeApi 1 'test3'" />
        <WorldTimeApi4 label="TimeApi opt out cache" />
        <CacheButton tag="test2" />
      </Suspense>
    </main>
  );
}
