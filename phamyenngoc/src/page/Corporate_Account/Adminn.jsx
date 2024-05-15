import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";
import { AiFillHome } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { MdCategory } from "react-icons/md";
import { IoReorderFour, IoSettingsSharp } from "react-icons/io5";
import { HiTemplate } from "react-icons/hi";
import { BiSolidDiscount } from "react-icons/bi";
import { TbBrandBooking } from "react-icons/tb";

import { CChart } from "@coreui/react-chartjs";

const Adminn = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const getStyle = (variable) => {
    return getComputedStyle(document.documentElement).getPropertyValue(
      variable
    );
  };

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
            <Button className="w-full h-[70px] flex rounded-none bg-[#FFC0C0] mt-[20px] drop-shadow">
              <AiFillHome className="w-[25px] h-[25px] text-gray-900 mr-[7px] mt-[10px]" />
              <p className="font-sans font-extrabold text-[17px] text-gray-900 mt-[13px]">
                DASHBOARD
              </p>
            </Button>
          </Link>
          <Link to="/user_manage">
            <Button className="w-full h-[70px] flex rounded-none bg-[#FFFFFF] mt-[15px] drop-shadow">
              <FaUserAlt className="w-[20px] h-[20px] text-gray-900 mr-[7px] mt-[10px]" />
              <p className="font-sans font-extrabold text-[17px] text-gray-900 mt-[13px]">
                USER MANAGE
              </p>
            </Button>
          </Link>
          <Link to="/category_manage">
            <Button className="w-full h-[70px] flex rounded-none bg-[#FFFFFF] mt-[15px] drop-shadow">
              <MdCategory className="w-[25px] h-[25px] text-gray-900 mr-[7px] mt-[10px]" />
              <p className="font-sans font-extrabold text-[17px] text-gray-900 mt-[13px]">
                CATEGORY
              </p>
            </Button>
          </Link>
          <Link to="/item_list">
            <Button className="w-full h-[70px] flex rounded-none bg-[#FFFFFF] mt-[15px] drop-shadow">
              <HiTemplate className="w-[25px] h-[25px] text-gray-900 mr-[7px] mt-[10px]" />
              <p className="font-sans font-extrabold text-[17px] text-gray-900 mt-[13px]">
                PRODUCT
              </p>
            </Button>
          </Link>
          <Link to="/voucher_manage">
            <Button className="w-full h-[70px] flex rounded-none bg-[#FFFFFF] mt-[15px] drop-shadow">
              <BiSolidDiscount className="w-[25px] h-[25px] text-gray-900 mr-[7px] mt-[10px]" />
              <p className="font-sans font-extrabold text-[17px] text-gray-900 mt-[13px]">
                VOUCHER
              </p>
            </Button>
          </Link>
          <Link to="/order_manage">
            <Button className="w-full h-[70px] flex rounded-none bg-[#FFFFFF] mt-[15px] drop-shadow">
              <IoReorderFour className="w-[25px] h-[25px] text-gray-900 mr-[7px] mt-[10px]" />
              <p className="font-sans font-extrabold text-[17px] text-gray-900 mt-[13px]">
                ORDER
              </p>
            </Button>
          </Link>
          <Link to="/reserve_manage">
            <Button className="w-full h-[70px] flex rounded-none bg-[#FFFFFF] mt-[15px] drop-shadow">
              <TbBrandBooking className="w-[25px] h-[25px] text-gray-900 mr-[7px] mt-[10px]" />
              <p className="font-sans font-extrabold text-[17px] text-gray-900 mt-[13px]">
                RESERVATION
              </p>
            </Button>
          </Link>
          <Link to="/system_setting">
            <Button className="w-full h-[70px] flex rounded-none bg-[#FFFFFF] mt-[15px] drop-shadow">
              <IoSettingsSharp className="w-[25px] h-[25px] text-gray-900 mr-[7px] mt-[10px]" />
              <p className="font-sans font-extrabold text-[17px] text-gray-900 mt-[13px]">
                SETTING
              </p>
            </Button>
          </Link>
        </div>
        <div className="w-[1000px] no-scrollbar justify-center items-center">
          <p className="font-sans font-black text-[20px] text-gray-900 text-center mt-[10px]">
            DASHBOARD
          </p>
          <div className="w-[950px] h-[780px] bg-[#FFFFFF] drop-shadow-lg ml-[25px] mt-[10px] no-scrollbar">
            <div className="w-full stats shadow rounded-none">
              <div className="stat">
                <div className="stat-figure text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-8 h-8 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    ></path>
                  </svg>
                </div>
                <div className="font-sans font-extrabold text-[25px] text-gray-900">
                  TOTAL SALE
                </div>
                <div className="stat-value text-primary">50.2M</div>
                <div className="stat-desc">21% more than last month</div>
              </div>

              <div className="stat">
                <div className="stat-figure text-secondary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-8 h-8 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    ></path>
                  </svg>
                </div>
                <div className="font-sans font-extrabold text-[25px] text-gray-900">
                  GROSS PRODUCT
                </div>
                <div className="stat-value text-secondary">10.6K</div>
                <div className="stat-desc">21% more than last month</div>
              </div>

              <div className="stat">
                <div className="stat-figure text-secondary">
                  <img
                    className="w-[80px] h-[80px] rounded-full"
                    src={require(`../../assets/image/Burger/8.jpg`)}
                    alt=""
                  />
                </div>
                <div className="font-sans font-extrabold text-[30px] text-gray-900">
                  68%
                </div>
                <div className="stat-title text-gray-900">
                  Double Cheese Burger
                </div>
                <div className="stat-desc text-secondary">
                  More than 5.2K products sold
                </div>
              </div>
            </div>
            <div className="w-full flex justify-between items-center">
            <div className="w-[450px] stats shadow rounded-none ml-[15px]">
              <CChart
                type="line"
                data={{
                  labels: [
                    "BBQ Pulled Pork",
                    "Cheese Burger",
                    "Double Cheese Burger",
                    "Bacon & Egg Burger",
                    "Classic Burger",
                    "Fries Fish Burger",
                    "Chicken Burger",
                    "Black Bean Burger"
                  ],
                  datasets: [
                    {
                      label: "April",
                      backgroundColor: "rgba(220, 220, 220, 0.2)",
                      borderColor: "rgba(220, 220, 220, 1)",
                      pointBackgroundColor: "rgba(220, 220, 220, 1)",
                      pointBorderColor: "#fff",
                      data: [3.2, 1.5, 4.0 , 2.8, 2.3, 6.7, 1.8, 3.2, 1.1, 4.6],
                    },
                    {
                      label: "May",
                      backgroundColor: "rgba(151, 187, 205, 0.2)",
                      borderColor: "rgba(151, 187, 205, 1)",
                      pointBackgroundColor: "rgba(151, 187, 205, 1)",
                      pointBorderColor: "#fff",
                      data: [4.0, 0.5, 5.2, 2.6, 4.6, 1.8, 5.1, 3.3, 2.1, 4.2 ],
                    },
                  ],
                }}
                options={{
                  plugins: {
                    legend: {
                      labels: {
                        color: getStyle("--cui-body-color"),
                      },
                    },
                  },
                  scales: {
                    x: {
                      grid: {
                        color: getStyle("--cui-border-color-translucent"),
                      },
                      ticks: {
                        color: getStyle("--cui-body-color"),
                      },
                    },
                    y: {
                      grid: {
                        color: getStyle("--cui-border-color-translucent"),
                      },
                      ticks: {
                        color: getStyle("--cui-body-color"),
                      },
                    },
                  },
                }}
              />
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adminn;
