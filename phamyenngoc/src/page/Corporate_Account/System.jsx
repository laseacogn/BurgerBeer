import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Tabs, Label, TextInput, Modal } from "flowbite-react";
import { AiFillHome } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { MdCategory } from "react-icons/md";
import { IoReorderFour, IoSettingsSharp } from "react-icons/io5";
import { HiTemplate } from "react-icons/hi";
import { BiSolidDiscount } from "react-icons/bi";
import { TbBrandBooking } from "react-icons/tb";
import { FaCircleInfo, FaPhone } from "react-icons/fa6";
import { MdPayments, MdDriveFileRenameOutline } from "react-icons/md";
import wardData from "../../data/Ward.json";
import districtData from "../../data/District.json";
import { FaCity } from "react-icons/fa6";
import { FaStreetView, FaShippingFast } from "react-icons/fa";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../config/firebase.config";
import { v4 } from "uuid";
import prdData from "../../data/payment.json";
import ToggleButton from "../../components/Toggle/ToggleButton";
import shipData from "../../data/shipping.json";

const System = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [openModal1, setOpenModal1] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);

  const [ward, setWard] = useState([]);
  const [district, setDistrict] = useState([]);
  const [DistrictID, setDistrictID] = useState([]);
  const [filteredWards, setFilteredWards] = useState([]);

  useEffect(() => {
    setDistrict(districtData);
  }, []);

  useEffect(() => {
    if (DistrictID === "") {
      setFilteredWards([]);
    } else {
      const filteredWard = wardData.filter(
        (ward) => ward.DistrictID === DistrictID
      );
      setFilteredWards(filteredWard);
    }
  }, [DistrictID]);

  const showAlert = () => {
    alert("Restaurant's information has been updated.\n\n" + "Thank you!");
  };
  const [payments, setPayments] = useState([]);

  const [ship, setShip] = useState([]);

  useEffect(() => {
    setPayments(prdData);
    setShip(shipData);
  }, []);

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

  const AddItem = async () => {
    const img = await handleUpload();
    console.log(img);
    if (!ID || !Name || !img) {
      alert("Please fill in all fields");
      return;
    } else {
      alert("Add new payment method successfully!");
    }

    console.log(ID);
    const newItem = {
      id: ID,
      name: Name,
      img: img,
    };

    setPayments([...payments, newItem]);
  };

  const [ID, setID] = useState("");
  const [Name, setName] = useState("");

  const [imageUploads2, setImageUploads2] = useState();
  const [imageUrl2, setImageUrl2] = useState();

  const uploadFile2 = async () => {
    try {
      const imageId = v4();
      const imageRef = ref(storage, `/Blog2/${imageId}`);
      const snapshot = await uploadBytes(imageRef, imageUploads2);
      const url = await getDownloadURL(snapshot.ref);
      return url;
    } catch (error) {
      console.error("Error uploading file:", error);
      throw error;
    }
  };

  const handleChange2 = (e) => {
    const file = e.target.files[0];
    setImageUploads2(file);
  };

  const handleUpload2 = async () => {
    try {
      const url = await uploadFile2();
      setImageUrl2(url);
      return url;
    } catch (error) {
      console.error("Error uploading file to Firebase:", error);
    }
  };

  const AddItem2 = async () => {
    const img = await handleUpload2();
    console.log(img);
    if (!ID2 || !Name2 || !img) {
      alert("Please fill in all fields");
      return;
    } else {
      alert("Add new shipping method successfully!");
    }

    const newItem2 = {
      id: ID,
      name: Name,
      img: img,
    };

    setShip([...ship, newItem2]);
  };

  const [ID2, setID2] = useState("");
  const [Name2, setName2] = useState("");

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
                payment
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
            <Button className="w-full h-[70px] flex rounded-none bg-[#FFFFFF] mt-[15px] drop-shadow">
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
            <Button className="w-full h-[70px] flex rounded-none bg-[#FFC0C0] mt-[15px] drop-shadow">
              <IoSettingsSharp className="w-[25px] h-[25px] text-gray-900 mr-[7px] mt-[10px]" />
              <p className="font-sans font-extrabold text-[17px] text-gray-900 mt-[13px]">
                SETTING
              </p>
            </Button>
          </Link>
        </div>
        <div className="w-[1000px] mx-auto no-scrollbar justify-center items-center">
          <p className="font-sans font-black text-[20px] text-gray-900 text-center mt-[10px]">
            SYSTEM SETTING
          </p>
          <div className="w-[950px] h-[780px] mx-auto justify-center items-center bg-[#FFFFFF] drop-shadow-lg ml-[25px] mt-[10px] no-scrollbar">
            <Tabs
              className="w-full mx-auto first-letter:justify-center items-center"
              aria-label="Tabs with underline"
              style="underline"
            >
              <Tabs.Item
                title={
                  <p className="w-[280px] flex font-sans text-[20px] font-semibold text-gray-900 text-center">
                    <FaCircleInfo className="ml-[17px] mr-[10px] mt-[2px]" />{" "}
                    <span> Restaurant's Information </span>
                  </p>
                }
              >
                <div className="w-[910px] mx-auto ml-[20px]">
                  <div className="w-[890px]">
                    <div className="mb-2 block">
                      <Label
                        htmlFor="email"
                        value="Restaurant's Name"
                        className="font-sans font-semibold text-[20px] text-gray-900"
                      />
                    </div>
                    <textarea
                      className="w-[890px]  rounded-lg border-gray-300"
                      id="email"
                      type="email"
                      placeholder="Burger N' Beer"
                      required
                    ></textarea>
                  </div>
                </div>
                <div className="w-[890px] flex justify-between items-center">
                  <div className="w-[430px] ml-[20px]">
                    <div className="mt-[15px]">
                      <div className="w-[430px]">
                        <div className="mb-2 block">
                          <Label
                            htmlFor="email"
                            value="Restaurant phone number"
                            className="font-sans font-semibold text-[20px] text-gray-900"
                          />
                        </div>
                        <TextInput
                          id="email"
                          type="email"
                          icon={FaPhone}
                          placeholder="(+84) 564751400"
                          required
                        />
                      </div>
                    </div>
                    <div className="w-[430px] mt-[20px]">
                      <div className="mb-2 block">
                        <Label
                          htmlFor="City"
                          value="Province / City"
                          className="font-sans font-semibold text-[20px] text-gray-900"
                        />
                      </div>
                      <select
                        id="email"
                        type="email"
                        icon={FaCity}
                        required
                        className="form-select w-full border-slate-300 rounded-lg bg-slate-50"
                      >
                        <option disabled selected>
                          Da Nang City
                        </option>
                        <option className="font-sans font-medium text-[15px] text-black">
                          {" "}
                          Da Nang City
                        </option>
                        <option className="font-sans font-medium text-[15px] text-black">
                          {" "}
                          Ha Noi City
                        </option>
                      </select>
                    </div>
                    <div className="mt-[20px]">
                      <div className="mb-2 block">
                        <Label
                          htmlFor="Ward"
                          value="Ward"
                          className="font-sans font-semibold text-[20px] text-gray-900"
                        />
                      </div>
                      <select
                        id="Ward"
                        name="Ward"
                        icon={FaCity}
                        required
                        className="form-select w-full border-slate-300 rounded-lg bg-slate-50"
                        value={ward}
                        onChange={(e) => setWard(e.target.value)}
                      >
                        <option disabled selected>
                          My An Ward
                        </option>
                        {filteredWards.map((item, index) => (
                          <option value={item.DistrictID} key={index}>
                            {item.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="w-[430px] mr-[-20px]">
                    <div className="mt-[15px]">
                      <div className="mb-2 block">
                        <Label
                          htmlFor="District"
                          value="Currency"
                          className="font-sans font-semibold text-[20px] text-gray-900"
                        />
                      </div>
                      <select
                        id="District"
                        name="District"
                        icon={FaCity}
                        required
                        defaultValue="Viet Nam Dong (VND)"
                        className="form-select w-full border-slate-300 rounded-lg bg-slate-50"
                      >
                        <option disabled selected>
                          Viet Nam Dong (VND)
                        </option>
                        <option className="font-sans font-medium text-[15px] text-black">
                          {" "}
                          Viet Nam Dong (VND)
                        </option>
                        <option className="font-sans font-medium text-[15px] text-black">
                          {" "}
                          Dollar (USD)
                        </option>
                      </select>
                    </div>
                    <div className="mt-[20px]">
                      <div className="mb-2 block">
                        <Label
                          htmlFor="District"
                          value="District"
                          className="font-sans font-semibold text-[20px] text-gray-900"
                        />
                      </div>
                      <select
                        id="District"
                        name="District"
                        icon={FaCity}
                        required
                        className="form-select w-full border-slate-300 rounded-lg bg-slate-50"
                        onChange={(e) => setDistrictID(e.target.value)}
                      >
                        <option disabled selected>
                          Ngu Hanh Son District
                        </option>
                        {district.map((item, index) => (
                          <option value={item.DistrictID} key={index}>
                            {item.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="mt-[20px]">
                      <div className="mb-2 block">
                        <Label
                          htmlFor="Street"
                          value="Street"
                          className="font-sans font-semibold text-[20px] text-gray-900"
                        />
                      </div>
                      <TextInput
                        id="email"
                        type="email"
                        icon={FaStreetView}
                        placeholder="26 An Thuong 4 Street"
                        required
                      />
                    </div>
                  </div>
                </div>
                <Button
                  className="w-[890px] mt-[30px] rounded-none ml-[20px]"
                  onClick={() => {
                    showAlert();
                  }}
                  color="dark"
                >
                  <p className="font-sans font-semibold text-[20px] text-white">
                    {" "}
                    SAVE{" "}
                  </p>
                </Button>
              </Tabs.Item>

              <Tabs.Item
                title={
                  <p className="w-[280px] flex font-sans text-[20px] font-semibold text-gray-900 text-center">
                    {" "}
                    <MdPayments className=" ml-[50px] w-[23px] h-[23px]  mr-[10px] " />{" "}
                    <span> Payment Method </span>
                  </p>
                }
              >
                <div className="w-[900px] mx-auto pb-[10px]">
                  <Modal
                    size="lg"
                    show={openModal1}
                    onClose={() => setOpenModal1(false)}
                    className="no-scrollbar"
                  >
                    <Modal.Header className="h-[50px] pt-[10px]">
                      Add New Payment Method
                    </Modal.Header>
                    <Modal.Body className="no-scrollbar">
                      <div className="w-full mx-auto justify-center items-center">
                        <div className="w-[95%]">
                          <div className="max-w">
                            <div className="mb-2 block">
                              <Label
                                htmlFor="email"
                                value="Payment ID"
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
                                value="Payment Name"
                                className="font-sans font-medium text-[15px] text-black"
                              />
                            </div>
                            <TextInput
                              onChange={(e) => {
                                setName(e.target.value);
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
                                value="Payment Image"
                                className="font-sans font-medium text-[15px] text-black"
                              />
                            </div>

                            <input
                              type="file"
                              className="file-input file-input-bordered w-full max-w-[500px]"
                              multiple
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                      </div>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button
                        onClick={() => {
                          setOpenModal1(false);
                          AddItem();
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
                  {payments.map((payment) => (
                    <div className="w-[90%] h-[100px] flex justify-between items-left bg-[#FEFFFF] drop-shadow-md border-solid border-2 border-gray-300 pb-[20px] ml-[45px] mb-[20px]">
                      {parseInt(payment.id) > 3 ? (
                        <div>
                          <img
                            className="w-[100px] h-[70px] self-center ml-[30px] mt-[15px] mb-[15px]"
                            style={{ borderRadius: "5px" }}
                            src={payment.img}
                            alt={payment.name}
                          />
                        </div>
                      ) : (
                        <div>
                          <img
                            className="w-[100px] h-[70px] self-center ml-[30px] mt-[15px] mb-[15px]"
                            style={{ borderRadius: "5px" }}
                            src={require(`../../assets/image/avatar/${payment?.img}`)}
                            alt={payment?.name}
                          />
                        </div>
                      )}

                      <p className="font-sans font-semibold text-[20px] text-gray-900 mt-[30px] ">
                        {" "}
                        {payment.name}
                      </p>
                      <ToggleButton />
                    </div>
                  ))}

                  <div className="w-full flex justify-between items-center mb-[20px]">
                    <Button
                      className="w-[810px] rounded-none ml-[45px]"
                      onClick={() => setOpenModal1(true)}
                      color="dark"
                    >
                      <p className="font-sans font-semibold text-[20px] text-white">
                        {" "}
                        ADD NEW PAYMENT METHOD{" "}
                      </p>
                    </Button>
                  </div>
                </div>
              </Tabs.Item>

              <Tabs.Item
                title={
                  <p className="w-[280px] flex font-sans text-[20px] font-semibold text-gray-900 text-center">
                    {" "}
                    <FaShippingFast className=" ml-[50px] w-[23px] h-[23px] mr-[10px] " />{" "}
                    <span> Shipping Method </span>
                  </p>
                }
              >
                <div className="w-[900px] mx-auto bg-[#FEFFFF] drop-shadow-md pb-[10px]">
                  <Modal
                    size="lg"
                    show={openModal2}
                    onClose={() => setOpenModal2(false)}
                    className="no-scrollbar"
                  >
                    <Modal.Header className="h-[50px] pt-[10px]">
                      Add New Shipping Method
                    </Modal.Header>
                    <Modal.Body className="no-scrollbar">
                      <div className="w-full mx-auto justify-center items-center">
                        <div className="w-[95%]">
                          <div className="max-w">
                            <div className="mb-2 block">
                              <Label
                                htmlFor="email"
                                value="Payment ID"
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
                                value="Payment Name"
                                className="font-sans font-medium text-[15px] text-black"
                              />
                            </div>
                            <TextInput
                              onChange={(e) => {
                                setName2(e.target.value);
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
                                value="Payment Image"
                                className="font-sans font-medium text-[15px] text-black"
                              />
                            </div>

                            <input
                              type="file"
                              className="file-input file-input-bordered w-full max-w-[500px]"
                              multiple
                              onChange={handleChange2}
                            />
                          </div>
                        </div>
                      </div>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button
                        onClick={() => {
                          setOpenModal2(false);
                          AddItem2();
                        }}
                        color="dark"
                      >
                        I accept
                      </Button>
                      <Button color="gray" onClick={() => setOpenModal2(false)}>
                        Decline
                      </Button>
                    </Modal.Footer>
                  </Modal>
                  {ship.map((ship) => (
                    <div className="w-[90%] h-[100px] flex justify-between items-left bg-[#FEFFFF] drop-shadow-md border-solid border-2 border-gray-300 pb-[20px] ml-[45px] mb-[20px]">
                      {parseInt(ship.id) > 2 ? (
                        <div>
                          <img
                            className="w-[100px] h-[70px] self-center ml-[30px] mt-[15px] mb-[15px]"
                            style={{ borderRadius: "5px" }}
                            src={ship.img}
                            alt={ship.name}
                          />
                        </div>
                      ) : (
                        <div>
                          <img
                            className="w-[100px] h-[70px] self-center ml-[30px] mt-[15px] mb-[15px]"
                            style={{ borderRadius: "5px" }}
                            src={require(`../../assets/image/avatar/${ship?.img}`)}
                            alt={ship?.name}
                          />
                        </div>
                      )}

                      <p className="font-sans font-semibold text-[20px] text-gray-900 mt-[30px] ">
                        {" "}
                        {ship.name}
                      </p>
                      <ToggleButton />
                    </div>
                  ))}

                  <div className="w-full flex justify-between items-center mb-[20px]">
                    <Button
                      className="w-[810px] rounded-none ml-[45px]"
                      onClick={() => setOpenModal2(true)}
                      color="dark"
                    >
                      <p className="font-sans font-semibold text-[20px] text-white">
                        {" "}
                        ADD NEW SHIPPING METHOD{" "}
                      </p>
                    </Button>
                  </div>
                </div>
              </Tabs.Item>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default System;
