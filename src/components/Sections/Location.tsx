import { NextPage } from "next";
import { Element } from "react-scroll";
import dynamic from "next/dynamic";
import dotenv from "dotenv";
dotenv.config();

interface Props {}

const MapBox = dynamic(
    () => import("../MapBox"),
    { ssr: false }
);

const Location: NextPage<Props> = () => {
    
    return (
        <Element
            name="location"
            className="mx-auto w-full pt-[5rem] md:pt-[10rem] flex flex-1 md:flex-row gap-10" 
        >
            <div className="relative flex flex-row justify-center">
                <div className="absolute top-0 left-0 w-full h-4/6 bg-green-950 opacity-60 z-10"></div>
                <img
                    src="com-service-building.jpg"
                    alt="computer service building"
                    className="select-none z-0 w-screen h-4/6 object-cover"
                    draggable="false"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 w-[90%] py-5 px-5 gap-5 absolute z-20 top-0 h-4/6 mx-auto">
                    <div className="flex flex-col justify-center">
                        <div className="w-fit mx-auto">
                            <p className="font-bold text-4xl">สถานที่จัด</p>
                            <p className="text-green-500 font-bold text-xl">Location</p>
                            <br />
                            <p className="text-xl">สำนักบริการคอมพิวเตอร์</p>
                            <p className="text-xl">มหาวิทยาลัยเกษตรศาสตร์ บางเขน</p>
                        </div>
                    </div>
                    <div className="hidden md:flex flex-col justify-center h-screen/4 px-10 py-10">
                        <MapBox
                            center={[13.844757035106669, 100.56749983783186]}
                            zoom={17}
                        />
                    </div>
                </div>
            </div>
        </Element>
    )
}

export default Location;