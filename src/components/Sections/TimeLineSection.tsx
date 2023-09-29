import { NextPage } from "next";
import { Element } from "react-scroll";
import clsx from "clsx";

interface Props {}

const TimeLineSection: NextPage<Props> = () => {
    return (
        <>
            <Element
                name="time-line"
                className="max-w-5xl mx-auto w-full px-5 pt-[5rem] md:pt-[10rem] min-h-screen flex  flex-col"
            >
                <div className="text-4xl">ไทม์ไลน์</div>
            </Element>
        </>
    );
};

export default TimeLineSection;
