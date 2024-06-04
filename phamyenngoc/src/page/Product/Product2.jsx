import React, { useEffect, useState } from "react";
import categorieData from "../../data/category.json";
import dataProduct from "../../data/product.json";
import { Carousel } from "flowbite-react";
import { HiHome } from "react-icons/hi";
import { GrNext } from "react-icons/gr";
import { NavLink } from "react-router-dom";
import popularPrdData from "../../data/popularPrd.json";
import rcmData from "../../data/rcmPrd.json";

import { IoHeartSharp, IoTime  } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { FaShop, FaPhoneVolume } from "react-icons/fa6";


const Product2 = () => {

  const [isOpen, setIsOpen] = useState(false);
 useEffect(() => {
    const now = new Date();
    const currentHour = now.getHours();
    const openingHour = 7;
    const closingHour = 22;

    setIsOpen(currentHour >= openingHour && currentHour < closingHour);
  }, []);

  const showAlert1 = () => {
    alert("Please log in to add products to wishlist!");
  };

  const showAlert2 = () => {
    alert("Please log in to add products to cart!");
  };

  const [products, setProducts] = useState([]);
  const [popularPrd, setPopularPrd] = useState([]);
  const [rcmPrd, setRcmPrd] = useState([]);
  const [categories, setCategories] = useState(categorieData);
  const [categorieID, setCategoryID] = useState("");
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setPopularPrd(popularPrdData);
    setRcmPrd(rcmData)
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const totalProducts = dataProduct.length;
        const itemsPerPage = 12;
        const pages = Math.ceil(totalProducts / itemsPerPage);
        setTotalPages(pages);
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = Math.min(startIndex + itemsPerPage, totalProducts);
        let filteredProducts = dataProduct.slice(startIndex, endIndex);

        if (searchTerm) {
          filteredProducts = dataProduct.filter((product) =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
          );
        }

        setProducts(filteredProducts);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [categorieID, currentPage, searchTerm]);

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

  const handleSearch = (value) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };
  const handleCategorySelect = (categoryId) => {
    setCategoryID(categoryId);
    setCurrentPage(1); 
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
    <div>
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
            <NavLink to="/producttt">
              <p className="font-inter font-bold text-[20px] mb-[20px]">
                {" "}
                Shop
              </p>
            </NavLink>
          </div>

        </div>

      
         <div className="w-full flex justify-between items-center mt-[-50px] mb-[-40px]">
      <Carousel className="w-[750px] h-56 sm:h-64 xl:h-80 2xl:h-96" leftControl=" " rightControl=" " >
        <img src={require(`../../assets/image/aboutus/5.jpeg`)} alt="..." />
        <img src={require(`../../assets/image/aboutus/6.jpeg`)} alt="..." />
        <img src={require(`../../assets/image/aboutus/7.png`)} alt="..." />
        <img src={require(`../../assets/image/aboutus/8.png`)} alt="..." />
        <img src={require(`../../assets/image/aboutus/9.png`)} alt="..." />
      </Carousel>
      <div className="w-[420px] h-[285px] bg-[#FEFFFF] shadow-lg">
        <p className="text-center font-sans text-[20px] font-bold text-gray-900 mt-[22px]"> We welcome you to Burger N' Beer </p>
        <div className=" flex font-sans text-[18px] font-semibold text-gray-900 ml-[40px]"> 
          <FaShop className="mr-[7px] mt-[25px]"/> 
          <p className="mt-[20px]"> 31 An Thuong 4, Da Nang</p>
        </div>
        <div className=" flex font-sans text-[18px] font-semibold text-gray-900 ml-[40px]"> 
          <IoTime className="mr-[7px] mt-[15px]"/> 
          <p className="mt-[10px]" style={{ color: isOpen ? 'green' : 'red' }}>
        {isOpen ? 'Opened: 07:00 - 22:30' : 'Closed: 07:00 - 22:30'}
      </p>
        </div>
        <div className=" flex font-sans text-[18px] font-semibold text-gray-900 ml-[40px]"> 
          <FaPhoneVolume className="mr-[7px] mt-[15px]"/> 
          <p className="mt-[10px]"> (+84) 564751400</p>
        </div>
        <p className=" w-[400px] ml-[10px] mt-[20px] font-sans text-[15px] font-light italic text-gray-900 text-center">
          “People have a hard time letting go of their suffering. Out of a fear of the unknown, they prefer suffering that is familiar.”
        </p>
        <p className=" w-[400px] ml-[10px] mt-[5px] font-sans text-[15px] font-light text-gray-900 text-center">
          ___Thich Nhat Hanh___
        </p>
      </div>
    </div>

        <p className="font-sans font-bold text-[20px] mt-[15px]"> MENU </p>
        <div className="w-full mx-auto h-full flex justify-center items-center py-4">
          <div className="flex items-center justify-center gap-8">
            {categories?.map((item, index) => (
              <div className="flex items-center justify-center" key={index}>
                <NavLink to="/productt">
                <button
                  className="font-inter font-bold text-center text-[18px] hover:text-red-500 transition-all"
                
                  onClick={() => handleCategorySelect(item.ID)}
                >
                  <div className="card card-compact w-[122px]  bg-base-100 shadow-xl">
                    <figure>
                      <img
                        className="w-[122px] h-[122px] self-center"
                        style={{ borderRadius: "0px" }}
                        src={require(`../../assets/image/category/${item.image}`)}
                        alt={item.name}
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="font-inter font-bold text-center text-[20px] hover:text-red-500 transition-all">
                        {item.name}
                      </h2>
                    </div>
                  </div>
                </button></NavLink>
              </div>
            ))}
          </div>
        </div>

       
         <p className="font-sans font-bold text-[20px] mt-[15px]"> POPULAR</p>
      <div className="w-full mx-auto h-full flex justify-center items-center py-4">
        <div className="flex items-center justify-center gap-8">
          {popularPrd.map((product, index) => (
            <div
              className="card w-[213px] h-[350px] bg-base-100 shadow-xl"
              key={index}
            >
              <figure className="">
                <NavLink to={`/producttt/${product.id}`}>
                  <p className="font-sans font-normal text-[12px] text-green-500">
                    Recommended
                  </p>
                  <img
                    className="w-[150px] h-[150px] self-center"
                    style={{ borderRadius: "px" }}
                    src={require(`../../assets/image/Burger/${product.image}`)}
                    alt={product.name}
                  />
                </NavLink>
              </figure>
              <div className=" mt-[-20px] card-body items-center text-center">
                <h2 className="font-sans text-[17px] font-semibold text-center">
                  {product.name}
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
                      {product.originalPrice.toFixed(3)} VND{" "}
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
                        {product.discountPercent}%
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
                          product.originalPrice,
                          product.discountPercent
                        )}{" "}
                        VND
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

       <p className="font-sans font-bold text-[20px] mt-[15px]"> RECOMMENDATION</p>
      <div className="w-full mx-auto h-full flex justify-center items-center py-4">
        <div className="flex items-center justify-center gap-8">
          {rcmPrd.map((product, index) => (
            <div
              className="card w-[213px] h-[350px] bg-base-100 shadow-xl"
              key={index}
            >
              <figure className="">
                <NavLink to={`/producttt/${product.id}`}>
                  <p className="font-sans font-normal text-[12px] text-green-500">
                    New
                  </p>
                  <img
                    className="w-[150px] h-[150px] self-center"
                    style={{ borderRadius: "px" }}
                    src={require(`../../assets/image/Burger/${product.image}`)}
                    alt={product.name}
                  />
                </NavLink>
              </figure>
              <div className=" mt-[-20px] card-body items-center text-center">
                <h2 className="font-sans w-[180px] text-[17px] font-semibold text-center">
                  {product.name}
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
                      {product.originalPrice.toFixed(3)} VND{" "}
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
                        {product.discountPercent}%
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
                          product.originalPrice,
                          product.discountPercent
                        )}{" "}
                        VND
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>



      </div>

     

    </div>
  );
};

export default Product2;
