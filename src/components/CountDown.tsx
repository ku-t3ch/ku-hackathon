import { NextPage } from "next";
import { useEffect, useState } from "react";
import PocketBase from 'pocketbase';

const pb = new PocketBase("https://ku-hackathon.pockethost.io");
pb.autoCancellation(false);

interface Props { }

const CountDown: NextPage<Props> = () => {
    const [countdown, setCountdown] = useState<number[]>([0, 0, 0, 0]);
    const [isStart, setIsStart] = useState<boolean>(false);
    const [isEnd, setIsEnd] = useState<boolean>(false);
    const unitTime = ["days", "hours", "minutes", "seconds"];

    useEffect(() => {
        (async () => {
            const record = await pb.collection('hackathon').getOne('3oojmx9qvh0l4mg');
            setIsStart(record.isStarted);
        })();
    }, []);

    useEffect(() => {
        pb.collection('hackathon').subscribe('3oojmx9qvh0l4mg', (e) => {
            setIsStart(e.record.isStarted);
        });
    });

    useEffect(() => {
        const countdownInterval = setInterval(() => {
            if (isStart) {
                if (!isEnd) {
                    const now = new Date();
                    const end = new Date('2023-11-24 13:00:00');
                    const diff = end.getTime() - now.getTime();

                    if (diff <= 0) {
                        setIsEnd(true);
                    };

                    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
                    const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
                    const minutes = Math.floor(diff / (1000 * 60)) % 60;
                    const seconds = Math.floor(diff / 1000) % 60;

                    setCountdown([days, hours, minutes, seconds]);
                }
            } else {
                setCountdown([0, 0, 0, 0]);
                return
            }
        }, 1000);

        return () => {
            clearInterval(countdownInterval);
        };
    });


    return (
        <>
            <div className="flex flex-col lg:flex-row w-2/3 items-center">
                {!isEnd ? countdown.map((v, i) => {
                    return (
                        <div key={i} className="flex flex-col w-1/4 items-center justify-center mb-[2.5rem]">
                            <div className="text-8xl font-bold">{v < 10 ? "0" : null}{v}</div>
                            <div className="text-sm text-primary capitalize">{unitTime[i]}</div>
                        </div>
                    )
                }) :
                    <div className="flex flex-col w-full items-center justify-center">
                        <div className="text-2xl md:text-4xl font-bold text-center text-danger">
                            หมดเวลา
                        </div>
                        <div className="w-full text-sm text-center text-gray-400 capitalize animate-pulse">การทำต้นแบบผลงาน (Prototype)</div>
                    </div>
                }
            </div >
        </>
    );
};

export default CountDown;