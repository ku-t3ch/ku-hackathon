import { NextPage } from 'next';
import Image from 'next/image';
import { Element } from 'react-scroll';

interface Props {}

const Objective: NextPage<Props> = () => {
  return (
    <div className="flex flex-col">
      <Element
        name="objective"
        className="max-w-5xl mx-auto w-full px-5 pt-[5rem] md:pt-[10rem] flex flex-1 md:flex-row justify-between gap-10"
      >
        <div className="flex flex-1 flex-col items-center md:gap-10 md:flex-row">
          <div className="md:w-1/2">
            <Image
              src={`${process.env.cdn}/talai-bus.webp`}
              width={0}
              height={0}
              alt="talai-bus-image"
              unoptimized
            />
          </div>
          <div
            className="p-5 flex flex-col gap-3 rounded-2xl flex-1"
            style={{ alignSelf: 'center' }}
          >
            <div className="text-2xl md:text-4xl font-bold text-primary">
              KU Hackathon คืออะไร?
            </div>
            <div>
              KU Hackathon เป็นงานแข่งขันที่จัดขึ้นโดยมหาวิทยาลัยเกษตรศาสตร์
              (Kasetsart University)
              โดยงานนี้เป็นมหกรรมที่เน้นการพัฒนาและใช้เทคโนโลยีในการแก้ไขปัญหาต่าง
              ๆ ที่เกิดขึ้นในมหาวิทยาลัยเอง
              นิสิตจากหลายสาขาที่สนใจและมีความสามารถทางเทคโนโลยีมาเข้าร่วมในงานนี้
              จะทำงานร่วมกันเพื่อพัฒนาแนวคิดและโครงการต่าง ๆ
              ที่สามารถช่วยแก้ไขปัญหาในมหาวิทยาลัยเกษตรศาสตร์ต่อไปได้
            </div>
          </div>
        </div>
      </Element>
    </div>
  );
};

export default Objective;
