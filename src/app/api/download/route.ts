/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from 'next/server';

import axios from 'axios';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const fileUrl = searchParams.get('fileUrl');
  const title = searchParams.get('title');

  if (!fileUrl || !title) {
    return NextResponse.json({ error: 'Invalid parameters' }, { status: 400 });
  }

  try {
    const response = await axios.get(fileUrl, { responseType: 'stream' });

    const encodedTitle = encodeURIComponent(title);

    const headers = new Headers();
    headers.set(
      'Content-Disposition',
      `attachment; filename="${encodedTitle}.pdf"`,
    );
    headers.set('Content-Type', response.headers['content-type']);

    return new NextResponse(response.data, { headers });
  } catch (error: any) {
    console.log('error', error);

    return NextResponse.json(
      { error: 'Failed to download file' },
      { status: 500 },
    );
  }
}
