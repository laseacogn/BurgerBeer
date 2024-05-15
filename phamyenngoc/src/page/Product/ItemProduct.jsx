import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoHeartSharp } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";

const ItemProduct = (product) => {
  const showAlert1 = () => {
    alert("The product has been added to wishlist!");
  };

  const showAlert2 = () => {
    alert("The product has been added to cart!");
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
    return (originalPrice - discountAmount).toFixed(3);
  };



  return (
    <div className="w-full mx-auto h-full flex justify-center items-center py-4">
        <div className="flex items-center justify-center gap-8">
            <div
              className="card w-[270px] h-[350px] bg-base-100 shadow-xl"
              key={product.id}
            >
              <figure className="">
                <NavLink to={`/product/${product?.product?.id}`}>
                  <img
                    className="w-[200px] h-[150px] self-center"
                    style={{ borderRadius: "px" }}
                    src={require(`../../assets/image/Burger/${product?.product?.image}`)}
            alt={product?.product?.name}
                  />
                </NavLink>
              </figure>
              <div className=" mt-[-20px] card-body items-center text-center">
                <h2 className="font-sans  text-[17px] font-semibold text-center">
                   {product?.product?.name}
                </h2>
                <div className="w-[150px] mt-[-3px]">
                  <div className="flex justify-between items-center">
                    <button onClick={() => showAlert1()}>
                      <div className="w-[50px] h-[50px] rounded-full bg-white shadow-md justify-center items-center mr-[30px] ml-[10px]">
                        <IoHeartSharp className="w-[45px] h-[45px] text-gray-700 ml-[2.5px] pt-[9px]" />
                      </div>
                    </button>
                    <button onClick={() => showAlert2()}>
                      <div className="w-[50px] h-[50px] rounded-full bg-white shadow-md justify-center items-center">
                        <FaShoppingCart className="w-[42px] h-[42px] text-gray-700 ml-[3px] pt-[15px]" />
                      </div>
                    </button>
                  </div>
                  <div className="w-[160px] font-sans font-medium text-[17px] justify-center text-center mb-[-20px]">
                    <p className=" mt-[15px] text-center line-through text-[#707070]">
                      {product?.product?.originalPrice?.toFixed(3)} VND
                    </p>
                    <div className="mt-[5px] flex justify-center text-center">
                      <p
                        style={{
                          color: "#F00E0E",
                          fontFamily: '"Inter", sans-serif',
                          fontSize: "17px",
                          fontWeight: "600",
                          marginRight: "15px",
                        }}
                      >
                        {product?.product?.discountPercent}%
                      </p>
                      <p
                        style={{
                          color: "#000000",
                          fontFamily: '"Inter", sans-serif',
                          fontSize: "17px",
                          fontWeight: "600",
                        }}
                      >
                        {calculateDiscountedPrice(
                product?.product?.originalPrice,
                product?.product?.discountPercent
              )} VND
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
  );
};
export default ItemProduct;
