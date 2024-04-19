import React, { useState } from "react";
import {
  Button,
  Label,
  TextInput,
  Datepicker
} from "flowbite-react";
import { HiMail } from "react-icons/hi";
import { MdDriveFileRenameOutline, MdCameraAlt } from "react-icons/md";

const Profile = () => {
  const showAlert = () => {
    alert("Your information has been updated.\n\n" + "Thank you!");
  };
  const [hovered, setHovered] = useState(false);
  const [showInput, setShowInput] = useState(false);

  const changeAvatar = () => {
    setShowInput(true);
    console.log("Changed Your Avatar");
  };
  return (
    <div className="max-w-[1200px] mx-auto no-scrollbar">
      <div className="w-full ml-[40px]">
        <p className="font-sans font-semibold text-xl text-black mt-[-10px] pb-[10px] ">
          Account Information
        </p>
      </div>
      <div className="max-w-full mx-auto flex grid grid-cols-2">
        <div className="w-[200px] mx-auto justify-center items-center">
          <div className="w-[200px] mb-[20px] mt-[15px]">
            <div className="avatar">
              <div
                className="relative w-[150px] rounded-full ml-[-80px]"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                onClick={changeAvatar}
              >
                <img
                  src={require("../../assets/image/avatar/avatar.jpg")}
                  alt=""
                />
                {hovered && (
                  <button
                    className="absolute bottom-[50px] left-1/2 transform -translate-x-1/2 bg-slate-50 text-black border-none px-4 py-2 rounded-full cursor-pointer transition duration-300"
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    onClick={changeAvatar}
                  >
                    <MdCameraAlt/>
                  </button>
                )}
                {showInput && (
                  <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
                )}
              </div>
            </div>
            <p className="font-sans text-lg font-medium mt-[10px] ml-[-75px]">
              {" "}
              PHAM YEN NGOC
            </p>
          </div>
        </div>

        <div className="w-[650px] ml-[-175px]">
          <div className="max-w">
            <div className="mb-2 block">
              <Label
                htmlFor="id"
                value="Member ID"
                className="font-sans font-medium text-[15px] text-black"
              />
            </div>
            <TextInput
              id="id"
              type="id"
              icon={MdDriveFileRenameOutline}
              required
            />
          </div>
          <div className="mt-[20px]">
            <div className="mb-2 block">
              <Label
                htmlFor="name"
                value="Full Name"
                className="font-sans font-medium text-[15px] text-black"
              />
            </div>
            <TextInput
              id="name"
              type="name"
              icon={MdDriveFileRenameOutline}
              required
            />
          </div>
          <div className="mt-[20px]">
            <div className="mb-2 block">
              <Label
                htmlFor="email"
                value="Email Address"
                className="font-sans font-medium text-[15px] text-black"
              />
            </div>
            <TextInput id="email" type="email" icon={HiMail} required />
          </div>
          <div className="mt-[20px]">
            <div className="mb-2 block">
              <Label
                htmlFor="gender"
                value="Gender"
                className="font-sans font-medium text-[15px] text-black"
              />
            </div>
            <select
              id="gender"
              name="gender"
              class="form-select  w-full border-slate-300 rounded-lg bg-slate-50"
            >
              <option>
                <p className="font-sans font-medium text-[15px] text-black">
                  Female
                </p>
              </option>
              <option>
                <p className="font-sans font-medium text-[15px] text-black">
                  Male
                </p>
              </option>
            </select>
          </div>
          <div className="mt-[20px]">
            <div className="mb-2 block">
              <Label
                htmlFor="Date"
                value="Date Of Birth"
                className="font-sans font-medium text-[15px] text-black"
              />
            </div>
            <Datepicker placement="top" />
          </div>
        </div>
        <Button
          className="w-1/3 h-[45px] mt-[20px] ml-[500px] mb-[20px]"
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
    </div>
  );
};

export default Profile;
