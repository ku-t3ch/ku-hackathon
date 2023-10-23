import { NextPage } from "next";
import { Element } from "react-scroll";
import clsx from "clsx";

interface Props {}

const ScheduleSection: NextPage<Props> = () => {
    return (
        <Element
            name="schedule"
            className="max-w-5xl mx-auto w-full px-5 pt-[5rem] md:pt-[10rem] min-h-screen flex  items-center flex-col"
        >
            <div className="text-4xl">กำหนดการ</div>
        </Element>
    );
};

export default ScheduleSection;
