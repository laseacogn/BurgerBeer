import React, { useEffect, useState } from "react";
import topPrdData from "../../data/topPrd.json";
import voucherData from "../../data/voucher.json";
import { Pagination, Button, Modal } from "flowbite-react";
import SearchVoucher from "../../components/Search Product/SearchVoucher";
import { useNavigate, Link } from "react-router-dom";

const Voucher = () => {
  const [topPrd, setTopPrd] = useState([]);
  const [voucher, setVoucher] = useState([]);
  const [originalVoucher, setOriginalVoucher] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [buttonStates, setButtonStates] = useState([]);
  const navigate = useNavigate();
  const [selectedVoucherIndex, setSelectedVoucherIndex] = useState(null);

  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    setTopPrd(topPrdData);
    setOriginalVoucher(voucherData);
  }, []);

  useEffect(() => {
    const totalVoucher = originalVoucher.length;
    const itemsPerPage = 10;
    const pages = Math.ceil(totalVoucher / itemsPerPage);
    setTotalPages(pages);
  }, [originalVoucher]);

  useEffect(() => {
    const startIndex = (currentPage - 1) * 10;
    const endIndex = startIndex + 10;
    const filteredVoucher = originalVoucher.filter((voucher) =>
      voucher.title.toLowerCase().includes(searchTerm.toLowerCase())
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
    <div className="max-w-[1200px] max-h-[860px] mx-auto grid grid-cols-2 ">
      <div className="w-[320px] h-[860px] bg-[#FEFFFF] shadow-lg">
        <p className="font-sans font-bold text-[25px] text-gray-[900px] ml-[20px] mt-[5px]">
          VOUCHER CODE
        </p>
        <SearchVoucher handleSearch={handleSearch} />
        <p className="font-sans font-bold text-[25px] text-gray-[900px] ml-[20px] mt-[20px]">
          TOP PRODUCTS
        </p>
        {topPrd.map((topPrd, index) => (
          <div className="w-[280px] ml-[20px] mt-[10px]" key={index}>
            <Link to={`/product/${topPrd.id}`}>
              <div className="w-full flex justify-center items-center mb-[15px] bg-[#FEFFFF] shadow-md pb-[15px]">
                <img
                  className="w-[70px] h-[70px] self-center"
                  style={{ borderRadius: "20px" }}
                  src={require(`../../assets/image/Burger/${topPrd.image}`)}
                  alt=""
                />
                <div className="ml-[15px]">
                  <p className="text-base font-semibold font-sans text-[17px] text-gray-900">
                    {topPrd.name}
                  </p>
                  <div className="flex text-base font-semibold font-sans mt-[5px]">
                    <p className="line-through text-gray-600 text-[12px]">
                      {topPrd.originalPrice.toFixed(3)} VND
                    </p>
                    <p className="ml-[10px] text-red-700 text-[15px]">
                      {" "}
                      {(
                        (topPrd.originalPrice *
                          (100 - topPrd.discountPercent)) /
                        100
                      ).toFixed(3)}{" "}
                      VND
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <div className="w-[880px] h-[810px] grid grid-cols-2 gap-4">
        {voucher.map((voucherItem, index) => (
          <div
            style={{
              position: "relative",
              width: "400px",
              height: "130px",
              zIndex: "1",
              marginLeft: "-245px",
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
                className="w-[90px] h-[90px] rounded-full ml-[25px] mt-[20px]"
                src={require(`../../assets/image/voucher/lg_bg.jpg.png`)}
                alt=""
              />
              <p className="font-sans font-bold text-[20px] text-white ml-[52px] mt-[-15px]">
                {" "}
                {voucherItem.discount}%
              </p>
            </div>
            <div style={{ position: "absolute", zIndex: "3" }}>
              <p className="font-sans font-bold text-[17px] text-gray-900 ml-[115px] mt-[-120px]">
                {" "}
                {voucherItem.title}
              </p>
              <p className="font-sans font-semibold text-[13px] text-gray-900 ml-[115px] mt-[5px]">
                {voucherItem.discount}% off Maximum discount{" "}
                {voucherItem.maxDis}VND
              </p>
              <p className="font-sans font-semibold text-[13px] text-gray-900 ml-[115px] mt-[5px]">
                Minimum Order {voucherItem.minOrd}VND
              </p>
              <div className="flex">
                <p className="font-sans font-semibold text-[13px] text-gray-900 ml-[115px] mt-[10px]">
                  EXP: {voucherItem.endDate}
                </p>

                <Button
                  color={buttonStates[index].color}
                  className="rounded-none w-[91px] ml-[80px] h-[30px]"
                  onClick={() => handleClick(index)}
                >
                  <p className="font-sans font-semibold text-[13px] mt-[-6px]">
                    {buttonStates[index].text}
                  </p>
                </Button>
              </div>
            </div>
            <div style={{ position: "absolute", zIndex: "4" }}>
              <p className="font-sans font-semibold text-[10px] text-red-600 ml-[370px] mt-[-120px]">
                {" "}
                x{voucherItem.quantity}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-[300px] ml-[610px] mt-[-50px] flex overflow-x-auto sm:justify-center">
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
                  {voucher[selectedVoucherIndex].discount}% off Maximum discount{" "}
                  {voucher[selectedVoucherIndex].maxDis}VND
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
              <p className="font-normal text-gray-700">All forms of payment</p>

              <p className="font-semibold text-black mt-[20px]">
                Shipping Method
              </p>
              <p className="font-normal text-gray-700">All shipping methods</p>

              <p className="font-semibold text-black mt-[20px]">See Details</p>
              <p className="font-normal text-gray-700">
                Instant discount of {voucher[selectedVoucherIndex].maxDis}VND for orders from {voucher[selectedVoucherIndex].minOrd}VND.
                Applicable until {voucher[selectedVoucherIndex].endDate}. Each account can only be used
                once. Discount codes are issued by Burger N' Beer and will not be
                refunded for any reason.
              </p>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setOpenModal(false)} className="w-[550px] rounded-none ml-[20px] bg-red-600" color="">
            <p className="font-sans text-[17px] font-semibold text-white">Agree</p>
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default Voucher;
