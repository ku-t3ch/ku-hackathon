import { SubIssue } from '@/interfaces/IssueInterface';
import { FC, useEffect, useRef, useState } from 'react';
import tw from 'tailwind-styled-components';
import IssueItem from './IssueItem';
import { ScrollShadow } from '@nextui-org/react';
import _ from 'lodash';
import { ChevronDown } from 'lucide-react';

interface Props {
  minimal?: boolean;
  data: SubIssue[];
}

const IssueList: FC<Props> = ({ minimal = false, data = [] }) => {
  const ScrollableElement = useRef<any>();
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    setIsScrolled(false);

    if (isScrolled || !ScrollableElement.current) return;

    const handleScroll = () => {
      setIsScrolled(true);
    };

    ScrollableElement.current?.addEventListener('scroll', handleScroll);

    return () =>
      ScrollableElement.current?.removeEventListener('scroll', handleScroll);
  }, [data]);

  return (
    <Container>
      <ScrollShadow
        ref={ScrollableElement}
        hideScrollBar
        className="w-full flex flex-col gap-[1rem]"
        style={{
          height: minimal ? '35rem' : '40rem',
        }}
      >
        {_.orderBy(data, (o) => o.count, 'desc')
          .slice(0, minimal ? 10 : data.length)
          .map((value, idx) => {
            if (['', '-', 'ไม่มี'].includes(value.name)) return;

            return <IssueItem key={idx} data={value} />;
          })}
      </ScrollShadow>
      {!isScrolled && !minimal && (
        <Arrow $type="bottom">
          <ChevronDown size={20} />
        </Arrow>
      )}
    </Container>
  );
};

const Container = tw.div`
  w-full
  relative
`;

const Arrow: any = tw.div`
  absolute
  bottom-0
  left-[46%]
  transform
  -translate-x-[46%]

  p-[.25rem]
  rounded-full
  bg-gray-500
  bg-opacity-60
  animate-bounce
  z-[3]
`;

export default IssueList;
