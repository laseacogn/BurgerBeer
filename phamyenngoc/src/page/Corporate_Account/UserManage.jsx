import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { MdCategory } from "react-icons/md";
import { IoReorderFour } from "react-icons/io5";
import { HiTemplate } from "react-icons/hi";
import { BiSolidDiscount } from "react-icons/bi";
import { Table, Button } from "flowbite-react";
import { Pagination } from "flowbite-react";
import userData from "../../data/account.json";
import Search2 from "../../components/Search Product/Search2";
import Search3 from "../../components/Search Product/Search3";
import Search4 from "../../components/Search Product/Search4";

const UserManage = () => {
  const [originalUser, setOriginalUser] = useState([]);
  const [user, setUser] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const [searchTerm, setSearchTerm] = useState("");
  const [searchTerm2, setSearchTerm2] = useState("");
  const [searchTerm3, setSearchTerm3] = useState("");

  useEffect(() => {
    setOriginalUser(userData);
    setUser(userData);
  }, []);

  const handleDelete = (index) => {
    const updatedUser = user.filter((_, i) => i !== index);
    setUser(updatedUser);
  };

  useEffect(() => {
    const totalUser = originalUser.length;
    const itemsPerPage = 8;
    const pages = Math.ceil(totalUser / itemsPerPage);
    setTotalPages(pages);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, totalUser);
    
    let filteredUsers = originalUser.filter(user => {
      const nameMatch = user.name.toLowerCase().includes(searchTerm.toLowerCase());
      const phoneMatch = user.phone.toLowerCase().includes(searchTerm2.toLowerCase());
      const emailMatch = user.email.toLowerCase().includes(searchTerm3.toLowerCase());
      
      if (searchTerm !== "" && nameMatch) {
        return true;
    } else if (searchTerm2 !== "" && phoneMatch) {
        return true;
    } else if (searchTerm3 !== "" && emailMatch) {
        return true;
    } else if (searchTerm === "" && searchTerm2 === "" && searchTerm3 === "") {
        return true;
    } else {
        return false;
    }
    });

    setUser(filteredUsers.slice(startIndex, endIndex));
  }, [currentPage, searchTerm, searchTerm2, searchTerm3, originalUser]);

  const handleSearch = (value) => {
    setSearchTerm(value);
  };
  const handleSearch2 = (value) => {
    setSearchTerm2(value);
  };
  const handleSearch3 = (value) => {
    setSearchTerm3(value);
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
            <Button className="w-full h-[70px] flex rounded-none bg-[#FFFFFF] mt-[30px] drop-shadow">
              <AiFillHome className="w-[25px] h-[25px] text-gray-900 mr-[7px] mt-[10px]" />
              <p className="font-sans font-extrabold text-[17px] text-gray-900 mt-[13px]">
                DASHBOARD
              </p>
            </Button>
          </Link>
          <Link to="/user_manage">
            <Button className="w-full h-[70px] flex rounded-none bg-[#FFC0C0] mt-[20px] drop-shadow">
              <FaUserAlt className="w-[20px] h-[20px] text-gray-900 mr-[7px] mt-[10px]" />
              <p className="font-sans font-extrabold text-[17px] text-gray-900 mt-[13px]">
                USER MANAGE
              </p>
            </Button>
          </Link>
          <Link to="/category_manage">
            <Button className="w-full h-[70px] flex rounded-none bg-[#FFFFFF] mt-[20px] drop-shadow">
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
          <p className="font-sans font-black text-[20px] text-gray-900 text-center mt-[15px]">
            USERS MANAGE
          </p>
          <div className="flex justify-center items-center mt-[20px] gap-16">
            <Search2 handleSearch={handleSearch}/>
            <Search3 handleSearch={handleSearch2}/>
            <Search4 handleSearch={handleSearch3} />
          </div>
          
          <div className="w-[950px] h-[700px] bg-[#FFFFFF] drop-shadow-lg ml-[25px] no-scrollbar">
            <div className="overflow-x-auto no-scrollbar mx-auto">
              <Table hoverable>
                <Table.Head>
                  <Table.HeadCell className="font-sans text-semibold text-[17px] text-center">
                    ID
                  </Table.HeadCell>
                  <Table.HeadCell className="font-sans text-semibold text-[17px] text-center">
                    Full Name
                  </Table.HeadCell>
                  <Table.HeadCell className="font-sans text-semibold text-[17px] text-center">
                    Phone
                  </Table.HeadCell>
                  <Table.HeadCell className="font-sans text-semibold text-[17px] text-center">
                    Email
                  </Table.HeadCell>
                  <Table.HeadCell className="font-sans text-semibold text-[17px] text-center">
                    Address
                  </Table.HeadCell>
                  <Table.HeadCell className="font-sans text-semibold text-[17px] text-center">
                    Role
                  </Table.HeadCell>
                  <Table.HeadCell>
                    <span className="sr-only">Edit</span>
                  </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                  {user.map((user, index) => (
                    <Table.Row
                      key={index}
                      className="bg-white dark:border-gray-700 dark:bg-gray-800"
                    >
                      <Table.Cell className="p-4">
                        <p className="whitespace-nowrap font-sans font-medium text-[17px] text-gray-900">
                          {user.id}
                        </p>
                      </Table.Cell>
                      <Table.Cell className="flex items-center">
                        <p className="whitespace-nowrap font-sans font-medium text-[17px] text-center text-gray-900 mt-[10px]">
                          {user.name}{" "}
                        </p>
                      </Table.Cell>
                      <Table.Cell>
                        <p className="whitespace-nowrap font-sans font-medium text-[17px] text-gray-900">
                          {user.phone}
                        </p>
                      </Table.Cell>
                      <Table.Cell>
                        <p className="whitespace-nowrap font-sans font-medium text-[17px] text-gray-900">
                          {user.email}
                        </p>
                      </Table.Cell>
                      <Table.Cell>
                        <p className="whitespace-nowrap font-sans font-medium text-[17px] text-gray-900">
                          {user.address}
                        </p>
                      </Table.Cell>
                      <Table.Cell>
                        <p className="whitespace-nowrap font-sans font-medium text-[17px] text-gray-900 text-center">
                          {user.role}
                        </p>
                      </Table.Cell>
                      <Table.Cell>
                        <Button
                          onClick={() => handleDelete(index)}
                          className="font-sans font-medium text-[15px] text-gray-900 border-transparent hover:underline"
                          color="light"
                        >
                          Delete
                        </Button>
                      </Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table>
            </div>
            <div className="flex overflow-x-auto sm:justify-center mt-[-7px] mx-auto">
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

export default UserManage;
