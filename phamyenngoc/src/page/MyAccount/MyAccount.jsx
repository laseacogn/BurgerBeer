import React from "react";
import { Tabs } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import { BiSolidDiscount } from "react-icons/bi";
import Profile from "./Profile";
import AccountSetting from "./AccountSetting";
import Order from "./Order";
import Review from "./Review";
import Voucherrr from "./Voucherrr"

const MyAccount = () => {
  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="w-full mb-[20px] bg-[#FFFEFE] shadow-md rounded-lg">
        <div className="w-full justify-center items-center ">
          <div className="w-full border-b border-zinc-400">
            <p className="font-sans text-2xl font-bold ml-[20px] mt-[10px] mb-[10px]">
              MY ACCOUNT
            </p>
          </div>
          <div className="w-full justify-center items-center">
            <div className="w-[1200px] overflow-x-auto no-scrollbar">
              <Tabs aria-label="Full width tabs" style="fullWidth" >
                <Tabs.Item active title="Profile" icon={HiUserCircle}>
                  <Profile/>
                </Tabs.Item>
                <Tabs.Item title="Account Setting" icon={MdDashboard}>
                 <AccountSetting/>
                </Tabs.Item>
                <Tabs.Item title="Order" icon={HiAdjustments}>
                  <Order/>
                </Tabs.Item>
                <Tabs.Item title="My Review" icon={HiClipboardList}>
                  <Review/>
                </Tabs.Item>
                <Tabs.Item title="Voucher Warehouse" icon={BiSolidDiscount}>
                  <Voucherrr/>
                </Tabs.Item>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
