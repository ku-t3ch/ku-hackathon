'use client';
import Pass from '@/components/CheckResult/Pass';
import Reject from '@/components/CheckResult/Reject';
import Reserve from '@/components/CheckResult/Reserve';
import { checkResultMutater } from '@/utils/Mutater';
import { Button } from '@nextui-org/react';
import { Form, Input } from 'antd';
import { RefreshCcw, Undo2Icon } from 'lucide-react';
import { NextPage } from 'next';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import useSWRMutation from 'swr/mutation';

interface Props {}

const Page: NextPage<Props> = () => {
  const [form] = Form.useForm();
  const [Status, setStatus] = useState<'check' | 'pass' | 'reject' | 'reserve'>(
    'check'
  );

  const { trigger, isMutating, data } = useSWRMutation(
    '/api/qualifiers',
    checkResultMutater
  );

  const onFinish = async () => {
    const data = await trigger(form.getFieldValue('studentId'));
    if (data.status === 200) {
      if (data.data.reserve === undefined) {
        setStatus('pass');
      } else if (data.data.reserve !== undefined) {
        setStatus('reserve');
      }
    } else if (data.status === 400) {
      setStatus('reject');
    }
  };

  const studuentIdValidator = async (rule: any, value: any) => {
    const regex = /^\d{10}$/;

    if (!regex.test(value)) {
      throw new Error('รหัสนิสิตไม่ถูกต้อง');
    }
  };

  const toCheck = () => {
    setStatus('check');
  };

  return (
    <div className="flex flex-col gap-5 max-w-[40rem] mx-auto w-full px-5 pt-[7rem] min-h-screen md:pt-[10rem]">
      <div className="flex flex-col">
        <div className="text-3xl">ประกาศผลการคัดเลือก</div>
      </div>
      <hr />
      {Status === 'check' && (
        <Form
          form={form}
          onFinish={onFinish}
          layout="vertical"
          className="flex flex-col gap-2"
        >
          <Form.Item
            label="อีเมลที่ใช้สมัคร"
            name="email"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <input
              type="email"
              className="p-3 w-full rounded-lg"
              placeholder="กรุณากรอกอีเมล @ku.th เท่านั้น"
            />
          </Form.Item>
          <Form.Item>
            <Button
              size="md"
              className="h-[2.25rem]  font-semibold rounded-[.25rem] bg-green-600"
              isLoading={isMutating}
              type="submit"
            >
              ตรวจสอบ
            </Button>
          </Form.Item>
        </Form>
      )}
      {Status === 'pass' && <Pass data={data?.data} />}
      {Status === 'reject' && <Reject />}
      {Status === 'reserve' && <Reserve data={data?.data} />}
      {Status !== 'check' && (
        <Button onClick={toCheck}>
          <Undo2Icon />
          ตรวจสอบอีกครั้ง
        </Button>
      )}
    </div>
  );
};

export default Page;
