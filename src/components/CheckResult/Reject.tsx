import { NextPage } from 'next';

interface Props {} 

const Reject: NextPage<Props> = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-2">
        <div className="text-2xl sm:text-3xl">
          <span>เสียใจด้วย, คุณ </span>
          <span className="text-red-500 font-bold">ไม่ผ่าน</span> การคัดเลือก
        </div>
      </div>
      <div className="flex flex-col text-md sm:text-xl">
        🙏 ขอบคุณที่สนใจเข้าร่วมกิจกรรม Hackathon ในครั้งนี้
        ครั้งหน้าอาจจะเป็นคุณผ่านเข้ารอบ
      </div>
    </div>
  );
};

export default Reject;
