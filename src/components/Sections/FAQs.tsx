import { NextPage } from 'next';
import { Element } from 'react-scroll';
import { Accordion, AccordionItem } from '@nextui-org/react';
import { useScreenWidthSize } from '../hooks/useScreenWidthSize';
import { FC, ReactNode } from 'react';

interface Props {}

interface FAQS {
  label: string;
  children: ReactNode;
}

const faqs: FAQS[] = [
  {
    label: 'ใครสมัครได้บ้าง ?',
    children: (
      <div>
        นิสิตมหาวิทยาลัยเกษตรศาสตร์ทุกวิทยาเขต ที่กำลังศึกษาอยู่ในปัจจุบัน
        เท่านั้น
      </div>
    ),
  },
  {
    label: 'สมัครเดี่ยวหรือเป็นกลุ่ม ?',
    children: (
      <ul className="px-[1rem] flex flex-col space-y-[1rem] list-disc">
        <li>สาขา Developer ทีมละ 2-3 คน (กลุ่ม)</li>
        <li>สาขา Designer 1 คน (เดี่ยว)</li>
      </ul>
    ),
  },
  {
    label: 'มีค่าใช้จ่ายไหม ?',
    children: <div>มีค่าใช้จ่ายเป็นมัดจำ 300 บาท ได้คืนหลังจบโครงการ</div>,
  },
  {
    label: 'เราสามารถจับทีมไปเองได้ไหม Developer กับ Designer?',
    children: (
      <div>
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
    label: 'สมัครแล้วได้เข้าร่วมทุกคนหรือไม่?',
    children: (
      <div className=" flex flex-col">
        <span>ทางทีมงานจะคัดเลือกแต่ละสาขา สาขา Developer 40-60 คน</span>
        <span>
          และ สาขา Designer 40 คน
          รวมแล้วจะมีผู้ที่ถูกคัดเลือกให้เข้าร่วมรอบต่อไปจำนวน 80-100 คน
        </span>
      </div>
    ),
  },
  {
    label: 'หลังจาก Matching Team จะได้ทีมเป็นอย่างไร ?',
    children: <div>Designer 2 คน, Developer 2-3 คน รวมแล้วไม่เกิน 5 คน</div>,
  },
  {
    label: 'สมัครได้กี่สาขา?',
    children: (
      <div>
        สมัครได้เพียง 1 สาขาเท่านั้น โดยแต่ละสาขาจะมีโจทย์ที่แตกต่างกันออกไป
      </div>
    ),
  },
  {
    label: 'ไม่ไป Matching Team ได้ไหม ?',
    children: 'แนะนำให้มาแบบ Onsite เพราะหากไม่มาพี่ๆจะจับทีมให้ในรูปแบบสุ่ม',
  },
];

const FAQs: NextPage<Props> = () => {
  const width = useScreenWidthSize();

  const getSplitFaqs = () => {
    let left = [],
      right = [];

    for (var i = 0; i < faqs.length; i++) {
      const value = faqs[i];

      if (i % 2 == 0) {
        left.push(value);
      } else {
        right.push(value);
      }
    }

    return [left, right];
  };

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
      <div className="mt-[5rem] w-full grid grid-cols-1 md:grid-cols-2 gap-[1rem]">
        {width >= 768 ? (
          <>
            {getSplitFaqs().map((data, idx) => {
              return (
                <div key={idx} className="flex flex-col gap-[1rem]">
                  <AccordionList data={data} />
                </div>
              );
            })}
          </>
        ) : (
          <AccordionList data={faqs} />
        )}
      </div>
    </Element>
  );
};

interface AccordionListProps {
  data: FAQS[];
}

const AccordionList: FC<AccordionListProps> = ({ data = [] }) => {
  return (
    <>
      {data.map((item, idx) => {
        return (
          <Accordion key={idx} variant="light" fullWidth={true}>
            <AccordionItem
              key={1}
              title={item.label}
              classNames={{
                base: 'bg-[#003415] rounded-lg',
                heading: 'px-[1rem] bg-[#0B5C2B] rounded-lg drop-shadow-lg',
                title: 'text-white font-medium',
                content: 'p-[1rem] bg-[#003415] rounded-b-xl',
                indicator: 'text-white',
              }}
            >
              <>{item.children}</>
            </AccordionItem>
          </Accordion>
        );
      })}
    </>
  );
};

export default FAQs;
