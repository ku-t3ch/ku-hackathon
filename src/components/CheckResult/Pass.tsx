import { CheckResultResponse } from '@/interfaces/CheckResultResponse';
import { Button } from '@nextui-org/react';
import { FileSignature } from 'lucide-react';
import { NextPage } from 'next';

interface Props {
  data: CheckResultResponse | undefined;
}

const Pass: NextPage<Props> = ({ data }) => {
  const cFirst = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <div className="flex flex-col space-y-2">
          <div className="text-2xl sm:text-3xl">
            <span>ยินดีด้วย, คุณ </span>
            <span className="text-green-500 font-bold">ผ่าน</span> การคัดเลือก
          </div>
          <div className="text-2xl">
            ชื่อ : <span className="font-bold">{data?.name}</span>
          </div>
          {data?.team_id && (
            <div className="text-2xl">
              ทีม : <span className="font-bold">{data?.team_id}</span>
            </div>
          )}
          <div className="text-2xl">
            สาขา : <span className="font-bold">{cFirst(data?.role ?? '')}</span>
          </div>
        </div>
      </div>
      <div>
        <Button
          className="bg-green-600 rounded-md"
          radius="none"
          onClick={() => {
            window.open('https://forms.gle/rbuYVCpqnGhWyAvK8', '_blank');
          }}
        >
          <FileSignature size={16} />
          กดปุ่มนี่เพื่อยืนยันสิทธิ์
        </Button>
      </div>
      <div className="text-md sm:text-xl">
        <span className="font-bold">⚠️ หมายเหตุ:</span>{' '}
        ท่านต้องกรอกแบบฟอร์มยืนยันเข้าร่วมโครงการภายในวันที่ 14 พฤศจิกายน 2566
        เวลา 18.00 น. เท่านั้น
        <span className="underline text-red-600">โดยผู้เข้าร่วมทุกคน</span>
        ต้องกรอกแบบฟอร์มนี้ มิฉะนั้นจะถือว่าสละสิทธิ์การเข้าร่วม
      </div>
    </div>
  );
};

export default Pass;
