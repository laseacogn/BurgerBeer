import React from "react";
import { FaCheckCircle, FaCcVisa } from "react-icons/fa";
import { GrInfo } from "react-icons/gr";
import { MdOutlineArrowOutward } from "react-icons/md";
import { HiOutlineTruck } from "react-icons/hi2";
import { ImBoxRemove } from "react-icons/im";


const OrderDetail = () => {
  return (
    <div>
      <div className="w-full mx-auto justify-center items-center">
        <div className="w-full mb-[20px]">
          <div className="w-full">
            <div className="max-w">
              <div className="px-4">
                <div className="flex">
                  <p className="font-bold text-[#5D5D5D]">OrderID: </p>
                  <p className="uppercase font-medium text-[#5D5D5D] ml-2">
                    HD001
                  </p>
                </div>
                <div className="flex items-center my-3">
                  <p className="font-medium text-[#5D5D5D] ml-4">
                    Order date: Feb 02, 2021 |
                  </p>
                  <p className="text-green-500 ml-3">
                    <FaCheckCircle />
                  </p>
                  <p className="ml-3 text-green-600">Delivered</p>
                </div>
                <div className="grid grid-cols-4 border-b-2 py-4">
                  <img
                    className="w-20 rounded-md shadow-lg mx-auto"
                    src={require("../../assets/image/Burger/14.jpg")}
                    alt="cream"
                  />
                  <div className="flex flex-col items-center font-medium">
                    <p className=" text-[#5D5D5D]">
                     Bacon & Egg Grilled Cheese Sandwich
                    </p>
                  </div>
                  <div className="flex flex-col items-center font-medium">
                    <p className="text-[#5D5D5D]">Quantity</p>
                    <p className="text-[#969696] mt-4">1</p>
                  </div>
                  <div className="flex flex-col items-center font-medium">
                    <p className=" text-[#5D5D5D]">Price</p>
                    <p className="text-[#969696] mt-4">$ 75.00</p>
                  </div>
                </div>
                <div className="grid grid-cols-4 border-b-2 py-4">
                  <img
                    className="w-20 rounded-md shadow-lg mx-auto"
                    src={require("../../assets/image/Burger/12.jpg")}
                    alt="cream"
                  />
                  <div className="flex flex-col items-center font-medium">
                    <p className=" text-[#5D5D5D]">
                      Japanese Chicken Burger
                    </p>
                  </div>
                  <div className="flex flex-col items-center font-medium">
                    <p className="text-[#5D5D5D]">Quantity</p>
                    <p className="text-[#969696] mt-4">1</p>
                  </div>
                  <div className="flex flex-col items-center font-medium">
                    <p className=" text-[#5D5D5D]">Price</p>
                    <p className="text-[#969696] mt-4">$ 80.00</p>
                  </div>
                </div>
                <div className="grid grid-cols-4 border-b-2 py-4">
                  <img
                    className="w-20 rounded-md shadow-lg mx-auto"
                    src={require("../../assets/image/Burger/6.jpg")}
                    alt="cream"
                  />
                  <div className="flex flex-col items-center font-medium">
                    <p className=" text-[#5D5D5D]">BBQ Pull Pork Burger</p>
                  </div>
                  <div className="flex flex-col items-center font-medium">
                    <p className="text-[#5D5D5D]">Quantity</p>
                    <p className="text-[#969696] mt-4">1</p>
                  </div>
                  <div className="flex flex-col items-center font-medium">
                    <p className=" text-[#5D5D5D]">Price</p>
                    <p className="text-[#969696] mt-4">$ 99.00</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 border-b-2 py-4">
                  <div className="font-medium ml-4">
                    <p className="text-[#00116C] ">Payment</p>
                    <div className="flex gap-4 items-center mt-4">
                      <p className="text-[#969696]">Visa: ****56</p>
                      <p className="text-[#00116C] text-2xl">
                        <FaCcVisa />
                      </p>
                    </div>
                  </div>
                  <div className="font-medium">
                    <p className=" text-[#00116C] text-left">Delivery</p>
                    <div className="grid grid-cols-3 items-start font-medium gap-2 mt-4">
                      <p className="text-[#969696] font-medium">Adress:</p>
                      <p className="text-[#5D5D5D] font-medium col-span-2">
                        30 An Thuong 36, My An, Da Nang
                      </p>
                    </div>
                    <div className="grid grid-cols-3 items-start font-medium gap-2">
                      <p className="text-[#969696] font-medium">Tel:</p>
                      <p className="text-[#5D5D5D] font-medium col-span-2">
                        +84-564-751-400
                      </p>
                    </div>
                    <div className="grid grid-cols-3 items-start font-medium gap-2 mt-4">
                      <p className="text-[#969696] font-medium">Deliver:</p>
                      <p className="text-[#5D5D5D] font-medium col-span-2">
                        Pham Yen Ngoc
                      </p>
                    </div>
                    <div className="grid grid-cols-3 items-start font-medium gap-2">
                      <p className="text-[#969696] font-medium">Tel:</p>
                      <p className="text-[#5D5D5D] font-medium col-span-2">
                        +84-837-018-566
                      </p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 border-b-2 py-4">
                  <div className="font-medium ml-4">
                    <p className=" text-[#00116C] text-left">Need Help</p>
                    <div className="flex items-center font-medium gap-2 mt-4">
                      <p className="text-[#5D5D5D]">
                        <GrInfo />
                      </p>
                      <p className="text-[#5D5D5D] font-medium">Order Issue</p>
                      <p className="translate-y-[3px] text-[#5D5D5D] ">
                        <MdOutlineArrowOutward />
                      </p>
                    </div>
                    <div className="flex items-center font-medium gap-2 mt-4">
                      <p className="text-[#5D5D5D] text-xl">
                        <HiOutlineTruck />
                      </p>
                      <p className="text-[#5D5D5D] font-medium">
                        Delivery Info
                      </p>
                      <p className="translate-y-[3px] text-[#5D5D5D] ">
                        <MdOutlineArrowOutward />
                      </p>
                    </div>
                    <div className="flex items-center font-medium gap-2 mt-4">
                      <p className="text-[#5D5D5D] text-xl">
                        <ImBoxRemove />
                      </p>
                      <p className="text-[#5D5D5D] font-medium">Returns</p>
                      <p className="translate-y-[3px] text-[#5D5D5D]">
                        <MdOutlineArrowOutward />
                      </p>
                    </div>
                  </div>
                  <div className="font-medium">
                    <p className=" text-[#00116C] text-left">Order Summary</p>
                    <div className="flex flex-col">
                      <div className="flex justify-between mt-4">
                        <p className="text-[#969696]">Product Price</p>
                        <p className="mr-10 text-[#5D5D5D]">$ 200.00</p>
                      </div>
                      <div className="flex justify-between mt-1">
                        <p className="text-[#969696]">Delivery Price</p>
                        <p className="mr-10 text-[#5D5D5D]">$ 200.00</p>
                      </div>
                      <div className="flex justify-between mt-1">
                        <p className="text-[#969696]">Tax Fee</p>
                        <p className="mr-10 text-[#5D5D5D]">$ 200.00</p>
                      </div>
                      <div className="flex justify-between mt-4 font-bold text-[#5D5D5D] border-t-2 pt-4 border-slate-400">
                        <p>Total Price</p>
                        <p className="mr-10">$ 600.00</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
