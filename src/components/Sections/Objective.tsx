import { NextPage } from "next";
import { Element } from "react-scroll";

interface Props {}

const Objective: NextPage<Props> = () => {
    return (
        <Element
            name="objective"
            className="max-w-5xl mx-auto w-full px-5 pt-[5rem] md:pt-[10rem] flex flex-col md:flex-row justify-between gap-10"
        >
            <div className="p-5 flex flex-col gap-3 border-l-3 border-green-500 bg-green-500/10">
                <div className="text-xl md:text-3xl">🤔 What is KU hackathon?</div>
                <div>
                    KU Hackathon is a hackathon for developers and design,
                    hackers and builders to come together to collaborate and
                    develop innovative solutions for "NISIT KU application".
                    This event is open to all students from Kasetsart
                    Universities. KU Hackathon participants will have the
                    opportunity to create prototypes of new and cool services
                    for "NISIT KU application".
                </div>
            </div>
            <div className="p-5 flex flex-col gap-3 border-l-3 bg-green-500/10 border-green-500">
                <div className="text-xl md:text-3xl">👩‍💻 NISIT KU application</div>
                <div>
                    Mobile application for Kasetsart University students Bang
                    Khen and Kamphaeng Saen campuses To focus on providing
                    various information services for students Provides teaching
                    and learning transaction services Publishes information
                    related to teaching and various activities such as
                    university information, student information and advisor
                    information.
                </div>
            </div>
        </Element>
    );
};

export default Objective;
