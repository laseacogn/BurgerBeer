import React, {useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import { AiFillHome, AiFillDelete } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { MdCategory } from "react-icons/md";
import { IoReorderFour } from "react-icons/io5";
import { HiTemplate } from "react-icons/hi";
import { BiSolidDiscount } from "react-icons/bi";
import voucherData from "../../data/voucher.json";
import { Table, Button, Modal, Label, TextInput, Pagination,  Datepicker } from "flowbite-react";
import { FaPen } from "react-icons/fa6";
import Search2 from "../../components/Search Product/Search2";
import Search5 from "../../components/Search Product/Search5";
import Search10 from '../../components/Search Product/Search10';

const Voucherr = () => {
  const [voucher, setVoucher] = useState([]);
  const [originalVoucher, setOriginalVoucher] = useState([]);

  const [openModal1, setOpenModal1] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);

  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const [searchTerm, setSearchTerm] = useState("");
  const [searchTerm2, setSearchTerm2] = useState("");
  const [searchTerm3, setSearchTerm3] = useState("");

  useEffect(() => {
   setVoucher(voucherData);
   setOriginalVoucher(voucherData)
  }, []);

  const handleDelete = (index) => {
    const updatedVoucher = voucher.filter((_, i) => i !== index);
    setVoucher(updatedVoucher);
  };

  useEffect(() => {
    const totalVoucher = originalVoucher.length;
    const itemsPerPage = 8;
    const pages = Math.ceil(totalVoucher / itemsPerPage);
    setTotalPages(pages);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, totalVoucher);

     let filteredVoucher = originalVoucher.filter(voucher => {
      const idMatch = voucher.id.toString().toLowerCase().includes(searchTerm.toLowerCase());
      const nameMatch = voucher.title && voucher.title.toLowerCase().includes(searchTerm2.toLowerCase());
      const dateMatch = voucher.startDate && voucher.startDate.toLowerCase().includes(searchTerm2.toLowerCase());

      if (searchTerm !== "" && idMatch) {
        return true;
      } else if (searchTerm2 !== "" && nameMatch) {
        return true;
      } else if (searchTerm3 !== "" && dateMatch) {
        return true;
      } else if (searchTerm === "" && searchTerm2 === "" && searchTerm3 === "") {
        return true;
      } else {
        return false;
      }
    });

    setVoucher(filteredVoucher.slice(startIndex, endIndex));
  }, [currentPage, searchTerm, searchTerm2, searchTerm3, originalVoucher]);

  const handleSearch = (value) => {
    setSearchTerm(value);
  };

  const handleSearch2 = (value) => {
    setSearchTerm2(value);
  };

  const handleSearch3 = (value) => {
    setSearchTerm3(value);
  };

   const AddVoucher = async () => {
    if (
      !ID ||
      !Title ||
      !Discount ||
      !Quantity ||
      !QuantityUsed ||
      !MinOrd ||
      !MaxDis ||
      !startDate ||
      !endDate
    ) {
      alert("Please fill in all fields");
      return;
    }
    console.log(ID);
    const newItem = {
      id: ID,
      title: Title,
      discount: Discount,
      quantity: Quantity,
      quantityUsed: QuantityUsed,
      minOrd: MinOrd,
      maxDis: MaxDis,
      startDate: startDate,
      endDate: endDate

    };

    setVoucher([...voucher, newItem]);
  };


  const [ID, setID] = useState("");
  const [Title, setTitle] = useState("");
  const [Discount, setDiscount] = useState("");
  const [Quantity, setQuantity] = useState("");
  const [QuantityUsed, setQuantityUsed] = useState("");
  const [MinOrd, setMinOrd] = useState("");
  const [MaxDis, setMaxDis] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
 

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
            <Button className="w-full h-[70px] flex rounded-none bg-[#FFC0C0] mt-[20px] drop-shadow">
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
        <div className="w-[1000px] no-scrollbar justify-between items-center">
          <div className='w-full flex justify-between items-center'>
          <p className="font-sans font-black text-[20px] text-gray-900 mt-[15px] ml-[400px]">
            VOUCHER MANAGE
          </p>
          <Button
              onClick={() => setOpenModal1(true)}
              className="mt-[10px] mr-[25px] rounded-none"
              color="dark"
            >
              <p className="font-sans font-bold text-[15px] text-white">
                ADD NEW VOUCHER
              </p>
            </Button>
            <Modal
              show={openModal1}
              onClose={() => setOpenModal1(false)}
              className="no-scrollbar"
            >
              <Modal.Header className="h-[50px] pt-[10px]">
                Add New Voucher
              </Modal.Header>
              <Modal.Body className="no-scrollbar">
                <div className="w-full mx-auto flex grid grid-cols-2 justify-between items-center">
                  <div className="w-[95%]">
                    <div className="max-w">
                      <div className="mb-2 block">
                        <Label
                          htmlFor="email"
                          value="Voucher ID"
                          className="font-sans font-medium text-[15px] text-black"
                        />
                      </div>
                      <TextInput
                        onChange={(e) => { setID(e.target.value) }}
                        id="email"
                        type="email"
                        required
                      />
                    </div>
                    <div className="mt-2">
                      <div className="mb-2 block">
                        <Label
                          htmlFor="email"
                          value="Title"
                          className="font-sans font-medium text-[15px] text-black"
                        />
                      </div>
                      <TextInput
                        onChange={(e) => { setTitle(e.target.value) }}
                        id="email"
                        type="email"
                        required
                      />
                    </div>
                    <div className="mt-2">
                      <div className="mb-2 block">
                        <Label
                          htmlFor="email"
                          value="Discount (%)"
                          className="font-sans font-medium text-[15px] text-black"
                        />
                      </div>
                      <TextInput
                        onChange={(e) => { setDiscount(e.target.value) }}
                        id="email"
                        type="email"
                        required
                      />
                    </div>
                    <div className="mt-2">
                      <div className="mb-2 block">
                        <Label
                          htmlFor="email"
                          value="Start Date"
                          className="font-sans font-medium text-[15px] text-black"
                        />
                      </div>
                      <TextInput
                        onChange={(e) => { setStartDate(e.target.value) }}
                        id="email"
                        type="email"
                        required
                      />
                     
                  </div>
                  <div className="mt-2">
                      <div className="mb-2 block">
                        <Label
                          htmlFor="email"
                          value="End Date"
                          className="font-sans font-medium text-[15px] text-black"
                        />
                      </div>
                      <TextInput
                        onChange={(e) => { setEndDate(e.target.value) }}
                        id="email"
                        type="email"
                        required
                      />
                      </div>
                  </div>
                  <div className="w-[95%] mt-[-5px]">
                    <div className="max-w">
                      <div className="mb-2 block">
                        <Label
                          htmlFor="email"
                          value="Quantity"
                          className="font-sans font-medium text-[15px] text-black"
                        />
                      </div>
                      <TextInput
                        onChange={(e) => { setQuantity(e.target.value) }}
                        id="email"
                        type="email"
                        required
                      />
                    </div>
                    <div className="mt-2">
                      <div className="mb-2 block">
                        <Label
                          htmlFor="email"
                          value="Quantity Used"
                          className="font-sans font-medium text-[15px] text-black"
                        />
                      </div>
                      <TextInput
                        onChange={(e) => { setQuantityUsed(e.target.value) }}
                        id="email"
                        type="email"
                        required
                      />
                    </div>
                    <div className="mt-2">
                      <div className="mb-2 block">
                        <Label
                          htmlFor="email"
                          value="Minimum Order (VND)"
                          className="font-sans font-medium text-[15px] text-black"
                        />
                      </div>
                      <TextInput
                        onChange={(e) => { setMinOrd(e.target.value) }}
                        id="email"
                        type="email"
                        required
                      />
                    </div>
                    <div className="mt-2">
                      <div className="mb-2 block">
                        <Label
                          htmlFor="email"
                          value="Maximum Discount (VND)"
                          className="font-sans font-medium text-[15px] text-black"
                        />
                      </div>
                      <TextInput
                        onChange={(e) => { setMaxDis(e.target.value) }}
                        id="email"
                        type="email"
                        required
                      />
                    </div>
                    <div className="mt-2">
                      <div className="mb-2 block">
                        <Label
                          htmlFor="email"
                          value="Content"
                          className="font-sans font-medium text-[15px] text-black"
                        />
                      </div>
                      <TextInput
                        id="email"
                        type="email"
                        required
                      />
                    </div>
                  </div>
                 </div>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={() => { setOpenModal1(false); AddVoucher() }} color="dark">I accept</Button>
                <Button color="gray" onClick={() => setOpenModal1(false)}>
                  Decline
                </Button>
              </Modal.Footer>
            </Modal>
          </div>

           <div className="flex justify-center items-center mt-[20px] gap-16">
            <Search5 handleSearch={handleSearch} />
            <Search2 handleSearch={handleSearch2} />
            <Search10 handleSearch={handleSearch3} />
          </div>

          <div className="w-[950px] h-[680px] bg-[#FFFFFF] drop-shadow-lg ml-[25px] mt-[10px] no-scrollbar">

            <div className="w-full overflow-x-auto no-scrollbar">
              <Table hoverable>
                <Table.Head>
                  <Table.HeadCell className="font-sans text-semibold text-[17px] text-center">
                    ID
                  </Table.HeadCell>
                  <Table.HeadCell className="font-sans text-semibold text-[17px] ">
                    Title
                  </Table.HeadCell>
                  <Table.HeadCell className="font-sans text-semibold text-[17px] text-center">
                    Discount
                  </Table.HeadCell>
                  <Table.HeadCell className="whitespace-nowrap font-sans text-semibold text-[17px] text-center">
                    Start Date
                  </Table.HeadCell>
                  <Table.HeadCell className="whitespace-nowrap font-sans text-semibold text-[17px] text-center">
                    End Date
                  </Table.HeadCell>
                  <Table.HeadCell className="whitespace-nowrap font-sans text-semibold text-[17px] text-center">
                    Minimum Order
                  </Table.HeadCell>
                  <Table.HeadCell className="whitespace-nowrap font-sans text-semibold text-[17px] text-center">
                    Maximum Discount
                  </Table.HeadCell>
                  <Table.HeadCell className="whitespace-nowrap font-sans text-semibold text-[17px] text-center">
                    Quantity
                  </Table.HeadCell>
                  <Table.HeadCell className="whitespace-nowrap font-sans text-semibold text-[17px] text-center">
                    QTY Used
                  </Table.HeadCell>
                  <Table.HeadCell className="whitespace-nowrap font-sans text-semibold text-[17px] text-center">
                    QTY Remained
                  </Table.HeadCell>
                  <Table.HeadCell className="font-sans text-semibold text-[17px] text-center">
                    EDIT
                  </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                  {voucher.map((voucher, index) => (
                    <Table.Row
                      key={index}
                      className="bg-white dark:border-gray-700 dark:bg-gray-800"
                    >
                      <Table.Cell>
                        <p className="font-sans font-medium text-[17px] text-gray-900 dark:text-white text-center">
                          {voucher.id}
                        </p>
                      </Table.Cell>
                      <Table.Cell className="flex items-center">
                        <p className="whitespace-nowrap font-sans font-medium text-[17px] text-gray-900 dark:text-white text-center">
                          {voucher.title}
                        </p>
                      </Table.Cell>
                      <Table.Cell>
                        <p className="font-sans font-medium text-[17px] text-gray-900 text-center">
                          {voucher.discount}%
                        </p>
                      </Table.Cell>

                      <Table.Cell>
                        <p className="whitespace-nowrap font-sans font-medium text-[17px] text-gray-900 text-center">
                        {voucher.startDate}
                        </p>
                      </Table.Cell>
                      <Table.Cell>
                          <p className="font-sans font-medium text-[17px] text-gray-900 text-center">
                            {voucher.endDate}
                          </p>
                      </Table.Cell>
                      <Table.Cell>
                        <p className="font-sans font-medium text-[17px] text-gray-900 text-center">
                          {voucher.minOrd} VND
                        </p>
                      </Table.Cell>
                      <Table.Cell>
                        <p className="font-sans font-medium text-[17px] text-gray-900 text-center">
                          {voucher.maxDis} VND

                        </p>
                      </Table.Cell>
                      <Table.Cell>
                        <p className="font-sans font-medium text-[17px] text-gray-900 text-center">
                          {voucher.quantity}
                        </p>
                      </Table.Cell>
                      <Table.Cell>
                        <p className="font-sans font-medium text-[17px] text-gray-900 text-center">
                          {voucher.quantityUsed}
                        </p>
                      </Table.Cell>
                      <Table.Cell>
                        <p className="font-sans font-medium text-[17px] text-gray-900 text-center">
                          {voucher.quantity - voucher.quantityUsed}
                        </p>
                      </Table.Cell>
                      <Table.Cell className="flex ">
                        <Button
                          onClick={() => setOpenModal2(true)}
                          className="w-[20px] text-gray-900 border-transparent hover-text-red mr-[20px]"
                          color="light"
                        >
                          <FaPen className="w-[17px] h-[17px]" />
                        </Button>
                        <Modal
                          show={openModal2}
                          onClose={() => setOpenModal2(false)}
                          className="no-scrollbar"
                        >
                          <Modal.Header className="h-[50px] pt-[10px]">
                            Edit Product
                          </Modal.Header>

                          <Modal.Body className="no-scrollbar">
                            <editItem />
                          </Modal.Body>
                        </Modal>
                        <Button
                          onClick={() => handleDelete(index)}
                          className="w-[20px] text-gray-900 border-transparent hover-text-red"
                          color="light"
                        >
                          <AiFillDelete className="w-[20px] h-[20px]" />
                        </Button>
                      </Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table>
            </div>
            <div className="flex overflow-x-auto sm:justify-center mt-[-7px]">
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

export default Voucherr
