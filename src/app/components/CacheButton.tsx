import { revalidateTag } from 'next/cache';

export default async function CacheButton({ tag }: { tag?: string }) {
  async function action() {
    'use server';
    console.log('CacheButton action');
    revalidateTag(tag ?? '');
    /*    revalidatePath('/');*/
  }

  return (
    <form action={action}>
      <button
        className="ml-8 bg-blue-800 hover:bg-blue-900 text-white font-semibold py-2 px-4 rounded"
        type="submit"
      >
        Revalidate {tag && `tag: ${tag}`}
      </button>
    </form>
  );
}
