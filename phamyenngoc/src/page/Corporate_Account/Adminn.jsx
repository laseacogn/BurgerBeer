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
import { Line, Bar, PolarArea } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  RadialLinearScale,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  RadialLinearScale,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

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
            <div className="w-full mx-auto flex justify-between items-center">
              <div className="w-[500px] ml-[50px]">
                <Bar
                  height="250"
                  width="500"
                  data={{
                    labels: ["January", "February", "March", "April", "May"],
                    datasets: [
                      {
                        label: "Total Sale (millions)",
                        backgroundColor: [
                          "#3e95cd",
                          "#8e5ea2",
                          "#3cba9f",
                          "#e8c3b9",
                          "#c45850",
                        ],
                        data: [38.4, 70.2, 30.7, 45.5, 50.2],
                      },
                    ],
                  }}
                  options={{
                    plugins: {
                      legend: { display: false },
                      title: {
                        display: true,
                        text: "Total sale (millions) in 2024",
                        font: {
                          size: 16,
                        },
                      },
                    },
                    scales: {
                      xAxes: [{ beginAtZero: true }],
                      yAxes: [{ beginAtZero: true }],
                    },
                  }}
                />
              </div>
              <div className="w-[330px] mr-[20px]">
                <PolarArea
                  data={{
                    labels: [
                      "Combo",
                      "SideDish",
                      "Burger",
                      "Sandwich",
                      "Pizza",
                      "HotDog",
                      "Baguette",
                      "Drink",
                    ],
                    datasets: [
                      {
                        label: " Product Quantity",
                        data: [3120, 2600, 3730, 2810, 3142, 1582, 1329, 4476],
                        backgroundColor: [
                          "#087CE7",
                          "#E70808",
                          "#0ABC1C",
                          "#830ABC",
                          "#F24E1E",
                          "#0DB6AC",
                          "#89DC37",
                          "#FFF500",
                        ],
                      },
                    ],
                  }}
                  options={{
                    plugins: {
                      legend: { display: false },
                      title: {
                        display: true,
                        text: "Gross Product in May, 2024",
                        font: {
                          size: 16,
                        },
                      },
                    },
                    scales: {
                      xAxes: [{ beginAtZero: true }],
                      yAxes: [{ beginAtZero: true }],
                    },
                  }}
                />
              </div>
            </div>
            <div className="w-[800px] h-[40%] mx-auto ml-[170px] mt-[-0px]">
              <Line
                data={{
                  labels: [
                    "Cheese Burger",
                    "BBQ Pulled Pork Burger",
                    "Double Cheese Burger",
                    "Bacon & Egg Burger",
                    "Classic Burger",
                    "Fries Fish Burger",
                    "Japanese Chicken Burger",
                    "Black Bean Burger",
                  ],
                  datasets: [
                    {
                      data: [
                        1086, 3114, 4106, 2106, 1107, 3111, 1133, 1221, 2783,
                        2478,
                      ],
                      label: "April",
                      backgroundColor: "#E70858",
                      borderColor: "#E70858",
                      fill: false,
                      tension: 0.4,
                    },
                    {
                      data: [
                        1282, 2350, 5211, 3502, 1635, 4809, 2947, 1402, 3700,
                        5267,
                      ],
                      label: "May",
                      backgroundColor: "#087CE7",
                      borderColor: "#087CE7",
                      fill: false,
                      tension: 0.4,
                    },
                  ],
                }}
                options={{
                  plugins: {
                    title: {
                      display: true,
                      text: "Burger Sales Comparison (April vs May)",
                      font: {
                        size: 16,
                      },
                    },
                    legend: {
                      display: true,
                      position: "right",
                      align: "center",
                    },
                  },
                  scales: {
                    x: {
                      beginAtZero: true,
                    },
                    y: {
                      beginAtZero: true,
                    },
                  },
                }}
                width={200}
                height={100}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adminn;
