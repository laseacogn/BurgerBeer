import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { FaCheckCircle, FaShippingFast, FaComments } from "react-icons/fa";
import { Button, Tabs, Modal } from "flowbite-react";
import categorieData from "../../data/category.json";
import dataProduct from "../../data/product.json";
import { MdDescription } from "react-icons/md";
import { HiAdjustments, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import { IoAddCircleSharp } from "react-icons/io5";
import { HiHome } from "react-icons/hi";
import { GrNext } from "react-icons/gr";
import { Link } from "react-router-dom";
import Search from "../../components/Search Product/Search";


export default function ComboDetail() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState(categorieData);
  const [categorieID, setCategoryID] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    if (categorieID === "") {
      setProducts(dataProduct);
    } else {
      const filteredProducts = dataProduct.filter(
        (product) => product.categoryId === categorieID
      );
      setProducts(filteredProducts);
    }
  }, [categorieID]);

  const params = useParams();
  const productId = params.productId;
  const prd = products.find((prd) => prd.id === +productId);
  const accessToken = localStorage.getItem("token");
  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const navigate = useNavigate();
  const handleTextClick = () => {
    navigate(-1);
  };

  return (
    <div className="">
      <div className="px-20">
        <div className="max-w-[1200px] mx-auto pb-2">
           
            <div className="w-full flex justify-between items-center">
          <div className="flex">
            <HiHome className="w-[25px] h-[25px] mb-[20px] mr-[10px]" />
            <Link to="./">
              <p className="font-inter font-bold text-[20px] mb-[20px] mr-[10px]">
                {" "}
                Home{" "}
              </p>
            </Link>

            <GrNext className="w-[15px] h-[15px] mt-[10px] mr-[10px]" />
            <Link to="./product">
              <p className="font-inter font-bold text-[20px] mb-[20px]">
                {" "}
                Products
              </p>
            </Link>
            
            
            
            <GrNext className="w-[15px] h-[15px] mt-[10px] mr-[10px]" />
              <Link to="./product">
                <p className="font-inter font-bold text-[20px] mb-[20px]">
                  Combo Single 2
                </p>
              </Link>
              </div>
             <Search/>
            
          </div>
          <div className="w-full mx-auto h-full flex justify-center items-center border shadow-md rounded-lg py-4">
            <div className="flex items-center justify-center gap-14">
              <button
                className="font-inter font-bold text-center text-[18px] hover:text-red-500 transition-all"
                onClick={() => {
                  setCategoryID("");
                }}
              >
                <img
                  className="w-[70px] h-[70px] ml-[15px]"
                  style={{ borderRadius: "20px" }}
                  src={require(`../../assets/image/category/10.jpg`)}
                  alt={""}
                />
                All Product
              </button>
              {categories?.map((item, index) => (
                <div className="flex items-center justify-center" key={index}>
                  <button
                    className="font-inter font-bold text-center text-[18px] hover:text-red-500 transition-all"
                    onClick={() => {
                      setCategoryID(item.id);
                    }}
                  >
                    <img
                      className="w-[70px] h-[70px] self-center"
                      style={{ borderRadius: "20px" }}
                      src={require(`../../assets/image/category/${item.image}`)}
                      alt={item.name}
                    />
                    {item.name}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          className="max-w-[1200px] mx-auto "
          style={{ paddingLeft: "-55px", paddingRight: "5rem" }}
        >
          <div
            style={{
              position: "relative",
              width: "1200px",
              marginTop: "20px",
              marginBottom: "20px",
              background: "#FFFEFE",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              borderRadius: "15px",
            }}
          >
            <div className="w-full flex pt-[5px]">
              <img
                src={require(`../../assets/image/Burger/60.jpg`)}
                alt=""
                width={405}
                height={405}
                className="ml-24 pt-12 pb-12"
              />
              <div
                style={{
                  marginLeft: "auto",
                  marginRight: "auto",
                  marginTop: "50px",
                }}
              >
                <p
                  style={{
                    marginLeft: "3px",
                    paddingTop: "26px",
                    fontSize: "25px",
                    fontWeight: "600",
                    fontFamily: '"Inter", sans-serif;',
                  }}
                >
                  {" "}
                  COMBO SINGLE 2{" "}
                </p>

                <td className="py-4" colSpan={2}>
                  <table
                    style={{
                      width: "100%",
                      borderTop: "1px solid #dddddd",
                      borderBottom: "1px solid #dddddd",
                      marginRight: "120px",
                    }}
                  >
                    <tbody>
                      <tr>
                        <td
                          style={{ height: "16px", width: "390px" }}
                          colSpan={2}
                        ></td>
                      </tr>
                      <tr>
                        <td style={{ width: "70px" }}>PRICE</td>
                        <td>
                          <div style={{ display: "inline" }}>
                            <span
                              style={{
                                color: "#323232",
                                fontSize: "24px",
                                fontWeight: "bold",
                              }}
                            >
                              {" "}
                              126.00 USD{" "}
                            </span>
                            &nbsp;&nbsp;&nbsp;
                            <span
                              style={{
                                color: "#ee2f49",
                                fontSize: "24px",
                                fontWeight: "bold",
                              }}
                            >
                              {" "}
                              10%{" "}
                            </span>
                          </div>
                          <div style={{ clear: "both" }}></div>
                        </td>
                      </tr>
                      <tr>
                        <td style={{ paddingTop: "10px" }}>RETAIL</td>
                        <td style={{ paddingTop: "10px" }}>
                          <span style={{ textDecoration: "line-through" }}>
                            {" "}
                            140.00 USD{" "}
                          </span>
                          ( You saved 14.00 USD )
                        </td>
                      </tr>
                      <tr>
                        <td>QTY</td>
                        <td className="pt-[20px] flex ">
                          <Button
                            color="gray"
                            onClick={handleDecrease}
                            className="text-sm"
                          >
                            {" "}
                            -{" "}
                          </Button>
                          <Button color="gray"> {quantity} </Button>
                          <Button
                            color="gray"
                            onClick={handleIncrease}
                            className="text-sm"
                          >
                            {" "}
                            +{" "}
                          </Button>
                        </td>
                      </tr>
                      <tr>
                        <td>NOTE</td>
                        <td className="pt-[20px] pb-[20px] flex ">
                          <input
                            type="text"
                            placeholder="Enter your notes here..."
                            className="input input-bordered border-stone-200 w-full max-w-xs"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>

                <div className="w-full flex text-right">
                  <p>TOTAL PRICE</p>
                  <p
                    style={{
                      color: "#323232",
                      fontSize: "24px",
                      fontWeight: "bold",
                      marginTop: "-5px",
                    }}
                  >
                    {" "}
                    &nbsp;&nbsp;&nbsp; {(126 * quantity).toFixed(2)} USD
                    &nbsp;&nbsp;&nbsp;{" "}
                  </p>
                  <p> ( You saved {(14 * quantity).toFixed(2)} USD ) </p>
                </div>

                <div className="flex mt-3">
                  <Button
                    onClick={() => setOpenModal(true)}
                    className="w-[238px] h-[42.5px] bg-red-500 text-white text-center text-base font-bold leading-[42.5px]"
                  >
                    ADD TO CART
                  </Button>

                  <Modal show={openModal} onClose={() => setOpenModal(false)}>
                    <Modal.Header className="w-full h-[65px] text-justify align-center">
                      COMBO SINGLE 2
                    </Modal.Header>
                    <Modal.Body>
                      <div className="w-full mx-auto no-scrollbar">
                        <div>
                          <div className="overflow-x-auto mt-[-30px] mb-[-20px] no-scrollbar">
                            <Tabs
                              aria-label="Full width tabs"
                              style="fullWidth"
                            >
                              <Tabs.Item
                                active
                                title={
                                  <p className="font-bold text-lg">Side Dish</p>
                                }
                                icon={HiUserCircle}
                              >
                                <div className="border-b-2 border-gray-200 flex gap-4 p-3 mb-3">
                                  <img
                                    className="w-[75px] h-[75px] object-cover rounded-xl"
                                    src={require(`../../assets/image/Burger/2.jpg`)}
                                    alt={""}
                                  />
                                  <div className="w-full flex flex-col justify-between">
                                    <p
                                      className="block"
                                      style={{
                                        fontSize: "18px",
                                        fontWeight: "600",
                                        fontFamily: '"Inter", sans-serif',
                                      }}
                                    >
                                      French Fries With CLassic Seasoning
                                    </p>
                                    <p className="block flex">
                                      <p
                                        style={{
                                          marginRight: "18px",
                                          textDecoration: "line-through",
                                          fontFamily: '"Inter", sans-serif',
                                          fontSize: "18px",
                                          fontWeight: "400",
                                          color: "#707070",
                                        }}
                                      >
                                        ${(140 * quantity).toFixed(2)}
                                      </p>
                                      <span
                                        style={{
                                          color: "#000000",
                                          fontFamily: '"Inter", sans-serif',
                                          fontSize: "18px",
                                          fontWeight: "600",
                                        }}
                                      >
                                        $12.60
                                      </span>
                                    </p>
                                    <p
                                      style={{
                                        fontFamily: '"Inter", sans-serif',
                                        fontSize: "18px",
                                        fontWeight: "400",
                                        color: "#707070",
                                      }}
                                    >
                                      You saved ${(14 * quantity).toFixed(2)}{" "}
                                      USD
                                    </p>
                                    
                                  </div>
                                  <input type="radio" name="radio-1" className="radio text-right w-[25px] h-[25px] mt-[15px]" />
                                </div>

                                <div className="border-b-2 border-gray-200 flex gap-4 p-3 mb-3">
                                  <img
                                    className="w-[75px] h-[75px] object-cover rounded-xl"
                                    src={require(`../../assets/image/Burger/2.jpg`)}
                                    alt={""}
                                  />
                                  <div className="w-full flex flex-col justify-between">
                                    <p
                                      className="block"
                                      style={{
                                        fontSize: "18px",
                                        fontWeight: "600",
                                        fontFamily: '"Inter", sans-serif',
                                      }}
                                    >
                                      French Fries With Chesse Powder
                                    </p>
                                    <p className="block flex">
                                      <p
                                        style={{
                                          marginRight: "18px",
                                          textDecoration: "line-through",
                                          fontFamily: '"Inter", sans-serif',
                                          fontSize: "18px",
                                          fontWeight: "400",
                                          color: "#707070",
                                        }}
                                      >
                                        ${(140 * quantity).toFixed(2)}
                                      </p>
                                      <span
                                        style={{
                                          color: "#000000",
                                          fontFamily: '"Inter", sans-serif',
                                          fontSize: "18px",
                                          fontWeight: "600",
                                        }}
                                      >
                                        $12.60
                                      </span>
                                    </p>
                                    <p
                                      style={{
                                        fontFamily: '"Inter", sans-serif',
                                        fontSize: "18px",
                                        fontWeight: "400",
                                        color: "#707070",
                                      }}
                                    >
                                      You saved ${(14 * quantity).toFixed(2)}{" "}
                                      USD
                                    </p>
                                  </div>
                                  <input type="radio" name="radio-1" className="radio text-right w-[25px] h-[25px] mt-[15px]" />
                                </div>

                                <div className="border-b-2 border-gray-200 flex gap-4 p-3 mb-3">
                                  <img
                                    className="w-[75px] h-[75px] object-cover rounded-xl"
                                    src={require(`../../assets/image/Burger/3.jpg`)}
                                    alt={""}
                                  />
                                  <div className="w-full flex flex-col justify-between">
                                    <p
                                      className="block"
                                      style={{
                                        fontSize: "18px",
                                        fontWeight: "600",
                                        fontFamily: '"Inter", sans-serif',
                                      }}
                                    >
                                      Coleslaw Salad
                                    </p>
                                    <p className="block flex">
                                      <p
                                        style={{
                                          marginRight: "18px",
                                          textDecoration: "line-through",
                                          fontFamily: '"Inter", sans-serif',
                                          fontSize: "18px",
                                          fontWeight: "400",
                                          color: "#707070",
                                        }}
                                      >
                                        ${(140 * quantity).toFixed(2)}
                                      </p>
                                      <span
                                        style={{
                                          color: "#000000",
                                          fontFamily: '"Inter", sans-serif',
                                          fontSize: "18px",
                                          fontWeight: "600",
                                        }}
                                      >
                                        $12.60
                                      </span>
                                    </p>
                                    <p
                                      style={{
                                        fontFamily: '"Inter", sans-serif',
                                        fontSize: "18px",
                                        fontWeight: "400",
                                        color: "#707070",
                                      }}
                                    >
                                      You saved ${(14 * quantity).toFixed(2)}{" "}
                                      USD
                                    </p>
                                  </div>
                                  <input type="radio" name="radio-1" className="radio text-right w-[25px] h-[25px] mt-[15px]" />
                                </div>

                              </Tabs.Item>
                              <Tabs.Item
                                title={
                                  <p className="font-bold text-lg">Main Dish</p>
                                }
                                icon={MdDashboard}
                              >
                                <div className="no-scrollbar"> 
                               <div className="border-b-2 border-gray-200 flex gap-4 p-3 mb-3">
                                  <img
                                    className="w-[95px] h-[95px] object-cover rounded-xl "
                                    src={require(`../../assets/image/Burger/10.jpg`)}
                                    alt={""}
                                  />
                                  <div className="w-full flex flex-col justify-between">
                                    <p
                                      className="block"
                                      style={{
                                        fontSize: "18px",
                                        fontWeight: "600",
                                        fontFamily: '"Inter", sans-serif',
                                      }}
                                    >
                                      Classic Burger
                                    </p>
                                     <p
                                        style={{
                                          marginRight: "18px",
                                          fontFamily: '"Inter", sans-serif',
                                          fontSize: "15px",
                                          fontWeight: "400",
                                          color: "#707070",
                                        }}
                                      >
                                        Beef party, cheese, homemade pickle cucumber, lettuce, red onion, tomato
                                      </p>
                                    <p className="block flex">
                                      <p
                                        style={{
                                          marginRight: "18px",
                                          textDecoration: "line-through",
                                          fontFamily: '"Inter", sans-serif',
                                          fontSize: "18px",
                                          fontWeight: "400",
                                          color: "#707070",
                                        }}
                                      >
                                        ${(80 * quantity).toFixed(2)}
                                      </p>
                                      <span
                                        style={{
                                          color: "#000000",
                                          fontFamily: '"Inter", sans-serif',
                                          fontSize: "18px",
                                          fontWeight: "600",
                                        }}
                                      >
                                        $72.00
                                      </span>
                                    </p>
                                  </div>
                                   <input type="radio" name="radio-1" className="radio text-right w-[25px] h-[25px] mt-[25px]" />
                                
                                </div>

                                 <div className="border-b-2 border-gray-200 flex gap-4 p-3 mb-3">
                                  <img
                                    className="w-[95px] h-[95px] object-cover rounded-xl "
                                    src={require(`../../assets/image/Burger/12.jpg`)}
                                    alt={""}
                                  />
                                  <div className="w-full flex flex-col justify-between">
                                    <p
                                      className="block"
                                      style={{
                                        fontSize: "18px",
                                        fontWeight: "600",
                                        fontFamily: '"Inter", sans-serif',
                                      }}
                                    >
                                      Japanese Chicken Burger
                                    </p>
                                     <p
                                        style={{
                                          marginRight: "18px",
                                          fontFamily: '"Inter", sans-serif',
                                          fontSize: "15px",
                                          fontWeight: "400",
                                          color: "#707070",
                                        }}
                                      >
                                        Japanese style, marinated chicken things, iceberg, red onion, tomato
                                      </p>
                                    <p className="block flex">
                                      <p
                                        style={{
                                          marginRight: "18px",
                                          textDecoration: "line-through",
                                          fontFamily: '"Inter", sans-serif',
                                          fontSize: "18px",
                                          fontWeight: "400",
                                          color: "#707070",
                                        }}
                                      >
                                        ${(80 * quantity).toFixed(2)}
                                      </p>
                                      <span
                                        style={{
                                          color: "#000000",
                                          fontFamily: '"Inter", sans-serif',
                                          fontSize: "18px",
                                          fontWeight: "600",
                                        }}
                                      >
                                        $64.00
                                      </span>
                                    </p>
                                  </div>
                                  <input type="radio" name="radio-1" className="radio text-right w-[25px] h-[25px] mt-[25px]" />
                                </div>

                                <div className="border-b-2 border-gray-200 flex gap-4 p-3 mb-3">
                                  <img
                                    className="w-[95px] h-[95px] object-cover rounded-xl "
                                    src={require(`../../assets/image/Burger/11.jpg`)}
                                    alt={""}
                                  />
                                  <div className="w-full flex flex-col justify-between">
                                    <p
                                      className="block"
                                      style={{
                                        fontSize: "18px",
                                        fontWeight: "600",
                                        fontFamily: '"Inter", sans-serif',
                                      }}
                                    >
                                      Fries Fish Burger
                                    </p>
                                     <p
                                        style={{
                                          marginRight: "18px",
                                          fontFamily: '"Inter", sans-serif',
                                          fontSize: "15px",
                                          fontWeight: "400",
                                          color: "#707070",
                                        }}
                                      >
                                        Yellow tail catfish coleslaw, homemade pickle cucumber, lecttuce, red onion, tomato
                                      </p>
                                    <p className="block flex">
                                      <p
                                        style={{
                                          marginRight: "18px",
                                          textDecoration: "line-through",
                                          fontFamily: '"Inter", sans-serif',
                                          fontSize: "18px",
                                          fontWeight: "400",
                                          color: "#707070",
                                        }}
                                      >
                                        ${(80 * quantity).toFixed(2)}
                                      </p>
                                      <span
                                        style={{
                                          color: "#000000",
                                          fontFamily: '"Inter", sans-serif',
                                          fontSize: "18px",
                                          fontWeight: "600",
                                        }}
                                      >
                                        $76.00
                                      </span>
                                    </p>
                                  </div>
                                  <input type="radio" name="radio-1" className="radio text-right w-[25px] h-[25px] mt-[25px]" />
                                </div>

                                <div className="border-b-2 border-gray-200 flex gap-4 p-3 mb-3">
                                  <img
                                    className="w-[95px] h-[95px] object-cover rounded-xl "
                                    src={require(`../../assets/image/Burger/15.jpg`)}
                                    alt={""}
                                  />
                                  <div className="w-full flex flex-col justify-between">
                                    <p
                                      className="block"
                                      style={{
                                        fontSize: "18px",
                                        fontWeight: "600",
                                        fontFamily: '"Inter", sans-serif',
                                      }}
                                    >
                                      Bacon & Egg Grilled Cheese Sandwich
                                    </p>
                                     <p
                                        style={{
                                          marginRight: "18px",
                                          fontFamily: '"Inter", sans-serif',
                                          fontSize: "15px",
                                          fontWeight: "400",
                                          color: "#707070",
                                        }}
                                      >
                                        Fries egg, bacon, caramelized onion, mozarella, cheddar cheese
                                      </p>
                                    <p className="block flex">
                                      <p
                                        style={{
                                          marginRight: "18px",
                                          textDecoration: "line-through",
                                          fontFamily: '"Inter", sans-serif',
                                          fontSize: "18px",
                                          fontWeight: "400",
                                          color: "#707070",
                                        }}
                                      >
                                        ${(80 * quantity).toFixed(2)}
                                      </p>
                                      <span
                                        style={{
                                          color: "#000000",
                                          fontFamily: '"Inter", sans-serif',
                                          fontSize: "18px",
                                          fontWeight: "600",
                                        }}
                                      >
                                        $68.00
                                      </span>
                                    </p>
                                  </div>
                                  <input type="radio" name="radio-1" className="radio text-right w-[25px] h-[25px] mt-[25px]" />
                                </div>
                            </div>

                                
                              </Tabs.Item>
                              <Tabs.Item
                                title={
                                  <p className="font-bold text-lg">Drink</p>
                                }
                                icon={HiAdjustments}
                              >
                                <div className="border-b-2 border-gray-200 flex gap-4 p-3 mb-3">
                                  <img
                                    className="w-[75px] h-[75px] object-cover rounded-xl"
                                    src={require(`../../assets/image/Burger/47.jpg`)}
                                    alt={""}
                                  />
                                  <div className="w-full flex flex-col justify-between">
                                    <p
                                      className="block"
                                      style={{
                                        fontSize: "18px",
                                        fontWeight: "600",
                                        fontFamily: '"Inter", sans-serif',
                                      }}
                                    >
                                      Coca
                                    </p>
                                    <p className="block flex">
                                      <p
                                        style={{
                                          marginRight: "18px",
                                          textDecoration: "line-through",
                                          fontFamily: '"Inter", sans-serif',
                                          fontSize: "18px",
                                          fontWeight: "400",
                                          color: "#707070",
                                        }}
                                      >
                                        ${(20 * quantity).toFixed(2)}
                                      </p>
                                      <span
                                        style={{
                                          color: "#000000",
                                          fontFamily: '"Inter", sans-serif',
                                          fontSize: "18px",
                                          fontWeight: "600",
                                        }}
                                      >
                                        $19.00
                                      </span>
                                    </p>
                                    <p
                                      style={{
                                        fontFamily: '"Inter", sans-serif',
                                        fontSize: "18px",
                                        fontWeight: "400",
                                        color: "#707070",
                                      }}
                                    >
                                      You saved ${(1 * quantity).toFixed(2)}{" "}
                                      USD
                                    </p>
                                    
                                  </div>
                                  <input type="radio" name="radio-1" className="radio text-right w-[25px] h-[25px] mt-[15px]" />
                                </div>

                                <div className="border-b-2 border-gray-200 flex gap-4 p-3 mb-3">
                                  <img
                                    className="w-[75px] h-[75px] object-cover rounded-xl"
                                    src={require(`../../assets/image/Burger/49.jpg`)}
                                    alt={""}
                                  />
                                  <div className="w-full flex flex-col justify-between">
                                    <p
                                      className="block"
                                      style={{
                                        fontSize: "18px",
                                        fontWeight: "600",
                                        fontFamily: '"Inter", sans-serif',
                                      }}
                                    >
                                      Pepsi
                                    </p>
                                    <p className="block flex">
                                      <p
                                        style={{
                                          marginRight: "18px",
                                          textDecoration: "line-through",
                                          fontFamily: '"Inter", sans-serif',
                                          fontSize: "18px",
                                          fontWeight: "400",
                                          color: "#707070",
                                        }}
                                      >
                                        ${(20 * quantity).toFixed(2)}
                                      </p>
                                      <span
                                        style={{
                                          color: "#000000",
                                          fontFamily: '"Inter", sans-serif',
                                          fontSize: "18px",
                                          fontWeight: "600",
                                        }}
                                      >
                                        $19.00
                                      </span>
                                    </p>
                                    <p
                                      style={{
                                        fontFamily: '"Inter", sans-serif',
                                        fontSize: "18px",
                                        fontWeight: "400",
                                        color: "#707070",
                                      }}
                                    >
                                      You saved ${(1 * quantity).toFixed(2)}{" "}
                                      USD
                                    </p>
                                  </div>
                                  <input type="radio" name="radio-1" className="radio text-right w-[25px] h-[25px] mt-[15px]" />
                                </div>

                                <div className="border-b-2 border-gray-200 flex gap-4 p-3 mb-3">
                                  <img
                                    className="w-[75px] h-[75px] object-cover rounded-xl"
                                    src={require(`../../assets/image/Burger/50.jpg`)}
                                    alt={""}
                                  />
                                  <div className="w-full flex flex-col justify-between">
                                    <p
                                      className="block"
                                      style={{
                                        fontSize: "18px",
                                        fontWeight: "600",
                                        fontFamily: '"Inter", sans-serif',
                                      }}
                                    >
                                      7up
                                    </p>
                                    <p className="block flex">
                                      <p
                                        style={{
                                          marginRight: "18px",
                                          textDecoration: "line-through",
                                          fontFamily: '"Inter", sans-serif',
                                          fontSize: "18px",
                                          fontWeight: "400",
                                          color: "#707070",
                                        }}
                                      >
                                        ${(20 * quantity).toFixed(2)}
                                      </p>
                                      <span
                                        style={{
                                          color: "#000000",
                                          fontFamily: '"Inter", sans-serif',
                                          fontSize: "18px",
                                          fontWeight: "600",
                                        }}
                                      >
                                        $19.00
                                      </span>
                                    </p>
                                    <p
                                      style={{
                                        fontFamily: '"Inter", sans-serif',
                                        fontSize: "18px",
                                        fontWeight: "400",
                                        color: "#707070",
                                      }}
                                    >
                                      You saved ${(1 * quantity).toFixed(2)}{" "}
                                      USD
                                    </p>
                                  </div>
                                  <input type="radio" name="radio-1" className="radio text-right w-[25px] h-[25px] mt-[15px]" />
                                </div>
                              </Tabs.Item>
                            </Tabs>
                          </div>
                        </div>
                      </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button type="button" color="dark" className="w-full" onClick={() => setOpenModal(false)}>
                            <p className="text-lg"> ADD TO CART </p>
                        </Button>
                      
                    </Modal.Footer>
                  </Modal>

                  <div
                    style={{
                      width: "238px",
                      height: "42.5px",
                      backgroundColor: "white",
                      color: "black",
                      border: "0.5px solid black",
                      textAlign: "center",
                      fontSize: "16px",
                      fontWeight: "bold",
                      lineHeight: "42.5px",
                      cursor: "pointer",
                      marginLeft: "30px",
                    }}
                  >
                    {" "}
                    ADD TO WISH LIST{" "}
                  </div>
                </div>

                <div style={{ display: "flex", paddingTop: "12px" }}>
                  <p
                    style={{
                      fontFamily: '"Roboto", sans-serif',
                      color: "#323232",
                      fontSize: "13px",
                        marginBottom:"20px"
                    }}
                  >
                    {" "}
                    &gt; 100% Authentic Product Guarantee{" "}
                  </p>
                  <p className="text-green-500 ml-1">
                    {" "}
                    <FaCheckCircle />{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-[1200px] mx-auto ">
          <div
            style={{
              width: "1200px",
              marginTop: "20px",
              marginBottom: "20px",
              background: "#FFFEFE",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              borderRadius: "15px",
            }}
          >
            <Tabs aria-label="Tabs with icons" style="underline">
              <Tabs.Item
                active
                title={<p className="font-bold text-lg">Description</p>}
                icon={MdDescription}
              >
                <p className="ml-[20px] mr-[20px] font-normal text-base font-sans">
                  {" "}
                  For the Combo SINGLE 2 at Burger N' Beer, envision a
                  delectable meal designed for one. Imagine sinking your teeth
                  into a succulent grilled chicken sandwich, featuring tender,
                  juicy chicken breast grilled to perfection and served on a
                  toasted bun. Topped with crisp lettuce, ripe tomato slices,
                  and creamy mayonnaise, this sandwich is a delightful symphony
                  of flavors and textures. Accompanied by a generous portion of
                  crispy fries and your choice of dipping sauce, this combo
                  promises to satisfy your cravings and leave you feeling fully
                  satisfied. Whether you're dining solo or grabbing a quick
                  bite, the Combo SINGLE 2 is the perfect choice for a delicious
                  and satisfying meal.
                </p>
              </Tabs.Item>
              <Tabs.Item
                title={<p className="font-bold text-lg">Shipping</p>}
                icon={FaShippingFast}
              >
                <p className="ml-[20px] mr-[20px] font-normal text-base font-sans">
                  Burger N' Beer offers two different methods of transportation
                  to ensure that everyone can enjoy their burgers in the most
                  convenient way possible:
                  <br />
                  1.{" "}
                  <span className="font-medium text-gray-800 dark:text-white">
                    Delivery
                  </span>
                  : For customers who want to enjoy their burgers at home or at
                  work, Burger N Beer provides fast and convenient delivery
                  service. Customers can place orders through the mobile app or
                  online on the store's website and select the delivery option.
                  Delivery drivers will deliver the products to the designated
                  address, saving customers time and effort.
                  <br />
                  2.{" "}
                  <span className="font-medium text-gray-800 dark:text-white">
                    Self Pick-up
                  </span>
                  : For those who want to save time waiting and want to have
                  full control over the pickup time, Burger N Beer offers a
                  self-pickup service. Customers can pre-order through the
                  mobile app or online, then come to the store at the
                  predetermined time to pick up their food without having to
                  wait.
                </p>
              </Tabs.Item>
              <Tabs.Item
                title={<p className="font-bold text-lg">Review</p>}
                icon={FaComments}
              >
                <p className="ml-[20px] mr-[20px] font-normal text-base font-sans"> </p>
              </Tabs.Item>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
