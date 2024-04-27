import React, { useState, useEffect } from "react";
import { Checkbox, Table, Button, Modal } from "flowbite-react";
import { Link } from "react-router-dom";
import { AiFillHome, AiFillDelete } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { MdCategory } from "react-icons/md";
import { IoReorderFour } from "react-icons/io5";
import { HiTemplate } from "react-icons/hi";
import { BiSolidDiscount } from "react-icons/bi";
import categoryData from "../../data/category.json";
import { Pagination } from "flowbite-react";
import { FaPen } from "react-icons/fa6";

const Categoryy = () => {
  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setProducts(categoryData);
  }, []);
  
  const handleDelete = (index) => {
    const updatedProducts = products.filter((_, i) => i !== index);
    setProducts(updatedProducts);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const totalProducts = categoryData.length;
        const itemsPerPage = 7;
        const pages = Math.ceil(totalProducts / itemsPerPage);
        setTotalPages(pages);
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = Math.min(startIndex + itemsPerPage, totalProducts);
        const productsForPage = categoryData.slice(startIndex, endIndex);
        setProducts(productsForPage);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [currentPage]);
  return (
   <div className="max-w-[1200px] mx-auto bg-[#FFDADA] mt-[-10px]">
      <div className="w-full h-[850px] flex mb-[20px]">
        <div className="w-[200px] h-full bg-[#FFFFFF] drop-shadow-lg justify-center items-center">
          <img
            className="w-[100px] h-[100px] ml-[55px] mt-[15px]"
            src={require(`../../page/Home/lgburger.jpg`)}
            alt=""
          />
          <p className="font-sans font-black text-[20px] text-gray-900 text-center">
            BURGER N' BEER
          </p>
          <Link to="/corporate_account">
            <Button className="w-full h-[70px] flex rounded-none bg-[#FFFFFF] mt-[30px] drop-shadow">
              <AiFillHome className="w-[25px] h-[25px] text-gray-900 mr-[7px] mt-[10px]" />
              <p className="font-sans font-extrabold text-[17px] text-gray-900 mt-[13px]">
                DASHBOARD
              </p>
            </Button>
          </Link>
          <Link to="/user_manage">
            <Button className="w-full h-[70px] flex rounded-none bg-[#FFFFFF] mt-[20px] drop-shadow">
              <FaUserAlt className="w-[20px] h-[20px] text-gray-900 mr-[7px] mt-[10px]" />
              <p className="font-sans font-extrabold text-[17px] text-gray-900 mt-[13px]">
                USER MANAGE
              </p>
            </Button>
          </Link>
          <Link to="/category_manage">
            <Button className="w-full h-[70px] flex rounded-none bg-[#FFC0C0] mt-[20px] drop-shadow">
              <MdCategory className="w-[25px] h-[25px] text-gray-900 mr-[7px] mt-[10px]" />
              <p className="font-sans font-extrabold text-[17px] text-gray-900 mt-[13px]">
                CATEGORY
              </p>
            </Button>
          </Link>
          <Link to="/item_list">
            <Button className="w-full h-[70px] flex rounded-none bg-[#FFFFFF] mt-[20px] drop-shadow">
              <HiTemplate className="w-[25px] h-[25px] text-gray-900 mr-[7px] mt-[10px]" />
              <p className="font-sans font-extrabold text-[17px] text-gray-900 mt-[13px]">
                PRODUCT
              </p>
            </Button>
          </Link>
          <Link to="/voucher_manage">
            <Button className="w-full h-[70px] flex rounded-none bg-[#FFFFFF] mt-[20px] drop-shadow">
              <BiSolidDiscount className="w-[25px] h-[25px] text-gray-900 mr-[7px] mt-[10px]" />
              <p className="font-sans font-extrabold text-[17px] text-gray-900 mt-[13px]">
                VOUCHER
              </p>
            </Button>
          </Link>
          <Link to="/order_manage">
            <Button className="w-full h-[70px] flex rounded-none bg-[#FFFFFF] mt-[20px] drop-shadow">
              <IoReorderFour className="w-[25px] h-[25px] text-gray-900 mr-[7px] mt-[10px]" />
              <p className="font-sans font-extrabold text-[17px] text-gray-900 mt-[13px]">
                ORDER
              </p>
            </Button>
          </Link>
        </div>
        <div className="w-[1000px] no-scrollbar justify-center items-center">
          <div className="w-full flex justify-between items-center">
            <p className="font-sans font-black text-[20px] text-gray-900 ml-[350px] mt-[10px]">
            CATEGORY MANAGE
          </p>
          <Button 
          className="mt-[10px] mr-[25px] rounded-none"
          color="dark">
            <p className="font-sans font-bold text-[15px] text-white">ADD NEW CATEGORY</p>
          </Button>
          </div>
          <div className="w-[950px] h-[780px] bg-[#FFFFFF] drop-shadow-lg ml-[25px] mt-[10px] no-scrollbar">

            <div className="w-full overflow-x-auto">
              <Table hoverable>
                <Table.Head>
                  <Table.HeadCell className="font-sans text-semibold text-[17px] text-center">
                    ID
                  </Table.HeadCell>
                  <Table.HeadCell className="font-sans text-semibold text-[17px] ">
                    Category
                  </Table.HeadCell>
                 
                  <Table.HeadCell className="font-sans text-semibold text-[17px] text-center">
                    QUANTITY
                  </Table.HeadCell>
                  <Table.HeadCell className="font-sans text-semibold text-[17px] text-center">
                   EDIT
                  </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                  {products.map((product, index) => (
                    <Table.Row
                      key={index}
                      className="bg-white dark:border-gray-700 dark:bg-gray-800"
                    >
                      <Table.Cell className="p-4">
                        <p className="whitespace-nowrap font-sans font-medium text-[17px] text-gray-900 dark:text-white text-center">{product.id}</p>
                      </Table.Cell>
                      <Table.Cell className="flex items-center w-[250px]">
                        <img
                          className="w-[50px] h-[50px] self-center mr-[10px]"
                          style={{ borderRadius: "10px" }}
                          src={require(`../../assets/image/category/${product.image}`)}
                          alt={product.name}
                        />
                        <p className="whitespace-nowrap font-sans font-medium text-[17px] text-gray-900 dark:text-white">
                          {" "}
                          {product.name}{" "}
                        </p>
                      </Table.Cell>
                    
                      
                      <Table.Cell className="font-sans font-medium text-[17px] text-center">
                        <p className=" text-gray-900">
                          {product.quantity}
                        </p>
                      </Table.Cell>
                      <Table.Cell className="flex justify-center items-center">
                        <Button
                          className="w-[20px] text-gray-900 border-transparent hover-text-red mr-[20px]" 
                          color="light"
                        >
                          <FaPen className="w-[17px] h-[17px]"/>
                        </Button>
                        <Button
                          onClick={() => handleDelete(index)}
                          className="w-[20px] text-gray-900 border-transparent hover-text-red"
                          color="light"
                        >
                          <AiFillDelete className="w-[20px] h-[20px]"/>
                        </Button>
                      </Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table>
            </div>
            <div className="flex overflow-x-auto sm:justify-center ">
              <Pagination
                totalPages={totalPages}
                currentPage={currentPage}
                onPageChange={setCurrentPage}
                showIcons
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Categoryy
