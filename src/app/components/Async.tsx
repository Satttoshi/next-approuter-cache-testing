import { currentTimeWithDelay } from '@/app/lib/utils';
/*import { revalidateTag } from 'next/cache';*/

export default async function Async({ label }: { label: string }) {
  const time = await currentTimeWithDelay();
  /*  revalidateTag('testTag');*/
  // don't run it just here!

  return (
    <div className="m-8">
      <label>{label}</label>
      <p className="text-3xl">{time}</p>
    </div>
  );
}
