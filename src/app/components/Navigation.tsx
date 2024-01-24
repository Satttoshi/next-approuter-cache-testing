import Link from 'next/link';
import dynamic from 'next/dynamic';

export default function Navigation() {
  const Clock = dynamic(() => import('@/app/components/Clock'), {
    ssr: false,
  });
  return (
    <>
      <div className="flex mt-8">
        <div className="flex flex-col ml-8">
          <Link className="text-blue-500 hover:text-blue-700" href={'./'}>
            Root
          </Link>
          <Link className="text-blue-500 hover:text-blue-700" href={'./lol'}>
            Opt out of cache
          </Link>
          <Link className="text-blue-500 hover:text-blue-700" href={'./lul'}>
            External Apis
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
