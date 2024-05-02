import React, { useState } from "react";
import { Button } from "flowbite-react";

const MoneyCart = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const showAlert = () => {
    alert(
      "You've placed the order successfully.\n\n" +
      "Thank you!"
    );
  };

  const calculateDiscountedPrice = (originalPrice, discountPercent) => {
    if (
      typeof originalPrice !== "number" ||
      typeof discountPercent !== "number"
    ) {
      console.error("originalPrice and discountPercent must be numbers.");
      return null;
    }
    const discountAmount = (originalPrice * discountPercent) / 100;
    return (originalPrice - discountAmount).toFixed(2);
  };

  const totalPrice = (
    calculateDiscountedPrice(product.originalPrice, product.discountPercent) *
    quantity
  ).toFixed(2);

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
        color="dark"  onClick={() => {
                  showAlert();
                }}
      >
        Submit
      </Button>
    </div>
  );
};

export default MoneyCart;
