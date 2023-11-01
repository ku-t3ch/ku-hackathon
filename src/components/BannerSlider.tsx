import { FC, useMemo, useState } from 'react';
import Image from 'next/image';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';

import 'react-awesome-slider/dist/styles.css';
import tw from 'tailwind-styled-components';

const AutoplaySlider = withAutoplay(AwesomeSlider);

interface Slider {
  label: string;
  source: string;
}

interface Props {
  data?: Slider[];
}

const BannerSlider: FC<Props> = ({ data = [] }) => {
  const [isSliderLoading, setIsSliderLoading] = useState<boolean>(true);
  const [currentBannerIdx, setCurrentBannerIdx] = useState<number>(0);

  return (
    <>
      {/* preload */}
      {isSliderLoading && (
        <Image
          fill
          src={data[0].source}
          className="h-screen w-screen object-cover"
          alt="preload-banner"
          unoptimized
          priority
        />
      )}

      {/*  slider */}
      <Container>
        <AutoplaySlider
          play={true}
          cancelOnInteraction={false}
          interval={5000}
          infinite={true}
          bullets={false}
          organicArrows={false}
          fillParent={true}
          timerHeight={'0px'}
          onFirstMount={({}) => setIsSliderLoading(false)}
          onTransitionEnd={({ currentIndex }: any) =>
            setCurrentBannerIdx(currentIndex)
          }
          className="h-screen z-[9]"
        >
          {data.map((banner, idx) => {
            return (
              <div key={idx}>
                <Image
                  src={banner.source}
                  alt={`banner-${idx}`}
                  width={1920}
                  height={1080}
                  className="h-screen object-cover"
                  unoptimized
                />
              </div>
            );
          })}
        </AutoplaySlider>
        {/* bullets */}
        <BulletContainer>
          {data.map((_, idx) => {
            return <Bullet key={idx} $active={currentBannerIdx == idx} />;
          })}
        </BulletContainer>
      </Container>
    </>
  );
};

const Container = tw.div`
  h-screen
  w-screen
  relative
`;

const BulletContainer = tw.div`
  absolute
  bottom-[3rem]
  left-1/2
  transform
  -translate-x-1/2
  z-[10]
  flex
  gap-3
`;

const Bullet: any = tw.div`
  h-[.5rem]
  w-[.5rem]
  rounded-full
  shadow
  ${(p: any) => (p.$active ? 'bg-primary' : 'bg-stone-400 bg-opacity-80')}
`;

export default BannerSlider;
