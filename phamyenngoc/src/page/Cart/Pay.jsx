import React from "react";
import { GiCancel } from "react-icons/gi";
import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { Link } from "react-router-dom";

const Pay = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);

  return (
    <div className="max-w-[1200px] mx-auto">
      <div class="w-full mt-[10px] mb-[20px] bg-[#FFFEFE] shadow-md rounded-lg">
        <div className="w-full">
          <div className="w-full flex ml-[20px] ">
            <img
              className="w-[111px] h-[29px]"
              src={require("../../assets/image/avatar/zalo1.png")}
              alt=""
            />
            <p className="font-sans font-extrabold text-black text-[20px] mt-[-2px]">
              GATEWAY
            </p>
          </div>
          <div className="w-full h-[30px] bg-amber-200 mt-[10px] justify-center items-center">
            <p className="font-sans font-normal text-[15px] text-black text-center pt-[5px]">
              Please do not close your browser until your order is confirmed!
            </p>
          </div>
        </div>
        <div className="w-[96%] mx-auto mt-[20px] flex justify-between items-center">
          <div className="w-[700px] h-[720px] bg-[#FEFFFF] shadow-xl">
            <div className="w-full flex justify-center items-center mt-[10px]">
              <p className="font-sans font-bold text-black text-[20px] pr-[10px]">
                Pay with
              </p>
              <img
                className="w-[100px] h-[26px]"
                src={require("../../assets/image/avatar/zalo1.png")}
                alt=""
              />
              <p className="font-sans font-bold text-black text-[20px] ">
                with QR code
              </p>
            </div>

            <div
              style={{
                position: "relative",
                width: "300px",
                height: "300px",
                zIndex: "1",
                marginLeft: "200px",
                marginTop: "15px",
              }}
            >
              <img
                src={require("../../assets/image/avatar/zalopay1.jpeg")}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "3px",
                  zIndex: "2",
                }}
              >
                <img
                  className="skeleton w-[250px] h-[250px] ml-[25px] mt-[17px]"
                  src={require("../../assets/image/avatar/zalopay.jpeg")}
                  alt=""
                />
              </div>
            </div>

            <img
              className=" w-[700px] h-[333px] mt-[15px]"
              src={require("../../assets/image/avatar/hdsd.png")}
              alt=""
            />
          </div>

          <div className="w-[420px] h-[720px] mx-auto">
            <div className="w-[420px] mx-auto">
              <p className="font-sans text-[20px] font-bold text-black text-left mb-[15px] ml-[5px]">
                Order Information
              </p>
              <div className="w-full h-[270px] bg-[#FEFFFF] shadow-xl ">
                <div className="w-full flex ml-[20px]">
                  <img
                    className="w-[111px] h-[29px]"
                    src={require("../../assets/image/avatar/zalo1.png")}
                    alt=""
                  />
                  <p className="font-sans font-bold text-black text-[20px] ">
                    BURGER N' BEER
                  </p>
                </div>
                <div className="w-[90%] flex justify-between items-center border-b-2 mt-[30px] ml-[21px] pb-[20px]">
                  <p className="font-sans text-[20px] font-semibold text-black">
                    Amount Of Payment
                  </p>
                  <p className="font-sans text-[20px] font-bold text-green-400">
                    250.000 VND
                  </p>
                </div>
                <div className="w-[90%] ml-[21px] ">
                  <p className="font-sans text-[20px] font-semibold text-black mt-[20px]">
                    {" "}
                    Transaction Code
                  </p>
                  <p className="font-sans text-[15px] font-medium text-gray-600">
                    {" "}
                    2405094509D706004I-7DP
                  </p>
                  <p className="font-sans text-[20px] font-semibold text-black mt-[20px]">
                    Content{" "}
                  </p>
                  <p className="font-sans text-[15px] font-medium text-gray-600">
                    {" "}
                    Burger N' Beer - Order payment 3409D706004I
                  </p>
                </div>
              </div>

              <div className="w-full h-[100px] bg-amber-200 shadow-xl mt-[20px]">
                <p className="font-sans text-[20px] font-semibold text-black pt-[10px] text-center">
                  {" "}
                  Transaction will expire later
                </p>
                <div className="w-full flex justify-center items-center mt-[10px]">
                  <div className="w-[40px] h-[40px] bg-white">
                    <p className="font-sans text-[20px] font-bold text-black text-center mt-[5px]">
                      {" "}
                      14
                    </p>
                  </div>
                  <p className="font-sans text-[20px] font-bold text-black text-center ml-[5px]">
                    {" "}
                    :{" "}
                  </p>
                  <div className="w-[40px] h-[40px] bg-white ml-[5px]">
                    <p className="font-sans text-[20px] font-bold text-black text-center mt-[5px]">
                      {" "}
                      59
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="mt-[20px] flex"
                onClick={() => setOpenModal(true)}
              >
                <GiCancel className="text-red-600 mr-[3px]" />
                <p className="font-sans font-semibold text-[15px] text-red-600 mt-[-3px]">
                  Cancel the transaction{" "}
                </p>
              </div>
              <Modal
                show={openModal}
                size="md"
                onClose={() => setOpenModal(false)}
                popup
              >
                <Modal.Header />
                <Modal.Body>
                  <div className="text-center">
                    <HiOutlineExclamationCircle className="mx-auto mb-4 h-12 w-12 text-gray-900 dark:text-gray-200" />
                    <h3 className="mb-2 font-sans text-[20px] font-semibold text-gray-900 dark:text-gray-400">
                      Do you want to cancel the transaction?
                    </h3>
                    <h3 className="mb-6 font-sans text-[17px] font-normal text-gray-500 dark:text-gray-400">
                      Unprocessed payment
                    </h3>
                    <div className="flex justify-center gap-4">
                      <Button
                        className="rounded-none  h-[40px]"
                        color="failure"
                        onClick={() => {
                          setOpenModal(false);
                          setOpenModal2(true);
                        }}
                      >
                        <p className="mb-2 font-sans text-[15px] font-medium text-white">
                          Yes, sure
                        </p>
                      </Button>
                      <Button
                        className="rounded-none h-[40px] border-gray-700"
                        color="gray"
                        onClick={() => setOpenModal(false)}
                      >
                        <p className="mb-2 font-sans text-[15px] font-medium text-gray-900">
                          No, cancel
                        </p>
                      </Button>
                    </div>
                  </div>
                </Modal.Body>
              </Modal>

              <Modal
                show={openModal2}
                size="lg"
                onClose={() => setOpenModal2(false)}
                popup
              >
                <Modal.Header />
                <Modal.Body>
                  <div className="text-center">
                    <img
                      className="w-[120px] h-[120px] ml-[150px]"
                      src={require("../../assets/image/avatar/zalo2.jpg")}
                      alt=""
                    />
                    <h3 className="mb-2 font-sans text-[20px] mt-[10px] font-semibold text-red-600 dark:text-gray-400">
                      PAYMENT FAILED
                    </h3>
                    <h3 className="mb-7 font-sans text-[17px] font-normal text-gray-500 dark:text-gray-400">
                      Transaction has been cancelled by user
                    </h3>
                    <Button
                      className=" w-[87%] rounded-none ml-[30px] h-[40px]"
                      color="failure"
                      onClick={() => {
                        setOpenModal2(false);
                      }}
                    >
                      <p className="mb-2 font-sans text-[17px] font-medium text-white">
                        Pay back
                      </p>
                    </Button>
                    <p className="mb-2 font-sans text-[17px] mt-[20px] font-normal text-gray-500">
                      System will return to{" "}
                      <Link to="/home">
                        <span className="font-semibold text-gray-900 underline">
                          Burger N' Beer
                        </span>
                      </Link>{" "}
                      in <span className="text-green-500">29</span> seconds
                    </p>
                    <Link to="/home">
                      <p className=" underline font-sans text-[17px] mt-[10px] font-semibold text-blue-500">
                        Back Now
                      </p>
                    </Link>{" "}
                  </div>
                </Modal.Body>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pay;
