import { revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get('secret');
  if (secret !== process.env.SANITY_REVALIDATE_SECRET) {
    return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
  }

  const path = req.nextUrl.searchParams.get('path');
  if (!path) {
    return NextResponse.json({ message: 'Path is required' }, { status: 400 });
  }

  revalidatePath(path);

  return NextResponse.json({ revalidated: true, path });
}
