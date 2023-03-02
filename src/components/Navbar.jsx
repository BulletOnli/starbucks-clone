import React from "react";
import sblogo from "../assets/sblogo.svg";

const Navbar = () => {
    return (
        <div className="sticky top-0 w-full h-[96px] bg-white flex items-center shadow-md">
            <div className="w-full flex px-[8rem]">
                <img className="w-[3.2rem]" src={sblogo} alt="" />
                <ul className="flex flex-1 gap-7 items-center ml-9 uppercase text-sm font-semibold tracking-widest">
                    <li className="py-5 hover:text-[#00754a] cursor-pointer">
                        Menu
                    </li>
                    <li className="py-5 hover:text-[#00754a] cursor-pointer">
                        Merchandise
                    </li>
                    <li className="py-5 hover:text-[#00754a] cursor-pointer">
                        Rewards
                    </li>
                </ul>
                <div className="flex gap-4 items-center font-medium">
                    <p className="font-bold text-sm mr-7 hover:text-[#00754a] cursor-pointer">
                        Find a Store
                    </p>
                    <button className="py-[5px] px-4 text-sm font-bold border-[1px] border-black rounded-3xl hover:bg-[#F0F0F0]">
                        Sign in
                    </button>
                    <button className="py-[7px] px-4 text-sm font-bold bg-black text-white rounded-3xl hover:bg-[#4C4C4C]">
                        Join Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
