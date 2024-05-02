import React, { useState, useEffect, useContext } from "react";
import { Button } from "flowbite-react";
import { Link, useParams } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { MdCategory } from "react-icons/md";
import { IoReorderFour } from "react-icons/io5";
import { HiTemplate } from "react-icons/hi";
import { BiSolidDiscount } from "react-icons/bi";
import ordData from "../../data/ordManage.json";
import {
  Accordion,
  AccordionContent,
  AccordionPanel,
  AccordionTitle,
} from "flowbite-react";

export function OrdManageDetail() {
  const [order, setOrder] = useState([]);
  const [ord, setOrd] = useState(null);

  useEffect(() => {
    setOrder(ordData);
  }, []);

  const params = useParams();
  const ordId = params.ordID;

  useEffect(() => {
    const selectedOrder = order.find((ord) => ord.ID === ordId);
    setOrd(selectedOrder);
  }, [ordId, order]);

  return (
    <div className="max-w-[1200px] mx-auto bg-[#FFDADA] mt-[-10px]">
      <div className="w-full h-[850px] flex mb-[20px]">
        <div className="w-[200px] h-full bg-[#FFFFFF] drop-shadow-lg justify-center items-center">
          <img
            className="w-[100px] h-[100px] ml-[55px] mt-[15px]"
            src={require(`../../page/Home/lgburger.jpg`)}
            alt=""
          />
          <p className="font-sans font-black text-[20px] text-gray-900 text-center">
            BURGER N' BEER
          </p>
          <Link to="/corporate_account">
            <Button className="w-full h-[70px] flex rounded-none bg-[#FFFFFF] mt-[30px] drop-shadow">
              <AiFillHome className="w-[25px] h-[25px] text-gray-900 mr-[7px] mt-[10px]" />
              <p className="font-sans font-extrabold text-[17px] text-gray-900 mt-[13px]">
                DASHBOARD
              </p>
            </Button>
          </Link>
          <Link to="/user_manage">
            <Button className="w-full h-[70px] flex rounded-none bg-[#FFFFFF] mt-[20px] drop-shadow">
              <FaUserAlt className="w-[20px] h-[20px] text-gray-900 mr-[7px] mt-[10px]" />
              <p className="font-sans font-extrabold text-[17px] text-gray-900 mt-[13px]">
                USER MANAGE
              </p>
            </Button>
          </Link>
          <Link to="/category_manage">
            <Button className="w-full h-[70px] flex rounded-none bg-[#FFFFFF] mt-[20px] drop-shadow">
              <MdCategory className="w-[25px] h-[25px] text-gray-900 mr-[7px] mt-[10px]" />
              <p className="font-sans font-extrabold text-[17px] text-gray-900 mt-[13px]">
                CATEGORY
              </p>
            </Button>
          </Link>
          <Link to="/item_list">
            <Button className="w-full h-[70px] flex rounded-none bg-[#FFFFFF] mt-[20px] drop-shadow">
              <HiTemplate className="w-[25px] h-[25px] text-gray-900 mr-[7px] mt-[10px]" />
              <p className="font-sans font-extrabold text-[17px] text-gray-900 mt-[13px]">
                PRODUCT
              </p>
            </Button>
          </Link>
          <Link to="/voucher_manage">
            <Button className="w-full h-[70px] flex rounded-none bg-[#FFFFFF] mt-[20px] drop-shadow">
              <BiSolidDiscount className="w-[25px] h-[25px] text-gray-900 mr-[7px] mt-[10px]" />
              <p className="font-sans font-extrabold text-[17px] text-gray-900 mt-[13px]">
                VOUCHER
              </p>
            </Button>
          </Link>
          <Link to="/order_manage">
            <Button className="w-full h-[70px] flex rounded-none bg-[#FFC0C0] mt-[20px] drop-shadow">
              <IoReorderFour className="w-[25px] h-[25px] text-gray-900 mr-[7px] mt-[10px]" />
              <p className="font-sans font-extrabold text-[17px] text-gray-900 mt-[13px]">
                ORDER
              </p>
            </Button>
          </Link>
        </div>
        <div className="w-[1000px] justify-center items-center">
          <div className="w-full flex justify-center items-center mb-[15px]">
            {ord && (
              <p className="font-sans font-extrabold text-[25px] text-gray-900 mt-[15px] text-center">
                {ord.ID} - REVENUE {ord.total}
              </p>
            )}
          </div>
          {ord && (
            <div className="w-[950px] h-[760px] overflow-auto mx-auto bg-[#FFFFFF] drop-shadow-lg ml-[25px] no-scrollbar">
              <div className="w-full bg-[#FFFFFF] drop-shadow-lg">
                <div className="w-full h-[50px] pt-[7px] border-b-2 font-sans font-extrabold text-[20px] text-gray-900 text-center">
                  TRANSACTION INFORMATION
                </div>
                <div className="w-[90%] border-b ml-[47.5px] mt-[15px]">
                  <div className="flex justify-between items-center font-sans text-[20px] text-gray-900 font-semibold">
                    <p>Reference Code</p> <p>{ord.ID}</p>
                  </div>
                  <div className="flex justify-between items-center font-sans text-[20px] text-gray-900 mt-[10px] font-semibold">
                    <p>User ID</p> <p>{ord.userID}</p>
                  </div>
                  <div className="flex justify-between items-center font-sans text-[20px] text-gray-900 mt-[10px] mb-[15px] font-semibold">
                    <p>Order Status</p> <p>{ord.status}</p>
                  </div>
                </div>
                <div className="w-[90%] border-b ml-[47.5px] mt-[15px]">
                  <div className="flex justify-between items-center font-sans text-[20px] text-gray-900 mt-[10px] font-semibold">
                    <p>Customer Name</p> <p>{ord.custName}</p>
                  </div>
                  <div className="flex justify-between items-center font-sans text-[20px] text-gray-900 mt-[10px] font-semibold">
                    <p>Customer Phone</p> <p>{ord.custPhone}</p>
                  </div>
                  <div className="flex justify-between items-center font-sans text-[20px] text-gray-900 mt-[10px] mb-[15px] font-semibold">
                    <p>Customer Address</p> <p>{ord.custADD}</p>
                  </div>
                </div>
                <div className="w-[90%] border-b ml-[47.5px] mt-[15px]">
                  <div className="flex justify-between items-center font-sans text-[20px] text-gray-900 mt-[10px] font-semibold">
                    <p>Shipping Method</p> <p>{ord.Delivery}</p>
                  </div>
                  <div className="flex justify-between items-center font-sans text-[20px] text-gray-900 mt-[10px] mb-[15px] font-semibold">
                    <p>Payment Method</p> <p>{ord.payment}</p>
                  </div>
                </div>
                <div className="w-[90%] ml-[47.5px] mt-[15px]">
                  <div className="flex justify-between items-center font-sans text-[20px] text-gray-900 mt-[10px] font-semibold">
                    <p>Create On</p> <p>{ord.creatAt}</p>
                  </div>
                  <div className="flex justify-between items-center font-sans text-[20px] text-gray-900 mt-[10px] pb-[15px] font-semibold">
                    <p>Paid Time</p> <p>{ord.paidTime}</p>
                  </div>
                </div>
              </div>
              <div className="w-full bg-[#FFFFFF] drop-shadow-lg mt-[15px]">
                <div className="w-full h-[50px] pt-[7px] border-b-2 font-sans font-extrabold text-[20px] text-gray-900 text-center">
                  PAYMENT INFORMATION
                </div>
                <div className="w-full justify-center items-center border-none">
                  <Accordion collapseAll>
                    <AccordionPanel className="border-none">
                      <AccordionTitle >
                        <p  className="font-sans text-[20px] text-gray-900 font-bold ml-[25px]"> PRODUCTS <span className="ml-[620px]">295.000 VND</span></p></AccordionTitle>
                      <AccordionContent>
                       <p className="font-sans text-[20px] text-gray-900 font-semibold ml-[25px] ">
                        [C] COMBO B&B 2 - (x1) <span className="ml-[520px]">130.000 VND</span></p>
                        <p className="font-sans text-[20px] text-gray-900 font-semibold ml-[25px] ">
                       + Huda Beer - (x1) <br/> + Cheese Burger - (x1) <br/> + French Fries With Cheese Powder - (x1)
                       </p>
                       <p className="font-sans text-[20px] text-gray-900 font-semibold ml-[25px] mt-[15px]">
                        MEATY BACON CHEESE HOTDOG - (x1) <span className="ml-[385px]">100.000 VND</span></p>
                        <p className="font-sans text-[17px] italic text-gray-700 font-medium ml-[25px] ">
                       Note: no bacon, no vegetable, no spicy
                       </p>
                       <p className="font-sans text-[20px] text-gray-900 font-semibold ml-[25px] mt-[15px]">
                        COLESLAW SALAD - (x1) <span className="ml-[525px]">40.000 VND</span></p>
                        <p className="font-sans text-[20px] text-gray-900 font-semibold ml-[25px] mt-[15px]">
                        SAIGON RED BEER - (x1) <span className="ml-[525px]">25.000 VND</span></p>
                      </AccordionContent>
                    </AccordionPanel>
                    <AccordionPanel>
                      <AccordionTitle>
                         <p  className="font-sans text-[20px] text-gray-900 font-bold ml-[25px]"> TAX & FEE <span className="ml-[640px]">30.000 VND</span></p>
                      </AccordionTitle>
                      <AccordionContent>
                         <p className="font-sans text-[20px] text-gray-900 font-semibold ml-[25px] ">
                        Shipping Fee <span className="ml-[623px]">30.000 VND</span></p>
                      </AccordionContent>
                    </AccordionPanel>
                    <AccordionPanel>
                      <AccordionTitle>
                        <p  className="font-sans text-[20px] text-gray-900 font-bold ml-[25px]"> DISCOUNT VALUE <span className="ml-[550px]">-103.750 VND</span></p>
                      </AccordionTitle>
                      <AccordionContent>
                        <p className="font-sans text-[20px] text-gray-900 font-semibold ml-[25px] ">
                        Discount Code SALEOFF25 (25%) <span className="ml-[437px]">-73.750 VND</span></p>
                        <p className="font-sans text-[20px] text-gray-900 font-semibold ml-[25px] mt-[15px]">
                        Free Ship<span className="ml-[657px]">-30.000 VND</span></p>
                      </AccordionContent>
                    </AccordionPanel>
                    <AccordionPanel>
                      <AccordionTitle>
                        <p  className="font-sans text-[20px] text-gray-900 font-bold ml-[25px]"> PAYMENT <span className="ml-[630px]">191.250 VND</span></p>
                      </AccordionTitle>
                      <AccordionContent>
                        <p className="font-sans text-[20px] text-gray-900 font-semibold ml-[25px] ">
                        {ord.payment} <span className="ml-[590px]">218.250 VND</span></p>
                      </AccordionContent>
                    </AccordionPanel>
                  </Accordion>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
