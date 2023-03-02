import React from "react";

const Footer = () => {
    return (
        <div className="w-full h-[29rem] border-t-[1px] flex flex-col px-[7.5rem] pt-14">
            <div className="w-full h-[18rem] grid grid-cols-5 p-2 gap-16">
                <div>
                    <h1 className="font-semibold text-xl mb-4">About Us</h1>
                    <p className="py-2 text-gray-600">Our Company</p>
                    <p className="py-2 text-gray-600">Stories and News</p>
                    <p className="py-2 text-gray-600">Customer Service</p>
                    <p className="py-2 text-gray-600">Careers</p>
                </div>
                <div>
                    <h1 className="font-semibold text-xl mb-4">Order Online</h1>
                    <p className="py-2 text-gray-600">Order on the App</p>
                    <p className="py-2 text-gray-600">Delivery</p>
                    <p className="py-2 text-gray-600">Send eGifts</p>
                    <p className="py-2 text-gray-600">Grab Partnership</p>
                </div>
                <div>
                    <h1 className="font-semibold text-xl mb-4">Rewards</h1>
                    <p className="py-2 text-gray-600">My Account</p>
                    <p className="py-2 text-gray-600">View Transactions</p>
                    <p className="py-2 text-gray-600">Reload</p>
                    <p className="py-2 text-gray-600">FAQs</p>
                </div>
                <div>
                    <h1 className="font-semibold text-xl mb-4">
                        Social Impact
                    </h1>
                </div>
                <div>
                    <h1 className="font-semibold text-xl mb-4">Promotions</h1>
                </div>
            </div>
            <div className="w-full h-[10rem] flex flex-col items-center border-t-[1px] py-4 px-10">
                <div className="w-full h-[5rem]">icons</div>
                <div className="w-full flex justify-between items-center my-4">
                    <div className="flex gap-10">
                        <p>Web Accessibility</p>
                        <p>Privacy Policy</p>
                        <p>Terms of Use</p>
                        <p>Site Map</p>
                        <p>Cookie Preferences</p>
                    </div>

                    <small className="text-center">
                        © 2022 Starbucks Coffee Company. All rights reserved.
                    </small>
                </div>
            </div>
        </div>
    );
};

export default Footer;
