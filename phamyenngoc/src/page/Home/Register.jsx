import React, { useState } from "react";
import ReCaptach from "../../components/Capcha/Captcha";
import { Button, Label, TextInput, Checkbox } from "flowbite-react";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { HiMail } from "react-icons/hi";
import { FaFacebook } from "react-icons/fa6";
import { FaGooglePlus } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import userData from "../../data/user.json";
import adminData from "../../data/adminAccount.json";

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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleSubmit = () => {
    const userExists = userData.find((user) => user.email === email);
    const adminExists = adminData.find((admin) => admin.email === email);
    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (!email || !password || !confirmPassword) {
      alert("Please fill in all fields");
      return;
    } else if (userExists || adminExists) {
      alert("Email already exists");
      return;
    } else if (!emailRegex.test(email)) {
      alert("Email must be a valid Gmail address");
      return;
    } else if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    } else if (password.length < 7 || confirmPassword.length < 7) {
      alert("Passwords are less than 8 characters");
      return;
    } else {
      alert("Register Successfully!");
    }
  };

  return (
    <div className="w-full mx-auto justify-center items-center no-scrollbar">
      <div className="w-full">
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
          <TextInput
            id="email"
            type="email"
            icon={HiMail}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
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
            id="email"
            type="password"
            icon={RiLockPasswordFill}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mt-[20px]">
          <div className="mb-2 block">
            <Label
              htmlFor="confirmPassword"
              value="Confirm Password"
              className="font-sans font-medium text-[15px] text-black"
            />
          </div>
          <TextInput
            id="email"
            type="password"
            icon={RiLockPasswordFill}
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className="items-center gap-2 mt-[20px] justify-between">
          <p className="font-sans font-medium text-[15px] text-black">
            How did you get our website?
          </p>
          <div className="grid grid-cols-4 gap-[10px]">
            {socialMediaPlatforms.map((platform, index) => (
              <div
                key={index}
                className="flex items-center gap-2 mt-[10px] ml-[20px]"
              >
                <Checkbox
                  id={`platform-${index}`}
                  className="w-[15px] h-[15px]  border-slate-600 "
                />
                <Label htmlFor={`platform-${index}`}>
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
            Captcha
          </p>
          <ReCaptach />
        </div>
        <div className="flex w-full mt-[20px] justify-center items-center">
          <Button
            className="w-[600px] ml-[-20px] justify-center items-center"
            color="dark"
            onClick={() => {
              handleSubmit();
            }}
          >
            <p className="font-sans font-medium text-[20px] text-white">
              REGISTER
            </p>
          </Button>
        </div>
        {/* <div className="flex w-full mt-[20px] justify-center items-center">
          <Button
            className="w-[200px] h-[40px] flex border-solid rounded-lg border-slate-600"
            color="light"
          >
            <FaFacebook className="w-[20px] h-[20px] mr-[5px]" />
            <p className="font-sans font-medium text-[17px] text-black">
              Facebook
            </p>
          </Button>
          <div className="w-[50px] h-[40px] text-center pt-[7px]">OR</div>
          <Button
            className="w-[200px] h-[40px] flex border-solid rounded-lg border-slate-600"
            color="light"
          >
            <FaGooglePlus className="w-[20px] h-[20px] mr-[5px]" />
            <p className="font-sans font-medium text-[17px] text-black">
              Google
            </p>
          </Button>
        </div> */}
        <p className="font-sans font-medium text-[13px] text-black mt-[20px] pb-[20px] text-center">
          By creating an account, you agree to burgernbeer.com's Terms of Use
          and Privacy Policy.
        </p>
      </div>
    </div>
  );
};

export default Register;
