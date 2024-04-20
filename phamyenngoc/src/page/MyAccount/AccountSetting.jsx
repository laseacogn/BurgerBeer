import React, { useState, useEffect } from "react";
import { Button, Label, TextInput } from "flowbite-react";
import { RiLockPasswordFill } from "react-icons/ri";
import { PiAddressBookFill } from "react-icons/pi";
import { FaCity } from "react-icons/fa6";
import { FaStreetView } from "react-icons/fa";
import wardData from "../../data/Ward.json";
import districtData from "../../data/District.json";

const AccountSetting = () => {
  const showAlert = () => {
    alert("Your account has been updated.\n\n" + "Thank you!");
  };

  const [ward, setWard] = useState([]);
  const [district, setDistrict] = useState(districtData);
  const [districtID, setDistrictID] = useState("");
  const filteredWards = ward.filter((item) => item.districtID === districtID);

  useEffect(() => {
    if (districtID === "") {
      setWard(wardData);
    } else {
      const filteredWard = wardData.filter(
        (ward) => ward.districtID === districtID
      );
      setWard(filteredWard);
    }
  }, [districtID]);

  return (
    <div className="max-w-[1200px] mx-auto no-scrollbar">
      <div className="w-full ml-[40px]">
        <p className="font-sans font-semibold text-xl text-black mt-[-10px] ">
          Account Setting
        </p>
      </div>
      <p className="font-sans font-medium text-base text-black mt-[10px] pb-[20px] ml-[40px]">
        Need help? You may contact our helpdesk at{" "}
        <span className="underline"> help_burgernbeer@burger.net </span>
      </p>
      <div className="max-w-full mx-auto flex grid grid-cols-2">
        <div className="w-[540px] mx-auto justify-center items-center">
          <div className="max-w">
            <div className="mb-2 block">
              <Label
                htmlFor="current pw"
                value="Current Password"
                className="font-sans font-semibold text-[15px] text-black"
              />
            </div>
            <TextInput
              id="current pw"
              type="current pw"
              icon={RiLockPasswordFill}
              required
            />
          </div>
          <div className="mt-[20px]">
            <div className="mb-2 block">
              <Label
                htmlFor="new pw"
                value="New Password"
                className="font-sans font-semibold text-[15px] text-black"
              />
            </div>
            <TextInput
              id="email"
              type="email"
              icon={RiLockPasswordFill}
              required
            />
          </div>
          <div className="mt-[20px]">
            <div className="mb-2 block">
              <Label
                htmlFor="confirm pw"
                value="Confirm Password"
                className="font-sans font-semibold text-[15px] text-black"
              />
            </div>
            <TextInput
              id="email"
              type="email"
              icon={RiLockPasswordFill}
              required
            />
          </div>
        </div>

        <div className="w-[540px] mx-auto justify-center items-center">
          <div className="max-w">
            <div className="mb-2 block">
              <Label
                htmlFor="City"
                value="City"
                className="font-sans font-semibold text-[15px] text-black"
              />
            </div>
            <select
              id="email"
              type="email"
              icon={FaCity}
              required
              class="form-select w-full border-slate-300 rounded-lg bg-slate-50"
            >
              <option disabled selected>
                {" "}
                -- Select City --
              </option>
              <option className="font-sans font-medium text-[15px] text-black">
                {" "}
                Da Nang City
              </option>
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
              name="District"
              icon={FaCity}
              required
              className="form-select w-full border-slate-300 rounded-lg bg-slate-50"
              onChange={(e) => setDistrictID(e.target.value)}
            >
              <option disabled selected>
                -- Select District --
              </option>
              {district.map((item, index) => (
                <option value={item.id} key={index}>
                  {item.name}
                </option>
              ))}
            </select>
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
              name="Ward"
              icon={FaCity}
              required
              className="form-select w-full border-slate-300 rounded-lg bg-slate-50"
            >
              <option disabled selected>
                -- Select Ward --
              </option>
              {filteredWards.map((item, index) => (
                <option value={item.id} key={index}>
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
                className="font-sans font-semibold text-[15px] text-black"
              />
            </div>
            <TextInput id="email" type="email" icon={FaStreetView} required />
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
              id="email"
              type="email"
              icon={PiAddressBookFill}
              required
            />
          </div>
        </div>
      </div>
      <Button
        className="w-1/3 h-[45px] mt-[20px] ml-[400px] mb-[20px]"
        color="dark"
        onClick={() => {
          showAlert();
        }}
      >
        <p className="font-sans font-bold text-[17px] text-white">
          {" "}
          SAVE CHANGES{" "}
        </p>
      </Button>
    </div>
  );
};

export default AccountSetting;
