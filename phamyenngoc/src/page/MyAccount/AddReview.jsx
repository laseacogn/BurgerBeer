import React, { useState } from "react";
import { FileInput, Label } from "flowbite-react";

const AddReview = () => {
  const [rating, setRating] = useState("Great");
  const [rangeValue, setRangeValue] = useState(100);
  const [rating2, setRating2] = useState("Great");
  const [rating3, setRating3] = useState("Great");

  const handleRangeChange = (event) => {
    const value = parseInt(event.target.value);
    setRangeValue(value);
    switch (value) {
      case 0:
        setRating("Bad");
        break;
      case 25:
        setRating("Unsatisfied");
        break;
      case 50:
        setRating("Normal");
        break;
      case 75:
        setRating("Satisfied");
        break;
      case 100:
        setRating("Great");
        break;
      default:
        setRating("Great");
        break;
    }
  };

  const handleRangeChange2 = (event) => {
    const value = parseInt(event.target.value);
    setRangeValue(value);
    switch (value) {
      case 0:
        setRating2("Bad");
        break;
      case 25:
        setRating2("Unsatisfied");
        break;
      case 50:
        setRating2("Normal");
        break;
      case 75:
        setRating2("Satisfied");
        break;
      case 100:
        setRating2("Great");
        break;
      default:
        setRating2("Great");
        break;
    }
  };

  const handleRangeChange3 = (event) => {
    const value = parseInt(event.target.value);
    setRangeValue(value);
    switch (value) {
      case 0:
        setRating3("Bad");
        break;
      case 25:
        setRating3("Unsatisfied");
        break;
      case 50:
        setRating3("Normal");
        break;
      case 75:
        setRating3("Satisfied");
        break;
      case 100:
        setRating3("Great");
        break;
      default:
        setRating3("Great");
        break;
    }
  };

  return (
    <div>
      <div className="w-full mx-auto">
        <div className="w-full">
          <div className="w-full flex ">
            <img
              className="w-[70px] h-[70px] rounded-xl"
              src={require("../../assets/image/Burger/14.jpg")}
              alt=""
            />
            <p className="font-sans font-semibold text-[17px] ml-[15px] text-gray-900">
              Bacon & Egg Grilled Cheese Sandwich <br />
              <span className="line-through mr-[10px] text-gray-500 text-[14px]">
                $80.00
              </span>
              <span className="text-gray-500 mr-[10px] text-[14px]">
                $75.00
              </span>
              <p className="text-[14px] text-red-500">
                You have a 5% discount code
              </p>
            </p>
          </div>
          <div className="flex mt-[15px]">
            <p className="font-sans font-semibold text-[17px] text-gray-900">
              Product Quality
            </p>
            <div className="rating ml-[50px]">
              <input
                onChange={handleRangeChange}
                checked={rangeValue === 0}
                value={0}
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-yellow-300"
              />
              <input
                onChange={handleRangeChange}
                checked={rangeValue === 25}
                value={25}
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-yellow-300"
              />
              <input
                onChange={handleRangeChange}
                checked={rangeValue === 50}
                value={50}
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-yellow-300"
              />
              <input
                onChange={handleRangeChange}
                checked={rangeValue === 75}
                value={75}
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-yellow-300"
              />
              <input
                onChange={handleRangeChange}
                checked={rangeValue === 100}
                value={100}
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-yellow-300"
              />
            </div>
            <p className="ml-[10px] font-sans text-[17px] font-semibold text-yellow-400">
              {rating}
            </p>
          </div>
          <div className="mt-[15px] w-full bg-gray-100 drop-shadow">
            <textarea
              className="rounded-none border-inherit font-sans text-[14px] textarea textarea-lg w-[95%] ml-[14px] mt-[15px]"
              placeholder="Please share what you like about this product with other buyers."
            ></textarea>
            <div className="w-[95%] ml-[14px] pb-[15px]">
              <div className="mb-2 block">
                <Label
                  htmlFor="file-upload"
                  value="More Photos"
                  className="font-sans text-[14px] text-gray-700"
                />
              </div>
              <FileInput id="file-upload" />
            </div>
          </div>
           <p className="font-sans font-semibold text-[17px] text-gray-900 mt-[15px]">
              About Services
            </p>
          <div className="flex mt-[10px]">
            <p className="font-sans font-semibold text-[15px] text-gray-900">
              Seller Service
            </p>
            <div className="rating ml-[77px]">
              <input
                onChange={handleRangeChange2}
                checked={rangeValue === 0}
                value={0}
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-yellow-300"
              />
              <input
                onChange={handleRangeChange2}
                checked={rangeValue === 25}
                value={25}
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-yellow-300"
              />
              <input
                onChange={handleRangeChange2}
                checked={rangeValue === 50}
                value={50}
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-yellow-300"
              />
              <input
                onChange={handleRangeChange2}
                checked={rangeValue === 75}
                value={75}
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-yellow-300"
              />
              <input
                onChange={handleRangeChange2}
                checked={rangeValue === 100}
                value={100}
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-yellow-300"
              />
            </div>
            <p className="ml-[10px] font-sans text-[17px] font-semibold text-yellow-400">
              {rating2}
            </p>
          </div>
          <div className="flex mt-[10px]">
            <p className="font-sans font-semibold text-[15px] text-gray-900">
              Shipping services
            </p>
            <div className="rating ml-[50px]">
              <input
                onChange={handleRangeChange3}
                checked={rangeValue === 0}
                value={0}
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-yellow-300"
              />
              <input
                onChange={handleRangeChange3}
                checked={rangeValue === 25}
                value={25}
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-yellow-300"
              />
              <input
                onChange={handleRangeChange3}
                checked={rangeValue === 50}
                value={50}
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-yellow-300"
              />
              <input
                onChange={handleRangeChange3}
                checked={rangeValue === 75}
                value={75}
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-yellow-300"
              />
              <input
                onChange={handleRangeChange3}
                checked={rangeValue === 100}
                value={100}
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-yellow-300"
              />
            </div>
            <p className="ml-[10px] font-sans text-[17px] font-semibold text-yellow-400">
              {rating3}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
