import { Collapse, CollapseProps } from 'antd';
import { ChevronRight } from 'lucide-react';
import { NextPage } from 'next';
import { CSSProperties } from 'react';
import { Element } from 'react-scroll';

interface Props {}

const getItems: CollapseProps['items'] = [
  {
    key: '1',
    label: <div className="text-lg">ใครสมัครได้บ้าง?</div>,
    children: <div className='ml-7'>นิสิตมหาวิทยาลัยเกษตรศาสตร์ทุกวิทยาเขต ที่กำลังศึกษาอยู่ในปัจจุบัน เท่านั้น</div>,
  },
  {
    key: '2',
    label: <div className="text-lg">งานจัดเมื่อไร?</div>,
    children: <div className='ml-7'>เริ่มจัดตั้งแต่วันที่ 15 พฤศจิกายน 2023 และ มีการจัด workshop ตามสาขาที่ยื่นสมัคร ในตารางที่กำหนดให้</div>,
  },
  {
    key: '3',
    label: (
      <div className="text-lg">มีค่าใช้จ่ายไหม?</div>
    ),
    children: <div className='ml-7'>มีค่าใช้จ่ายเป็นมัดจำ 300 บาท ได้คืนหลังจบโครงการ</div>,
  },
  {
    key: '4',
    label: <div className="text-lg">สมัครแล้วได้เข้าร่วมทุกคนหรือไม่?</div>,
    children: <div className='ml-7'>ทางทีมงานจะคัดเลือกแต่ละสาขา สาขา Developer 80 คน และ สาขา Designer 40 คน รวมแล้วจะมีผู้ที่ถูกคัดเลือกให้เข้าร่วมสัมภาษณ์ 120 คน</div>,
  },
  {
    key: '5',
    label: <div className="text-lg">สมัครได้กี่สาขา?</div>,
    children: <div className='ml-7'>สมัครได้เพียง 1 สาขาเท่านั้น โดยแต่ละสาขาจะมีโจทย์ที่แตกต่างกันออกไป</div>,
  },
  {
    key: '6',
    label: <div className="text-lg">จัดออนไซต์หรือออนไลน์?</div>,
    children: <div className='ml-7'>สมัครได้เพียง 1 สาขาเท่านั้น โดยแต่ละสาขาจะมีโจทย์ที่แตกต่างกันออกไป</div>,
  },
  {
    key: '7',
    label: <div className="text-lg">สมัครเดี่ยวหรือเป็นกลุ่ม?</div>,
    children: <div className='ml-7'>สมัครเป็นกลุ่มทีมละ 3 คน คือ Developer 2 คน และ Designer 1 คน</div>,
  },
  {
    key: '8',
    label: <div className="text-lg">จะทราบผลการคัดเลือกได้จากช่องทางไหน เมื่อไร?</div>,
    children: <div className='ml-7'>การประกาศผลการคัดเลือกจะแบ่งเป็น 2 รอบ คือการประกาศผลผู้มีสิทธิ์สัมภาษณ์ซึ่งจะประกาศในวันที่ 13 พฤศจิกายน 2023 และการประกาศผ่านการคัดเลือก ในวันที่ 20 พฤศจิกายน 2023 โดยจะประกาศผลทางเว็บไซต์ <a className='text-blue-500' href="https://hackathon.tech.nisit.ku.ac.th/">https://hackathon.tech.nisit.ku.ac.th</a></div>,
  },
];

const FAQs: NextPage<Props> = () => {
  return (
    <Element
      name="faqs"
      className="max-w-5xl mx-auto w-full px-5 pt-[5rem] md:pt-[10rem] flex flex-col items-center"
    >
      <div className="text-4xl font-bold text-center">FAQs</div>
      <div className="flex gap-5 mt-10 w-full">
        <Collapse
          className="w-full"
          ghost
          expandIcon={({ isActive }) => (
            <ChevronRight
              style={{
                transform: `rotate(${isActive ? 90 : 0}deg)`,
                transition: 'transform 0.2s ease-in-out',
              }}
            />
          )}
          items={getItems}
        />
      </div>
    </Element>
  );
};

export default FAQs;
