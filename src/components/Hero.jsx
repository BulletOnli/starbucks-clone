import React from "react";
import bg1 from "../assets/sb-bg1.jpeg";

const Hero = () => {
    return (
        <div
            className="w-full h-[35rem] flex items-center"
            style={{ backgroundImage: `url(${bg1})`, backgroundSize: "cover" }}
        >
            <div className="ml-[14.7rem] py-5 text-[#1E3932] font-semibold">
                <h1 className="text-[4.3rem] mb-8">Let the good times bloom</h1>
                <button className="px-4 py-[5px] border-[1px] border-black rounded-3xl">
                    Discover the flavors
                </button>
            </div>
        </div>
    );
};

export default Hero;
