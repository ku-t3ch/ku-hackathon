import { NextPage } from 'next';
import { ReactNode } from 'react';
import { Element } from 'react-scroll';

interface Props {}

interface Menu {
  icon: ReactNode | string;
  title: ReactNode | string;
  detail: ReactNode | string;
  description?: ReactNode | string;
}

const data: Menu[] = [
  {
    icon: '🏡',
    title: 'สถานที่พัก',
    detail: 'หอในมหาวิทยาลัยเกษตรศาสตร์',
    description: 'สำหรับนิสิตนอกวิทยาเขต ที่เข้าร่วมกิจกรรมนี้ ทุก ๆ กิจกรรม',
  },
  {
    icon: '🚐',
    title: 'การเดินทาง',
    detail: 'เบิกค่ารถโดยสารประจำทางได้',
    description: (
      <>
        สนับสนุนค่าเดินทางให้กับนิสิตเข้าร่วมกิจกรรม{' '}
        <span className="underline">(ตามจริง)</span>
      </>
    ),
  },
];

const OtherCampus: NextPage<Props> = () => {
  return (
    <Element
      name="other-campus"
      className="max-w-[90vw] xl:max-w-[75rem] mx-auto w-full pt-[5rem] md:pt-[10rem] flex flex-col items-center"
    >
      <div className="flex flex-col gap-2">
        <div className="text-3xl md:text-4xl font-bold text-center">
          วิทยาเขตอื่น ๆ
        </div>
        <div className="text-xl text-primary font-bold text-center">
          Other Campus
        </div>
      </div>
      <div className="mt-[2.5rem] md:mt-[5rem] w-full flex flex-col lg:grid lg:grid-cols-2 gap-[2rem]">
        {data.map((item, index) => (
          <div
            key={index}
            className="w-full bg-gray-800 border border-gray-700 p-[1.5rem] rounded-lg shadow"
          >
            <div className="mb-1">
              <div className="text-2xl">{item.icon}</div>
              <div className="text-xl md:text-2xl font-bold text-primary">
                {item.title}
              </div>
            </div>
            <div className="flex flex-col">
              <div className="text-xl md:text-2xl font-semibold">
                {item.detail}
              </div>
            </div>
            <div className="py-[.5rem] text-xs sm:text-sm">
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </Element>
  );
};

export default OtherCampus;
