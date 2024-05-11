import React from "react";
import { Button } from "flowbite-react";

const MoneyCart = ({ selectedPaymentMethod }) => {
  const handlePaymentSubmit = () => {
    if (selectedPaymentMethod === "Pay on delivery") {
      showAlert();
    } else if (selectedPaymentMethod === "Pay on card") {
      window.location.href = "/cardd";
    } else if (selectedPaymentMethod === "Pay on Momo/ Zalo Pay/ VNPay") {
      window.location.href = "/zalopay";
    }
  };

  const showAlert = () => {
    alert(
      "You've placed the order successfully.\n\n" +
      "We'll contact to you to confirm order as soon as possible.\n\n" +
      "Thank you!"
    );
  };

  return (
    <div className="pt-[50px]">
      <div className="w-550 h-77 border-b border-zinc-300 flex items-center pb-[10px]">
        <div className="font-sans font-medium text-lg text-black ml-[100px] ">
          Total
        </div>
        <div className="font-sans font-medium text-lg text-black ml-[220px]">
          250.000 VND
        </div>
      </div>
      <div className="w-550 h-77 border-b border-zinc-300 flex items-center pt-[10px] pb-[10px]">
        <div className="font-sans font-medium text-lg text-black ml-[100px]">
          Shipping Fee (0km)
        </div>
        <div className="font-sans font-medium text-lg text-black ml-[160px]">
          0 VND
        </div>
      </div>
      <div className="w-550 h-77 border-b border-zinc-300 flex items-center pt-[20px] pb-[10px]">
        <div className="font-sans font-medium text-lg text-black ml-[100px]">
          MONEY TO PAID
        </div>
        <div className="font-sans font-medium text-lg text-black ml-[127px]">
          250.000 VND
        </div>
      </div>
      <Button
        className="w-[350px] mt-[20px] ml-[100px] font-sans font-medium text-lg "
        color="dark"
        onClick={handlePaymentSubmit}
      >
        Submit
      </Button>
    </div>
  );
};

export default MoneyCart;

