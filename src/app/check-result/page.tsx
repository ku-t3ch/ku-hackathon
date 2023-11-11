"use client";
import { checkResultMutater } from "@/utils/Mutater";
import { Button } from "@nextui-org/react";
import { Form, Input } from "antd";
import { NextPage } from "next";
import useSWRMutation from "swr/mutation";

interface Props {}

const Page: NextPage<Props> = () => {
    const [form] = Form.useForm();
    const { trigger, isMutating } = useSWRMutation(
        "/api/user",
        checkResultMutater
    );

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
            <Form form={form} onFinish={onFinish} layout="vertical" className="flex flex-col gap-2">
                <Form.Item
                    label="รหัสนิสิต"
                    name="studentId"
                    rules={[{ required: true, validator: studuentIdValidator }]}
                >
                    {/* <Input size="large" placeholder="b65xxxxxxxx" /> */}
                    <input
                        type="text"
                        className="p-3 w-full rounded-lg"
                        placeholder="b65xxxxxxxx"
                    />
                </Form.Item>
                <Form.Item>
                    <Button
                        color="primary"
                        size="md"
                        className="h-[2.25rem]  font-semibold rounded-[.25rem]"
                        isLoading={isMutating}
                        type="submit"
                    >
                        ตรวจสอบ
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Page;
