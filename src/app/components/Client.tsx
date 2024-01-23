'use client';

import { currentTime } from '@/app/lib/utils';

export default function Client({ label }: { label: string }) {
  const time = currentTime();

  return (
    <div className="m-8">
      <label>{label}</label>
      <p className="text-3xl">{time}</p>
    </div>
  );
}
