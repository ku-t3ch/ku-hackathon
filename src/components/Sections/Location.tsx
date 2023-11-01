import { NextPage } from "next";
import { Element } from "react-scroll";
import { GoogleMap, InfoWindowF, MarkerF, useJsApiLoader } from "@react-google-maps/api";
import dotenv from "dotenv";
dotenv.config();

interface Props {}

const Location: NextPage<Props> = () => {

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY!,
    });
    
    const mapContainerStyle = {
        width: "80%",
        height: "70%",
        margin: "auto",
    };
    
    const loc = {
        lat: 13.844610080312837, 
        lng: 100.5675085805296,
    };

    return (
        <Element
            name="location"
            className="mx-auto pt-[5rem] md:pt-[10rem] flex flex-1 md:flex-row gap-10"
        >
            <div className="relative">
                <div className="absolute top-0 left-0 w-full h-4/6 bg-green-950 opacity-60 z-10"></div>
                <img
                    src="com-service-building.jpg"
                    alt="computer service building"
                    className="select-none z-0 w-screen h-4/6 object-cover"
                    draggable="false"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 w-screen py-5 px-5 gap-5 absolute z-20 top-0 h-4/6 mx-auto">
                    <div className="flex flex-col justify-center">
                        <div className="w-fit mx-auto">
                            <p className="font-bold text-4xl">สถานที่จัด</p>
                            <p className="text-green-500 font-bold text-xl">Location</p>
                            <br />
                            <p className="text-xl">สำนักบริการคอมพิวเตอร์</p>
                            <p className="text-xl">มหาวิทยาลัยเกษตรศาสตร์ บางเขน</p>
                        </div>
                    </div>
                    <div className="hidden md:flex flex-col justify-center">
                        {isLoaded && (
                            <GoogleMap
                                mapContainerStyle={mapContainerStyle}
                                center={loc}
                                zoom={18}
                            >
                                <MarkerF 
                                    position={loc}
                                />
                            </GoogleMap>
                        )}
                    </div>
                </div>
            </div>
        </Element>
    )
}

export default Location;