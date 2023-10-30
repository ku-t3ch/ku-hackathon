import { NextPage } from "next";
import { Facebook, Globe, Instagram, X } from "lucide-react";

interface Props {}

const socials = [
    {
        name: "facebook",
        icon: <Facebook size={24} />,
        link: "https://www.facebook.com/KasetsartUniversity",
    },
    {
        name: "instagram",
        icon: <Instagram size={24} />,
        link: "https://www.instagram.com/kasetsart_ku",
    },
    {
        name: "twitter",
        icon: <X size={24} />,
        link: "https://twitter.com/kasetsart_ku",
    },
    {
        name: "website",
        icon: <Globe size={24} />,
        link: "https://www.ku.ac.th",
    },
];

const Footer: NextPage<Props> = () => {
    return (
        <div className="mt-[10rem] w-full py-[2rem] bg-default-50">
            <div className="max-w-5xl mx-auto w-full text-center">
                <div className="flex justify-center items-center gap-5">
                    {socials.map((social) => {
                        return (
                            <a
                                role="button"
                                href={social.link}
                                target="__blank"
                                key={social.name}
                                className="text-default-600 hover:text-default-800"
                            >
                                {social.icon}
                            </a>
                        );
                    })}
                </div>
                <div className="mt-[1rem] text-xs text-default-500">
                    &copy; 2023 Kasetsart University. All Rights Reserved.
                </div>
            </div>
        </div>
    );
};

export default Footer;
