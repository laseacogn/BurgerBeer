import React, { useState } from "react";
import { FaCheckCircle, FaCcVisa } from "react-icons/fa";
import { GrInfo } from "react-icons/gr";
import { MdOutlineArrowOutward } from "react-icons/md";
import { HiOutlineTruck } from "react-icons/hi2";
import { ImBoxRemove } from "react-icons/im";
import { Button, Popover, Modal } from "flowbite-react";
import { GiAlarmClock } from "react-icons/gi";
import { BiSolidDiscount } from "react-icons/bi";
import AddReview from "./AddReview";
import { MdCheckCircle } from "react-icons/md";

const OrderDetail = () => {
  const [openModal, setOpenModal] = useState(true);

  const [openModal2, setOpenModal2] = useState(true);

  const [deliveryStatus, setDeliveryStatus] = useState(
    "Order Has Been Completed"
  );
  const [rangeValue, setRangeValue] = useState(100);

  const handleRangeChange = (event) => {
    const value = parseInt(event.target.value);
    setRangeValue(value);
    switch (value) {
      case 0:
        setDeliveryStatus("Order Placed");
        break;
      case 25:
        setDeliveryStatus("Order Paid");
        break;
      case 50:
        setDeliveryStatus("Assigned To DVVC");
        break;
      case 75:
        setDeliveryStatus("Goods Received");
        break;
      case 100:
        setDeliveryStatus("Order Has Been Completed");
        break;
      default:
        setDeliveryStatus("Order Has Been Completed");
        break;
    }
  };

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
                    Order date: Apr 20, 2024 |
                  </p>
                  <p className="text-green-500 ml-3">
                    <FaCheckCircle />
                  </p>
                  <p className="ml-3 text-green-600">{deliveryStatus}</p>
                </div>

                <input
                  type="range"
                  min={0}
                  max={100}
                  value={rangeValue}
                  className="range range-success"
                  step={25}
                  onChange={handleRangeChange}
                />
                <div className="w-full flex justify-between text-xs px-2 font-sans font-semibold">
                  <span onClick={() => setRangeValue(0)}>Order Placed</span>
                  <span onClick={() => setRangeValue(25)}>Order Paid</span>
                  <span onClick={() => setRangeValue(50)}>
                    Assigned To DVVC
                  </span>
                  <span onClick={() => setRangeValue(75)}>Goods Received</span>
                  <span onClick={() => setRangeValue(100)}>Evaluate</span>
                </div>

                <div className="w-full flex grid grid-cols-2 mt-[20px] border-t ">
                  <div className="w-[400px] font-sans text-[10px] font-normal mt-[10px]">
                    <p className="flex">
                      For any issues with the goods received, submit a
                      Return/Refund request by {"  "}
                      <Popover
                        aria-labelledby="30-04-2024"
                        content={
                          <div className="w-64 text-sm text-gray-500 dark:text-gray-400">
                            <div className="px-3 py-2 font-sans text-[10px] font-normal">
                              <p>
                                You will not able to review orders after Apr 30,
                                2024.
                              </p>
                            </div>
                          </div>
                        }
                      >
                        <p className="ml-[2px] underline">30-04-2024.</p>
                      </Popover>
                    </p>
                    <p className="mt-[5px] flex">
                      <GiAlarmClock className="w-[20px] h-[20px] mr-[5px]" />
                      <p className="mr-[5px]">
                        Fast delivery on time: receive a Voucher worth $10.00 if
                        the order is delivered to you after 11:59 p.m on April
                        20, 2024.
                        <Popover
                          aria-labelledby="see more"
                          content={
                            <div className="w-64 text-sm text-gray-500 dark:text-gray-400">
                              <div className="h-[30px] border-b border-gray-200 bg-gray-100 px-3 py-2 dark:border-gray-600 dark:bg-gray-700">
                                <h3
                                  id="default-popover"
                                  className="font-semibold text-[10px] text-gray-900 dark:text-white "
                                >
                                  Fast delivery on time
                                </h3>
                              </div>
                              <div className="px-3 py-2 font-sans text-[10px] font-normal">
                                <p>
                                  We guarantees delivery date to bring the best
                                  shopping experience to our customers.
                                  <br />
                                  <p className="flex">
                                    <BiSolidDiscount className="w-[15px] h-[15px] text-gray-700" />
                                    Receive a Voucher worth $10.00 if your order
                                    is deliveried to you after 11:59 p.m on
                                    April 20, 2024.
                                  </p>
                                </p>
                              </div>
                            </div>
                          }
                        >
                          <p className="ml-[150px] underline mt-[-15px] text-blue-600">
                            See more...
                          </p>
                        </Popover>
                      </p>
                    </p>
                  </div>
                  <div className="ml-[130px] mt-[10px]">
                    <Button
                      className="w-[150px] h-[35px] font-sans text-[25px] font-semibold rounded-none justify-center items-center"
                      color={"dark"}
                      onClick={() => setOpenModal(true)}
                    >
                      Evaluate
                    </Button>
                    <Modal show={openModal} onClose={() => setOpenModal(false)}>
                      <Modal.Header>Terms of Service</Modal.Header>
                      <Modal.Body className="no-scrollbar">
                        <AddReview />
                      </Modal.Body>
                      <Modal.Footer>
                        <Button
                          onClick={() => {
                            setOpenModal2(true);
                          }}
                          color="dark"
                        >
                          Complete
                        </Button>
                        <Modal
                          show={openModal2}
                          size="md"
                          onClose={() => setOpenModal2(false)}
                          popup
                        >
                          <Modal.Header />
                          <Modal.Body>
                            <div className="text-center">
                              <MdCheckCircle className="mx-auto mb-[5px] h-14 w-14 text-green-500 dark:text-gray-200" />
                              <h3 className="mb-5 font-sans text-[17px] font-bold text-green-500">
                                Thank you for rating!
                              </h3>
                            </div>
                          </Modal.Body>
                        </Modal>
                        <Button
                          color="gray"
                          onClick={() => setOpenModal(false)}
                        >
                          Return
                        </Button>
                      </Modal.Footer>
                    </Modal>
                    <Button
                      className="w-[150px] h-[35px] font-sans text-[25px] font-semibold rounded-none mt-[10px] justify-center items-center"
                      color={"light"}
                    >
                      Repurchase
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-4 border-b-2 py-4 border-t mt-[10px]">
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
                    <p className=" text-[#5D5D5D]">Japanese Chicken Burger</p>
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
