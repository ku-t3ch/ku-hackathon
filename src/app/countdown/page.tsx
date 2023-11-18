'use client';

import BannerSlider from "@/components/BannerSlider";
import { NextPage } from "next"
import { useEffect, useState } from "react";

const banners = [
    {
        label: 'วิทยาเขตบางเขน',
        source: `${process.env.cdn}/banners/bkn-banner.webp`,
    },
    {
        label: 'วิทยาเขตกำแพงแสน',
        source: `${process.env.cdn}/banners/kps-banner.webp`,
    },
    {
        label: 'วิทยาเขตศรีราชา',
        source: `${process.env.cdn}/banners/src-banner.webp`,
    },
    {
        label: 'วิทยาเขตเฉลิมพระเกียรติ จังหวัดสกลนคร',
        source: `${process.env.cdn}/banners/scs-banner.webp`,
    },
    {
        label: 'วิทยาเขตสุพรรณบุรี',
        source: `${process.env.cdn}/banners/sbc-banner.webp`,
    },
];

const CountDownPage: NextPage<{}> = () => {
    const [countdown, setCountdown] = useState<number[]>([0, 0, 0, 0]);
    const [isEnd, setIsEnd] = useState<boolean>(false)
    const unitTime = ["days", "hours", "minutes", "seconds"];

    useEffect(() => {
        setInterval(() => {
            if (isEnd) return;
            const now = new Date();
            const end = new Date('2023-11-24 18:00:00');
            const diff = end.getTime() - now.getTime();

            if (diff <= 0) {
                setIsEnd(true);
                return
            };

            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
            const minutes = Math.floor(diff / (1000 * 60)) % 60;
            const seconds = Math.floor(diff / 1000) % 60;

            setCountdown([days, hours, minutes, seconds]);
        }, 1000);
    })

    return (
        <div className="w-full flex flex-1 gap-10 h-screen relative z-[999]">
            <BannerSlider data={banners} />
            <div className="w-full h-screen flex flex-col items-center justify-center absolute z-[10]">
                <div className="flex flex-col lg:flex-row lg: w-1/2 items-center">
                    {!isEnd ? countdown.map((v, i) => {
                        return (
                            <div className="flex flex-col m-2 p-4 w-1/4 items-center justify-center">
                                <div className="text-8xl font-bold">{v < 10 ? "0" : null}{v}</div>
                                <div className="text-sm capitalize">{unitTime[i]}</div>
                            </div>
                        )
                    }) :
                        <div className="flex flex-col m-2 p-4 w-full items-center justify-center">
                            <div className="text-8xl font-bold">กิจกรรมจบลงแล้ว</div>
                            <div className="text-sm capitalize">ขอขอบคุณ</div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default CountDownPage;