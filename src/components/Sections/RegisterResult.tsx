import { Element } from 'react-scroll';
import Pass from '@/components/CheckResult/Pass';
import Reject from '@/components/CheckResult/Reject';
import Reserve from '@/components/CheckResult/Reserve';
import { checkResultMutater } from '@/utils/Mutater';
import { Button } from '@nextui-org/react';
import { Form, Input } from 'antd';
import { MailSearch, RefreshCcw, Search, Undo2Icon } from 'lucide-react';
import { NextPage } from 'next';
import { useState } from 'react';
import useSWRMutation from 'swr/mutation';

interface Props {}

const RegisterResult: NextPage<Props> = () => {
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
    <>
      <Element
        name="register-result"
        className="max-w-[90vw] xl:max-w-[75rem] pt-[5rem] md:pt-[10rem] self-center w-full flex flex-col items-center gap-3"
      >
        <div className="flex flex-col gap-2">
          <div className="text-3xl md:text-4xl font-bold text-center">
            ประกาศผลการคัดเลือก
          </div>
          <div className="text-xl text-primary font-bold text-center">
            Participant Announcement
          </div>
        </div>
        <hr />
        <div className="mt-[2.5rem] md:mt-[5rem] w-full max-w-[40rem]">
          {Status === 'check' && (
            <Form
              form={form}
              onFinish={onFinish}
              layout="vertical"
              className="flex flex-col gap-2 w-full"
            >
              <Form.Item
                label="อีเมลที่ใช้สมัคร"
                name="studentId"
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
                  size="lg"
                  className="font-semibold rounded-[.25rem] bg-green-600 w-full"
                  isLoading={isMutating}
                  type="submit"
                >
                  <MailSearch size={16} />
                  ตรวจสอบผล
                </Button>
              </Form.Item>
            </Form>
          )}
          {Status === 'pass' && <Pass data={data?.data} />}
          {Status === 'reject' && <Reject />}
          {Status === 'reserve' && <Reserve data={data?.data} />}
          {Status !== 'check' && (
            <Button size="lg" onClick={toCheck} className="mt-[3rem] w-full">
              <Undo2Icon />
              ตรวจสอบอีกครั้ง
            </Button>
          )}
        </div>
      </Element>
    </>
  );
};

export default RegisterResult;
