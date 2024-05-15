import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { FaCheckCircle, FaShippingFast, FaComments } from "react-icons/fa";
import { Button, Tabs, Modal, Label, TextInput } from "flowbite-react";

import categorieData from "../../data/category.json";
import dataProduct from "../../data/product.json";

import { MdDescription } from "react-icons/md";
import { HiHome } from "react-icons/hi";
import { GrNext } from "react-icons/gr";
import { NavLink } from "react-router-dom";
import Revieww from "./Revieww";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../config/firebase.config";
import { v4 } from "uuid";

export default function ProductDT3() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState(categorieData);

  const [categorieID, setCategoryID] = useState("");
  const [quantity, setQuantity] = useState([dataProduct]);

  const [openModal, setOpenModal] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => { window.scrollTo(0, 0); }, []);
  //lọc 
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

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const params = useParams();
  const productId = params.productId;
  const [prd, setPrd] = useState(null);

  useEffect(() => {
    if (Array.isArray(products)) {
      const flagData = products.find((product) => product && product.id === +productId);
      setPrd(flagData);
    }
  }, [products, productId]);


  const navigate = useNavigate();
  const handleTextClick = () => {
    navigate(-1);
  };

  const [ID, setID] = useState("");
  const [Name, setName] = useState("");
  const [Category, setCategory] = useState("");
  const [BasisPrice, setBasisPrice] = useState("");
  const [SalePrice, setSalePrice] = useState("");
  const [Discount, setDiscount] = useState("");
  const [Description, setDescription] = useState("");
  const [imageUploads, setImageUploads] = useState();
  const [imageUrl, setImageUrl] = useState();

  const uploadFile = async () => {
    try {
      const imageId = v4();
      const imageRef = ref(storage, `/Blog2/${imageId}`);
      const snapshot = await uploadBytes(imageRef, imageUploads);
      const url = await getDownloadURL(snapshot.ref);
      return url;
    } catch (error) {
      console.error("Error uploading file:", error);
      throw error;
    }
  };

  const handleChange = (e) => {
    const file = e.target.files[0];
    setImageUploads(file);
  };

  const handleUpload = async () => {
    try {
      const url = await uploadFile();
      setImageUrl(url);
      return url;
    } catch (error) {
      console.error("Error uploading file to Firebase:", error);
    }
  };

  const updatedProducts = async () => {
    if (
      !ID ||
      !Name ||
      !Category ||
      !BasisPrice ||
      !SalePrice ||
      !Discount ||
      !Description
    ) {
      alert("Please fill in all fields");
      return;
    }

    const img = await handleUpload();
    const parsedPrice4 = parseFloat(BasisPrice);
    const parsedPrice5 = parseFloat(SalePrice);
    const parsedPrice6 = parseFloat(Discount);

    if (isNaN(parsedPrice4) || isNaN(parsedPrice5) || isNaN(parsedPrice6)) {
      alert("Please enter valid prices");
      return;
    } else {
      alert("Update product successfully!");
    }

    console.log(prd);
    const updatedProduct = {
      id: ID,
      name: Name,
      category: Category,
      originalPrice: parsedPrice4,
      discountPercent: parsedPrice6,
      description: Description,
      image: img,
    };
    setPrd(updatedProduct)
    setOpenModal(false);


  };

  const openEditModal = (index) => {
    setEditIndex(index);
    const { id, name, category, originalPrice, discountPercent, description } =
      products[index];
    setID(id);
    setName(name);
    setCategory(category);
    setBasisPrice(originalPrice);
    setDiscount(discountPercent);
    setDescription(description);
    setOpenModal(true);
  };

  return (
    <div className="">
      <div className="px-20">
        <div className="max-w-[1200px] mx-auto pb-2">
          <div className="w-full flex justify-between items-center">
            <div className="flex">
              <HiHome className="w-[25px] h-[25px] mb-[20px] mr-[10px]" />
              <NavLink to="/homee">
                <p className="font-inter font-bold text-[20px] mb-[20px] mr-[10px]">
                  {" "}
                  Home{" "}
                </p>
              </NavLink>

              <GrNext className="w-[15px] h-[15px] mt-[10px] mr-[10px]" />
              <NavLink to="/shoppp">
              <p className="font-inter font-bold text-[20px] mb-[20px] mr-[10px]">
                {" "}
                Shop
              </p>
            </NavLink>

            <GrNext className="w-[15px] h-[15px] mt-[10px] mr-[10px]" />
            <NavLink to="/productt_manage">
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
                <div>
                  {parseInt(prd.id) > 69 ? (
                    <div>
                      <img
                        className="ml-24 pt-12 pb-12 rounded-lg"
                        width={405}
                        height={405}
                        src={prd.image}
                        alt={prd.name}
                      />
                    </div>
                  ) : (
                    <div>
                      <img
                        src={require(`../../assets/image/Burger/${prd.image}`)}
                        alt=""
                        width={405}
                        height={405}
                        className="ml-24 pt-12 pb-12 rounded-lg"
                      />
                    </div>
                  )}
                </div>
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
                          <td style={{ width: "70px" }}>CAT</td>
                          <td>
                            <div style={{ display: "inline" }}>
                              <span>
                                {" "}
                                {prd.categoryName}{" "}
                              </span>
                            </div>
                            <div style={{ clear: "both" }}></div>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "70px" }} className="pt-[10px]">PRICE</td>
                          <td>
                            <div style={{ display: "inline" }} className="pt-[25px]">
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
                                ).toFixed(3)}{" "}
                                VND{" "}
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
                          <td style={{ paddingTop: "10px" }} >RETAIL</td>
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
                            ).toFixed(3)}{" "}
                            VND )
                          </td>
                        </tr>
                        
                        <tr>
                          <td className="pt-[10px] pb-[20px] ">QTY</td>
                          <td className=" pt-[10px] pb-[20px] flex ">
                            <p>{prd.quantity} items</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                )}
                {prd && (
                  <div className="w-full flex text-right">
                    <p>STATUS</p>
                    <p
                      style={{
                        fontSize: "24px",
                        fontWeight: "bold",
                        marginTop: "-7px", marginLeft:"20px",
                        color: prd.quantity > 10 ? "green" : "red",
                      }}
                    >
                      {" "}
                       {prd.quantity > 10 ? "In Stock" : "Out of Stock"}{" "}
                      {" "}
                      
                    </p>
                    
                  </div>
                )}

                <div className="flex mt-3">
                  <Button
                    className="rounded-none"
                    style={{
                      width: "510px",
                      height: "42.5px",
                      backgroundColor: "#ee2f49",
                      color: "#FFFFFF",
                      textAlign: "center",
                      fontSize: "18px",
                      fontWeight: "bold",
                      lineHeight: "42.5px",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      if (products.length > 0) {
                        const index = 0; 
                        setOpenModal(true);
                        openEditModal(index);
                      }
                    }}
                  >
                    {" "}
                    EDIT PRODUCT{" "}
                  </Button>
                </div>
                {prd && (
                  <div style={{ display: "flex", paddingTop: "12px" }}>
                    <p
                      style={{
                        fontFamily: '"Roboto", sans-serif',
                        color: "#323232",
                        fontSize: "13px",
                        marginBottom: "20px",
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
                <Revieww />
                <p className="ml-[20px] mr-[20px] font-normal text-base font-sans"></p>
              </Tabs.Item>
            </Tabs>
          </div>
        </div>
      </div>

      <Modal
        show={openModal}
        onClose={() => setOpenModal(false)}
        className="no-scrollbar"
      >
        <Modal.Header className="h-[50px] pt-[10px]">Edit Product</Modal.Header>
        <Modal.Body className="no-scrollbar">
          <div className="w-full mx-auto flex grid grid-cols-2 justify-between items-center">
            <div className="w-[95%]">
              <div className="max-w">
                <div className="mb-2 block">
                  <Label
                    htmlFor="productId"
                    value="Product ID"
                    className="font-sans font-medium text-[15px] text-black"
                  />
                </div>
                <TextInput
                  id="productId"
                  onChange={(e) => {
                    setID(e.target.value);
                  }}
                  required
                />
              </div>
              <div className="mt-2">
                <div className="mb-2 block">
                  <Label
                    htmlFor="productName"
                    value="Product Name"
                    className="font-sans font-medium text-[15px] text-black"
                  />
                </div>
                <TextInput
                  id="productName"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  required
                />
              </div>
              <div className="mt-2">
                <div className="mb-2 block">
                  <Label
                    htmlFor="category"
                    value="Category"
                    className="font-sans font-medium text-[15px] text-black"
                  />
                </div>
                <select
                  id="category"
                  onChange={(e) => {
                    setCategory(e.target.value);
                  }}
                  required
                  className="form-select border-slate-300 rounded-lg bg-slate-50 w-full h-[43px]"
                >
                  <option disabled value="">
                    --Select Category--
                  </option>
                  {categories.map((item, index) => (
                    <option value={item.name} key={index}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mt-2">
                <div className="mb-2 block">
                  <Label
                    htmlFor="productImage"
                    value="Product Image"
                    className="font-sans font-medium text-[15px] text-black"
                  />
                </div>
                <input
                  id="productImage"
                  type="file"
                  className="file-input file-input-bordered w-full max-w-xs"
                  multiple
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="w-[95%] mt-[-5px]">
              <div className="max-w">
                <div className="mb-2 block">
                  <Label
                    htmlFor="basisPrice"
                    value="Basis Price"
                    className="font-sans font-medium text-[15px] text-black"
                  />
                </div>
                <TextInput
                  id="basisPrice"
                  onChange={(e) => {
                    setBasisPrice(e.target.value);
                  }}
                  required
                />
              </div>
              <div className="mt-2">
                <div className="mb-2 block">
                  <Label
                    htmlFor="discount"
                    value="Discount (%)"
                    className="font-sans font-medium text-[15px] text-black"
                  />
                </div>
                <TextInput
                  id="discount"
                  onChange={(e) => {
                    setDiscount(e.target.value);
                  }}
                  required
                />
              </div>
              <div className="mt-2">
                <div className="mb-2 block">
                  <Label
                    htmlFor="quantity"
                    value="Quantity"
                    className="font-sans font-medium text-[15px] text-black"
                  />
                </div>
                <TextInput
                  id="quantity"
                  onChange={(e) => {
                    setSalePrice(e.target.value);
                  }}
                  required
                />
              </div>
              <div className="mt-2">
                <div className="mb-2 block">
                  <Label
                    htmlFor="productDescription"
                    value="Description"
                    className="font-sans font-medium text-[15px] text-black"
                  />
                </div>
                <TextInput
                  id="productDescription"
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                  required
                />
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="h-[60px]">
          <Button
            onClick={updatedProducts}
            color="dark"
            className="rounded-none"
          >
            <p className="font-sans font-semibold text-[15px] text-white">
              Accept
            </p>
          </Button>
          <Button
            onClick={() => setOpenModal(false)}
            className="rounded-none"
            color="light"
          >
            <p className="font-sans font-semibold text-[15px] text-gray-900">
              Decline
            </p>
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}