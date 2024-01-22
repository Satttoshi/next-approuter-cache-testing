import { currentTimeWithDelay } from '@/app/lib/utils';
import { unstable_noStore as noStore } from 'next/cache';
import { cookies } from 'next/headers';

export default async function Dynamic({ label }: { label: string }) {
  // opt out of caching, also would work with headers() and cookies()
  noStore();

  const time = await currentTimeWithDelay();

  return (
    <div className="m-8">
      <label>{label}</label>
      <p className="text-3xl">{time}</p>
    </div>
  );
}
