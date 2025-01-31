import React, { useState, useEffect } from "react";
import backgroundImageImage from "../Assets/background_image.jpg";
import constellationImage from "../Assets/constillation.png";
import jupiterImage from "../Assets/jupitor.png";
import Navbar from "../Components/Navbar/Navlist";
import AboutUsPage from "./AboutusPg";
import Events from "./Events";
import Sponsors from "./Sponsors";
import SpeakersPage from "./SpeakersPg";
import Footer from "../Components/Footer/Footer";
import ContactUsPage from "./contact";
import ClipLoader from "react-spinners/BounceLoader";
import SparklesCore from "../Components/uiComponet";

function HomePage() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const visitedBefore = localStorage.getItem("visitedHomePage");

        if (visitedBefore) {
            setLoading(false);
        } else {
            const timer = setTimeout(() => {
                setLoading(false);
                localStorage.setItem("visitedHomePage", "true");
            }, 7000);

            return () => clearTimeout(timer);
        }
    }, []);

    return (
        <>
            {loading ? (
                <div className="absolute w-full h-full flex justify-center items-center bg-white opacity-75 z-[100]">
                    <ClipLoader color="#123abc" loading={loading} size={50} />
                </div>
            ) : (
                <>
                    <div className="absolute w-full h-full">
                        <SparklesCore />
                    </div>
                    <div className="relative">
                        <div
                            className="flex flex-col items-center overflow-hidden lg:h-screen bg-cover bg-center w-full h-full z-[10] "
                            // style={{
                            //     backgroundImage: `url(${backgroundImageImage})`,
                            // }}
                        >
                            <div className="z-[10] w-full">
                                <Navbar />
                            </div>

                            <img
                                src={constellationImage}
                                alt="Constellation"
                                className="z-[1] w-52 h-48 lg:w-96 lg:h-96  object-contain ml-auto absolute top-5 right-5 "
                            />
                            <div className=" mt-[20%] lg:mt-[8%]">
                                <div className=" font-K2D pl-[8px] text-gray-300  lg:text-4xl mt-[1rem] lg:my-[2.5rem]">
                                    E-Cell NIT HAMIRPUR's
                                </div>
                                <div className="font-k2d tracking-widest py-2 lg:font-black font-extrabold mb-[0.5rem] lg:my-[2.5rem] text-[2.5rem]  text-gray-300 text-shadow lg:text-[10rem]  text-4xl">
                                    ESUMMIT'25
                                </div>
                            </div>
                            <div className="text-center text-gray-300 sm:text-base md:text-lg py-2 lg:text-4xl font-kelly lg:mt-3 tracking-widest">
                                EMERGENCE OF ETERNITY
                            </div>
                            <div className="text-center text-gray-300 sm:text-base md:text-lg lg:text-4xl font-kelly mt-3 tracking-widest">
                                निष्ठा | धृति: | सत्यम
                            </div>

                            <div className="text-center text-gray-300 text-[1rem] lg:text-[3.5rem] mt-4 font-Rocker mb-[2rem]">
                                <h1>5-7 April </h1>
                            </div>
                            <img
                                src={jupiterImage}
                                alt="jupitor"
                                className="w-52 h-48 lg:w-80 lg:h-80  object-contain mr-auto absolute hidden lg:block lg:bottom-0 left-0"
                            />
                        </div>
                    </div>
                    <div className="relative z-[11] bg-black">
                        <AboutUsPage />
                    </div>

                    <Events />

                    <div className="">
                        <SpeakersPage />
                    </div>
                    <div className="bg-black  ">
                        <Sponsors />
                    </div>
                    <div className="bg-black text-white  ">
                        <ContactUsPage />
                    </div>

                    <div className="bg-black py-14">
                        <Footer />
                    </div>
                </>
            )}
        </>
    );
}

export default HomePage;
