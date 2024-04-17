import React from "react";
import { Button, Label, TextInput } from "flowbite-react";
import { HiMail } from "react-icons/hi";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { FaPhone, FaComments } from "react-icons/fa6";

const Profile = () => {
  return (
    <div className="max-w-[1200px] mx-auto no-scrollbar">
      <div className="w-full ml-[20px]">
        <p className="font-sans font-semibold text-xl text-black mt-[-10px] pb-[10px] ">
          Account Information
        </p>
      </div>
      <div className="max-w-full mx-auto flex grid grid-cols-2">
        <div className="w-[200px] mx-auto justify-center items-center">
          <div className="w-[200px] mb-[20px] mt-[15px]">
            <div className="avatar">
              <div className="w-[150px] rounded-full ml-[-80px]">
                <img
                  src={require("../../assets/image/avatar/avatar.jpg")}
                  alt=""
                />
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
        </div>
      </div>
    </div>
  );
};

export default Profile;
