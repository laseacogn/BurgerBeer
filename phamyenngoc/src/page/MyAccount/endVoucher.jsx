import React, { useEffect, useState } from "react";
import voucherData from "../../data/endVoucher.json";
import {  Button, Modal } from "flowbite-react";
import { Link } from "react-router-dom";

const EndVoucher = () => {
    const [voucher, setVoucher] = useState([]);
  const [selectedVoucherIndex, setSelectedVoucherIndex] = useState(null);

  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    setVoucher(voucherData);
  }, []);

  const handleClick2 = (index) => {
    setSelectedVoucherIndex(index);
    setOpenModal(true);
  };
  return (
    <div className="w-full mx-auto">
    <div className="w-full ml-[20px] gap-4 justify-center items-center">
          {voucher.map((voucherItem, index) => (
            <div
              style={{
                position: "relative",
                width: "550px",
                height: "150px",
                zIndex: "1",
                marginTop: "0px",
              }}
              key={index}
              onClick={() => handleClick2(index)}
            >
              <img
                src={require(`../../assets/image/voucher/3.jpeg`)}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "-15px",
                  left: "-15px",
                  zIndex: "2",
                }}
              >
                 <img
                  className="w-[110px] h-[110px] rounded-full ml-[37px] mt-[25px]"
                  src={require(`../../assets/image/voucher/lg_bg.jpg.png`)}
                  alt=""
                />
                <p className="font-sans font-bold text-[20px] text-white ml-[75px] mt-[-20px]">
                  {" "}
                  {voucherItem.discount}%
                </p>
              </div>
              <div style={{ position: "absolute", zIndex: "3" }}>
                <p className="font-sans font-bold text-[17px] text-gray-600 ml-[165px] mt-[-140px]">
                  {" "}
                  {voucherItem.title}
                </p>
                <p className="font-sans font-semibold text-[13px] text-gray-600 ml-[165px] mt-[5px]">
                  {voucherItem.discount}% off Maximum discount{" "}
                  {voucherItem.maxDis}VND
                </p>
                <p className="font-sans font-semibold text-[13px] text-gray-600 ml-[165px] mt-[5px]">
                  Minimum Order {voucherItem.minOrd}VND
                </p>
                <div className="flex">
                  <p className="w-[100px] font-sans font-semibold text-[13px] text-gray-600 ml-[165px] mt-[15px]">
                    EXP: {voucherItem.endDate}
                  </p>

                  <Button
                    className="rounded-none ml-[170px] h-[30px] " color="dark"
                  >
                    <p className="font-sans font-semibold text-[13px] mt-[-6px]">
                      See more
                    </p>
                  </Button>
                </div>
              </div>
              <div style={{ position: "absolute", zIndex: "5" }}>
                <p className="font-sans font-semibold text-[12px] text-white ml-[10px] mt-[-140px]">
                    End of use
                </p>
                </div>
            </div>
          ))}
        </div>
        <Modal show={openModal} onClose={() => setOpenModal(false)}>
          <Modal.Header>
            {selectedVoucherIndex !== null && (
              <div
                style={{
                  position: "relative",
                  width: "550px",
                  height: "150px",
                  zIndex: "1",
                  marginLeft: "20px",
                  marginBottom: "-15px",
                }}
              >
                <img
                  src={require(`../../assets/image/voucher/1.jpg`)}
                  alt=""
                  style={{ width: "100%", height: "100%" }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "-15px",
                    left: "-15px",
                    zIndex: "2",
                  }}
                >
                  <img
                    className="w-[100px] h-[100px] rounded-full ml-[40px] mt-[17px]"
                    src={require(`../../assets/image/voucher/lg_bg.jpg.png`)}
                    alt=""
                  />
                  <p className="font-sans font-bold text-[19px] text-white ml-[33px] mt-[-15px]">
                    {" "}
                    Discount {voucher[selectedVoucherIndex].discount}%
                  </p>
                </div>
                <div style={{ position: "absolute", zIndex: "3" }}>
                  <p className="font-sans font-bold text-[19px] text-gray-600 ml-[160px] mt-[-140px]">
                    {" "}
                    {voucher[selectedVoucherIndex].title}
                  </p>
                  <p className="font-sans font-semibold text-[15px] text-gray-600 ml-[160px] mt-[3px]">
                    {voucher[selectedVoucherIndex].discount}% off Maximum
                    discount {voucher[selectedVoucherIndex].maxDis}VND
                  </p>
                  <p className="font-sans font-semibold text-[15px] text-gray-600 ml-[160px] mt-[3px]">
                    Minimum Order {voucher[selectedVoucherIndex].minOrd}VND
                  </p>
                  <div className="flex">
                    <p className="font-sans font-semibold text-[15px] text-gray-600 ml-[160px] mt-[8px]">
                      EXP: {voucher[selectedVoucherIndex].endDate}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </Modal.Header>
          <Modal.Body className="no-scrollbar">
            {selectedVoucherIndex !== null && (
              <div className="w-[550px] font-sans text-[17px] ml-[20px]">
                <p className="font-semibold text-black">Code expiration date</p>
                <p className="font-normal text-gray-700">
                  {voucher[selectedVoucherIndex].startDate} 00:00 -{" "}
                  {voucher[selectedVoucherIndex].endDate} 23:59
                </p>

                <p className="font-semibold text-black mt-[20px]">Endow</p>
                <p className="font-normal text-gray-700">
                  Limited usage. Hurry up or you won't miss it! Discount{" "}
                  {voucher[selectedVoucherIndex].maxDis}VND Minimum Order{" "}
                  {voucher[selectedVoucherIndex].minOrd}VND
                </p>

                <p className="font-semibold text-black mt-[20px]">
                  Applies to products
                </p>
                <p className="font-normal text-gray-700">
                  Applies to all products in our store.
                  <span className="ml-[5px] font-sans text-[17px] font-normal text-blue-500">
                    <Link to="/product">Buy now.</Link>
                  </span>
                </p>

                <p className="font-semibold text-black mt-[20px]">Pay</p>
                <p className="font-normal text-gray-700">
                  All forms of payment
                </p>

                <p className="font-semibold text-black mt-[20px]">
                  Shipping Method
                </p>
                <p className="font-normal text-gray-700">
                  All shipping methods
                </p>

                <p className="font-semibold text-black mt-[20px]">
                  See Details
                </p>
                <p className="font-normal text-gray-700">
                  Instant discount of {voucher[selectedVoucherIndex].maxDis}VND
                  for orders from {voucher[selectedVoucherIndex].minOrd}VND.
                  Applicable until {voucher[selectedVoucherIndex].endDate}. Each
                  account can only be used once. Discount codes are issued by
                  Burger N' Beer and will not be refunded for any reason.
                </p>
              </div>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button
              onClick={() => setOpenModal(false)}
              className="w-[550px] rounded-none ml-[20px] bg-red-600"
              color=""
            >
              <p className="font-sans text-[17px] font-semibold text-white">
                Close
              </p>
            </Button>
          </Modal.Footer>
        </Modal>
    </div>
  )
}

export default EndVoucher
