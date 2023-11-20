'use client';

import BannerSlider from "@/components/BannerSlider";
import { NextPage } from "next"
import { useEffect, useState } from "react";
import PocketBase from 'pocketbase';
import { HackathonLogo } from "@/components/Sections/HomeSection";
import { Slider } from "@nextui-org/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const pb = new PocketBase("https://ku-hackathon.pockethost.io");
pb.autoCancellation(false);

const OpenButtonPage: NextPage<{}> = () => {
    const [slider, setSlider] = useState<number | number[]>(0.0);
    const [isStart, setIsStart] = useState<boolean>(false);

    const router = useRouter();
    const pathname = usePathname();

    const searchParams = useSearchParams()
    const reset = searchParams.get('reset') || null;

    useEffect(() => {
        if (reset === "1") {
            (async () => {
                await pb.collection('hackathon').update('3oojmx9qvh0l4mg', { "isStarted": false });
                setIsStart(false);
                router.push(pathname)
            })();
        }
    })

    useEffect(() => {
        (async () => {
            const record = await pb.collection('hackathon').getOne('3oojmx9qvh0l4mg');
            setIsStart(record.isStarted);
        })();
    }, []);

    useEffect(() => {
        const sliderInterval = setInterval(async () => {
            if (slider === 100) {
                await pb.collection('hackathon').update('3oojmx9qvh0l4mg', { "isStarted": true });
                setIsStart(true);
                setSlider(0);
            }
        }, 1000)

        return () => {
            clearInterval(sliderInterval);
        }
    });

    return (
        <div className="w-full h-screen relative z-[999] bg-black">
            <div className="w-full h-screen flex flex-col items-center justify-center absolute z-[10]">
                <div className="flex flex-col w-2/3 lg:w-full items-center justify-center">
                    <HackathonLogo />
                    <div className="flex flex-col w-full items-center justify-center">
                        {reset === "1" ? <div className="text-sm font-bold opacity-30 animate-pulse">
                            กำลังโหลด...
                        </div> : !isStart ?
                            <>
                                <div className="text-sm font-bold opacity-30 animate-pulse">
                                    {slider === 100 ? "กำลังโหลด..." : "เลื่อนเพื่อเริ่มนับเวลา"}
                                </div>
                                <Slider
                                    showTooltip={true}
                                    tooltipValueFormatOptions={{ style: 'unit', unit: 'percent' }}
                                    size={"lg"}
                                    step={1}
                                    maxValue={100}
                                    minValue={0}
                                    aria-label="Temperature"
                                    defaultValue={0}
                                    className="max-w-md"
                                    onChange={(e) => {
                                        setSlider(e);
                                    }}
                                    isDisabled={slider === 100}
                                />
                            </> : <>
                                <div className="text-sm font-bold opacity-60">
                                    การนับเวลาได้เริ่มขึ้นแล้ว
                                </div>
                            </>}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default OpenButtonPage;