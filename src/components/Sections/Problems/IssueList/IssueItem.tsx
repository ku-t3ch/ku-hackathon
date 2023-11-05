import { SubIssue } from '@/interfaces/IssueInterface';
import { FC } from 'react';
import tw from 'tailwind-styled-components';

interface Props {
  data: SubIssue;
}

const IssueItem: FC<Props> = ({ data }) => {
  return (
    <Card>
      <div className="py-[.25rem] px-[.5rem] bg-primary bg-opacity-10 rounded-lg text-primary font-medium whitespace-nowrap">
        {data.count?.toLocaleString()} ครั้ง
      </div>
      <div className="truncate w-[90vw] text-[1rem]">{data.name}</div>
    </Card>
  );
};

const Card = tw.div`
  w-full
  p-[.5rem]
  bg-gray-800
  bg-opacity-50
  rounded-lg
  flex
  gap-[1rem]
  items-center
`;

export default IssueItem;
