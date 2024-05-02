import React, { useState } from 'react';
import { Button } from "flowbite-react";
import { RiDeleteBinLine } from "react-icons/ri";
import cartData from "../../data/cart.json"

const ItemCart = ({ product, index }) => {

  const [products, setProducts] = useState([cartData]);
  const [quantity, setQuantity] = useState(1);

  const handleDelete = (index) => {
    const updatedProducts = products.filter((_, i) => i !== index);
    setProducts(updatedProducts);
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const calculateDiscountedPrice = (originalPrice, discountPercent) => {
    if (typeof originalPrice !== 'number' || typeof discountPercent !== 'number') {
      console.error('originalPrice and discountPercent must be numbers.');
      return null;
    }
    const discountAmount = (originalPrice * discountPercent) / 100;
    return (originalPrice - discountAmount).toFixed(2);
  };

  const totalPrice = (calculateDiscountedPrice(product.originalPrice, product.discountPercent) * quantity).toFixed(2);
  
  return (
    <div className="border-b-2 border-gray-200 flex gap-4 p-3 mb-3">
      <img
        className="w-[65px] h-[65px] object-cover rounded-xl"
        src={require(`../../assets/image/Burger/${product.image}`)}
        alt={product.name}
      />
      <div className="w-full flex flex-col justify-between">
        <p
          className="block"
          style={{
            fontSize: "15px",
            fontWeight: "600",
            fontFamily: '"Inter", sans-serif',
          }}
        >
          {product.name}
        </p>
        <p className="block flex">
          <p
            style={{
              marginRight: "12px",
              textDecoration: "line-through",
              fontFamily: '"Inter", sans-serif',
              fontSize: "15px",
              fontWeight: "400",
              color: "#707070",
            }}
          >
            {(product.originalPrice * quantity).toFixed(3)} VND
          </p>
          <span
            style={{
              color: "#000000",
              fontFamily: '"Inter", sans-serif',
              fontSize: "15px",
              fontWeight: "600",
            }}
          >
             {totalPrice}0 VND
          </span>
        </p>
        <p
          style={{
            fontFamily: '"Inter", sans-serif',
            fontSize: "15px",
            fontWeight: "400",
            color: "#707070",
          }}
        >
          You saved {((product.originalPrice - calculateDiscountedPrice(product.originalPrice, product.discountPercent)) * quantity).toFixed(3)} VND
        </p>
        <div className="w-full mx-auto flex justify-between">
          <div className="flex items-center">
            <Button.Group>
              <Button
                onClick={handleDecrease}
                color="gray"
                className="text-sm"
              >
                {" "}
                -{" "}
              </Button>
              <Button color="gray"> {quantity} </Button>
              <Button
                onClick={handleIncrease}
                color="gray"
                className="text-sm"
              >
                {" "}
                +{" "}
              </Button>
            </Button.Group>
          </div>
          <button
            type="button"
            id="decrement-button"
            data-input-counter-decrement="counter-input"
            className="bg-gray-100 h-7 px-3 rounded flex items-center hover:text-white hover:bg-red-500 mr-4"
            onClick={() => handleDelete(index)}
          >
            <RiDeleteBinLine className="mr-2" />
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};


export default ItemCart;
