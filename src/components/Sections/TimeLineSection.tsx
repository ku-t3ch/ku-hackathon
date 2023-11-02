import { NextPage } from 'next';
import { Element } from 'react-scroll';
import { format, isSameDay, isWithinInterval } from 'date-fns';
import { Timeline } from 'antd';
import { FC, useState } from 'react';
import Collapse from '@mui/material/Collapse';
import tw from 'tailwind-styled-components';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface Props {}

interface TimelineItem {
  label?: string;
  children: JSX.Element | string;
  start: Date;
  end: Date;
  detail?: JSX.Element | string;
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
      <ul className="ml-[1.25rem] list-disc">
        <li>8:30-9:00 Register</li>
        <li>9:00-12:00 Overview</li>
        <li>12:00-13:00 Break</li>
        <li>13:00-16:00 Matching Team</li>
      </ul>
    ),
  },
  {
    children: 'Overview Problem',
    start: new Date('2023-11-16 23:59'),
    end: new Date('2023-11-16 23:59'),
  },
  {
    children: 'UX/UI Workshop',
    start: new Date('2023-11-17 23:59'),
    end: new Date('2023-11-17 23:59'),
    detail: (
      <ul className="ml-[1.25rem] list-disc">
        <li>8:30-9:00 Register</li>
        <li>9:00-12:00 Design Thinking</li>
        <li>12:00-13:00 Break</li>
        <li>13:00-16:00 UX/UI Tool</li>
      </ul>
    ),
  },
  {
    children: 'Dev Workshop',
    start: new Date('2023-11-19 23:59'),
    end: new Date('2023-11-19 23:59'),
    detail: (
      <ul className="ml-[1.25rem] list-disc">
        <li>8:30-9:00 Register</li>
        <li>9:00-12:00 React</li>
        <li>12:00-13:00 Break</li>
        <li>13:00-16:30 FastAPI</li>
      </ul>
    ),
  },
  {
    children: 'Pitching Day',
    start: new Date('2023-11-20 23:59'),
    end: new Date('2023-11-20 23:59'),
    detail: (
      <ul className="ml-[1.25rem] list-disc">
        <li>8:30-9:00 Register</li>
        <li>9:00-12:00 Pitching</li>
        <li>12:00-13:00 Break</li>
        <li>13:00-14:00 Pitching</li>
        <li>14:00-14:30 Break</li>
        <li>14:30-15:30 Announce Winner</li>
      </ul>
    ),
  },
  {
    children: 'Hackathon',
    start: new Date('2023-11-22 23:59'),
    end: new Date('2023-11-24 23:59'),
  },
];

const TimeLineSection: NextPage<Props> = () => {
  let activeEvent = 0;

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
        <div className="w-full mt-[5rem]">
          <Timeline
            mode="left"
            items={timelineItems.map((item) => {
              const isActiveEvent = isWithinInterval(new Date(), {
                start: item.start,
                end: item.end,
              });

              return {
                label: <TimeLineLabel start={item.start} end={item.end} />,
                dot: <TimeLineDot $isActive={isActiveEvent} />,
                children: <TimeLineChild item={item} />,
                className: `!pb-[2.5rem] ${isActiveEvent && 'tail-active'}`,
              };
            })}
          />
        </div>
      </Element>
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

const TimeLineChild: NextPage<{ item: TimelineItem }> = ({ item }) => {
  const [onExpand, setOnExpand] = useState(false);
  return (
    <div className="pl-[.25rem] sm:pl-[2.5rem] flex flex-col">
      <div className="text-[1rem] sm:text-xl font-medium">{item.children}</div>
      <div className="flex gap-2">
        {item.detail && (
          <div
            className="flex items-center gap-1 text-primary cursor-pointer"
            onClick={() => setOnExpand(!onExpand)}
          >
            {onExpand ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            <span>แสดงรายละเอียด</span>
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

export default TimeLineSection;
