import { getRegistrants } from "@/utils/GSheetToRegistered";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: Request | NextRequest) {
    let res = await getRegistrants();

    return NextResponse.json(res, {status: 200});
}