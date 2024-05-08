import React, { useEffect, useState } from "react";
import ordData from "../../data/ordManage.json";
import statusData from "../../data/status.json";
import { Link } from "react-router-dom";
import { Table, Pagination } from "flowbite-react";
import { Button } from "flowbite-react";
import { AiFillHome } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { MdCategory } from "react-icons/md";
import { IoReorderFour } from "react-icons/io5";
import { HiTemplate } from "react-icons/hi";
import { BiSolidDiscount } from "react-icons/bi";
import { FaEye } from "react-icons/fa";
import Search9 from "../../components/Search Product/Search9";
import Search8 from "../../components/Search Product/Search8";
import Search7 from "../../components/Search Product/Search7";
import { IoSettingsSharp } from "react-icons/io5";
import { TbBrandBooking } from "react-icons/tb";

const OrderManage = () => {
  const [ord, setOrd] = useState([]);
  const [originalOrd, setOriginalOrd] = useState([]);
  const [status, setStatus] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const [searchTerm, setSearchTerm] = useState("");
  const [searchTerm2, setSearchTerm2] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);

  const [statusValues, setStatusValues] = useState({});

  useEffect(() => {
    setOriginalOrd(ordData);
    setOrd(ordData);
    setStatus(statusData);
  }, []);

  useEffect(() => {
    const totalOrd = originalOrd.length;
    const itemsPerPage = 8;
    const pages = Math.ceil(totalOrd / itemsPerPage);
    setTotalPages(pages);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, totalOrd);

    let filteredOrd = originalOrd.filter((prd) => {
      const idMatch =
        prd.ID &&
        prd.ID.toString().toLowerCase().includes(searchTerm.toLowerCase());
      const nameMatch =
        prd.userID &&
        prd.userID.toLowerCase().includes(searchTerm2.toLowerCase());
      const categoryMatch = selectedCategory ? prd.status === selectedCategory : true;

      if (searchTerm !== "" && idMatch) {
        return true;
      } else if (searchTerm2 !== "" && nameMatch) {
        return true;
      } else if (selectedCategory && categoryMatch) {
        return true;
      } else if (searchTerm === "" && searchTerm2 === "" && !selectedCategory) {
        return true;
      } else {
        return false;
      }
    });

    setOrd(filteredOrd.slice(startIndex, endIndex));
  }, [currentPage, searchTerm, searchTerm2, selectedCategory, originalOrd]);

  const handleSearch = (value) => {
    setSearchTerm(value);
  };

  const handleSearch2 = (value) => {
    setSearchTerm2(value);
  };

  const handleSearch3 = (value) => {
    setSelectedCategory(value);
  };

  const handleStatusChange = (orderId, value) => {
    setStatusValues({ ...statusValues, [orderId]: value });
  };


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
            <Button className="w-full h-[70px] flex rounded-none bg-[#FFFFFF] mt-[20px] drop-shadow">
              <AiFillHome className="w-[25px] h-[25px] text-gray-900 mr-[7px] mt-[10px]" />
              <p className="font-sans font-extrabold text-[17px] text-gray-900 mt-[13px]">
                DASHBOARD
              </p>
            </Button>
          </Link>
          <Link to="/user_manage">
            <Button className="w-full h-[70px] flex rounded-none bg-[#FFFFFF] mt-[15px] drop-shadow">
              <FaUserAlt className="w-[20px] h-[20px] text-gray-900 mr-[7px] mt-[10px]" />
              <p className="font-sans font-extrabold text-[17px] text-gray-900 mt-[13px]">
                USER MANAGE
              </p>
            </Button>
          </Link>
          <Link to="/category_manage">
            <Button className="w-full h-[70px] flex rounded-none bg-[#FFFFFF] mt-[15px] drop-shadow">
              <MdCategory className="w-[25px] h-[25px] text-gray-900 mr-[7px] mt-[10px]" />
              <p className="font-sans font-extrabold text-[17px] text-gray-900 mt-[13px]">
                CATEGORY
              </p>
            </Button>
          </Link>
          <Link to="/item_list">
            <Button className="w-full h-[70px] flex rounded-none bg-[#FFFFFF] mt-[15px] drop-shadow">
              <HiTemplate className="w-[25px] h-[25px] text-gray-900 mr-[7px] mt-[10px]" />
              <p className="font-sans font-extrabold text-[17px] text-gray-900 mt-[13px]">
                PRODUCT
              </p>
            </Button>
          </Link>
          <Link to="/voucher_manage">
            <Button className="w-full h-[70px] flex rounded-none bg-[#FFFFFF] mt-[15px] drop-shadow">
              <BiSolidDiscount className="w-[25px] h-[25px] text-gray-900 mr-[7px] mt-[10px]" />
              <p className="font-sans font-extrabold text-[17px] text-gray-900 mt-[13px]">
                VOUCHER
              </p>
            </Button>
          </Link>
          <Link to="/order_manage">
            <Button className="w-full h-[70px] flex rounded-none bg-[#FFC0C0] mt-[15px] drop-shadow">
              <IoReorderFour className="w-[25px] h-[25px] text-gray-900 mr-[7px] mt-[10px]" />
              <p className="font-sans font-extrabold text-[17px] text-gray-900 mt-[13px]">
                ORDER
              </p>
            </Button>
          </Link>
          <Link to="/reserve_manage">
            <Button className="w-full h-[70px] flex rounded-none bg-[#FFFFFF] mt-[15px] drop-shadow">
              <TbBrandBooking className="w-[25px] h-[25px] text-gray-900 mr-[7px] mt-[10px]" />
              <p className="font-sans font-extrabold text-[17px] text-gray-900 mt-[13px]">
                RESERVATION
              </p>
            </Button>
          </Link>
          <Link to="/system_setting">
            <Button className="w-full h-[70px] flex rounded-none bg-[#FFFFFF] mt-[15px] drop-shadow">
              <IoSettingsSharp className="w-[25px] h-[25px] text-gray-900 mr-[7px] mt-[10px]" />
              <p className="font-sans font-extrabold text-[17px] text-gray-900 mt-[13px]">
                SETTING
              </p>
            </Button>
          </Link>
        </div>
        <div className="w-[1000px] no-scrollbar justify-center items-center">
          <p className="font-sans font-black text-[20px] text-gray-900 text-center mt-[15px]">
            ORDER MANAGE
          </p>
          <div className="flex justify-center items-center mt-[15px] gap-16">
            <Search8 handleSearch={handleSearch} />
            <Search9 handleSearch={handleSearch2} />
            <Search7 handleSearch={handleSearch3} />
          </div>
          <div className="w-[950px] h-[700px] bg-[#FFFFFF] drop-shadow-lg ml-[25px] mt-[10px] no-scrollbar">
            <div className="w-full overflow-x-auto">
              <Table hoverable>
                <Table.Head>
                  <Table.HeadCell className="font-sans text-semibold text-[17px] text-center">
                    Order ID
                  </Table.HeadCell>
                  <Table.HeadCell className="font-sans text-semibold text-[17px] text-center ">
                    Created Time
                  </Table.HeadCell>
                  <Table.HeadCell className="font-sans text-semibold text-[17px] text-center">
                    User ID
                  </Table.HeadCell>
                  <Table.HeadCell className="font-sans text-semibold text-[17px] text-center">
                    Total Price
                  </Table.HeadCell>
                  <Table.HeadCell className="font-sans text-semibold text-[17px] text-center">
                    ID Status
                  </Table.HeadCell>
                  <Table.HeadCell>
                    <span className="sr-only">Edit</span>
                  </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                  {ord.map((ordItem, index) => (
                    <Table.Row
                      key={index}
                      className="bg-white dark:border-gray-700 dark:bg-gray-800"
                    >
                      <Table.Cell className="p-4">
                        <p className="whitespace-nowrap font-sans font-medium text-[17px] text-gray-900 dark:text-white text-center">
                          {ordItem.ID}
                        </p>
                      </Table.Cell>
                      <Table.Cell>
                        <p className="whitespace-nowrap text-center font-sans font-medium text-[17px] text-gray-900 dark:text-white">
                          {ordItem.creatAt}
                        </p>
                      </Table.Cell>
                      <Table.Cell className="font-sans font-medium text-[17px] text-center">
                        <p className=" text-gray-900">{ordItem.userID}</p>
                      </Table.Cell>
                      <Table.Cell className="font-sans font-medium text-[17px] text-center">
                        <p className=" text-gray-900">{ordItem.total}</p>
                      </Table.Cell>
                      <Table.Cell className="font-sans font-medium text-[17px] text-center">
                        <select
                          value={statusValues[ordItem.ID] || ordItem.status}
                          onChange={(e) =>
                            handleStatusChange(ordItem.ID, e.target.value)
                          }
                          className="text-gray-900 font-sans font-medium text-[17px] text-center border-none"
                        >
                          {status.map((statusItem, statusIndex) => (
                            <option key={statusIndex} value={statusItem.name}>
                              {statusItem.name}
                            </option>
                          ))}
                        </select>
                      </Table.Cell>
                      <Table.Cell className="flex justify-center items-center">
                        <Link to={`/order_manage/${ordItem.ID}`}>
                          <Button
                            className="w-[20px] text-gray-900 border-transparent hover-text-red"
                            color="light"
                          >
                            <FaEye className="w-[17px] h-[17px]" />
                          </Button>
                        </Link>
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
  );
};

export default OrderManage;
