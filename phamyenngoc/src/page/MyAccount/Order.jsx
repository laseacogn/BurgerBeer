import React, { useState } from "react";
import { Button, Modal } from "flowbite-react";
import orderData from "../../data/order.json";
import { IoMdEye } from "react-icons/io";
import OrderDetail from "./OrderDetail";

const Order = () => {
  const [order, setOrder] = useState(orderData);
  const [openModal10, setOpenModal10] = useState(false);
  return (
    <div className="max-w-[1200px] mx-auto no-scrollbar">
      <div className="w-[95%] ml-[30px] bg-white border-b-[1px] border-[#ffffff] mb-2 mljustify-center items-center">
        <div className="rounded-lg ">
          <div className="text-base font-medium text-center divide-y divide-solid">
            <ol className=" border-b grid grid-cols-7 gap-7 justify-between px-4 py-1 bg-[#FFFEFE] rounded-t-lg  text-black text-[17px] font-bold">
              <li>Order ID</li>
              <li>Delivery ID</li>
              <li>Payment ID</li>
              <li>Order Date</li>
              <li>Total Amount</li>
              <li>Status</li>
              <li>See</li>
            </ol>
            {order.map((value) => {
              return (
                <div onClick={() => setOpenModal10(true)}>
                  <ol className=" border-b hover:bg-sky-200  ease-in duration-200 grid grid-cols-7 gap-4 justify-center items-center text-center px-4 py-1 uppercase">
                    <li>{value.orderID}</li>
                    <li>{value.deliveryId}</li>
                    <li>{value.paymentId}</li>
                    <li>{value.orderDate}</li>
                    <li>{value.totalAmount}$</li>
                    <li>{value.status}</li>
                    <li className="pl-[70px]">
                      {" "}
                      <IoMdEye />{" "}
                    </li>
                  </ol>
                </div>
              );
            })}
            <Modal show={openModal10} onClose={() => setOpenModal10(false)} className="no-scrollbar">
              <Modal.Header className="h-[50px] pt-[10px]">Order Tracking</Modal.Header>
              <Modal.Body className="no-scrollbar">
                <OrderDetail/>
              </Modal.Body>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
