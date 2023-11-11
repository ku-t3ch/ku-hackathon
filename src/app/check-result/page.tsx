"use client";
import HomeSection from "@/components/Sections/HomeSection";
import {
    FetcherAxiosCheckResultInterface,
    fetcherAxiosCheckResult,
} from "@/utils/Fetcher";
import { checkResultMutater } from "@/utils/Mutater";
import { Button, Card, Form, Input } from "antd";
import axios, { AxiosInstance } from "axios";
import { NextPage } from "next";
import useSWR from "swr";
import useSWRMutation from "swr/mutation";

interface Props {}

const Page: NextPage<Props> = () => {
    const [form] = Form.useForm();
    const { trigger, isMutating } = useSWRMutation("/api/user", checkResultMutater);

    const onFinish = async () => {
        trigger(form.getFieldValue("studentId"));
    };

    const studuentIdValidator = async (rule: any, value: any) => {
        const regex = /^[a-zA-Z]\d{10}$/;

        if (!regex.test(value)) {
            throw new Error("รหัสนิสิตต้องมี 1 ตัวอักษรตามด้วย 10 ตัวเลข");
        }
    };

    return (
        <div className="flex flex-col gap-5 max-w-[40rem] mx-auto w-full px-5 pt-[7rem] min-h-screen md:pt-[10rem]">
            <div className="flex flex-col">
                <div className="text-3xl">ประกาศผลการคัดเลือก</div>
            </div>
            <Form form={form} onFinish={onFinish} layout="vertical">
                <Form.Item
                    label="รหัสนิสิต"
                    name="studentId"
                    rules={[{ required: true, validator: studuentIdValidator }]}
                >
                    <Input size="large" placeholder="b65xxxxxxxx" />
                </Form.Item>
                <Form.Item>
                    <Button
                        loading={isMutating}
                        className="w-full"
                        size="large"
                        type="primary"
                        htmlType="submit"
                    >
                        ตรวจสอบ
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Page;
