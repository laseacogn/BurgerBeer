import React, { useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import {
  Button,
  Timeline,
  Checkbox,
  Label,
  TextInput,
  Datepicker,
} from "flowbite-react";
import { Link } from "react-router-dom";
import { FaClock, FaPenSquare } from "react-icons/fa";
import { BiSolidDiscount } from "react-icons/bi";
import ItemCart from "./ItemCart";
import MoneyCart from "./MoneyCart";
import cart from "../../data/cart.json";

const Cart = () => {
  const money = [1];
  const [payment, setPayment] = useState("Choose payment method");
  const listPaymentMethod = [
    "Pay on delivery",
    "Pay on card",
    "Pay on Momo/ Zalo Pay/ VNPay",
  ];
  

  return (
    <div className="max-w-[1200px] mx-auto grid grid-cols-2">
      <div className="h-[700px] overflow-auto no-scrollbar">
        <div className="w-[600px] flex">
          <div className="flex">
            <div
              className="h-7 w-7 rounded-full bg-slate-100 flex items-center justify-center"
              style={{ fontSize: "80px" }}
            >
              <IoIosArrowRoundBack />
            </div>
            <p className="w-353 h-50 ml-[25px] mb-[20px] font-sans font-bold text-xl flex items-center justify-center text-center text-black">
              Cart Information
            </p>
          </div>
        </div>
        <div className="flex">
          <Link to="/cart">
            <Button className="w-[300px]" color="dark">
              Delivery
            </Button>
          </Link>
          <Link to="/cart2">
            <Button className="w-[300px]" color="light">
              Self Pick-up
            </Button>
          </Link>
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

                  <button
                    className=""
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                  >
                    <p className="ml-[320px] text-sm font-normal text-slate-500">
                      {" "}
                      Edit
                    </p>
                  </button>
                  <dialog id="my_modal_3" className="modal">
                    <div className="modal-box">
                      <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-[20px]">
                          ✕
                        </button>
                      </form>
                      <h3 className="font-bold text-lg mb-[15px]">
                        Delivery Information
                      </h3>
                      <form className="flex max-w-md flex-col gap-4">
                        <div className="flex flex-col-2 gap-8">
                          <div>
                            <div className="mb-2 block">
                              <Label htmlFor="name" value="Full Name" />
                            </div>
                            <TextInput
                              id="name"
                              type="name"
                              placeholder="Enter your full name..."
                              required
                              shadow
                            />
                          </div>
                          <div>
                            <div className="mb-2 block">
                              <Label htmlFor="phone" value="Phone Number" />
                            </div>
                            <TextInput
                              id="phone"
                              type="phone"
                              placeholder="Enter your phone number..."
                              required
                              shadow
                            />
                          </div>
                        </div>

                        <div>
                          <div className="mb-2 block">
                            <Label htmlFor="address" value="Delivery Address" />
                          </div>
                          <TextInput
                            id="address"
                            type="adress"
                            placeholder="Address, Building, Floor No..."
                            required
                            shadow
                          />
                          <TextInput
                            className="mt-[10px]"
                            id="address"
                            type="adress"
                            placeholder="Add detailed address..."
                            required
                            shadow
                          />
                        </div>

                        <Button type="submit" color="dark">
                          Confirm Order
                        </Button>
                      </form>
                    </div>
                  </dialog>
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
              <button
                className=""
                onClick={() =>
                  document.getElementById("my_modal_4").showModal()
                }
              >
                <p className="ml-[378px] text-sm font-normal text-slate-500">
                  {" "}
                  Edit
                </p>
              </button>
              <dialog id="my_modal_4" className="modal">
                <div className="modal-box">
                  <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-[20px]">
                      ✕
                    </button>
                  </form>
                  <h3 className="font-bold text-lg mb-[15px]">
                    Time To Receive
                  </h3>
                  <form className="flex max-w-md flex-col gap-4">
                    <Datepicker />
                    <div className="flex items-center gap-2">
                      <Checkbox id="time" />
                      <Label htmlFor="time">As soon as possible</Label>
                    </div>
                    <Button type="submit" color="dark">
                      Confirm Order
                    </Button>
                  </form>
                </div>
              </dialog>
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
              <button
                className=""
                onClick={() =>
                  document.getElementById("my_modal_5").showModal()
                }
              >
                <p className="ml-[370px] text-sm font-normal text-slate-500 mt-[15px]">
                  {" "}
                  Choose
                </p>
              </button>
              <dialog id="my_modal_5" className="modal">
                <div className="modal-box">
                  <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-[20px]">
                      ✕
                    </button>
                  </form>
                  <h3 className="font-bold text-lg mb-[15px]">
                    Payment Method
                  </h3>
                  <div className="flex max-w-md flex-col gap-4" >
                    {listPaymentMethod.map((item) => (
                      <div class="flex items-center mb-4">
                        <input
                          id="default-radio-1"
                          type="radio"
                          value={item}
                          checked={payment === item}
                          name="default-radio"
                          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          for="default-radio-1"
                          class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          {item}
                        </label>
                      </div>
                    ))}
                    <Button type="submit" color="dark">
                      Confirm Order
                    </Button>
                  </div>
                </div>
              </dialog>
            </div>
            <p className=" text-sm font-medium text-slate-400 ml-[10px] pb-[20px] mt-[5px]">
              {payment}
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

              <button
                className=""
                onClick={() =>
                  document.getElementById("my_modal_6").showModal()
                }
              >
                <p className="ml-[378px] text-sm font-normal text-slate-500 items-center mt-[10px]">
                  {" "}
                  See
                </p>
              </button>
              <dialog id="my_modal_6" className="modal">
                <div className="modal-box">
                  <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-[20px]">
                      ✕
                    </button>
                  </form>
                  <h3 className="font-bold text-lg mb-[15px]">Discount Code</h3>
                  <form className="flex max-w-md flex-col gap-4">
                    <TextInput
                      className=""
                      id="address"
                      type="adress"
                      placeholder="Submit your discount code..."
                      required
                      shadow
                    />
                    <Button type="submit" color="dark">
                      Confirm Order
                    </Button>
                  </form>
                </div>
              </dialog>
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
            width: "550px",
            height: "700px",
            marginLeft: "50px",
            background: "#FFFEFE",
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
