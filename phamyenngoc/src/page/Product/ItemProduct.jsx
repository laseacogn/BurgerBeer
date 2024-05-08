import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { IoHeartOutline } from "react-icons/io5";

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
  const [showButtons, setShowButtons] = useState(false);



  return (
    <div
      className="w-60 flex item-center flex-col mx-auto "
      key={product.id}
      onMouseEnter={() => setShowButtons(true)}
      onMouseLeave={() => setShowButtons(false)}
    >
        <div className="relative">
          <img
            className="w-full self-center"
            style={{ borderRadius: "60px" }}
            src={require(`../../assets/image/Burger/${product?.product?.image}`)}
            alt={product?.product?.name}
          />
          {showButtons && (
            <div className="absolute inset-0 flex justify-around items-center">
              <button onClick={() => showAlert1()}>
                <div className="w-[70px] h-[70px] rounded-full bg-white justify-center items-center">
                    <IoHeartOutline className="w-[65px] h-[65px] text-red-600 ml-[2px] pt-[13px]" />
                </div>
              </button>
               <button onClick={() => showAlert2()}>
                <div className="w-[70px] h-[70px] rounded-full bg-gray-900 justify-center items-center">
                    <HiOutlineShoppingCart className="w-[65px] h-[65px] text-white ml-[2px] pt-[10px]" />
                </div>
                
              </button>
            </div>
          )}
        </div>

      <Link to={`/product/${product?.product?.id}`}>
        <div className="flex flex-col justify-center text-center">
          <p
            style={{
              fontSize: "17px",
              fontWeight: "600",
              fontFamily: '"Inter", sans-serif',
            }}
          >
            {product?.product?.name}
          </p>
          <p
            style={{
              textDecoration: "line-through",
              fontFamily: '"Inter", sans-serif',
              fontSize: "17px",
              fontWeight: "400",
              color: "#707070",
            }}
          
          >
           {product?.product?.originalPrice?.toFixed(3)} VND
          </p>
          <div className="flex justify-center text-center">
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
        </div></Link>
      
    </div>
  );
};
export default ItemProduct;
