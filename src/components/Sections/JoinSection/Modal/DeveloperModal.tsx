import { FC } from 'react';
import BaseModal from '../BaseModal';
import { Code2 } from 'lucide-react';

const DeveloperModal: FC<{}> = () => {
  return (
    <BaseModal
      title={
        <div className="flex gap-1 items-center">
          <Code2 size={20} />
          <span className="font-semibold">Developer</span>
        </div>
      }
      heroImage={`${process.env.cdn}/join-items/icons/icon-developer.webp`}
      btnApplyColor="#38B6FF"
      bgClassName="bg-gradient-to-b from-[#00588A] via-[#00436F] to-transparent opacity-30"
      onClickApply={() => {
        window.open('https://forms.gle/kBLLSRX54Mibyqoo7', '_blank');
      }}
    >
      <div className="flex flex-col gap-5">
        <p className="font-light">
          นักพัฒนาเว็บไซต์
          สามารถสร้างสรรค์ไอเดียออกมาให้อยู่ในรูปแบบเว็บไซต์ต้นแบบ (Prototype)
          ตอบโจทย์การใช้งาน เพื่อให้สามารถนำไปพัฒนาต่อยอดใช้งานได้จริง
        </p>
        <div>
          <div className="text-lg font-medium">คุณสมบัติ</div>
          <ul className="px-[1rem] font-light list-disc">
            <li>
              สามารถพัฒนาเว็บแอปพลิเคชัน (Web Application)
              ตามภาษาความถนัดของตัวเอง
            </li>
            <li>เข้าใจหลักการทำ Responsive (Mobile First)</li>
            <li>สามารถทำงานร่วมกันเป็นทีมได้เป็นอย่างดี รับแรงกดดันได้ดี</li>
          </ul>
        </div>
      </div>
    </BaseModal>
  );
};

export default DeveloperModal;
