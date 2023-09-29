import { NextPage } from "next";
import { Element } from "react-scroll";
import clsx from "clsx";

interface Props {}

const JoinSection: NextPage<Props> = () => {
    return (
        <>
            <Element
                name="join"
                className="max-w-5xl mx-auto w-full px-5 pt-[5rem] md:pt-[10rem] min-h-screen flex  flex-col"
            >
                <div className="text-4xl">สมัครเข้าร่วม</div>
            </Element>
        </>
    );
};

export default JoinSection;
