import React from "react";
import img1 from "../assets/phone-bg.jpg";
import img2 from "../assets/grid-img1.jpeg";
import img3 from "../assets/grid-img2.jpeg";
import img4 from "../assets/grid-img3.jpeg";
import img5 from "../assets/grid-img4.jpg";
import img6 from "../assets/grid-img5.jpeg";
import img7 from "../assets/grid-img6.jpeg";

const About = () => {
    return (
        <div className="w-full h-max flex flex-col items-center px-[7.5rem] mb-10">
            <div className="grid grid-cols-2 my-8">
                <div
                    style={{
                        backgroundImage: `url(${img1})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                ></div>
                <div className="w-[37rem] h-[19rem] flex flex-col justify-center bg-[#006241] text-white text-center">
                    <h2 className="text-2xl font-bold mb-8">
                        Gifting Made Easy
                    </h2>
                    <p className="mb-8">
                        Order and send a Starbucks eGift through GLife on <br />{" "}
                        GCash today.
                    </p>
                    <button className="w-max py-[5px] px-4 mx-auto font-bold border-white border-[1px] rounded-full">
                        Learn more
                    </button>
                </div>
            </div>

            <div className="w-full grid grid-cols-2 gap-7">
                <div className="flex flex-col">
                    <div
                        className="h-[400px]"
                        style={{
                            backgroundImage: `url(${img2})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    ></div>
                    <div className="h-[15.5rem] flex flex-col items-center justify-center text-center bg-[#1E3932] text-white">
                        <h1 className="text-2xl font-bold mb-7">
                            Rich nutty comfort
                        </h1>
                        <p>
                            Put a spring in your step with the energizing new
                            Starbucks® <br /> Pistachio beverages.
                        </p>
                        <button className="py-[5px] px-4 font-bold border-white border-[1px] mt-8 rounded-full">
                            Sip, sip, go
                        </button>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div
                        className="h-[400px]"
                        style={{
                            backgroundImage: `url(${img3})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    ></div>
                    <div className="h-[15.5rem] flex flex-col items-center justify-center text-center bg-[#1E3932] text-white">
                        <h1 className="text-2xl font-bold mb-7">
                            Ultimate Springtime Treats
                        </h1>
                        <p>Good eats all day with new and returning snacks.</p>
                        <button className="py-[5px] px-4 font-bold border-white border-[1px] mt-8 rounded-full">
                            See more
                        </button>
                    </div>
                </div>

                <div className="flex flex-col">
                    <div
                        className="h-[400px]"
                        style={{
                            backgroundImage: `url(${img4})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    ></div>
                    <div className="h-[14rem] flex flex-col items-center justify-center text-center bg-[#D4E9E2]">
                        <h1 className="text-2xl font-bold mb-7">
                            Use your reusables today
                        </h1>
                        <p>
                            Fill your favorite drink and go wherever the day
                            takes you.
                        </p>
                        <button className="py-[5px] px-4 font-bold border-black border-[1px] mt-8 rounded-full">
                            Explore
                        </button>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div
                        className="h-[400px]"
                        style={{
                            backgroundImage: `url(${img5})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    ></div>
                    <div className="h-[14rem] flex flex-col items-center justify-center text-center bg-[#D4E9E2]">
                        <h1 className="text-2xl font-bold mb-7">
                            No time to head out?
                        </h1>
                        <p>
                            Have your favorites delivered straight to your
                            doorstep.
                        </p>
                        <button className="py-[5px] px-4 font-bold border-black border-[1px] mt-8 rounded-full">
                            Learn more
                        </button>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2 my-8">
                <div
                    style={{
                        backgroundImage: `url(${img6})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                ></div>
                <div className="w-[37rem] h-[19rem] flex flex-col justify-center bg-[#D4E9E2] text-center">
                    <h2 className="text-2xl font-bold mb-8">
                        Sweet as you like
                    </h2>
                    <p className="mb-8">
                        Customize your sweetness to suit your wellness needs.{" "}
                        <br />
                        *Select beverages only
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-2">
                <div className="w-[37rem] h-[19rem] flex flex-col justify-center bg-[#D4E9E2] text-center">
                    <h2 className="text-2xl font-bold mb-8">
                        Starbucks Stories
                    </h2>
                    <p className="mb-8">
                        Continuing to inspire and nurture the human spirit one{" "}
                        <br />
                        person, one cup and one neighborhood at a time.
                    </p>
                    <button className="w-max py-[5px] px-4 mx-auto font-bold border-black border-[1px] rounded-full">
                        Explore
                    </button>
                </div>
                <div
                    style={{
                        backgroundImage: `url(${img7})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                ></div>
            </div>
        </div>
    );
};

export default About;
