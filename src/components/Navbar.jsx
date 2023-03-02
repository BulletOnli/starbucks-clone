import React from "react";
import sblogo from "../assets/sblogo.svg";

const Navbar = () => {
    return (
        <div className="sticky top-0 w-full h-[96px] flex items-center shadow-md">
            <div className="w-full flex px-[8rem]">
                <img className="w-[3.2rem]" src={sblogo} alt="" />
                <ul className="flex flex-1 gap-7 items-center ml-9 uppercase text-sm font-semibold tracking-widest">
                    <li className="py-5">Menu</li>
                    <li className="py-5">Merchandise</li>
                    <li className="py-5">Rewards</li>
                </ul>
                <div className="flex gap-4 items-center font-medium">
                    <p className="font-bold text-sm mr-7">Find a Store</p>
                    <button className="py-[5px] px-4 text-sm font-bold border-[1px] border-black rounded-3xl">
                        Sign in
                    </button>
                    <button className="py-[7px] px-4 text-sm font-bold bg-black text-white rounded-3xl">
                        Join Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
