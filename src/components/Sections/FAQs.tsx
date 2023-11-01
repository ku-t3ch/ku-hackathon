import { NextPage } from 'next';
import { Element } from 'react-scroll';
import { Accordion, AccordionItem } from '@nextui-org/react';

interface Props {}

const faqs = [
  {
    label: 'ใครสมัครได้บ้าง?',
    children: (
      <div className="text-md">
        นิสิตมหาวิทยาลัยเกษตรศาสตร์ทุกวิทยาเขต ที่กำลังศึกษาอยู่ในปัจจุบัน
        เท่านั้น
      </div>
    ),
  },
  {
    label: 'งานจัดเมื่อไร?',
    children: (
      <div className="text-md">
        เริ่มจัดตั้งแต่วันที่ 15 พฤศจิกายน 2023 และ มีการจัด Workshop
        ตามสาขาที่ยื่นสมัคร ในตารางที่กำหนดให้
      </div>
    ),
  },
  {
    label: 'มีค่าใช้จ่ายไหม ?',
    children: (
      <div className="text-md">
        มีค่าใช้จ่ายเป็นมัดจำ 300 บาท ได้คืนหลังจบโครงการ
      </div>
    ),
  },
  {
    label: 'สมัครแล้วได้เข้าร่วมทุกคนหรือไม่?',
    children: (
      <div className="text-md flex flex-col">
        <span>ทางทีมงานจะคัดเลือกแต่ละสาขา สาขา Developer 40-60 คน</span>
        <span>
          และ สาขา Designer 40 คน
          รวมแล้วจะมีผู้ที่ถูกคัดเลือกให้เข้าร่วมรอบต่อไปจำนวน 80-100 คน
        </span>
      </div>
    ),
  },
  {
    label: 'สมัครได้กี่สาขา?',
    children: (
      <div className="text-md">
        สมัครได้เพียง 1 สาขาเท่านั้น โดยแต่ละสาขาจะมีโจทย์ที่แตกต่างกันออกไป
      </div>
    ),
  },
  {
    label: 'จัดออนไซต์หรือออนไลน์',
    children: (
      <div className="text-md">จัดแบบผสม โดยจะมีจัดออนไลน์ในบางกิจกกรม</div>
    ),
  },
  {
    label: 'สมัครเดี่ยวหรือเป็นกลุ่ม?',
    children: (
      <div className="text-md flex flex-col space-y-[1rem]">
        <div>สาขา Developer ทีมละ 2-3 คน (กลุ่ม)</div>
        <div>สาขา Designer 1 คน (เดี่ยว)</div>
      </div>
    ),
  },
  {
    label: 'จะทราบผลการคัดเลือกได้จากช่องทางไหน เมื่อไร?',
    children: (
      <ul className="text-md flex flex-col space-y-[1rem]">
        <li>
          การประกาศผลผู้สิทธิ์มีเข้าร่วมโครงการ ซึ่งจะประกาศในวันที่ 13
          พฤศจิกายน 2023
        </li>
        <li>
          การประกาศผ่านการคัดเลือกเข้าสู่รอบ Hackathon ในวันที่ 20 พฤศจิกายน
          2023
        </li>
        <li>
          โดยจะประกาศผลทางเว็บไซต์{' '}
          <a
            className="text-blue-500 underline"
            href="https://hackathon.ku.ac.th"
          >
            https://hackathon.ku.ac.th
          </a>
        </li>
      </ul>
    ),
  },
  {
    label: 'เราสามารถจับทีมไปเองได้ไหม Developer กับ Designer?',
    children: (
      <div className="text-md">
        ไม่ได้ เนื่องจากจะต้องจับคู่ทีมผ่านกิจกรรม Matching Team
        โดยเป็นกิจกรรมที่ผู้เข้าร่วมสามารถทำความรู้จักกัน
        และแลกเปลี่ยนความคิดเห็นกันผ่านกิจกรรมต่าง ๆ
        ซึ่งในท้ายกิจกรรมนั้นจะเป็นการจับคู่ทีม (ตามความสมัครใจ)
        จะเริ่มจากผู้นำทีม (ฝ่าย Developer หรือ Designer) จะต้องแสดงไอเดีย
        หรือวิสัยทัศน์เพื่อดึงดูดลูกทีมไปแข่งในวัน Hackathon
      </div>
    ),
  },
  {
    label: 'หลังจาก Matching Team จะได้ทีมเป็นอย่างไร ?',
    children: (
      <div className="text-md">
        Designer 2 คน, Developer 2-3 คน รวมแล้วไม่เกิน 5 คน
      </div>
    ),
  },
];

const FAQs: NextPage<Props> = () => {
  return (
    <Element
      name="faqs"
      className="w-full md:max-w-[90vw] xl:max-w-[70vw] mx-auto px-5 pt-[5rem] md:pt-[10rem] flex flex-col items-center"
    >
      <div className="flex flex-col gap-2">
        <div className="text-3xl md:text-4xl font-bold text-center">
          คำถามที่พบบ่อย
        </div>
        <div className="text-xl text-green-500 font-bold text-center">FAQs</div>
      </div>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-[1rem] mt-[5rem]">
        {faqs.map((data, idx) => {
          return (
            <Accordion key={idx} variant="light" fullWidth={true}>
              <AccordionItem
                key={1}
                title={data.label}
                classNames={{
                  base: 'bg-[#1D232E] rounded-lg',
                  heading: 'px-[1rem] bg-green-500 rounded-lg drop-shadow-lg',
                  title: 'text-[#1D232E] font-medium',
                  content: 'p-[1rem] bg-[#1D232E] rounded-b-xl',
                  indicator: 'text-[#1D232E]',
                }}
              >
                <>{data.children}</>
              </AccordionItem>
            </Accordion>
          );
        })}
      </div>
    </Element>
  );
};

export default FAQs;
