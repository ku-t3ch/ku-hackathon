import axios from "axios";
import axiosInstance from "./axiosInstance";

export async function checkResultMutater(
    url: string,
    { arg }: { arg: string }
) {
    const { data, status } = await axiosInstance.post(url, {
        arg,
    });

    return {
        status,
        data,
    };
}
