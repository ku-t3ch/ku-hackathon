import { NextPage } from 'next';
import { Element } from 'react-scroll';
import dynamic from 'next/dynamic';
import dotenv from 'dotenv';
import { useScreenWidthSize } from '../hooks/useScreenWidthSize';
dotenv.config();

interface Props {}

const MapBox = dynamic(() => import('../MapBox'), { ssr: false });

const Location: NextPage<Props> = () => {
  const width = useScreenWidthSize();

  return (
    <Element name="location" className="pt-[5rem] md:pt-[10rem]">
      <div className="w-full py-[5rem] bg-[#003415] bg-opacity-50">
        <div className="max-w-[80vw] lg:max-w-[80rem] w-full mx-auto">
          <div className="flex flex-col gap-2">
            <div className="text-3xl md:text-4xl font-bold text-center">
              สถานที่
            </div>
            <div className="text-xl text-green-500 font-bold text-center">
              Location
            </div>
          </div>
          <div className="py-[5rem] flex justify-center">
            <div className="flex flex-col lg:flex-row items-center gap-[2rem] lg:gap-[4rem] xl:gap-[10rem]">
              <div className="w-full lg:w-fit">
                <div className="pb-[.25rem] border-b-2 border-primary">
                  <div className="text-start text-2xl font-semibold tracking-wider">
                    สถานที่จัดค่าย
                  </div>
                </div>
                <div className="mt-[2rem] text-xl">
                  <div>สำนักบริการคอมพิวเตอร์</div>
                  <div>มหาลัยเกษตรศาสตร์ วิทยาเขตบางเขน</div>
                </div>
              </div>
              <div
                style={{
                  height: width >= 768 ? '20rem' : '18rem',
                  width: width >= 768 ? '35rem' : width - 80,
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
          <div className="flex justify-center">
            <div className="flex flex-col lg:flex-row-reverse items-center gap-[2rem] lg:gap-[4rem] xl:gap-[10rem]">
              <div className="w-full lg:w-fit">
                <div className="pb-[.25rem] border-b-2 border-primary">
                  <div className="text-start text-2xl font-semibold tracking-wider">
                    สถานที่พัก
                  </div>
                  <div>สำหรับนิสิตนอกวิทยาเขต</div>
                </div>
                <div className="mt-[2rem] text-xl">
                  พอพักภายในมหาวิทยาลัยเกษตรศาสตร์ (ฟรี)
                </div>
              </div>
              <div
                style={{
                  height: width >= 768 ? '20rem' : '18rem',
                  width: width >= 768 ? '35rem' : width - 80,
                }}
              >
                <MapBox
                  center={[13.847562653540281, 100.56962211759917]}
                  zoom={17}
                  popUpLabel="หอพักใน (แยกหญิงและชาย)"
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
