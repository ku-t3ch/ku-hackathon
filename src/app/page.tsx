"use client";

import HomeSection from "@/components/Sections/HomeSection";
import JoinSection from "@/components/Sections/JoinSection";
import ScheduleSection from "@/components/Sections/ScheduleSection";
import TimeLineSection from "@/components/Sections/TimeLineSection";

export default function Home() {
    return (
        <>
            <HomeSection />
            <TimeLineSection />
            <ScheduleSection />
            <JoinSection />
        </>
    );
}
