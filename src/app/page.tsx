'use client';

import Benefit from '@/components/Sections/Benefit';
import FAQs from '@/components/Sections/FAQs';
import Gurus from '@/components/Sections/Gurus';
import HomeSection from '@/components/Sections/HomeSection';
import JoinSection from '@/components/Sections/JoinSection';
import Objective from '@/components/Sections/Objective';
import Partners from '@/components/Sections/Partners';
import TimeLine from '@/components/Sections/TimeLine';
import Problems from '@/components/Sections/Problems';
import Location from '@/components/Sections/Location';
import OtherCampus from '@/components/Sections/OtherCampus';

export default function Home() {
  return (
    <>
      <HomeSection />
      <Partners />
      <Objective />
      <Problems />
      <Gurus />
      {/* <JoinSection /> */}
      <Benefit />
      <Location />
      <OtherCampus />
      <TimeLine />
      <FAQs />
    </>
  );
}
