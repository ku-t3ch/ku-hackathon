import { Avatar } from "@nextui-org/avatar";
import { NextPage } from "next";
import { Element } from "react-scroll";
import React, { useState, useRef  } from 'react';
import 'src/app/partner.css';

interface Props {}

const partners = [
    {
        name: "Kasetsart University",
        image: "https://s3.tech.nisit.ku.ac.th/assets/partner/ku.png",
        link: "https://www.facebook.com/SDKUkasetsart",
    },
    {
        name: "Office of Computer Services",
        image: "https://s3.tech.nisit.ku.ac.th/assets/partner/ocslogo.png",
        link: "https://web.facebook.com/ocs.ku",
    },
    {
        name: "Google Developer Student Clubs",
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
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const hoverTimeout = useRef<NodeJS.Timeout | null>(null);

    const handleMouseEnter = (index: number) => {
        setHoveredIndex(index);
        if (hoverTimeout.current) {
            clearTimeout(hoverTimeout.current);
        }
    };

    const handleMouseLeave = () => {
        hoverTimeout.current = setTimeout(() => {
            setHoveredIndex(null);
        }, 500);
    };

    return (
        <Element
            name="partners"
            className="max-w-8xl mx-auto w-full px-3 py-5 flex flex-col bg-slate-800"
        >
            <div className="flex flex-wrap place-content-evenly gap-5">
                {partners.map((partner, index) => (
                    <div key={index} className="flex flex-col">
                        <a
                            className={"avatar-container flex flex-row"}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                            href={partner.link}
                        >
                            <Avatar
                                className={`w-16 h-16 text-large bg-white ${
                                    index === hoveredIndex ? 'hovered' : 'unhovered'
                                }`}
                                isBordered
                                src={partner.image}
                                alt={partner.name}
                            />

                            {/* <div className={"text-container"}>
                                <div 
                                    className={`flex h-full text-xm font-bold ${
                                        index === hoveredIndex ? 'hovered' : 'unhovered'
                                    }`} 
                                    style={{ alignItems: 'center' }}>
                                    {partners[index].name}
                                </div>
                            </div> */}
                        </a>
                    </div>
                ))}
            </div>
        </Element>
    );
};

export default Partners;
