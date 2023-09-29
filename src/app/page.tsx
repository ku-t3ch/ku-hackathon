'use client'
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";

export default function Home() {
    const isMobile = useMediaQuery("(max-width: 768px)");
    return (
        <main className="flex flex-col">
            <div className="min-h-screen flex justify-center flex-col max-w-md mx-auto gap-10">
                <div className="flex flex-col justify-start">
                    <div className="md:text-6xl text-4xl font-bold">
                        KU{" "}
                        <span className="text-green-500 drop-shadow-md">
                            Hackathon
                        </span>
                    </div>
                    <div className="h-1 my-2 flex">
                        <div className="bg-green-500 w-1/4 h-full"></div>
                        <div className="bg-black w-full h-full"></div>
                    </div>
                    <div className="text-base md:text-xl text-gray-600 ">
                        กระเทาะปัญหาเพื่อนิสิตโดยนิสิต
                    </div>
                    <div className="relative">
                        <ChevronDown
                            className="text-green-500 animate-pulse absolute top-0 left-0"
                            size={isMobile ? 40 : 60}
                        />
                        <ChevronDown
                            className="text-green-500 animate-pulse absolute top-2 left-0"
                            size={isMobile ? 40 : 60}
                        />
                        <ChevronDown
                            className="text-green-500 animate-pulse absolute top-4 left-0"
                            size={isMobile ? 40 : 60}
                        />
                       
                    </div>
                </div>
            </div>
        </main>
    );
}
