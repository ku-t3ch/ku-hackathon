import { Avatar } from "@nextui-org/avatar";
import { NextPage } from "next";
import { Element } from "react-scroll";

interface Props {}

const partners = [
    {
        name: "SD KU",
        image: "https://s3.tech.nisit.ku.ac.th/assets/partner/ku.png",
        link: "https://www.facebook.com/SDKUkasetsart",
    },
    {
        name: "KU OCS",
        image: "https://s3.tech.nisit.ku.ac.th/assets/partner/ocslogo.png",
        link: "https://web.facebook.com/ocs.ku",
    },
    {
        name: "GDSC KU",
        image: "https://s3.tech.nisit.ku.ac.th/assets/partner/GDSCKU.png",
        link: "https://www.facebook.com/gdsc.ku/",
    },
    {
        name: "KU Startup",
        image: "https://s3.tech.nisit.ku.ac.th/assets/partner/KUStartup.jpg",
        link: "https://www.facebook.com/Kustartup",
    },
    {
        name: "KU Tech",
        image: "https://tech.nisit.ku.ac.th/logo/KUTechBlack.png",
        link: "https://www.facebook.com/ku.t3ch",
    },
];

const Partners: NextPage<Props> = () => {
    return (
        <Element
            name="partners"
            className="max-w-5xl mx-auto w-full px-5 pt-[5rem] md:pt-[10rem] flex flex-col items-center"
        >
            <div className="flex flex-col gap-2">
                <div className="text-3xl md:text-4xl font-bold text-center">
                    ขับเคลื่อนโดย
                </div>
                <div className="text-xl text-green-500 font-bold text-center">
                    Powered by
                </div>
            </div>
            <div className="flex flex-wrap justify-center gap-5 mt-10">
                {partners.map((partner, index) => (
                    <a
                        className="flex flex-col"
                        key={index}
                        href={partner.link}
                        target="_bank"
                        title={partner.name}
                    >
                        <Avatar
                            color="success"
                            className="w-20 h-20 text-large bg-white"
                            isBordered
                            src={partner.image}
                            alt={partner.name}
                        />
                    </a>
                ))}
            </div>
        </Element>
    );
};

export default Partners;
