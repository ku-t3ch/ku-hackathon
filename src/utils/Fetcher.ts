import axios, { AxiosInstance } from "axios";
import { Fetcher } from "swr";
import axiosInstance from "./axiosInstance";
import { Issue, ModifiedIssue } from "@/interfaces/IssueInterface";
import _ from "lodash";

export interface FetcherAxiosCheckResultInterface {
    status: number;
    data: any;
}

export const fetcherAxiosCheckResult: Fetcher<
    FetcherAxiosCheckResultInterface,
    string
> = (id) => {
    return axiosInstance.get(`/api/${id}`).then((res) => {
        return {
            status: res.status,
            data: res.data,
        };
    });
};

export const IssueFetcher: Fetcher<ModifiedIssue[], string> = (url) => {
    return axios.get(url).then(({ data }: { data: Issue[] }) => {
        let newData: ModifiedIssue[] = data.map((type) => {
            return {
                ...type,
                count: type.subissues.reduce((accumulator, object) => {
                    return accumulator + object.count;
                }, 0),
            };
        });
        return _.orderBy(newData, (o) => o.count, "desc");
    });
};
