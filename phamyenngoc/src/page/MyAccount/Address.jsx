import React, { useEffect, useState } from "react";
import { Button, Modal, Label, TextInput } from "flowbite-react";
import addData from "../../data/myAddress.json";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { PiAddressBookFill } from "react-icons/pi";
import wardData from "../../data/Ward.json";
import districtData from "../../data/District.json";

const Address = () => {
  const showAlert = () => {
    alert("Add new address successfully !");
  };
  const showAlert2 = () => {
    alert("Update your address successfully !");
  };
  const showAlert3 = () => {
    alert("Delete your address successfully !");
  };

  const [address, setAddress] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const [DistrictID, setDistrictID] = useState("");
  const [filteredWards, setFilteredWards] = useState([]);
  const [district, setDistrict] = useState({});

  useEffect(() => {
    if (Array.isArray(districtData)) {
      const districtObj = {};
      districtData.forEach(item => {
        districtObj[item.DistrictID] = item;
      });
      setDistrict(districtObj);
    }
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

  useEffect(() => {
    setAddress(addData);
  }, []);

  const handleDelete = (index) => {
    const updatedAddress = address.filter((_, i) => i !== index);
    setAddress(updatedAddress);
  };

  const AddAddress = async () => {
    if (!fullname || !phone || !city || !district || !ward || !specificAdd) {
      alert("Please fill in all fields");
      return;
    }
    const newItem = {
      name: fullname,
      phone: phone,
      city: city,
      district: district[DistrictID].name,
      ward: ward,
      specificAdd: specificAdd,
    };

    setAddress([...address, newItem]);
    setOpenModal(false);
    showAlert();
  };


  const [fullname, setFullname] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [ward, setWard] = useState("");
  const [specificAdd, setSpecificAdd] = useState("");

  const [editIndex, setEditIndex] = useState(null);
  const [editInfo, setEditInfo] = useState({
    fullname: "",
    phone: "",
    city: "",
    district: "",
    ward: "",
    specificAdd: "",
  });

  const openEditModal = (index) => {
    setEditIndex(index);
    const { name, phone, city, district, ward, specificAdd } = address[index];
    setFullname(name);
    setPhone(phone);
    setCity(city);
    setWard(ward);
    setSpecificAdd(specificAdd);
    setOpenModal2(true);
  };

  const updateAddress = () => {
    const updatedAddress = [...address];
    updatedAddress[editIndex] = {
      name: fullname,
      phone: phone,
      city: city,
      district: district[DistrictID].name,
      ward: ward,
      specificAdd: specificAdd,
    };
    setAddress(updatedAddress);
    setOpenModal2(false);
    showAlert2();
  };

  return (
    <div className="max-w-[1200px] mx-auto no-scrollbar">
      <div className="w-[1120px] flex justify-between items-center ml-[40px] border-b">
        <p className="font-sans font-semibold text-xl text-black mt-[-10px] pb-[10px] ">
          My Address
        </p>
        <Button
          className="rounded-none h-[40px] mt-[-12px] mb-[10px]"
          color="dark"
          onClick={() => setOpenModal(true)}
        >
          <p className="font-sans font-semibold text-[17px] text-white">
            {" "}
            Add New Address
          </p>
        </Button>

        <Modal
          show={openModal}
          onClose={() => setOpenModal(false)}
          className="no-scrollbar"
        >
          <Modal.Header className="h-[50px] pt-[10px]">
            Add New Address
          </Modal.Header>
          <Modal.Body className="no-scrollbar">
            <div className="w-full mx-auto grid grid-cols-2 justify-between items-center">
              <div className="w-[280px] mx-auto justify-center items-center">
                <div className="max-w">
                  <div className="mb-2 block">
                    <Label
                      htmlFor="current pw"
                      value="Full Name"
                      className="font-sans font-semibold text-[15px] text-black"
                    />
                  </div>
                  <TextInput
                    onChange={(e) => {
                      setFullname(e.target.value);
                    }}
                    id="fullname"
                    type="text"
                    icon={MdDriveFileRenameOutline}
                    required
                  />
                </div>
                <div className="mt-[20px]">
                  <div className="mb-2 block">
                    <Label
                      htmlFor="City"
                      value="City"
                      className="font-sans font-semibold text-[15px] text-black"
                    />
                  </div>
                  <select
                    onChange={(e) => {
                      setCity(e.target.value);
                    }}
                    id="city"
                    required
                    className="form-select w-full border-slate-300 rounded-lg bg-slate-50"
                  >
                    <option disabled selected>
                      -- Select City --
                    </option>
                    <option value="Da Nang City"> Da Nang City</option>
                  </select>
                </div>

                <div className="mt-[20px]">
                  <div className="mb-2 block">
                    <Label
                      htmlFor="District"
                      value="District"
                      className="font-sans font-semibold text-[15px] text-black"
                    />
                  </div>
                  <select
                    id="District"
                    required
                    className="form-select w-full border-slate-300 rounded-lg bg-slate-50"
                    onChange={(e) => {
                      setDistrictID(e.target.value);
                    }}
                  >
                    <option value="" disabled defaultValue>
                      -- Select District --
                    </option>
                    {Object.values(district).map((item) => (
                      <option value={item.DistrictID} key={item.DistrictID}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="w-[280px] mx-auto justify-center items-center">
                <div className="max-w">
                  <div className="mb-2 block">
                    <Label
                      htmlFor="confirm pw"
                      value="Phone Number"
                      className="font-sans font-semibold text-[15px] text-black"
                    />
                  </div>
                  <TextInput
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                    id="phone"
                    type="tel"
                    icon={FaPhoneAlt}
                    required
                  />
                </div>
                <div className="mt-[20px]">
                  <div className="mb-2 block">
                    <Label
                      htmlFor="Ward"
                      value="Ward"
                      className="font-sans font-semibold text-[15px] text-black"
                    />
                  </div>
                  <select
                    id="Ward"
                    required
                    className="form-select w-full border-slate-300 rounded-lg bg-slate-50"
                    onChange={(e) => setWard(e.target.value)}
                  >
                    <option value="" disabled defaultValue>
                      -- Select Ward --
                    </option>
                    {filteredWards.map((item) => (
                      <option value={item.WardID} key={item.WardID}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mt-[20px]">
                  <div className="mb-2 block">
                    <Label
                      htmlFor="add2"
                      value="Detail Address"
                      className="font-sans font-semibold text-[15px] text-black"
                    />
                  </div>
                  <TextInput
                    onChange={(e) => {
                      setSpecificAdd(e.target.value);
                    }}
                    id="specificAdd"
                    type="text"
                    icon={PiAddressBookFill}
                    required
                  />
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer className="h-[60px]">
            <Button
              onClick={() => {
                AddAddress();
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
              onClick={() => setOpenModal(false)}
            >
              <p className="font-sans font-semibold text-[15px] text-gray-900">
                Decline
              </p>
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      <div className="w-[1120px] ml-[40px] ">
        <div className="w-full justify-between items-center ">
          {address.map((address, index) => (
            <div
              className="w-full flex justify-between items-center border-b"
              key={index}
            >
              <div>
                <p className="font-sans font-semibold text-[17px] text-gray-900 mt-[15px]">
                  {address.name}{" "}
                  <span className="font-normal text-[15px] text-gray-700">
                    | (+84) {address.phone}
                  </span>
                </p>
                <p className="font-normal text-[15px] text-gray-700 mb-[15px]">
                  {address.specificAdd} <br />
                  {address.ward}, {address.district}, {address.city}
                </p>
              </div>
              <div className="flex">
                <Button
                  className="w-[70px] h-[30px] rounded-none border-black mr-[10px]"
                  color="light"
                  onClick={() => openEditModal(index)}
                >
                  <p className="font-sans font-medium text-[15px] text-gray-900 mt-[-5px]">
                    {" "}
                    Update
                  </p>
                </Button>
                <Button
                  className="w-[70px] h-[30px] rounded-none border-black"
                  color="light"
                  onClick={() => {handleDelete(index); showAlert3()}}
                >
                  <p className="font-sans font-medium text-[15px] text-gray-900 mt-[-5px]">
                    {" "}
                    Delete
                  </p>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal
        show={openModal2}
        onClose={() => setOpenModal2(false)}
        className="no-scrollbar"
      >
        <Modal.Header className="h-[50px] pt-[10px]">
          Update Address
        </Modal.Header>
        <Modal.Body>
          <div className="w-full mx-auto grid grid-cols-2 justify-between items-center">
            <div className="w-[280px] mx-auto justify-center items-center">
              <div className="max-w">
                <div className="mb-2 block">
                  <Label
                    htmlFor="current pw"
                    value="Full Name"
                    className="font-sans font-semibold text-[15px] text-black"
                  />
                </div>
                <TextInput
                  onChange={(e) => {
                    setFullname(e.target.value);
                  }}
                  id="fullname"
                  type="text"
                  icon={MdDriveFileRenameOutline}
                  required
                  value={fullname}
                />
              </div>
              <div className="mt-[20px]">
                <div className="mb-2 block">
                  <Label
                    htmlFor="City"
                    value="City"
                    className="font-sans font-semibold text-[15px] text-black"
                  />
                </div>
                <select
                  onChange={(e) => {
                    setCity(e.target.value);
                  }}
                  id="city"
                  required
                  className="form-select w-full border-slate-300 rounded-lg bg-slate-50"
                  value={city}
                >
                  <option disabled selected>
                    -- Select City --
                  </option>
                  <option value="Da Nang City"> Da Nang City</option>
                </select>
              </div>

              <div className="mt-[20px]">
                <div className="mb-2 block">
                  <Label
                    htmlFor="District"
                    value="District"
                    className="font-sans font-semibold text-[15px] text-black"
                  />
                </div>
                <select
                  id="District"
                  required
                  className="form-select w-full border-slate-300 rounded-lg bg-slate-50"
                  value={DistrictID}
                  onChange={(e) => {
                    setDistrictID(e.target.value);
                  }}
                >
                  <option value="" disabled defaultValue>
                    -- Select District --
                  </option>
                  {Object.values(district).map((item) => (
                    <option value={item.DistrictID} key={item.DistrictID}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="w-[280px] mx-auto justify-center items-center">
              <div className="max-w">
                <div className="mb-2 block">
                  <Label
                    htmlFor="confirm pw"
                    value="Phone Number"
                    className="font-sans font-semibold text-[15px] text-black"
                  />
                </div>
                <TextInput
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                  id="phone"
                  type="tel"
                  icon={FaPhoneAlt}
                  required
                  value={phone}
                />
              </div>
              <div className="mt-[20px]">
                <div className="mb-2 block">
                  <Label
                    htmlFor="Ward"
                    value="Ward"
                    className="font-sans font-semibold text-[15px] text-black"
                  />
                </div>
                <select
                  id="Ward"
                  required
                  className="form-select w-full border-slate-300 rounded-lg bg-slate-50"
                  value={ward}
                  onChange={(e) => setWard(e.target.value)}
                >
                  <option value="" disabled defaultValue>
                    -- Select Ward --
                  </option>
                  {filteredWards.map((item) => (
                    <option value={item.WardID} key={item.WardID}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mt-[20px]">
                <div className="mb-2 block">
                  <Label
                    htmlFor="add2"
                    value="Detail Address"
                    className="font-sans font-semibold text-[15px] text-black"
                  />
                </div>
                <TextInput
                  onChange={(e) => {
                    setSpecificAdd(e.target.value);
                  }}
                  id="specificAdd"
                  type="text"
                  icon={PiAddressBookFill}
                  required
                  value={specificAdd}
                />
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="h-[60px]">
          <Button
            onClick={() => {
              updateAddress();
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

export default Address;
