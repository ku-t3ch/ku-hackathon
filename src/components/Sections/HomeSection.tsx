import { ChevronDown } from "lucide-react";
import { NextPage } from "next";
import { Element } from "react-scroll";
import clsx from "clsx";

interface Props {}

const HomeSection: NextPage<Props> = () => {
    return (
        <Element
            name="home"
            className="grid-bg min-h-screen flex justify-center flex-col"
        >
            <div className="flex justify-center flex-col mx-auto gap-10">
                <div className="flex flex-col justify-start px-10">
                    <div className="md:text-9xl text-6xl font-bold flex flex-col md:flex-row items-start md:items-end">
                        KU
                        <div className="text-[#0DBC58] md:text-7xl text-5xl hackathon-glow">
                            Hackathon
                        </div>
                    </div>
                    <div className="h-1 my-2 flex">
                        <div className="bg-[#0DBC58] w-1/3 h-full"></div>
                        <div className="bg-black w-full h-full"></div>
                    </div>
                    <div className="text-base md:text-xl text-gray-300">
                        กระเทาะแอปนิสิต โดยนิสิต เพื่อนิสิต
                    </div>
                </div>
                <ChevronDown
                    className={clsx(
                        "text-[#0DBC58] animate-pulse absolute bottom-5 left-1/2 transform -translate-x-1/2 "
                    )}
                    size={50}
                />
            </div>
        </Element>
    );
};

export default HomeSection;
