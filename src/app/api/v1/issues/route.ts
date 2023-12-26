import { NextRequest } from "next/server";
import issues from "@/app/assets/issues.json";

export async function GET(request: Request | NextRequest) {
    return Response.json(issues);
}
