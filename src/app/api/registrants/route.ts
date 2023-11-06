import { getCache, setCache } from '@/utils/Cache';
import { getRegistrants } from '@/utils/GSheetToRegistered';
import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET(request: Request | NextRequest) {
  const cached = getCache('registrants');

  if (cached) {
    return NextResponse.json(cached, { status: 200 });
  }

  let res = await getRegistrants();

  // set cache
  setCache(2 * 60, 'registrants', res);

  return NextResponse.json(res, { status: 200 });
}
