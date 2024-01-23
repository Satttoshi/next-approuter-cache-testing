import { NextRequest, NextResponse } from 'next/server';
import { revalidateTag } from 'next/cache';

export async function POST(request: NextRequest) {
  try {
    const { tag } = await request.json();
    if (!tag) {
      return NextResponse.json({ message: 'No tag provided' }, { status: 400 });
    }
    console.log(tag);
    revalidateTag(tag);

    return NextResponse.json({ tag, revalidated: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
