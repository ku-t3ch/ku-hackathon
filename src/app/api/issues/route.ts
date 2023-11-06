import { getCache, setCache } from '@/utils/Cache';
import { getListedIssues } from '@/utils/GSheetToIssues';
import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

// To handle a GET request to /api
export async function GET(request: Request | NextRequest) {
  const cached = getCache('issues');

  if (cached) {
    return NextResponse.json(cached, { status: 200 });
  }

  // Do whatever you want
  let res = await getListedIssues();

  // set cache
  setCache(60 * 10, 'issues', res);

  return NextResponse.json(res, { status: 200 });
}
