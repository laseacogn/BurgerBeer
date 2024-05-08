import React, { useEffect, useState } from "react";
import topPrdData from "../../data/topPrd.json";
import voucherData from "../../data/voucher.json";
import { Pagination, Button, Modal, Label, TextInput } from "flowbite-react";
import SearchVoucher from "../../components/Search Product/SearchVoucher";
import { useNavigate, Link } from "react-router-dom";
import { FaPen } from "react-icons/fa6";
import { AiFillDelete } from "react-icons/ai";

const VoucherAdmin = () => {
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
  const [openModal1, setOpenModal1] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);

  useEffect(() => {
    setTopPrd(topPrdData);
    setOriginalVoucher(voucherData);
  }, []);

  const handleDelete = (index) => {
    const updatedVoucher = voucher.filter((_, i) => i !== index);
    setVoucher(updatedVoucher);
  };

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

  const handleClick2 = (index) => {
    setSelectedVoucherIndex(index);
    setOpenModal(true);
  };

  //ADD VOUCHER
  const AddVoucher = async () => {
    const parsedPrice1 = parseFloat(Discount);
    const parsedPrice2 = parseFloat(Quantity);
    const parsedPrice3 = parseFloat(QuantityUsed);
    const parsedPricee = parseFloat(MinOrd);
    const parsedPriceee = parseFloat(MaxDis);

    const currentDatee = new Date();
    const startDatee = new Date(startDate);
    const endDatee = new Date(endDate);

    const formatDateString = (date) => {
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, "0");
      const day = date.getDate().toString().padStart(2, "0");
      return `${year}-${month}-${day}`;
    };

    const formattedStartDate = formatDateString(startDatee);
    const formattedEndDate = formatDateString(endDatee);
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
    } else if (
      isNaN(parsedPrice1) ||
      isNaN(parsedPrice2) ||
      isNaN(parsedPrice3) ||
      isNaN(parsedPricee) ||
      isNaN(parsedPriceee)
    ) {
      alert("Please enter valid prices, discount, and quantity");
      return;
    } else if (parsedPrice3 > parsedPrice2) {
      alert("Quantity used cannot be greater than quantity");
      return;
    } else if (
      endDatee < startDatee ||
      endDatee < currentDatee ||
      startDatee < currentDatee
    ) {
      alert("Please enter valid dates");
      return;
    } else {
      alert("Add new voucher successfully!");
    }
    console.log(ID);
    const newItem = {
      id: ID,
      title: Title,
      discount: parsedPrice1,
      quantity: parsedPrice2,
      quantityUsed: parsedPrice3,
      minOrd: parsedPricee,
      maxDis: parsedPriceee,
      startDate: formattedStartDate,
      endDate: formattedEndDate,
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

  //EDIT VOUCHER
  const [editIndex, setEditIndex] = useState(null);
  const [ID2, setID2] = useState("");
  const [Title2, setTitle2] = useState("");
  const [Discount2, setDiscount2] = useState("");
  const [Quantity2, setQuantity2] = useState("");
  const [QuantityUsed2, setQuantityUsed2] = useState("");
  const [MinOrd2, setMinOrd2] = useState("");
  const [MaxDis2, setMaxDis2] = useState("");
  const [StartDate2, setStartDate2] = useState("");
  const [EndDate2, setEndDate2] = useState("");

  const [editInfo, setEditInfo] = useState({
    ID2: "",
    Title2: "",
    Discount2: "",
    Quantity2: "",
    QuantityUsed2: "",
    MinOrd2: "",
    MaxDis2: "",
    StartDate2: "",
    EndDate2: "",
  });

  const openEditModal = (index) => {
    setEditIndex(index);
    const {
      ID2,
      Title2,
      Discount2,
      Quantity2,
      QuantityUsed2,
      MinOrd2,
      MaxDis2,
      StartDate2,
      EndDate2,
    } = voucher[index];
    setID(ID2);
    setTitle2(Title2);
    setDiscount2(Discount2);
    setQuantity2(Quantity2);
    setQuantityUsed2(QuantityUsed2);
    setMinOrd2(MinOrd2);
    setMaxDis2(MaxDis2);
    setStartDate2(StartDate2);
    setEndDate2(EndDate2);

    setOpenModal2(true);
  };

  const updatedProducts = async () => {
    if (
      !ID2 ||
      !Title2 ||
      !Discount2 ||
      !Quantity2 ||
      !QuantityUsed2 ||
      !MaxDis2 ||
      !MinOrd2 ||
      !StartDate2 ||
      !EndDate2
    ) {
      alert("Please fill in all fields");
      return;
    }
    const parsedDiscount = parseFloat(Discount2);
    const parsedQuantity = parseFloat(Quantity2);
    const parsedQuantityUsed = parseFloat(QuantityUsed2);
    const parsedMinOrd = parseFloat(MinOrd2);
    const parsedMaxDis = parseFloat(MaxDis2);

    const currentDatee = new Date();
    const startDatee = new Date(StartDate2);
    const endDatee = new Date(EndDate2);

    const formatDateString = (date) => {
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, "0");
      const day = date.getDate().toString().padStart(2, "0");
      return `${year}-${month}-${day}`;
    };

    const formattedStartDate = formatDateString(startDatee);
    const formattedEndDate = formatDateString(endDatee);

    if (
      isNaN(parsedDiscount) ||
      isNaN(parsedQuantity) ||
      isNaN(parsedQuantityUsed) ||
      isNaN(parsedMinOrd) ||
      isNaN(parsedMaxDis)
    ) {
      alert("Please enter valid prices, discount, and quantity");
      return;
    } else if (parsedQuantityUsed > parsedQuantity) {
      alert("Quantity used cannot be greater than quantity");
      return;
    } else if (
      endDatee < startDatee ||
      endDatee < currentDatee ||
      startDatee < currentDatee
    ) {
      alert("Please enter valid dates");
      return;
    } else {
      alert("Update voucher successfully!");
    }
    const updatedProducts = [...voucher];
    updatedProducts[editIndex] = {
      id: ID2,
      title: Title2,
      discount: parsedDiscount,
      quantity: parsedQuantity,
      quantityUsed: parsedQuantityUsed,
      minOrd: parsedMinOrd,
      maxDis: parsedMaxDis,
      startDate: formattedStartDate,
      endDate: formattedEndDate,
    };
    setVoucher(updatedProducts);
    setOpenModal2(false);
  };

  return (
    <div className="max-w-[1200px] max-h-[950px] mx-auto grid grid-cols-2 ">
      <div className="w-[320px] h-[950px] bg-[#FEFFFF] shadow-lg">
        <Button
          className=" w-[280px] h-[50px] ml-[20px] mt-[5px] rounded-none"
          color="dark"
          onClick={() => setOpenModal1(true)}
        >
          <p className="font-sans font-bold text-[21px] mt-[5px]">
            {" "}
            ADD NEW VOUCHER
          </p>
        </Button>
        <p className="font-sans font-bold text-[25px] text-gray-[900px] ml-[20px] mt-[20px]">
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

      <div className="w-[880px] h-[860px] grid grid-cols-2 gap-2">
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
                onClick={() => handleClick2(index)}
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
                {voucherItem.maxDis}.000VND
              </p>
              <p className="font-sans font-semibold text-[13px] text-gray-900 ml-[115px] mt-[5px]">
                Minimum Order {voucherItem.minOrd}.000VND
              </p>
              <div className="flex">
                <p className="font-sans font-semibold text-[13px] text-gray-900 ml-[115px] mt-[10px]">
                  EXP: {voucherItem.endDate}
                </p>
                <div className="flex ml-[110px]">
                  <Button
                    onClick={() => {
                      setOpenModal2(true);
                      openEditModal(index);
                    }}
                    className="w-[25px] h-[25px] text-gray-900 border-gray-300 hover-text-red mr-[15px]"
                    color="light"
                  >
                    <FaPen className="w-[15px] h-[15px] mt-[-7px]" />
                  </Button>
                  <Button
                    onClick={() => handleDelete(index)}
                    className="w-[25px] h-[25px] text-gray-900 border-gray-300 hover-text-red"
                    color="light"
                  >
                    <AiFillDelete className="w-[20px] h-[20px] mt-[-7px]" />
                  </Button>
                </div>
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
      <div className="w-[300px] ml-[610px] mt-[-70px] flex overflow-x-auto sm:justify-center">
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
                  {voucher[selectedVoucherIndex].maxDis}.000VND
                </p>
                <p className="font-sans font-semibold text-[15px] text-gray-900 ml-[160px] mt-[3px]">
                  Minimum Order {voucher[selectedVoucherIndex].minOrd}.000VND
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

      {/* Modal Add New Voucher */}

      <Modal
        show={openModal1}
        onClose={() => setOpenModal1(false)}
        className="no-scrollbar"
      >
        <Modal.Header className="h-[50px] pt-[10px]">
          Add New Voucher
        </Modal.Header>
        <Modal.Body className="no-scrollbar">
          <div className="w-full mx-auto grid grid-cols-2 justify-between items-center">
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
                  onChange={(e) => {
                    setID(e.target.value);
                  }}
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
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
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
                  onChange={(e) => {
                    setDiscount(e.target.value);
                  }}
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
                  onChange={(e) => {
                    setStartDate(e.target.value);
                  }}
                  id="email"
                  type="date"
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
                  onChange={(e) => {
                    setEndDate(e.target.value);
                  }}
                  id="email"
                  type="date"
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
                  onChange={(e) => {
                    setQuantity(e.target.value);
                  }}
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
                  onChange={(e) => {
                    setQuantityUsed(e.target.value);
                  }}
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
                  onChange={(e) => {
                    setMinOrd(e.target.value);
                  }}
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
                  onChange={(e) => {
                    setMaxDis(e.target.value);
                  }}
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
                <TextInput id="email" type="email" required />
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={() => {
              setOpenModal1(false);
              AddVoucher();
            }}
            color="dark"
          >
            I accept
          </Button>
          <Button color="gray" onClick={() => setOpenModal1(false)}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal Edit Voucher */}
      <Modal
        show={openModal2}
        onClose={() => setOpenModal2(false)}
        className="no-scrollbar"
      >
        <Modal.Header className="h-[50px] pt-[10px]">Edit Voucher</Modal.Header>

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
                  onChange={(e) => {
                    setID2(e.target.value);
                  }}
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
                  onChange={(e) => {
                    setTitle2(e.target.value);
                  }}
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
                  onChange={(e) => {
                    setDiscount2(e.target.value);
                  }}
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
                  onChange={(e) => {
                    setStartDate2(e.target.value);
                  }}
                  id="email"
                  type="date"
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
                  onChange={(e) => {
                    setEndDate2(e.target.value);
                  }}
                  id="email"
                  type="date"
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
                  onChange={(e) => {
                    setQuantity2(e.target.value);
                  }}
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
                  onChange={(e) => {
                    setQuantityUsed2(e.target.value);
                  }}
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
                  onChange={(e) => {
                    setMinOrd2(e.target.value);
                  }}
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
                  onChange={(e) => {
                    setMaxDis2(e.target.value);
                  }}
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
                <TextInput id="email" type="email" required />
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="h-[60px]">
          <Button
            onClick={() => {
              updatedProducts();
            }}
            color="dark"
            className="rounded-none"
          >
            <p className="font-sans font-semibold text-[15px] text-white">
              Accept
            </p>
          </Button>
          <Button
            className="rounded-none"
            color="light"
            onClick={() => setOpenModal2(false)}
          >
            <p className="font-sans font-semibold text-[15px] text-gray-900">
              Decline
            </p>
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default VoucherAdmin;
