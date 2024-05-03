import React, { useEffect, useState } from "react";
import voucherData from "../../data/myVoucher.json";
import { Pagination, Button, Modal, Tabs } from "flowbite-react";
import SearchVoucher2 from "../../components/Search Product/SearchVoucher2";
import { useNavigate, Link } from "react-router-dom";
import ExpiredVoucher from "./expiredVoucher";
import EndVoucher from "./endVoucher";
import UsedVoucher from "./usedVoucher";

const Voucherrr = () => {
  const [voucher, setVoucher] = useState([]);
  const [originalVoucher, setOriginalVoucher] = useState([])
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [buttonStates, setButtonStates] = useState([]);
  const navigate = useNavigate();
  const [selectedVoucherIndex, setSelectedVoucherIndex] = useState(null);

  const [openModal, setOpenModal] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);

  useEffect(() => {
    setOriginalVoucher(voucherData);
  }, []);

  useEffect(() => {
    const totalVoucher = originalVoucher.length;
    const itemsPerPage = 6;
    const pages = Math.ceil(totalVoucher / itemsPerPage);
    setTotalPages(pages);
  }, [originalVoucher]);

  useEffect(() => {
    const startIndex = (currentPage - 1) * 6;
    const endIndex = startIndex + 6;
    const filteredVoucher = originalVoucher.filter(
      (voucher) =>
        voucher.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        voucher.discount.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setVoucher(filteredVoucher.slice(startIndex, endIndex));
    setButtonStates(
      Array(filteredVoucher.length).fill({ text: "Save", color: "dark" })
    );
  }, [currentPage, searchTerm, originalVoucher]);

  const handleSearch = (value) => {
    setSearchTerm(value);
  };

  const handleClick = (index) => {
    setButtonStates((prevButtonStates) => {
      const newButtonStates = [...prevButtonStates];
      if (newButtonStates[index].text === "Save") {
        newButtonStates[index] = { text: "Buy Now", color: "light" };
      } else {
        navigate("/product");
      }
      return newButtonStates;
    });
  };

  const handleClick2 = (index) => {
    setSelectedVoucherIndex(index);
    setOpenModal(true);
  };

  return (
    <div className="max-w-[1200px] mx-auto no-scrollbar">
      <div className="w-[1120px] flex ml-[40px] border-b">
        <p className="font-sans font-semibold text-xl text-black mt-[-10px] pb-[10px] ">
          Account Information
        </p>
        <Link to="/voucher">
          <p className="font-sans font-semibold text-[15px] text-black hover:text-red-600 mt-[-4px] ml-[620px]">
            {" "}
            Find more vouchers{" "}
          </p>
        </Link>
        <p className="font-sans font-semibold text-[17px] text-black mt-[-6px] ml-[15px]">
          {" "}
          |{" "}
        </p>
        <p
          className="font-sans font-semibold text-[15px] text-black hover:text-red-600 mt-[-4px] ml-[15px]"
          onClick={() => setOpenModal2(true)}
        >
          View voucher history{" "}
        </p>
        <Modal show={openModal2} onClose={() => setOpenModal2(false)}>
          <Modal.Header className="h-[50px]">
            <p className="font-sans font-semibold text-xl text-black mt-[-10px] ">
              Voucher History
            </p>
          </Modal.Header>
          <Modal.Body className="no-scrollbar">
            <Tabs
              className="mt-[-15px]"
              aria-label="Tabs with icons"
              style="underline"
            >
              <Tabs.Item active title={ <p className='w-[100px] font-sans font-semibold text-[17px] text-black mt-[7px]'> Used </p>}>
                <UsedVoucher/>
              </Tabs.Item>
              <Tabs.Item active title={ <p className='w-[100px] font-sans font-semibold text-[17px] text-black mt-[7px]'> Expire </p>}>
                <ExpiredVoucher/>
              </Tabs.Item>
              <Tabs.Item title={ <p className='w-[100px] font-sans font-semibold text-[17px] text-black mt-[7px]'> End Of Use </p>}>
                <EndVoucher/>
              </Tabs.Item>
            </Tabs>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => setOpenModal(false)}>I accept</Button>
            <Button color="gray" onClick={() => setOpenModal(false)}>
              Decline
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      <div className="w-[1120px] mx-auto ml-[40px]">
        <div className="w-full h-[90px] flex justify-center items-center border-b">
          <p className="font-sans text-[20px] font-semibold text-black justify-center items-center mt-[5px] mr-[15px]">
            Voucher Code
          </p>
          <SearchVoucher2 handleSearch={handleSearch} />
        </div>
        <div className="w-full grid grid-cols-2 gap-4">
          {voucher.map((voucherItem, index) => (
            <div
              style={{
                position: "relative",
                width: "550px",
                height: "150px",
                zIndex: "1",
                marginTop: "15px",
              }}
              key={index}
              onClick={() => handleClick2(index)}
            >
              <img
                src={require(`../../assets/image/voucher/1.jpg`)}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "-15px",
                  left: "-15px",
                  zIndex: "2",
                }}
              >
                <img
                  className="w-[120px] h-[120px] rounded-full ml-[30px] mt-[10px]"
                  src={require(`../../assets/image/voucher/lg_bg.jpg.png`)}
                  alt=""
                />
                <p className="font-sans font-bold text-[20px] text-white ml-[75px] mt-[-20px]">
                  {" "}
                  {voucherItem.discount}%
                </p>
              </div>
              <div style={{ position: "absolute", zIndex: "3" }}>
                <p className="font-sans font-bold text-[17px] text-gray-900 ml-[165px] mt-[-140px]">
                  {" "}
                  {voucherItem.title}
                </p>
                <p className="font-sans font-semibold text-[13px] text-gray-900 ml-[165px] mt-[5px]">
                  {voucherItem.discount}% off Maximum discount{" "}
                  {voucherItem.maxDis}VND
                </p>
                <p className="font-sans font-semibold text-[13px] text-gray-900 ml-[165px] mt-[5px]">
                  Minimum Order {voucherItem.minOrd}VND
                </p>
                <div className="flex">
                  <p className="w-[100px] font-sans font-semibold text-[13px] text-gray-900 ml-[165px] mt-[15px]">
                    EXP: {voucherItem.endDate}
                  </p>
                  <Link to="/product">
                  <Button  className="rounded-none w-[91px] ml-[170px] h-[30px] " color="light">
                    <p className="font-sans font-semibold text-[13px] mt-[-6px]">
                      Buy Now
                    </p>
                  </Button>
                  </Link>
                </div>
              </div>
              <div style={{ position: "absolute", zIndex: "4" }}>
                <p className="font-sans font-semibold text-[10px] text-red-600 ml-[517px] mt-[-137px]">
                  {" "}
                  x{voucherItem.quantity - voucherItem.quantityUsed}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex overflow-x-auto sm:justify-center">
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
            showIcons
          />
        </div>

        <Modal show={openModal} onClose={() => setOpenModal(false)}>
          <Modal.Header>
            {selectedVoucherIndex !== null && (
              <div
                style={{
                  position: "relative",
                  width: "550px",
                  height: "150px",
                  zIndex: "1",
                  marginLeft: "20px",
                  marginBottom: "-15px",
                }}
              >
                <img
                  src={require(`../../assets/image/voucher/1.jpg`)}
                  alt=""
                  style={{ width: "100%", height: "100%" }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "-15px",
                    left: "-15px",
                    zIndex: "2",
                  }}
                >
                  <img
                    className="w-[100px] h-[100px] rounded-full ml-[40px] mt-[17px]"
                    src={require(`../../assets/image/voucher/lg_bg.jpg.png`)}
                    alt=""
                  />
                  <p className="font-sans font-bold text-[19px] text-white ml-[33px] mt-[-15px]">
                    {" "}
                    Discount {voucher[selectedVoucherIndex].discount}%
                  </p>
                </div>
                <div style={{ position: "absolute", zIndex: "3" }}>
                  <p className="font-sans font-bold text-[19px] text-gray-900 ml-[160px] mt-[-140px]">
                    {" "}
                    {voucher[selectedVoucherIndex].title}
                  </p>
                  <p className="font-sans font-semibold text-[15px] text-gray-900 ml-[160px] mt-[3px]">
                    {voucher[selectedVoucherIndex].discount}% off Maximum
                    discount {voucher[selectedVoucherIndex].maxDis}VND
                  </p>
                  <p className="font-sans font-semibold text-[15px] text-gray-900 ml-[160px] mt-[3px]">
                    Minimum Order {voucher[selectedVoucherIndex].minOrd}VND
                  </p>
                  <div className="flex">
                    <p className="font-sans font-semibold text-[15px] text-gray-900 ml-[160px] mt-[8px]">
                      EXP: {voucher[selectedVoucherIndex].endDate}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </Modal.Header>
          <Modal.Body className="no-scrollbar">
            {selectedVoucherIndex !== null && (
              <div className="w-[550px] font-sans text-[17px] ml-[20px]">
                <p className="font-semibold text-black">Code expiration date</p>
                <p className="font-normal text-gray-700">
                  {voucher[selectedVoucherIndex].startDate} 00:00 -{" "}
                  {voucher[selectedVoucherIndex].endDate} 23:59
                </p>

                <p className="font-semibold text-black mt-[20px]">Endow</p>
                <p className="font-normal text-gray-700">
                  Limited usage. Hurry up or you won't miss it! Discount{" "}
                  {voucher[selectedVoucherIndex].maxDis}VND Minimum Order{" "}
                  {voucher[selectedVoucherIndex].minOrd}VND
                </p>

                <p className="font-semibold text-black mt-[20px]">
                  Applies to products
                </p>
                <p className="font-normal text-gray-700">
                  Applies to all products in our store.
                  <span className="ml-[5px] font-sans text-[17px] font-normal text-blue-500">
                    <Link to="/product">Buy now.</Link>
                  </span>
                </p>

                <p className="font-semibold text-black mt-[20px]">Pay</p>
                <p className="font-normal text-gray-700">
                  All forms of payment
                </p>

                <p className="font-semibold text-black mt-[20px]">
                  Shipping Method
                </p>
                <p className="font-normal text-gray-700">
                  All shipping methods
                </p>

                <p className="font-semibold text-black mt-[20px]">
                  See Details
                </p>
                <p className="font-normal text-gray-700">
                  Instant discount of {voucher[selectedVoucherIndex].maxDis}VND
                  for orders from {voucher[selectedVoucherIndex].minOrd}VND.
                  Applicable until {voucher[selectedVoucherIndex].endDate}. Each
                  account can only be used once. Discount codes are issued by
                  Burger N' Beer and will not be refunded for any reason.
                </p>
              </div>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button
              onClick={() => setOpenModal(false)}
              className="w-[550px] rounded-none ml-[20px] bg-red-600"
              color=""
            >
              <p className="font-sans text-[17px] font-semibold text-white">
                Agree
              </p>
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default Voucherrr;
