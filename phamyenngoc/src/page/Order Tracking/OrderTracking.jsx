import React, { useState, useEffect } from "react";
import { Tabs, Button, Modal, Label, Radio } from "flowbite-react";
import { useNavigate, NavLink } from "react-router-dom";
import { FaCloudMeatball } from "react-icons/fa";
import { MdPendingActions } from "react-icons/md";
import { GiProcessor } from "react-icons/gi";
import {
  TbTruckDelivery,
  TbBasketCancel,
  TbBellRingingFilled,
} from "react-icons/tb";
import AddReview from "../MyAccount/AddReview";
import { MdCheckCircle } from "react-icons/md";

const OrderTracking = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [openModal1, setOpenModal1] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const [openModal3, setOpenModal3] = useState(false);
  const [openModal4, setOpenModal4] = useState(false);

  const [confirmClicked2, setConfirmClicked2] = useState(false);

  const [confirmClicked3, setConfirmClicked3] = useState(false);

  const [buttonStates2, setButtonStates2] = useState([
    { text: "Received" },
    { text: "Received" },
  ]);

  const handleClick2 = (index) => {
    setButtonStates2((prevButtonStates2) => {
      const newButtonStates = [...prevButtonStates2];
      if (newButtonStates[index].text === "Received") {
        setOpenModal2(true);
        newButtonStates[index] = { text: "Evaluate" };
      } else if (
        newButtonStates[index].text === "Evaluate" &&
        confirmClicked3
      ) {
        newButtonStates[index] = { text: "Repurchase" };
      } else if (newButtonStates[index].text === "Evaluate") {
        handleEvaluateClick();
      } else if (newButtonStates[index].text === "Repurchase") {
        navigate("/product");
      }
      return newButtonStates;
    });
  };

  const handleConfirmClick2 = () => {
    setOpenModal2(false);
    setConfirmClicked2(true);
  };
  const handleConfirmClick3 = () => {
    setOpenModal2(false);
    setConfirmClicked3(true);
  };
  const handleEvaluateClick = () => {
    setOpenModal2(false);
    setOpenModal3(true);
  };

  const [buttonStates, setButtonStates] = useState([
    { text: "Cancel" },
    { text: "Cancel" },
  ]);

  const navigate = useNavigate();

  const handleClick = (index) => {
    setButtonStates((prevButtonStates) => {
      const newButtonStates = [...prevButtonStates];
      if (newButtonStates[index].text === "Cancel") {
        newButtonStates[index] = { text: "Repurchase" };
      } else {
        navigate("/product");
      }
      return newButtonStates;
    });
  };

  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="w-full mb-[20px] bg-[#FFFEFE] shadow-md rounded-lg">
        <div className="w-full justify-center items-center ">
          <div className="w-full border-b border-zinc-400">
            <p className="font-sans text-2xl font-bold ml-[20px] mt-[10px] mb-[10px]">
              ORDER TRACKING
            </p>
          </div>
          <div className="w-full justify-center items-center">
            <div className="w-[1200px] h-[800px] overflow-x-auto no-scrollbar mx-auto">
              <Tabs aria-label="Full width tabs" style="fullWidth">
                <Tabs.Item active title="All Order" icon={FaCloudMeatball}>
                  <div className="w-[95%] h-[465px] ml-[30px] bg-[#FEFFFF] drop-shadow-md">
                    <div className="font-sans font-semibold text-[17px] flex justify-between items-center border-b pb-[10px] pt-[10px]">
                      <p className="ml-[20px] text-gray-900">
                        Pham Yen Ngoc | (+84)564751400
                      </p>
                      <p className="flex text-yellow-400 mr-[20px]">
                        <MdPendingActions className="mt-[5px] mr-[5px]" />{" "}
                        <span>Pending</span>
                      </p>
                    </div>
                    <div className="flex justify-between items-center mt-[20px] border-b ml-[20px] mr-[20px] pb-[20px]">
                      <img
                        className="w-[100px] h-[100px]"
                        style={{ borderRadius: "5px" }}
                        src={require(`../../assets/image/Burger/6.jpg`)}
                        alt=""
                      />
                      <div className="font-sans font-semibold text-[17px] ml-[-300px]">
                        <p className="text-gray-900">BBQ Pulled Pork Burger</p>
                        <p className="text-gray-500 font-normal">
                          Note: No onion, more tomatoes. Add more ketchup.
                          Thanks
                        </p>
                        <p className="w-[27px] h-[27px] border-solid border-2 border-gray-900 text-gray-900 font-semibold rounded-lg pt-[-1.5px] pl-[3px]">
                          <span className="pt-[5px]">x</span>{" "}
                          <span className="ml-[-3px]">1</span>
                        </p>
                      </div>
                      <div className="flex ont-sans font-semibold text-[17px] mr-[10px]">
                        <p className="text-gray-500 line-through font-medium mr-[15px]">
                          {" "}
                          99.000 VND
                        </p>
                        <p className="text-red-600 font-semibold">94.050 VND</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mt-[20px] ml-[20px] mr-[20px] pb-[20px]">
                      <img
                        className="w-[100px] h-[100px]"
                        style={{ borderRadius: "5px" }}
                        src={require(`../../assets/image/Burger/2.jpg`)}
                        alt=""
                      />
                      <div className="font-sans font-semibold text-[17px] ml-[-100px]">
                        <p className="text-gray-900">
                          French Fries With Classic Seasoning
                        </p>
                        <p className="w-[650px] text-gray-500 font-normal">
                          Note: Crispy potato fries seasoned with a blend of
                          salt, pepper, and possibly other savory spices like
                          garlic powder, onion powder, or paprika.
                        </p>
                        <p className="w-[27px] h-[27px] border-solid border-2 border-gray-900 text-gray-900 font-semibold rounded-lg pt-[-1.5px] pl-[3px]">
                          <span className="pt-[5px]">x</span>{" "}
                          <span className="ml-[-3px]">2</span>
                        </p>
                      </div>
                      <div className="flex ont-sans font-semibold text-[17px] mr-[10px]">
                        <p className="text-gray-500 line-through font-medium mr-[15px]">
                          {" "}
                          40.000 VND
                        </p>
                        <p className="text-red-600 font-semibold">38.000 VND</p>
                      </div>
                    </div>
                    <div className="w-full font-sans font-semibold flex border-t pb-[15px]">
                      <p className=" ml-[890px] mt-[18px] text-[17px] text-gray-900 mr-[10px]">
                        {" "}
                        Into Money:
                      </p>
                      <p className="text-[20px] mt-[15px] text-red-600">
                        170.050 VND
                      </p>
                    </div>
                    <div className="w-full flex border-t pt-[15px] ">
                      <Button
                        onClick={() => {
                          setOpenModal1(true);
                          handleClick(0);
                        }}
                        color="failure"
                        className="w-[150px] rounded-none mr-[15px] ml-[800px]"
                      >
                        <p className="font-sans font-semibold text-[17px]">
                          {buttonStates[0] && buttonStates[0].text}
                        </p>
                      </Button>
                      <NavLink to="/contact">
                        <Button
                          color="light"
                          className="w-[150px] rounded-none"
                        >
                          {" "}
                          <p className=" font-sans font-semibold text-[17px]">
                            {" "}
                            Contact Us{" "}
                          </p>
                        </Button>
                      </NavLink>
                    </div>
                  </div>

                  <div className="w-[95%] h-[465px] ml-[30px] bg-[#FEFFFF] drop-shadow-md mt-[20px]">
                    <div className="font-sans font-semibold text-[17px] flex justify-between items-center border-b pb-[10px] pt-[10px]">
                      <p className="ml-[20px] text-gray-900">
                        Hoang Nguyen Linh Chi | (+84)837018566
                      </p>
                      <p className="flex text-blue-500 mr-[20px]">
                        <GiProcessor className="mt-[5px] mr-[5px]" />{" "}
                        <span>Processing</span>
                      </p>
                    </div>
                    <div className="flex justify-between items-center mt-[20px] border-b ml-[20px] mr-[20px] pb-[20px]">
                      <img
                        className="w-[100px] h-[100px]"
                        style={{ borderRadius: "5px" }}
                        src={require(`../../assets/image/Burger/15.jpg`)}
                        alt=""
                      />
                      <div className="font-sans font-semibold text-[17px] ml-[-100px]">
                        <p className="text-gray-900">
                          Bacon & Egg Grilled Cheese Sandwich
                        </p>
                        <p className="w-[650px] text-gray-500 font-normal">
                          Note: Grilled sandwich oozing with melted cheese,
                          crispy bacon, and a golden, gooey fried egg
                        </p>
                        <p className="w-[27px] h-[27px] border-solid border-2 border-gray-900 text-gray-900 font-semibold rounded-lg pt-[-1.5px] pl-[3px]">
                          <span className="pt-[5px]">x</span>{" "}
                          <span className="ml-[-3px]">2</span>
                        </p>
                      </div>
                      <div className="flex ont-sans font-semibold text-[17px] mr-[10px]">
                        <p className="text-gray-500 line-through font-medium mr-[15px]">
                          {" "}
                          80.000 VND
                        </p>
                        <p className="text-red-600 font-semibold">76.000 VND</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mt-[20px] ml-[20px] mr-[20px] pb-[20px]">
                      <img
                        className="w-[100px] h-[100px]"
                        style={{ borderRadius: "5px" }}
                        src={require(`../../assets/image/Burger/30.jpg`)}
                        alt=""
                      />
                      <div className="font-sans font-semibold text-[17px] ml-[-100px]">
                        <p className="text-gray-900">Avocado Smoothies</p>
                        <p className="w-[650px] text-gray-500 font-normal">
                          Note: Just add oats milk, no suger and less ice.
                          Thanks you.
                        </p>
                        <p className="w-[27px] h-[27px] border-solid border-2 border-gray-900 text-gray-900 font-semibold rounded-lg pt-[-1.5px] pl-[3px]">
                          <span className="pt-[5px]">x</span>{" "}
                          <span className="ml-[-3px]">2</span>
                        </p>
                      </div>
                      <div className="flex ont-sans font-semibold text-[17px] mr-[10px]">
                        <p className="text-gray-500 line-through font-medium mr-[15px]">
                          {" "}
                          40.000 VND
                        </p>
                        <p className="text-red-600 font-semibold">38.000 VND</p>
                      </div>
                    </div>
                    <div className="w-full font-sans font-semibold flex border-t pb-[15px]">
                      <p className=" ml-[890px] mt-[18px] text-[17px] text-gray-900 mr-[10px]">
                        {" "}
                        Into Money:
                      </p>
                      <p className="text-[20px] mt-[15px] text-red-600">
                        228.000 VND
                      </p>
                    </div>
                    <div className="w-full flex border-t pt-[15px] ">
                      <Button
                        color="gray"
                        className="w-[150px] rounded-none mr-[15px] ml-[800px] bg-gray-200"
                      >
                        {" "}
                        <p className=" font-sans font-semibold text-[17px]">
                          {" "}
                          Wait{" "}
                        </p>
                      </Button>
                      <NavLink to="/contact">
                        <Button
                          color="light"
                          className="w-[150px] rounded-none"
                        >
                          {" "}
                          <p className=" font-sans font-semibold text-[17px]">
                            {" "}
                            Contact Us{" "}
                          </p>
                        </Button>
                      </NavLink>
                    </div>
                  </div>

                  <div className="w-[95%] h-[465px] ml-[30px] bg-[#FEFFFF] drop-shadow-md mt-[20px]">
                    <div className="font-sans font-semibold text-[17px] flex justify-between items-center border-b pb-[10px] pt-[10px]">
                      <p className="ml-[20px] text-gray-900">
                        Pham Xuan Truong | (+84)899005579
                      </p>
                      <p className="flex text-green-500 mr-[20px]">
                        <TbTruckDelivery className="mt-[5px] mr-[5px]" />{" "}
                        <span>Delivery</span>
                      </p>
                    </div>
                    <div className="flex justify-between items-center mt-[20px] border-b ml-[20px] mr-[20px] pb-[20px]">
                      <img
                        className="w-[100px] h-[100px]"
                        style={{ borderRadius: "5px" }}
                        src={require(`../../assets/image/Burger/20.jpg`)}
                        alt=""
                      />
                      <div className="font-sans font-semibold text-[17px] ml-[-100px]">
                        <p className="text-gray-900">
                          Meaty & Bacon Cheese HotDog
                        </p>
                        <p className="w-[650px] text-gray-500 font-normal">
                          Note: I need a warm, toasted bun, generously topped
                          with savory meats like pepperoni, sausage, and Bacon.
                        </p>
                        <p className="w-[27px] h-[27px] border-solid border-2 border-gray-900 text-gray-900 font-semibold rounded-lg pt-[-1.5px] pl-[3px]">
                          <span className="pt-[5px]">x</span>{" "}
                          <span className="ml-[-3px]">1</span>
                        </p>
                      </div>
                      <div className="flex ont-sans font-semibold text-[17px] mr-[10px]">
                        <p className="text-gray-500 line-through font-medium mr-[15px]">
                          {" "}
                          100.000 VND
                        </p>
                        <p className="text-red-600 font-semibold">90.000 VND</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mt-[20px] ml-[20px] mr-[20px] pb-[20px]">
                      <img
                        className="w-[100px] h-[100px]"
                        style={{ borderRadius: "5px" }}
                        src={require(`../../assets/image/Burger/52.jpg`)}
                        alt=""
                      />
                      <div className="font-sans font-semibold text-[17px] ml-[-100px]">
                        <p className="text-gray-900">Saigon Red Beer</p>
                        <p className="w-[650px] text-gray-500 font-normal">
                          Note: I need a cup of ice. Thanks you.
                        </p>
                        <p className="w-[27px] h-[27px] border-solid border-2 border-gray-900 text-gray-900 font-semibold rounded-lg pt-[-1.5px] pl-[3px]">
                          <span className="pt-[5px]">x</span>{" "}
                          <span className="ml-[-3px]">2</span>
                        </p>
                      </div>
                      <div className="flex ont-sans font-semibold text-[17px] mr-[10px]">
                        <p className="text-gray-500 line-through font-medium mr-[15px]">
                          {" "}
                          30.000 VND
                        </p>
                        <p className="text-red-600 font-semibold">25.500 VND</p>
                      </div>
                    </div>
                    <div className="w-full font-sans font-semibold flex border-t pb-[15px]">
                      <p className=" ml-[890px] mt-[18px] text-[17px] text-gray-900 mr-[10px]">
                        {" "}
                        Into Money:
                      </p>
                      <p className="text-[20px] mt-[15px] text-red-600">
                        141.000 VND
                      </p>
                    </div>
                    <div className="w-full flex border-t pt-[15px] ">
                      <Button
                        onClick={() => {
                          handleClick2(0);
                        }}
                        color="failure"
                        className="w-[150px] rounded-none mr-[15px] ml-[800px]"
                      >
                        <p className="font-sans font-semibold text-[17px]">
                          {buttonStates2[0] && buttonStates2[0].text}
                        </p>
                      </Button>
                      <NavLink to="/contact">
                        <Button
                          color="light"
                          className="w-[150px] rounded-none"
                        >
                          {" "}
                          <p className=" font-sans font-semibold text-[17px]">
                            {" "}
                            Contact Us{" "}
                          </p>
                        </Button>
                      </NavLink>
                    </div>
                  </div>

                  <div className="w-[95%] h-[600px] ml-[30px] bg-[#FEFFFF] drop-shadow-md mt-[20px]  ">
                    <div className="font-sans font-semibold text-[17px] flex justify-between items-center border-b pb-[10px] pt-[10px]">
                      <p className="ml-[20px] text-gray-900">
                        Nguyen Anh Thu | (+84)858788888
                      </p>
                      <p className="flex text-red-500 mr-[20px]">
                        <TbBasketCancel className="mt-[5px] mr-[5px]" />{" "}
                        <span>Cancelled</span>
                      </p>
                    </div>
                    <div className="flex justify-between items-center mt-[20px] border-b ml-[20px] mr-[20px] pb-[20px]">
                      <img
                        className="w-[100px] h-[100px]"
                        style={{ borderRadius: "5px" }}
                        src={require(`../../assets/image/Burger/22.jpg`)}
                        alt=""
                      />
                      <div className="font-sans font-semibold text-[17px] ml-[-100px]">
                        <p className="text-gray-900">
                          Vietnamese Baguette Grilled Pork
                        </p>
                        <p className="w-[650px] text-gray-500 font-normal">
                          Note: I wanna a crusty baguette, filled with succulent
                          slices of tender grilled pork, marinated in a blend of
                          aromatic spices and herbs.
                        </p>
                        <p className="w-[27px] h-[27px] border-solid border-2 border-gray-900 text-gray-900 font-semibold rounded-lg pt-[-1.5px] pl-[3px]">
                          <span className="pt-[5px]">x</span>{" "}
                          <span className="ml-[-3px]">1</span>
                        </p>
                      </div>
                      <div className="flex ont-sans font-semibold text-[17px] mr-[10px]">
                        <p className="text-gray-500 line-through font-medium mr-[15px]">
                          {" "}
                          28.500 VND
                        </p>
                        <p className="text-red-600 font-semibold">76.000 VND</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mt-[20px] ml-[20px] mr-[20px]">
                      <img
                        className="w-[100px] h-[100px]"
                        style={{ borderRadius: "5px" }}
                        src={require(`../../assets/image/Burger/12.jpg`)}
                        alt=""
                      />
                      <div className="font-sans font-semibold text-[17px] ml-[-100px]">
                        <p className="text-gray-900">Japanese Chicken Burger</p>
                        <p className="w-[650px] text-gray-500 font-normal">
                          Note: More soy sauce, ginger, and garlic, perfectly
                          grilled to seal in all the delicious flavors.
                        </p>
                        <p className="w-[27px] h-[27px] border-solid border-2 border-gray-900 text-gray-900 font-semibold rounded-lg pt-[-1.5px] pl-[3px]">
                          <span className="pt-[5px]">x</span>{" "}
                          <span className="ml-[-3px]">1</span>
                        </p>
                      </div>
                      <div className="flex ont-sans font-semibold text-[17px] mr-[10px]">
                        <p className="text-gray-500 line-through font-medium mr-[15px]">
                          {" "}
                          80.000 VND
                        </p>
                        <p className="text-red-600 font-semibold">76.000 VND</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mt-[20px] ml-[20px] mr-[20px] pb-[20px]">
                      <img
                        className="w-[100px] h-[100px]"
                        style={{ borderRadius: "5px" }}
                        src={require(`../../assets/image/Burger/59.jpg`)}
                        alt=""
                      />
                      <div className="font-sans font-semibold text-[17px] ml-[-100px]">
                        <p className="text-gray-900">Coconut Coffee</p>
                        <p className="w-[650px] text-gray-500 font-normal">
                          Note: Add oats milk pls.
                        </p>
                        <p className="w-[27px] h-[27px] border-solid border-2 border-gray-900 text-gray-900 font-semibold rounded-lg pt-[-1.5px] pl-[3px]">
                          <span className="pt-[5px]">x</span>{" "}
                          <span className="ml-[-3px]">2</span>
                        </p>
                      </div>
                      <div className="flex ont-sans font-semibold text-[17px] mr-[10px]">
                        <p className="text-gray-500 line-through font-medium mr-[15px]">
                          {" "}
                          40.000 VND
                        </p>
                        <p className="text-red-600 font-semibold">36.000 VND</p>
                      </div>
                    </div>
                    <div className="w-full font-sans font-semibold flex border-t pb-[15px]">
                      <p className=" ml-[890px] mt-[18px] text-[17px] text-gray-900 mr-[10px]">
                        {" "}
                        Into Money:
                      </p>
                      <p className="text-[20px] mt-[15px] text-red-600">
                        176.500 VND
                      </p>
                    </div>
                    <div className="w-full flex border-t pt-[15px] pb-[20px]">
                      <NavLink to="/product">
                        <Button
                          color="failure"
                          className="w-[150px] rounded-none mr-[15px] ml-[800px]"
                        >
                          {" "}
                          <p className=" font-sans font-semibold text-[17px]">
                            {" "}
                            Repurchase{" "}
                          </p>
                        </Button>
                      </NavLink>
                      <NavLink to="/contact">
                        <Button
                          color="light"
                          className="w-[150px] rounded-none"
                        >
                          {" "}
                          <p className=" font-sans font-semibold text-[17px]">
                            {" "}
                            Contact Us{" "}
                          </p>
                        </Button>
                      </NavLink>
                    </div>
                  </div>
                </Tabs.Item>
                <Tabs.Item title="Pending" icon={MdPendingActions}>
                  <div className="w-[95%] h-[465px] ml-[30px] bg-[#FEFFFF] drop-shadow-md">
                    <div className="font-sans font-semibold text-[17px] flex justify-between items-center border-b pb-[10px] pt-[10px]">
                      <p className="ml-[20px] text-gray-900">
                        Pham Yen Ngoc | (+84)564751400
                      </p>
                      <p className="flex text-yellow-400 mr-[20px]">
                        <MdPendingActions className="mt-[5px] mr-[5px]" />{" "}
                        <span>Pending</span>
                      </p>
                    </div>
                    <div className="flex justify-between items-center mt-[20px] border-b ml-[20px] mr-[20px] pb-[20px]">
                      <img
                        className="w-[100px] h-[100px]"
                        style={{ borderRadius: "5px" }}
                        src={require(`../../assets/image/Burger/6.jpg`)}
                        alt=""
                      />
                      <div className="font-sans font-semibold text-[17px] ml-[-300px]">
                        <p className="text-gray-900">BBQ Pulled Pork Burger</p>
                        <p className="text-gray-500 font-normal">
                          Note: No onion, more tomatoes. Add more ketchup.
                          Thanks
                        </p>
                        <p className="w-[27px] h-[27px] border-solid border-2 border-gray-900 text-gray-900 font-semibold rounded-lg pt-[-1.5px] pl-[3px]">
                          <span className="pt-[5px]">x</span>{" "}
                          <span className="ml-[-3px]">1</span>
                        </p>
                      </div>
                      <div className="flex ont-sans font-semibold text-[17px] mr-[10px]">
                        <p className="text-gray-500 line-through font-medium mr-[15px]">
                          {" "}
                          99.000 VND
                        </p>
                        <p className="text-red-600 font-semibold">94.050 VND</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mt-[20px] ml-[20px] mr-[20px] pb-[20px]">
                      <img
                        className="w-[100px] h-[100px]"
                        style={{ borderRadius: "5px" }}
                        src={require(`../../assets/image/Burger/2.jpg`)}
                        alt=""
                      />
                      <div className="font-sans font-semibold text-[17px] ml-[-100px]">
                        <p className="text-gray-900">
                          French Fries With Classic Seasoning
                        </p>
                        <p className="w-[650px] text-gray-500 font-normal">
                          Note: Crispy potato fries seasoned with a blend of
                          salt, pepper, and possibly other savory spices like
                          garlic powder, onion powder, or paprika.
                        </p>
                        <p className="w-[27px] h-[27px] border-solid border-2 border-gray-900 text-gray-900 font-semibold rounded-lg pt-[-1.5px] pl-[3px]">
                          <span className="pt-[5px]">x</span>{" "}
                          <span className="ml-[-3px]">2</span>
                        </p>
                      </div>
                      <div className="flex ont-sans font-semibold text-[17px] mr-[10px]">
                        <p className="text-gray-500 line-through font-medium mr-[15px]">
                          {" "}
                          40.000 VND
                        </p>
                        <p className="text-red-600 font-semibold">38.000 VND</p>
                      </div>
                    </div>
                    <div className="w-full font-sans font-semibold flex border-t pb-[15px]">
                      <p className=" ml-[890px] mt-[18px] text-[17px] text-gray-900 mr-[10px]">
                        {" "}
                        Into Money:
                      </p>
                      <p className="text-[20px] mt-[15px] text-red-600">
                        170.050 VND
                      </p>
                    </div>
                    <div className="w-full flex border-t pt-[15px] ">
                      <Button
                        onClick={() => {
                          setOpenModal1(true);
                          handleClick(0);
                        }}
                        color="failure"
                        className="w-[150px] rounded-none mr-[15px] ml-[800px]"
                      >
                        <p className="font-sans font-semibold text-[17px]">
                          {buttonStates[0] && buttonStates[0].text}
                        </p>
                      </Button>
                      <NavLink to="/contact">
                        <Button
                          color="light"
                          className="w-[150px] rounded-none"
                        >
                          {" "}
                          <p className=" font-sans font-semibold text-[17px]">
                            {" "}
                            Contact Us{" "}
                          </p>
                        </Button>
                      </NavLink>
                    </div>
                  </div>
                </Tabs.Item>
                <Tabs.Item title="Processing" icon={GiProcessor}>
                  <div className="w-[95%] h-[465px] ml-[30px] bg-[#FEFFFF] drop-shadow-md">
                    <div className="font-sans font-semibold text-[17px] flex justify-between items-center border-b pb-[10px] pt-[10px]">
                      <p className="ml-[20px] text-gray-900">
                        Hoang Nguyen Linh Chi | (+84)837018566
                      </p>
                      <p className="flex text-blue-500 mr-[20px]">
                        <GiProcessor className="mt-[5px] mr-[5px]" />{" "}
                        <span>Processing</span>
                      </p>
                    </div>
                    <div className="flex justify-between items-center mt-[20px] border-b ml-[20px] mr-[20px] pb-[20px]">
                      <img
                        className="w-[100px] h-[100px]"
                        style={{ borderRadius: "5px" }}
                        src={require(`../../assets/image/Burger/15.jpg`)}
                        alt=""
                      />
                      <div className="font-sans font-semibold text-[17px] ml-[-100px]">
                        <p className="text-gray-900">
                          Bacon & Egg Grilled Cheese Sandwich
                        </p>
                        <p className="w-[650px] text-gray-500 font-normal">
                          Note: Grilled sandwich oozing with melted cheese,
                          crispy bacon, and a golden, gooey fried egg
                        </p>
                        <p className="w-[27px] h-[27px] border-solid border-2 border-gray-900 text-gray-900 font-semibold rounded-lg pt-[-1.5px] pl-[3px]">
                          <span className="pt-[5px]">x</span>{" "}
                          <span className="ml-[-3px]">2</span>
                        </p>
                      </div>
                      <div className="flex ont-sans font-semibold text-[17px] mr-[10px]">
                        <p className="text-gray-500 line-through font-medium mr-[15px]">
                          {" "}
                          80.000 VND
                        </p>
                        <p className="text-red-600 font-semibold">76.000 VND</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mt-[20px] ml-[20px] mr-[20px] pb-[20px]">
                      <img
                        className="w-[100px] h-[100px]"
                        style={{ borderRadius: "5px" }}
                        src={require(`../../assets/image/Burger/30.jpg`)}
                        alt=""
                      />
                      <div className="font-sans font-semibold text-[17px] ml-[-100px]">
                        <p className="text-gray-900">Avocado Smoothies</p>
                        <p className="w-[650px] text-gray-500 font-normal">
                          Note: Just add oats milk, no suger and less ice.
                          Thanks you.
                        </p>
                        <p className="w-[27px] h-[27px] border-solid border-2 border-gray-900 text-gray-900 font-semibold rounded-lg pt-[-1.5px] pl-[3px]">
                          <span className="pt-[5px]">x</span>{" "}
                          <span className="ml-[-3px]">2</span>
                        </p>
                      </div>
                      <div className="flex ont-sans font-semibold text-[17px] mr-[10px]">
                        <p className="text-gray-500 line-through font-medium mr-[15px]">
                          {" "}
                          40.000 VND
                        </p>
                        <p className="text-red-600 font-semibold">38.000 VND</p>
                      </div>
                    </div>
                    <div className="w-full font-sans font-semibold flex border-t pb-[15px]">
                      <p className=" ml-[890px] mt-[18px] text-[17px] text-gray-900 mr-[10px]">
                        {" "}
                        Into Money:
                      </p>
                      <p className="text-[20px] mt-[15px] text-red-600">
                        228.000 VND
                      </p>
                    </div>
                    <div className="w-full flex border-t pt-[15px] ">
                      <Button
                        color="gray"
                        className="w-[150px] rounded-none mr-[15px] ml-[800px] bg-gray-200"
                      >
                        {" "}
                        <p className=" font-sans font-semibold text-[17px]">
                          {" "}
                          Wait{" "}
                        </p>
                      </Button>
                      <NavLink to="/contact">
                        <Button
                          color="light"
                          className="w-[150px] rounded-none"
                        >
                          {" "}
                          <p className=" font-sans font-semibold text-[17px]">
                            {" "}
                            Contact Us{" "}
                          </p>
                        </Button>
                      </NavLink>
                    </div>
                  </div>
                </Tabs.Item>
                <Tabs.Item title="Delivery" icon={TbTruckDelivery}>
                  <div className="w-[95%] h-[465px] ml-[30px] bg-[#FEFFFF] drop-shadow-md">
                    <div className="font-sans font-semibold text-[17px] flex justify-between items-center border-b pb-[10px] pt-[10px]">
                      <p className="ml-[20px] text-gray-900">
                        Pham Xuan Truong | (+84)899005579
                      </p>
                      <p className="flex text-green-500 mr-[20px]">
                        <TbTruckDelivery className="mt-[5px] mr-[5px]" />{" "}
                        <span>Delivery</span>
                      </p>
                    </div>
                    <div className="flex justify-between items-center mt-[20px] border-b ml-[20px] mr-[20px] pb-[20px]">
                      <img
                        className="w-[100px] h-[100px]"
                        style={{ borderRadius: "5px" }}
                        src={require(`../../assets/image/Burger/20.jpg`)}
                        alt=""
                      />
                      <div className="font-sans font-semibold text-[17px] ml-[-100px]">
                        <p className="text-gray-900">
                          Meaty & Bacon Cheese HotDog
                        </p>
                        <p className="w-[650px] text-gray-500 font-normal">
                          Note: I need a warm, toasted bun, generously topped
                          with savory meats like pepperoni, sausage, and Bacon.
                        </p>
                        <p className="w-[27px] h-[27px] border-solid border-2 border-gray-900 text-gray-900 font-semibold rounded-lg pt-[-1.5px] pl-[3px]">
                          <span className="pt-[5px]">x</span>{" "}
                          <span className="ml-[-3px]">1</span>
                        </p>
                      </div>
                      <div className="flex ont-sans font-semibold text-[17px] mr-[10px]">
                        <p className="text-gray-500 line-through font-medium mr-[15px]">
                          {" "}
                          100.000 VND
                        </p>
                        <p className="text-red-600 font-semibold">90.000 VND</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mt-[20px] ml-[20px] mr-[20px] pb-[20px]">
                      <img
                        className="w-[100px] h-[100px]"
                        style={{ borderRadius: "5px" }}
                        src={require(`../../assets/image/Burger/52.jpg`)}
                        alt=""
                      />
                      <div className="font-sans font-semibold text-[17px] ml-[-100px]">
                        <p className="text-gray-900">Saigon Red Beer</p>
                        <p className="w-[650px] text-gray-500 font-normal">
                          Note: I need a cup of ice. Thanks you.
                        </p>
                        <p className="w-[27px] h-[27px] border-solid border-2 border-gray-900 text-gray-900 font-semibold rounded-lg pt-[-1.5px] pl-[3px]">
                          <span className="pt-[5px]">x</span>{" "}
                          <span className="ml-[-3px]">2</span>
                        </p>
                      </div>
                      <div className="flex ont-sans font-semibold text-[17px] mr-[10px]">
                        <p className="text-gray-500 line-through font-medium mr-[15px]">
                          {" "}
                          30.000 VND
                        </p>
                        <p className="text-red-600 font-semibold">25.500 VND</p>
                      </div>
                    </div>
                    <div className="w-full font-sans font-semibold flex border-t pb-[15px]">
                      <p className=" ml-[890px] mt-[18px] text-[17px] text-gray-900 mr-[10px]">
                        {" "}
                        Into Money:
                      </p>
                      <p className="text-[20px] mt-[15px] text-red-600">
                        141.000 VND
                      </p>
                    </div>
                    <div className="w-full flex border-t pt-[15px] ">
                      <Button
                        onClick={() => {
                          handleClick2(0);
                        }}
                        color="failure"
                        className="w-[150px] rounded-none mr-[15px] ml-[800px]"
                      >
                        <p className="font-sans font-semibold text-[17px]">
                          {buttonStates2[0] && buttonStates2[0].text}
                        </p>
                      </Button>
                      <NavLink to="/contact">
                        <Button
                          color="light"
                          className="w-[150px] rounded-none"
                        >
                          {" "}
                          <p className=" font-sans font-semibold text-[17px]">
                            {" "}
                            Contact Us{" "}
                          </p>
                        </Button>
                      </NavLink>
                    </div>
                  </div>
                </Tabs.Item>
                <Tabs.Item title="Cancelled" icon={TbBasketCancel}>
                  <div className="w-[95%] h-[590px] ml-[30px] bg-[#FEFFFF] drop-shadow-md mt-[20px] ">
                    <div className="font-sans font-semibold text-[17px] flex justify-between items-center border-b pb-[10px] pt-[10px]">
                      <p className="ml-[20px] text-gray-900">
                        Nguyen Anh Thu | (+84)858788888
                      </p>
                      <p className="flex text-red-500 mr-[20px]">
                        <TbBasketCancel className="mt-[5px] mr-[5px]" />{" "}
                        <span>Cancelled</span>
                      </p>
                    </div>
                    <div className="flex justify-between items-center mt-[20px] border-b ml-[20px] mr-[20px] pb-[20px]">
                      <img
                        className="w-[100px] h-[100px]"
                        style={{ borderRadius: "5px" }}
                        src={require(`../../assets/image/Burger/22.jpg`)}
                        alt=""
                      />
                      <div className="font-sans font-semibold text-[17px] ml-[-100px]">
                        <p className="text-gray-900">
                          Vietnamese Baguette Grilled Pork
                        </p>
                        <p className="w-[650px] text-gray-500 font-normal">
                          Note: I wanna a crusty baguette, filled with succulent
                          slices of tender grilled pork, marinated in a blend of
                          aromatic spices and herbs.
                        </p>
                        <p className="w-[27px] h-[27px] border-solid border-2 border-gray-900 text-gray-900 font-semibold rounded-lg pt-[-1.5px] pl-[3px]">
                          <span className="pt-[5px]">x</span>{" "}
                          <span className="ml-[-3px]">1</span>
                        </p>
                      </div>
                      <div className="flex ont-sans font-semibold text-[17px] mr-[10px]">
                        <p className="text-gray-500 line-through font-medium mr-[15px]">
                          {" "}
                          28.500 VND
                        </p>
                        <p className="text-red-600 font-semibold">76.000 VND</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mt-[20px] ml-[20px] mr-[20px]">
                      <img
                        className="w-[100px] h-[100px]"
                        style={{ borderRadius: "5px" }}
                        src={require(`../../assets/image/Burger/12.jpg`)}
                        alt=""
                      />
                      <div className="font-sans font-semibold text-[17px] ml-[-100px]">
                        <p className="text-gray-900">Japanese Chicken Burger</p>
                        <p className="w-[650px] text-gray-500 font-normal">
                          Note: More soy sauce, ginger, and garlic, perfectly
                          grilled to seal in all the delicious flavors.
                        </p>
                        <p className="w-[27px] h-[27px] border-solid border-2 border-gray-900 text-gray-900 font-semibold rounded-lg pt-[-1.5px] pl-[3px]">
                          <span className="pt-[5px]">x</span>{" "}
                          <span className="ml-[-3px]">1</span>
                        </p>
                      </div>
                      <div className="flex ont-sans font-semibold text-[17px] mr-[10px]">
                        <p className="text-gray-500 line-through font-medium mr-[15px]">
                          {" "}
                          80.000 VND
                        </p>
                        <p className="text-red-600 font-semibold">76.000 VND</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mt-[20px] ml-[20px] mr-[20px] pb-[20px]">
                      <img
                        className="w-[100px] h-[100px]"
                        style={{ borderRadius: "5px" }}
                        src={require(`../../assets/image/Burger/59.jpg`)}
                        alt=""
                      />
                      <div className="font-sans font-semibold text-[17px] ml-[-100px]">
                        <p className="text-gray-900">Coconut Coffee</p>
                        <p className="w-[650px] text-gray-500 font-normal">
                          Note: Add oats milk pls.
                        </p>
                        <p className="w-[27px] h-[27px] border-solid border-2 border-gray-900 text-gray-900 font-semibold rounded-lg pt-[-1.5px] pl-[3px]">
                          <span className="pt-[5px]">x</span>{" "}
                          <span className="ml-[-3px]">2</span>
                        </p>
                      </div>
                      <div className="flex ont-sans font-semibold text-[17px] mr-[10px]">
                        <p className="text-gray-500 line-through font-medium mr-[15px]">
                          {" "}
                          40.000 VND
                        </p>
                        <p className="text-red-600 font-semibold">36.000 VND</p>
                      </div>
                    </div>
                    <div className="w-full font-sans font-semibold flex border-t pb-[15px]">
                      <p className=" ml-[890px] mt-[18px] text-[17px] text-gray-900 mr-[10px]">
                        {" "}
                        Into Money:
                      </p>
                      <p className="text-[20px] mt-[15px] text-red-600">
                        176.500 VND
                      </p>
                    </div>
                    <div className="w-full flex border-t pt-[15px] ">
                      <NavLink to="/product">
                        <Button
                          color="failure"
                          className="w-[150px] rounded-none mr-[15px] ml-[800px]"
                        >
                          {" "}
                          <p className=" font-sans font-semibold text-[17px]">
                            {" "}
                            Repurchase{" "}
                          </p>
                        </Button>
                      </NavLink>
                      <NavLink to="/contact">
                        <Button
                          color="light"
                          className="w-[150px] rounded-none"
                        >
                          {" "}
                          <p className=" font-sans font-semibold text-[17px]">
                            {" "}
                            Contact Us{" "}
                          </p>
                        </Button>
                      </NavLink>
                    </div>
                  </div>
                </Tabs.Item>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
      <Modal show={openModal1} onClose={() => setOpenModal1(false)}>
        <Modal.Header className="h-[50px]">
          {" "}
          <p className="mt-[-10px]">Reason For Cancellation</p>
        </Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <div className="w-[98%] h-[90px] font-sans font-normal ml-[5px] text-gray-900 border-solid border-2 border-yellow-200 flex">
              <TbBellRingingFilled
                className="h-[60px] w-[60px] ml-[10px] mr-[15px] mt-[11px]"
                color="orange"
              />
              <p className="mt-[5px] mr-[10px]">
                {" "}
                Do you know? You can update the delivery information for an
                order (only once). If you confirm cancellation, the entire order
                will be cancelled. Choose the cancellation reason that best
                suits you!
              </p>
            </div>
            <fieldset className="flex w-[98%] ml-[20px] flex-col gap-4">
              <div className="flex items-center gap-2 font-sans font-medium text-[17px] text-gray-800">
                <Radio id="1" name="0" value="1" />
                <Label
                  htmlFor="1"
                  className="font-sans font-medium text-[17px] text-gray-800"
                >
                  I want to update my delivery address/phone number
                </Label>
              </div>
              <div className="flex items-center gap-2 font-sans font-medium text-[17px] text-gray-800">
                <Radio id="2" name="0" value="2" />
                <Label
                  htmlFor="2"
                  className="font-sans font-medium text-[17px] text-gray-900"
                >
                  I want to add/change a Discount Code
                </Label>
              </div>
              <div className="flex items-center gap-2 font-sans font-medium text-[17px] text-gray-800">
                <Radio id="3" name="0" value="3" />
                <Label
                  htmlFor="3"
                  className="font-sans font-medium text-[17px] text-gray-900"
                >
                  I want to change product (note, quantity...)
                </Label>
              </div>
              <div className="flex items-center gap-2 font-sans font-medium text-[17px] text-gray-800">
                <Radio id="4" name="0" value="4" />
                <Label
                  htmlFor="4"
                  className="font-sans font-medium text-[17px] text-gray-900"
                >
                  Payment procedures are complicated
                </Label>
              </div>
              <div className="flex items-center gap-2 font-sans font-medium text-[17px] text-gray-800">
                <Radio id="5" name="0" value="5" />
                <Label
                  htmlFor="5"
                  className="font-sans font-medium text-[17px] text-gray-900"
                >
                  I don't need to buy anymore
                </Label>
              </div>
            </fieldset>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="w-full flex">
            <Button
              onClick={() => setOpenModal1(false)}
              color="light"
              className="w-[120px] rounded-none mr-[15px] ml-[332px]"
            >
              {" "}
              <p className=" font-sans font-semibold text-[15px]"> NOT NOW </p>
            </Button>
            <Button
              onClick={() => setOpenModal1(false)}
              color="failure"
              className="w-[120px] rounded-none"
            >
              {" "}
              <p className=" font-sans font-semibold text-[15px]"> CANCEL </p>
            </Button>
          </div>
        </Modal.Footer>
      </Modal>

      <Modal show={openModal2} onClose={() => setOpenModal2(false)}>
        <Modal.Body>
          <div className="space-y-6">
            <div className="w-[98%] font-sans font-normal ml-[5px] text-gray-900 ">
              <p className="mt-[5px] mr-[10px]">
                {" "}
                Please only click "Confirm" when you have received the product
                and there are no problems with the products.
              </p>
            </div>
          </div>
          <div className="w-full flex mt-[20px]">
            <Button
              onClick={() => setOpenModal2(false)}
              color="light"
              className="w-[120px] rounded-none mr-[15px] ml-[332px]"
            >
              {" "}
              <p className=" font-sans font-semibold text-[15px]"> NOT NOW </p>
            </Button>
            <Button
              onClick={() => {
                setOpenModal2(false);
                handleConfirmClick2();
              }}
              color="failure"
              className="w-[120px] rounded-none"
            >
              {" "}
              <p className=" font-sans font-semibold text-[15px]"> CONFIRM </p>
            </Button>
          </div>
        </Modal.Body>
      </Modal>

      <Modal
        show={openModal3}
        onClose={() => {
          setOpenModal3(false);
          setOpenModal2(false);
        }}
      >
        <Modal.Header className="h-[50px] pt-[10px]">
          Product Reviews
        </Modal.Header>
        <Modal.Body className="no-scrollbar">
          <AddReview />
        </Modal.Body>
        <Modal.Footer>
          <div className="w-full flex mt-[20px]">
            <Button
              onClick={() => {
                setOpenModal3(false);
                setOpenModal2(false);
              }}
              color="light"
              className="w-[120px] rounded-none mr-[15px] ml-[332px]"
            >
              {" "}
              <p className=" font-sans font-semibold text-[15px]"> NOT NOW </p>
            </Button>
            <Button
              onClick={() => {
                setOpenModal4(true);
                handleConfirmClick3();
              }}
              color="failure"
              className="w-[120px] rounded-none"
            >
              <p className=" font-sans font-semibold text-[15px]"> CONFIRM </p>
            </Button>
          </div>
        </Modal.Footer>
      </Modal>

      <Modal
        show={openModal4}
        size="md"
        onClose={() => {
          setOpenModal4(false);
          setOpenModal3(false);
          setOpenModal2(false);
          handleConfirmClick3();
        }}
        popup
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <MdCheckCircle className="mx-auto mb-[5px] h-14 w-14 text-green-500 dark:text-gray-200" />
            <h3 className="mb-5 font-sans text-[17px] font-bold text-green-500">
              Thank you for rating!
            </h3>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default OrderTracking;
