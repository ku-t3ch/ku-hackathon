import { ChevronDown } from "lucide-react";
import { NextPage } from "next";
import { Element } from "react-scroll";
import clsx from "clsx";
import Slideshow from "../Slideshow";

interface Props {}

const HomeSection: NextPage<Props> = () => {
    return (
        <Element
            name="home"
            className="min-h-screen flex justify-center flex-col"
        >
            <div className="flex justify-center flex-col mx-auto gap-10">
                <Slideshow/>
            </div>
        </Element>
    );
};

export default HomeSection;
