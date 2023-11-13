import { CheckResultResponse } from '@/interfaces/CheckResultResponse';
import { NextPage } from 'next';

interface Props {
  data: CheckResultResponse | undefined;
}

const Reserve: NextPage<Props> = ({ data }) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <div className="flex flex-col">
          {data?.team_id && (
            <div className="text-xl">
              ทีม : <span className="font-bold">{data?.team_id}</span>
            </div>
          )}
          <div className="text-xl">
            ชื่อ : <span className="font-bold">{data?.name}</span>
          </div>
        </div>
        <div className="text-xl">ยินดีด้วย คุณผ่านการคัดเลือกเป็นตัวสำรอง</div>
        <div className="text-3xl">
          <span className="text-yellow-500 font-bold">ผ่าน</span>{' '}
          การคัดเลือกเป็นตัวสำลองลำดับที่ {data?.reserve}
        </div>
      </div>
    </div>
  );
};

export default Reserve;
