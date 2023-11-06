import { NextPage } from 'next';
import { Element } from 'react-scroll';
import { format, isSameDay, isWithinInterval } from 'date-fns';
import { Timeline } from 'antd';
import { FC, ReactNode, useState } from 'react';
import Collapse from '@mui/material/Collapse';
import tw from 'tailwind-styled-components';
import { ChevronDown, ChevronUp, Info } from 'lucide-react';
import Modal from './Modal';
import { useScreenWidthSize } from '@/components/hooks/useScreenWidthSize';

interface Props {}

interface TimelineItem {
  label?: string;
  children: JSX.Element | string;
  start: Date;
  end: Date;
  detail?: JSX.Element | string;
  tag?: string;
}

const timelineItems: TimelineItem[] = [
  {
    children: 'Problem Submission',
    start: new Date('2023-10-09 23:59'),
    end: new Date('2023-11-03 23:59'),
  },
  {
    children: 'Registration',
    start: new Date('2023-10-23 23:59'),
    end: new Date('2023-11-10 23:59'),
  },
  {
    children: 'Participant Announcement',
    start: new Date('2023-11-13 23:59'),
    end: new Date('2023-11-13 23:59'),
  },
  {
    children: 'Matching Teams',
    start: new Date('2023-11-15 23:59'),
    end: new Date('2023-11-15 23:59'),
    detail: (
      <ul className="ml-[1.25rem] list-disc space-y-3">
        <li>09:00-09:30 Registration</li>
        <li>09:30-12:00 Pre-Matching</li>
        <li>12:00-13:00 Lunch time</li>
        <li>13:00-15:00 Matching Team</li>
      </ul>
    ),
    tag: 'Onsite',
  },
  {
    children: 'Overview Problem',
    start: new Date('2023-11-16 23:59'),
    end: new Date('2023-11-16 23:59'),
    tag: 'Online',
    detail: (
      <ul className="ml-[1.25rem] list-disc space-y-3">
        <li>08:30-09:00 Registration</li>
        <li>09:00-12:30 Workshop</li>
        <li>12:30-13:30 Lunch time</li>
        <li>13:30-15:15 UX/UI Tool</li>
        <li>15:15-16:00 Questionnaire & Preview</li>
      </ul>
    ),
  },
  {
    children: 'UX/UI Workshop',
    start: new Date('2023-11-17 23:59'),
    end: new Date('2023-11-17 23:59'),
    detail: (
      <ul className="ml-[1.25rem] list-disc space-y-3">
        <li>08:30-09:00 Registration</li>
        <li>09:00-12:30 Workshop</li>
        <li>12:30-13:30 Lunch time</li>
        <li>13:30-15:15 UX/UI Tool</li>
        <li>15:15-16:00 Questionnaire & Preview</li>
      </ul>
    ),
    tag: 'Online',
  },
  {
    children: 'Dev Workshop',
    start: new Date('2023-11-19 23:59'),
    end: new Date('2023-11-19 23:59'),
    detail: (
      <ul className="ml-[1.25rem] list-disc space-y-3">
        <li>08:30-09:00 Registration</li>
        <li>09:00-09:10 Introduction</li>
        <li>09:10-12:20 Learn: React</li>
        <li>12:20-13:20 Lunch time</li>
        <li>13:20-16:30 Learn: FastAPI</li>
      </ul>
    ),
    tag: 'Online',
  },
  {
    children: 'Pitching Day',
    start: new Date('2023-11-20 23:59'),
    end: new Date('2023-11-20 23:59'),
    detail: (
      <ul className="ml-[1.25rem] list-disc space-y-3">
        <li>08:30-09:00 Registration</li>
        <li>09:00-12:00 Pitching</li>
        <li>12:00-13:00 Lunch time</li>
        <li>13:00-14:00 Pitching</li>
        <li>14:00-14:30 Break</li>
        <li>14:30-15:30 Announce Winner</li>
      </ul>
    ),
    tag: 'Onsite',
  },
  {
    children: 'Hackathon',
    start: new Date('2023-11-22 23:59'),
    end: new Date('2023-11-24 23:59'),
    tag: 'Onsite',
  },
];

const TimeLine: NextPage<Props> = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [isEffect, setEffect] = useState<boolean>(false);

  const [modal, setModal] = useState<{
    title: string | ReactNode;
    content: string | ReactNode;
  }>({
    title: '',
    content: '',
  });

  const openModal = (item: TimelineItem) => {
    setIsOpenModal(true);
    setEffect(true);
    setModal({
      title: item.children,
      content: item.detail,
    });
  };

  const closeModal = () => {
    setEffect(false);
    setTimeout(() => setIsOpenModal(false), 500);
  };

  return (
    <>
      <Element
        name="time-line"
        className="max-w-5xl mx-auto w-full px-5 pt-[5rem] md:pt-[10rem] flex flex-col items-center"
      >
        <div className="flex flex-col gap-2">
          <div className="text-3xl md:text-4xl font-bold text-center">
            กำหนดการ
          </div>
          <div className="text-xl text-green-500 font-bold text-center">
            Timeline
          </div>
        </div>
        <div className="mt-[2.5rem] md:mt-[5rem] w-full">
          <Timeline
            mode="left"
            items={timelineItems.map((item) => {
              const isActiveEvent = isWithinInterval(new Date(), {
                start: item.start,
                end: timelineItems[timelineItems.length - 1].end,
              });

              return {
                label: <TimeLineLabel start={item.start} end={item.end} />,
                dot: <TimeLineDot $isActive={isActiveEvent} />,
                children: (
                  <TimeLineChild
                    item={item}
                    openModal={() => openModal(item)}
                  />
                ),
                className: `!pb-[2.5rem] ${isActiveEvent && 'tail-active'}`,
              };
            })}
          />
        </div>
      </Element>
      {isOpenModal && (
        <Modal
          isOpen={isEffect}
          title={modal.title}
          content={modal.content}
          closeModal={closeModal}
        />
      )}
    </>
  );
};

interface TimeLineLabelProps {
  start: Date;
  end: Date;
}

const TimeLineLabel: FC<TimeLineLabelProps> = ({ start, end }) => {
  return (
    <div className="pr-[1rem] sm:pr-[3rem] sm:text-[1rem]">
      {isSameDay(start, end) ? (
        format(start, 'dd MMM yyyy')
      ) : (
        <>
          {format(start, 'dd MMM yyyy')} - {format(end, 'dd MMM yyyy')}
        </>
      )}
    </div>
  );
};

const TimeLineDot: any = tw.div`
    h-[.8rem]
    w-[.8rem]
    shadow
    rounded-full
    ${(p: any) => (p.$isActive ? 'bg-primary' : 'bg-stone-400 bg-opacity-80')}
`;

interface TimeLineChildProps {
  item: TimelineItem;
  openModal?: () => void;
}

const TimeLineChild: NextPage<TimeLineChildProps> = ({ item, openModal }) => {
  const width = useScreenWidthSize();

  const [onExpand, setOnExpand] = useState(false);

  let tagColor = '';

  switch (item.tag?.toLocaleLowerCase()) {
    case 'hybrid':
      tagColor = 'bg-sky-600 text-white';
      break;
    case 'online':
      tagColor = 'bg-green-600 text-white';
      break;
    case 'onsite':
      tagColor = 'bg-pink-600 text-white';
      break;
  }
  return (
    <div className="pl-[.25rem] sm:pl-[2.5rem] flex flex-col">
      <div className="text-[1rem] sm:text-xl font-medium flex flex-col-reverse sm:flex-row justify-start items-center gap-2">
        <div className="w-full lg:w-fit">{item.children}</div>
        {item.tag && (
          <div className="w-full lg:w-fit">
            <div
              className={`w-fit flex justify-start text-xs px-1 rounded-sm ${tagColor}`}
            >
              {item.tag}
            </div>
          </div>
        )}
      </div>
      <div className="flex gap-2">
        {item.detail && (
          <div className="text-primary cursor-pointer">
            {width > 768 ? (
              <div
                className="flex items-center gap-1"
                onClick={() => setOnExpand(!onExpand)}
              >
                {onExpand ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                <span>แสดงรายละเอียด</span>
              </div>
            ) : (
              <div onClick={openModal} className="flex items-center gap-1">
                <Info size={12} />
                <span>แสดงรายละเอียด</span>
              </div>
            )}
          </div>
        )}
      </div>

      <Collapse in={onExpand}>
        <div className="border-t-1 border-[#2D3648] pt-2 mt-2">
          <div className="text-gray-400">{item.detail}</div>
        </div>
      </Collapse>
    </div>
  );
};

export default TimeLine;
