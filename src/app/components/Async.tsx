import { currentTimeWithDelay } from '@/app/lib/utils';

export default async function Async({ label }: { label: string }) {
  const time = await currentTimeWithDelay();

  return (
    <div className="m-8">
      <label>{label}</label>
      <p className="text-3xl">{time}</p>
    </div>
  );
}
