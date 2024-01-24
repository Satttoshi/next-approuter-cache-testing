import { revalidatePath, revalidateTag } from 'next/cache';

async function action() {
  'use server';
  console.log('CacheButton action');
  revalidateTag('test1');
}
async function action2() {
  'use server';
  console.log('CacheButton action');
  revalidateTag('test2');
}

async function action3() {
  'use server';
  console.log('CacheButton action');
  revalidateTag('test3');
}

async function action4() {
  'use server';
  console.log('CacheButton action');
  revalidatePath('/lul');
}

export default async function CacheButton() {
  return (
    <div className="flex flex-col gap-4">
      <form action={action}>
        <button
          className="ml-8 bg-blue-800 hover:bg-blue-900 text-white font-semibold py-2 px-4 rounded"
          type="submit"
        >
          Revalidate {'tag: test1'}
        </button>
      </form>
      <form action={action2}>
        <button
          className="ml-8 bg-blue-800 hover:bg-blue-900 text-white font-semibold py-2 px-4 rounded"
          type="submit"
        >
          Revalidate {'tag: test2'}
        </button>
      </form>
      <form action={action3}>
        <button
          className="ml-8 bg-blue-800 hover:bg-blue-900 text-white font-semibold py-2 px-4 rounded"
          type="submit"
        >
          Revalidate {'tag: test3'}
        </button>
      </form>
      <form action={action4}>
        <button
          className="ml-8 bg-blue-800 hover:bg-blue-900 text-white font-semibold py-2 px-4 rounded"
          type="submit"
        >
          Revalidate {'path: /ExternalApis'}
        </button>
      </form>
    </div>
  );
}
