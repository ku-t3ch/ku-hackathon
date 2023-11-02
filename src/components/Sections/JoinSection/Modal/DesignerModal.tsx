import { FC } from 'react';
import BaseModal from '../BaseModal';
import { Palette } from 'lucide-react';

const DesignerModal: FC<{}> = () => {
  return (
    <BaseModal
      title={
        <div className="flex gap-1 items-center">
          <Palette size={20} />
          <span className="font-semibold">Designer</span>
        </div>
      }
      heroImage="https://s3.tech.nisit.ku.ac.th/assets/ku-hackathon/join-items/icons/icon-designer.webp"
      btnApplyColor="#FF914D"
      bgClassName="bg-gradient-to-b from-[#FF6100] via-[#845941] to-transparent opacity-30"
      onClickApply={() => {
        window.open('https://forms.gle/v5xdDYXrY2EdXKt5A', '_blank');
      }}
    >
      <div className="flex flex-col gap-5">
        <p className="font-light">
          นักไอเดียสร้างสรรค์ ชอบคิดแก้ปัญหา รวมถึงออกแบบฟีเจอร์ใหม่ ๆ
          พร้อมนำเสนอต่อคณะกรรมการได้ หน้าที่หลักๆ
          แล้วจะเป็นคนที่มีความคิดสร้างสรรค์และมีความสามารถในการออกแบบ
        </p>
        <div>
          <div className="text-lg font-medium">คุณสมบัติ</div>
          <ul className="px-[1rem] font-light list-disc">
            <li>เป็นนักคิดนักวางแผน</li>
            <li>มีความคิดสร้างสรรค์</li>
            <li>เข้าใจความรู้สึกของผู้ใช้งานแอพ Nisit KU</li>
          </ul>
        </div>
      </div>
    </BaseModal>
  );
};

export default DesignerModal;
