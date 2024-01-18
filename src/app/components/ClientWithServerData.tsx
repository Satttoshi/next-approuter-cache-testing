'use client';

import { currentTimeWithoutDateInIsoWithDelay } from '@/app/lib/utils';
import { useEffect, useState } from 'react';

export default function ClientWithServerData({ label }: { label: string }) {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    async function fetchData() {
      const time = await currentTimeWithoutDateInIsoWithDelay();
      setTime(time);
    }

    fetchData().catch((e) => e);
  }, []);

  return (
    <div className="m-8">
      <label>{label}</label>
      {time ? (
        <p className="text-3xl">{time}</p>
      ) : (
        <p className="text-3xl">Loading...</p>
      )}
    </div>
  );
}
