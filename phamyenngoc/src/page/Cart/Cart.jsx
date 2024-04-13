import React, { useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Button, Timeline } from "flowbite-react";
import { Link } from "react-router-dom";
import { FaClock, FaPenSquare } from "react-icons/fa";
import { BiSolidDiscount } from "react-icons/bi";
import ItemCart from "./ItemCart";
import MoneyCart from "./MoneyCart";
import cart from "../../data/cart.json";

const Cart = () => {
     const money = [1];
  return (
    <div className="max-w-[1200px] mx-auto grid grid-cols-2">
      <div>
        <div className="w-[600px] flex">
          <div className="flex">
            <div
              className="h-7 w-7 rounded-full bg-slate-100 flex items-center justify-center"
              style={{ fontSize: "80px" }}
            >
              <IoIosArrowRoundBack />
            </div>
            <p
              style={{
                width: "353px",
                height: "50px",
                marginTop: "-10px",
                marginLeft: "20px",
                marginBottom: "10px",
                fontFamily: '"Inter", sans-serif',
                fontStyle: "normal",
                fontWeight: "700",
                fontSize: "30px",
                lineHeight: "48px",
                display: "flex",
                alignItems: "center",
                textAlign: "center",
                color: "#000000",
              }}
            >
              Cart Information{" "}
            </p>
          </div>
        </div>
        <div className="flex">
          <Button className="w-[300px]" color="dark">
            Delivery
          </Button>
          <Button className="w-[300px]" color="light">
            Self Pick-up
          </Button>
        </div>
        <div
          style={{
            width: "600px",
            marginTop: "20px",
            background: "#FFFFFF",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            borderRadius: "15px",
          }}
        >
          <Timeline className="pt-[20px] ml-[20px]">
            <Timeline.Item>
              <Timeline.Point className=" text-black" />
              <Timeline.Content>
                <Timeline.Title
                  style={{
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "18px",
                    lineHeight: "24px",
                    display: "flex",
                    alignItems: "center",
                    color: "#000000",
                  }}
                >
                  BURGER N' BEER
                </Timeline.Title>
                <Timeline.Body className=" text-sm font-medium text-slate-500 mt-[5px]">
                  31 AN THUONG 4, MY AN, NGU HANH SON, DA NANG
                </Timeline.Body>
              </Timeline.Content>
            </Timeline.Item>
            <Timeline.Item className="mt-[-20px]">
              <Timeline.Point />
              <Timeline.Content>
                <Timeline.Title className="flex">
                  <p
                    style={{
                      fontStyle: "normal",
                      fontWeight: "500",
                      fontSize: "18px",
                      lineHeight: "24px",
                      display: "flex",
                      alignItems: "center",
                      color: "#000000",
                    }}
                  >
                    {" "}
                    Customer Information{" "}
                  </p>
                  <Link to="/">
                    <p className="ml-[320px] text-sm font-normal text-slate-500">
                      {" "}
                      Edit
                    </p>
                  </Link>
                </Timeline.Title>
              </Timeline.Content>
            </Timeline.Item>
          </Timeline>
          <div className="mt-[-15px] ml-[13px]">
            <div className="flex">
              <div className="text-slate-500 w-5 h-5">
                {" "}
                <FaClock />{" "}
              </div>
              <p
                style={{
                  marginTop: "-5px",
                  marginLeft: "10px",
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: "18px",
                  lineHeight: "24px",
                  display: "flex",
                  alignItems: "center",
                  color: "#000000",
                }}
              >
                Time to receive
              </p>
              <Link to="/">
                <p className="ml-[378px] text-sm font-normal text-slate-500">
                  {" "}
                  Edit
                </p>
              </Link>
            </div>
            <p className=" text-sm font-medium text-slate-400 ml-[30px] pb-[20px]">
              {" "}
              As soon as possible
            </p>
          </div>
        </div>
        <div
          style={{
            width: "600px",
            background: "#FFFFFF",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            borderRadius: "15px",
          }}
        >
          <div className="mt-[20px] ml-[13px]">
            <div className="flex">
              <p
                style={{
                  marginTop: "15px",
                  marginLeft: "10px",
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: "18px",
                  lineHeight: "24px",
                  display: "flex",
                  alignItems: "center",
                  color: "#000000",
                }}
              >
                Payment Method
              </p>
              <Link to="/">
                <p className="ml-[378px] text-sm font-normal text-slate-500 mt-[15px]">
                  {" "}
                  Choose
                </p>
              </Link>
            </div>
            <p className=" text-sm font-medium text-slate-400 ml-[10px] pb-[20px] mt-[5px]">
              {" "}
              Choose payment method
            </p>
          </div>
        </div>
        <div
          style={{
            width: "600px",
            height: "40px",
            background: "#FFFFFF",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            borderRadius: "15px",
          }}
        >
          <div className="mt-[20px] ml-[13px]">
            <div className="flex">
              <div className="text-slate-500 w-5 h-5 mt-[15px]">
                {" "}
                <BiSolidDiscount />{" "}
              </div>
              <p
                style={{
                  marginTop: "10px",
                  marginLeft: "10px",
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: "18px",
                  lineHeight: "24px",
                  display: "flex",
                  alignItems: "center",
                  color: "#726B6B",
                }}
              >
                Discount Code
              </p>
              <Link to="/">
                <p className="ml-[378px] text-sm font-normal text-slate-500 items-center mt-[10px]">
                  {" "}
                  See
                </p>
              </Link>
            </div>
          </div>
        </div>
        <div
          style={{
            width: "600px",
            background: "#FFFFFF",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            borderRadius: "15px",
          }}
        >
          <div className="mt-[20px] ml-[13px]">
            <p
              style={{
                marginTop: "15px",
                marginLeft: "10px",
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "18px",
                lineHeight: "24px",
                display: "flex",
                alignItems: "center",
                color: "#000000",
              }}
            >
              Order Summary
            </p>
          </div>
          <div className="">
            {cart.map((product, index) => (
              <ItemCart key={index} product={product} />
            ))}
          </div>
        </div>

        <div
          style={{
            width: "600px",
            height: "40px",
            background: "#FFFFFF",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            borderRadius: "15px",
          }}
        >
          <div className="mt-[20px] ml-[13px]">
            <div className="flex">
              <div className="text-slate-500 w-5 h-5 mt-[15px]">
                {" "}
                <FaPenSquare />{" "}
              </div>
              <p
                style={{
                  marginTop: "10px",
                  marginLeft: "10px",
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: "18px",
                  lineHeight: "24px",
                  display: "flex",
                  alignItems: "center",
                  color: "#726B6B",
                }}
              >
                Order Notes: For example, Fast Delivery helps me...
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div
          style={{
            width:"550px",
            height: "1200px",
            marginLeft:"50px",
            background: "#EBE9E9",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            borderRadius: "15px",
          }}
        >
           {money.map((product, index) => (
              <MoneyCart key={index} product={product} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
