import React, {useState} from "react";
import { Link } from "react-router-dom";
import ReCaptach from "../../components/Capcha/Captcha";
import { Button, Modal, Label, TextInput, Checkbox } from "flowbite-react";
import { MdEmail, MdDriveFileRenameOutline } from "react-icons/md";
import { HiMail } from "react-icons/hi";
import { IoMdClose } from 'react-icons/io';
import { FaFacebook } from "react-icons/fa6";
import { FaGooglePlus } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

const Register = () => {
  const socialMediaPlatforms = [
    { name: "Google" },
    { name: "Facebook" },
    { name: "Instagram" },
    { name: "Tiktok" },
    { name: "Youtube" },
    { name: "Snapchat" },
    { name: "Twitter" },
    { name: "Friend" },
  ];
  return (
          <div className="w-full mx-auto justify-center items-center">
            <div className="w-full mb-[20px] shadow-xl rounded-lg">
              <div className="w-[90%] border-b border-zinc-400 ml-[30px] mb-[15px] flex justify-between items-center">
                <p className="font-sans font-extrabold text-xl text-black pt-[15px] pb-[15px] ">
                  CREATE AN ACCOUNT
                </p>
                <button>
                        <IoMdClose className="ml-2 cursor-pointer shrink-0 fill-black hover:fill-red-500 text-2xl" />
                    </button>
              </div>
              <div className="w-[90%] ml-[30px]">
                <div className="max-w">
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
                      htmlFor="password"
                      value="Password"
                      className="font-sans font-medium text-[15px] text-black"
                    />
                  </div>
                  <TextInput
                    id="password"
                    type="password"
                    icon={RiLockPasswordFill}
                    required
                  />
                </div>
                <div className="mt-[20px]">
                  <div className="mb-2 block">
                    <Label
                      htmlFor="password"
                      value="Confirm Password"
                      className="font-sans font-medium text-[15px] text-black"
                    />
                  </div>
                  <TextInput
                    id="password"
                    type="password"
                    icon={RiLockPasswordFill}
                    required
                  />
                </div>
                <div className="items-center gap-2 mt-[20px] justify-between">
                  <p className="font-sans font-medium text-[15px] text-black">
                    {" "}
                    How dis you get our website?
                  </p>
                  <div class="grid grid-cols-4 gap-[10px]">
                  {socialMediaPlatforms.map((platform, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 mt-[10px] ml-[20px]"
                    >
                      <Checkbox
                        id={`platform-${index}`}
                        className="w-[15px] h-[15px]  border-slate-600 "
                      />
                      <Label htmlFor={`platform-${index}`} >
                        <p className="font-sans font-normal text-[15px] text-black ">
                          {platform.name}
                        </p>
                      </Label>
                    </div>
                    
                  ))}
                  </div>
                </div>
                <div className="items-center gap-2 mt-[20px] justify-between">
                  <p className="font-sans font-medium text-[15px] text-black">
                    {" "}
                    Captcha
                  </p>
                  <ReCaptach/>
                </div>
                <Link to="">
                  <Button className="w-full mt-[20px]" color="dark">
                    <p className="font-sans font-medium text-[20px] text-white">
                      {" "}
                      REGISTER
                    </p>
                  </Button>
                </Link>
                <div className="flex w-full mt-[20px] justify-center items-center">
                  <Button
                    className="w-[200px] h-[40px] flex border-solid rounded-lg border-slate-600"
                    color="light"
                  >
                    <FaFacebook className="w-[20px] h-[20px] mr-[5px]" />
                    <p className="font-sans font-medium text-[17px] text-black">
                      {" "}
                      Facebook{" "}
                    </p>
                  </Button>
                  <div className="w-[50px] h-[40px] text-center pt-[7px]">
                    OR
                  </div>
                  <Button
                    className="w-[200px] h-[40px] flex border-solid rounded-lg border-slate-600"
                    color="light"
                  >
                    <FaGooglePlus className="w-[20px] h-[20px] mr-[5px]" />
                    <p className="font-sans font-medium text-[17px] text-black">
                      {" "}
                      Google{" "}
                    </p>
                  </Button>
                </div>
                <p className="font-sans font-medium text-[13px] text-black mt-[20px] pb-[20px] text-center">By creating an account, you agree to burgernbeer.com's Terms of Use and Privacy Policy.</p>
              </div>
            </div>
          </div>
  );
};

export default Register;