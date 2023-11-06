import { getRegistrants } from '@/utils/GSheetToRegistered';
import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET(request: Request | NextRequest) {
  let res = await getRegistrants();

  /**
   * Response is in JSON, example:
   * {
   *      designers: 16,
   *      developers: 32
   * }
   */

  return NextResponse.json(res, { status: 200 });
}
