import Link from 'next/link';
import Clock from '@/app/components/Clock';

export default function Navigation() {
  return (
    <>
      <div className="flex mt-8">
        <div className="flex flex-col ml-8">
          <Link className="text-blue-500 hover:text-blue-700" href={'./'}>
            Root
          </Link>
          <Link className="text-blue-500 hover:text-blue-700" href={'./lol'}>
            No Store
          </Link>
          <Link className="text-blue-500 hover:text-blue-700" href={'./lul'}>
            Normal
          </Link>
        </div>
        <Clock label="Clock" />
        <div>
          <h2 className="ml-8">Environment:</h2>
          <h2 className="ml-8 text-3xl">{process.env.NEXT_PUBLIC_APP_MODE}</h2>
        </div>
      </div>
    </>
  );
}
