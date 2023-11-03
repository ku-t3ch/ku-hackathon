import { ChevronsRight } from 'lucide-react';
import { FC } from 'react';

interface Props {
  isMobile?: boolean;
}

const LoadingSkeleton: FC<Props> = ({ isMobile = false }) => {
  return (
    <div className="flex flex-col lg:flex-row gap-[2rem] animate-pulse">
      <div className="w-fit flex flex-col gap-[1.5rem]">
        {[...Array(isMobile ? 1 : 6)].map((_, idx) => {
          return <IssueTypeSkeleton key={idx} />;
        })}
      </div>
      <div className="hidden lg:w-fit lg:flex items-center">
        <ChevronsRight size={48} className="text-gray-800 opacity-50" />
      </div>
      <div className="w-full lg:w-[45vw]">
        <div className="flex flex-col gap-[1rem]">
          {[...Array(10)].map((_, idx) => {
            return <IssueItem key={idx} />;
          })}
        </div>
      </div>
    </div>
  );
};

const IssueTypeSkeleton: FC<{}> = () => {
  return (
    <div className="h-[5.5rem] w-[21rem] bg-gray-800 bg-opacity-50 rounded-lg" />
  );
};

const IssueItem: FC<{}> = () => {
  return (
    <div className="h-[3rem] w-full bg-gray-800 bg-opacity-50 rounded-lg" />
  );
};

export default LoadingSkeleton;
