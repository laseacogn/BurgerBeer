import React, { useState, useEffect } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Button, Timeline, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
import { FaClock, FaPenSquare } from "react-icons/fa";
import { BiSolidDiscount } from "react-icons/bi";
import ItemCart from "./ItemCart";
import MoneyCart from "./MoneyCart";
import cart from "../../data/cart.json";
import ModalPaymentMethod from "./ModalPaymentMethod";
import ModalCustomer from "./ModalCustomer";
const Cart2 = () => {
  useEffect(() => {
  window.scrollTo(0, 0);
}, []);

  const money = [1];
  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpenCustomer, setModalOpenCustomer] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('No information')
  const [fullName, setFullName] = useState('No information')
  const [addres, setAddress] = useState('No information')

  const [payment, setPayment] = useState("Choose payment method");
  const handleViewDetail = () => {
    setModalOpen(true)
  }
  const handleModalCustomer = () => {
    setModalOpenCustomer(true)
  }

  const [products, setProducts] = useState(cart);

  const handleDelete = (productId) => {
    const updatedProducts = products.filter(
      (product) => product.id !== productId
    );
    setProducts(updatedProducts);
  };

  const handlePaymentSelection = (selectedMethod) => {
    setPayment(selectedMethod);
  };

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
            <Button className="w-[300px]" color="light">
              Delivery
            </Button>
          </Link>
          <Link to="/cartt">
            <Button className="w-[300px]" color="dark">
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
                    Customer Information{" "}
                  </p>

                  <button onClick={(e) => { handleModalCustomer() }}    >
                    <p className="ml-[320px] text-sm font-normal text-slate-500">
                      Edit
                    </p>
                  </button>
                  {
                    modalOpenCustomer && <ModalCustomer modalOpen={setModalOpenCustomer} setFullName={setFullName} setPhoneNumber={setPhoneNumber} setAddress={setAddress} />
                  }
                </Timeline.Title>
                {fullName !== 'No information' && (
                  <Timeline.Item className="mb-1">
                    <span className="ml-[-20px] text-[15px] font-medium text-slate-500 mt-[5px]">Full Name : {fullName}</span>
                  
                  </Timeline.Item>
                )}
                {phoneNumber !== 'No information' && (
                  <Timeline.Item className="mb-1">
                    <span className="ml-[-20px] text-[15px] font-medium text-slate-500 mt-[5px]">Phone Number : {phoneNumber}</span>
                  </Timeline.Item>
                )}
                {addres !== 'No information' && (
                  <Timeline.Item>
                    <span className="ml-[-20px] text-[15px] font-medium text-slate-500 mt-[5px]">Address : {addres}</span>
                  </Timeline.Item>

                )}
              </Timeline.Content>
            </Timeline.Item>
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
          </Timeline>
          <div className="mt-[-15px] ml-[13px]">
            <div className="flex">
              <div className="text-slate-500 w-5 h-5">
                <FaClock />
              </div>
              <p style={{ marginTop: "-5px", marginLeft: "10px", fontStyle: "normal", fontWeight: "500", fontSize: "18px", lineHeight: "24px", display: "flex", alignItems: "center", color: "#000000", }} >
                Schedule Delivery
              </p>
            </div>
            <div className="flex items-center justify-center p-3">
              <input type="datetime-local" className="w-full rounded-lg border-gray-400" />
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
            <div className="flex">
              <p className="mt-4 ml-2 font-medium text-lg leading-6 flex items-center text-black">Payment Method</p>
              <button onClick={(e) => { handleViewDetail() }} >
                <p className="ml-[370px] text-sm font-normal text-slate-500 mt-[15px]">
                  Choose
                </p>
              </button>
              {
                modalOpen && <ModalPaymentMethod modalOpen={setModalOpen} setPayment={setPayment} />
              }
            </div>
            <p className="ml-[7px] text-[15px] font-medium text-slate-500 mt-[5px]">
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
        <div className="w-[600px] bg-[#FEFFFF] shadow-lg rounded-2xl">
         <div className="mt-[20px] ml-[13px]">
            <div className="w-full flex justify-between items-center mt-[15px]">
              <p
              style={{
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
            <Link to="/product">
            <Button className="w-[120px] h-[35px] rounded-none mr-[17px]"color="dark">
              <p className="font-sans text-[17px] font-medium mt-[-3px]">Add More</p>
            </Button>
            </Link>
            </div>
            
          </div>
          <div className="">
            {products.map((product, index) => (
          <ItemCart
            key={index}
            product={product}
            onDelete={handleDelete}
          />
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
            <MoneyCart key={index} product={product}  selectedPaymentMethod={payment} />
          ))}
        </div>
      </div>
    </div >
  );
};

export default Cart2;
