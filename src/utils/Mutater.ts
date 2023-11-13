import { CheckResultResponse } from "@/interfaces/CheckResultResponse";

export async function checkResultMutater(
    url: string,
    { arg }: { arg: number }
) {
    const res = await fetch("https://api-ku-hackathon.vercel.app" + url, {
        method: "POST",
        body: JSON.stringify({
            email: arg,
        }),
    });

    const data = await res.json();

    return {
        status: res.status,
        data: data.data as CheckResultResponse,
    };
}
