import { Button } from '@nextui-org/react';
import Image from 'next/image';
import { FC, useState } from 'react';
import tw from 'tailwind-styled-components';

import { ArrowRight } from 'lucide-react';

interface Props {
  title: string;
  applyAmount?: number;
  borderColor?: string;
  themeColor?: string;
  bgImage: string;
  extension?: string;
  onClickBtn?: () => void;
}

const BaseCard: FC<Props> = ({
  title,
  themeColor,
  applyAmount = 0,
  borderColor,
  bgImage,
  extension,
  onClickBtn,
}) => {
  const [isEffect, setEffect] = useState(false);

  return (
    <Card
      style={{
        border: 'solid 2px',
        borderColor: borderColor,
      }}
    >
      <Image
        fill
        src={bgImage}
        className="z-0 h-full w-full rounded-lg object-cover"
        alt="card-bg-image"
        unoptimized
      />
      <Content>
        <div className="font-bold drop-shadow text-xl tracking-wide">
          {title}
        </div>
        <div>
          สมัครแล้ว{' '}
          <span
            className="font-medium"
            style={{
              color: themeColor,
            }}
          >
            {applyAmount}
          </span>{' '}
          {extension}
        </div>
        <div className="mt-[1rem]">
          <Button
            radius="none"
            className={`font-medium rounded-[.5rem]`}
            style={{
              backgroundColor: themeColor,
            }}
            onClick={onClickBtn}
            onPress={() => {
              setEffect(true);
              setTimeout(() => setEffect(false), 500);
            }}
          >
            <span>ดูรายละเอียด</span>
            <ArrowRight
              size={16}
              className={`${isEffect && 'arrow-animation'}`}
            />
          </Button>
        </div>
      </Content>
    </Card>
  );
};

const Card = tw.div`
  w-full
  h-[20rem]
  rounded-lg
  relative
`;

const Content = tw.div`
  absolute
  z-10
  bottom-5
  left-5
`;

export default BaseCard;
