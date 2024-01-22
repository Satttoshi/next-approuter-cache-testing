import Link from 'next/link';

export default function Navigation() {
  return (
    <div className="flex flex-col">
      <Link className="text-blue-500 hover:text-blue-700" href={'./'}>
        Root
      </Link>
      <Link className="text-blue-500 hover:text-blue-700" href={'./lol'}>
        No Store
      </Link>
      <Link className="text-blue-500 hover:text-blue-700" href={'./lul'}>
        NoStore caching
      </Link>
    </div>
  );
}
