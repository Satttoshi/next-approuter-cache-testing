export default async function CacheButton() {
  async function action() {
    'use server';
    console.log('CacheButton action');
    /*    revalidateTag('test');*/
    /*    revalidatePath('/');*/
  }

  return (
    <form action={action}>
      <button
        className="ml-8 bg-blue-800 hover:bg-blue-900 text-white font-semibold py-2 px-4 rounded"
        type="submit"
      >
        Revalidate
      </button>
    </form>
  );
}
