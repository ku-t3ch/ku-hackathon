import { NextPage } from 'next';
import { Element } from 'react-scroll';
import dynamic from 'next/dynamic';
import dotenv from 'dotenv';
import { useScreenWidthSize } from '../hooks/useScreenWidthSize';
import Image from 'next/image';
dotenv.config();

interface Props {}

const MapBox = dynamic(() => import('../MapBox'), { ssr: false });

const Location: NextPage<Props> = () => {
  const width = useScreenWidthSize();

  return (
    <Element name="location" className="pt-[5rem] md:pt-[10rem]">
      <div className="w-full py-[5rem] bg-[#003415] bg-opacity-50 relative">
        <Image
          fill
          src={`${process.env.cdn}/com-service-building.webp`}
          className="object-cover opacity-10 z-[1]"
          unoptimized
          sizes="100vw"
          alt="ocs-building"
        />
        <div className="max-w-[80vw] lg:max-w-[75rem] w-full mx-auto">
          <div className="flex flex-col gap-2">
            <div className="text-3xl md:text-4xl font-bold text-center">
              สถานที่
            </div>
            <div className="text-xl text-green-500 font-bold text-center">
              Location
            </div>
          </div>
          <div className="py-[5rem] flex justify-center">
            <div className="flex flex-col lg:flex-row items-center gap-[2rem] lg:gap-[4rem] xl:gap-[5rem]">
              <div className="w-full lg:w-[30vw] text-md md:text-2xl font-semibold drop-shadow-sm">
                <div>สำนักบริการคอมพิวเตอร์</div>
                <div>มหาวิทยาลัยเกษตรศาสตร์ วิทยาเขตบางเขน</div>
              </div>
              <div
                className="border-[3px] border-green-600 h-[30vw] w-[80vw] md:w-[30vw] bg-gray-800"
                style={{
                  height: width >= 768 ? '20rem' : '18rem',
                  width: width >= 768 ? '35rem' : width - 70,
                }}
              >
                <MapBox
                  center={[13.844757035106669, 100.56749983783186]}
                  zoom={17}
                  popUpLabel="สำนักบริการคอมพิวเตอร์"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Location;
