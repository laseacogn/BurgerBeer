import React, { useEffect, useState } from "react";
import categorieData from "../../data/category.json";
import ItemProduct2 from "./ItemProduct2";
import dataProduct from "../../data/product.json";
import { Pagination } from "flowbite-react";
import { HiHome } from "react-icons/hi";
import { GrNext } from "react-icons/gr";
import { NavLink } from "react-router-dom";
import Search from "../../components/Search Product/Search";

const Shop2 = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState(categorieData);
  const [categorieID, setCategoryID] = useState("");
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    window.scrollTo(0, 0);
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
            <NavLink to="/shopp">
              <p className="font-inter font-bold text-[20px] mb-[20px] mr-[10px]">
                {" "}
                Shop
              </p>
            </NavLink>
              <GrNext className="w-[15px] h-[15px] mt-[10px] mr-[10px]" />
            <NavLink to="/productt">
              <p className="font-inter font-bold text-[20px] mb-[20px]">
                {" "}
                Menu
              </p>
            </NavLink>
          </div>

          <Search handleSearch={handleSearch} />
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
                    setCategoryID(item.ID);
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
        style={{ paddingTop: "10px", paddingBottom: "20px" }}
      >
        <div className="grid grid-cols-4 gap-4 text-center">
          {products.map((product, index) => (
            <ItemProduct2  key={index} product={product} />
          ))}
        </div>
      </div>
      <div className="flex overflow-x-auto sm:justify-center">
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
          showIcons
        />
      </div>
    </div>
  );
};

export default Shop2;