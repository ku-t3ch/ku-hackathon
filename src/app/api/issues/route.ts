import { getListedIssues } from '@/utils/GSheetToIssues';
import { NextRequest, NextResponse } from 'next/server';

export const revalidate = 300;

// To handle a GET request to /api
export async function GET(request: Request | NextRequest) {
  // Do whatever you want
  let result = await getListedIssues();

  return NextResponse.json(result, { status: 200 });
}
