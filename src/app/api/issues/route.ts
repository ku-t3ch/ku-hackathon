import { getListedIssues } from "@/utils/GSheetToIssues";
import { NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";

// To handle a GET request to /api
export async function GET(request: Request | NextRequest) {
    // Do whatever you want
    let result = await getListedIssues();

    return NextResponse.json(result, { status: 200 });
}
