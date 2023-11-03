'use client';

import Benefit from '@/components/Sections/Benefit';
import FAQs from '@/components/Sections/FAQs';
import Gurus from '@/components/Sections/Gurus';
import HomeSection from '@/components/Sections/HomeSection';
import JoinSection from '@/components/Sections/JoinSection';
import Objective from '@/components/Sections/Objective';
import Partners from '@/components/Sections/Partners';
import TimeLineSection from '@/components/Sections/TimeLineSection';
import Problems from '@/components/Sections/Problems';
import Location from '@/components/Sections/Location';

export default function Home() {
  return (
    <>
      <HomeSection />
      <Partners />
      <Objective />
      <Problems />
      <Gurus />
      <Location />
      <JoinSection />
      <Benefit />
      <TimeLineSection />
      <FAQs />
    </>
  );
}
