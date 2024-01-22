'use client';

import { useEffect, useState } from 'react';
import { currentTime } from '@/app/lib/utils';

// Client Rendered Component
export default function Clock({ label }: { label: string }) {
  const [time, setTime] = useState<string>(currentTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(currentTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="m-8">
      <label>{label}</label>
      <p className="text-3xl">{time}</p>
    </div>
  );
}
