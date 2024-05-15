import React, { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { FaCheckCircle, FaShippingFast, FaComments } from "react-icons/fa";
import { Button, Tabs } from "flowbite-react";
import categorieData from "../../data/category.json";
import dataProduct from "../../data/product.json";
import { MdDescription } from "react-icons/md";
import { HiHome } from "react-icons/hi";
import { GrNext } from "react-icons/gr";
import { NavLink } from "react-router-dom";
import Revieww from "./Revieww";


export default function ProductDT2() {
  useEffect(() => {
  window.scrollTo(0, 0);
}, []);

useEffect(() => {
  window.scrollTo(0, 0);
}, []);

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState(categorieData);
  const [categorieID, setCategoryID] = useState("");
  const [quantity, setQuantity] = useState(1);
  const showAlert1 = () => {
    alert(
      "Please log in to add products to cart!"
    );
  };
  const showAlert2 = () => {
    alert(
      "Please log in to add products to wishlist!"
    );
  };

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
            <NavLink to="/">
              <p className="font-inter font-bold text-[20px] mb-[20px] mr-[10px]">
                {" "}
                Home{" "}
              </p>
            </NavLink>

            <GrNext className="w-[15px] h-[15px] mt-[10px] mr-[10px]" />
            <NavLink to="/shopp">
              <p className="font-inter font-bold text-[20px] mb-[20px] mr-[10px]">
                {" "}
                Shop
              </p>
            </NavLink>
              <GrNext className="w-[15px] h-[15px] mt-[10px] mr-[10px]" />
            <NavLink to="/productt">
              <p className="font-inter font-bold text-[20px] mb-[20px] mr-[10px]">
                {" "}
                Menu
              </p>
            </NavLink>
            <GrNext className="w-[15px] h-[15px] mt-[10px] mr-[10px]" />
            {prd && (
                <p className="font-inter font-bold text-[20px] mb-[20px]">
                  {" "}
                  {prd.name}
                </p>
            )}
            </div>
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
            <div className="w-full flex pt-[-15px]">
              {prd && (
                <img
                  src={require(`../../assets/image/Burger/${prd.image}`)}
                  alt=""
                  width={405}
                  height={405}
                  className="ml-24 pt-12 pb-12 rounded-lg"
                />
              )}
              <div
                style={{
                  marginLeft: "auto",
                  marginRight: "auto",
                  marginTop: "20px",
                }}
              >
                {prd && (
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
                    {prd.name}{" "}
                  </p>
                )}
                {prd && (
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
                                {(
                                  (prd.originalPrice *
                                    (100 - prd.discountPercent)) /
                                  100
                                ).toFixed(3)} VND{" "}
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
                                {prd.discountPercent}%{" "}
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
                              {prd.originalPrice}.000 VND{" "}
                            </span>
                            ( You saved{" "}
                            {(
                              prd.originalPrice -
                              (prd.originalPrice *
                                (100 - prd.discountPercent)) /
                                100
                            ).toFixed(3)} VND )
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
                )}
                {prd && (
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
                      &nbsp;&nbsp;&nbsp;{" "}
                      {(
                        ((prd.originalPrice * (100 - prd.discountPercent)) /
                          100) *
                        quantity
                      ).toFixed(3)} VND &nbsp;&nbsp;&nbsp;{" "}
                    </p>
                    <p>
                      {" "}
                      ( You saved{" "}
                      {(
                        (prd.originalPrice -
                          (prd.originalPrice * (100 - prd.discountPercent)) /
                            100) *
                        quantity
                      ).toFixed(3)}{" "}
                      VND ){" "}
                    </p>
                  </div>
                )}
                {prd && (
                  <div className="flex mt-3">
                    <Button className="rounded-none"
                      style={{
                        width: "238px",
                        height: "42.5px",
                        backgroundColor: "#ee2f49",
                        color: "#FFFFFF",
                        textAlign: "center",
                        fontSize: "16px",
                        fontWeight: "bold",
                        lineHeight: "42.5px",
                        cursor: "pointer",
                      }}
                       onClick={() => {
              showAlert1();
            }}
                    >
                      {" "}
                      ADD TO CART{" "}
                    </Button>
                    <Button className="rounded-none"
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
                      onClick={() => {
              showAlert2();
            }}
                    >
                      {" "}
                      ADD TO WISH LIST{" "}
                    </Button>
                  </div>
                )}
                {prd && (
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
                )}
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
                {prd && (
                  <p className="ml-[20px] mr-[20px] font-normal text-base font-sans">
                    {" "}
                    {prd.description}
                  </p>
                )}
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
                <Revieww/>
                <p className="ml-[20px] mr-[20px] font-normal text-base font-sans"></p>
              </Tabs.Item>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
