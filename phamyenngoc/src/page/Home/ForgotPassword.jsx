import React from "react";
import { Button, Label, TextInput } from "flowbite-react";
import { MdEmail } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { Alert } from "flowbite-react";

const ForgotPassword = () => {
  const showAlert = () => {
    alert(
      "phamyenngoc.02@gmail.com Member ID and Password verification Email has been sent.\n\n" +
      "Please check your Email!" 
    );
  };

  return (
    <div>
      <div className="w-full mx-auto justify-center items-center">
        <div className="w-full mb-[20px] shadow-xl rounded-lg">
          <div className="w-[90%] border-b border-zinc-400 ml-[30px] mb-[15px] flex justify-between items-center">
            <p className="font-sans font-extrabold text-xl text-black pt-[15px] pb-[15px] ">
              RESET PASSWORD
            </p>
            <button>
              <IoMdClose className="ml-2 cursor-pointer shrink-0 fill-black hover:fill-red-500 text-2xl" />
            </button>
          </div>
          <div className="w-[90%] ml-[30px]">
            <div className="max-w">
              <div className="mb-2 block">
                <Label
                  htmlFor="email"
                  value="Email Address"
                  className="font-sans font-medium text-[15px] text-black"
                />
              </div>
              <TextInput id="email" type="email" icon={MdEmail} required />
            </div>
            <div className="mt-[20px]">
              <p>
                <span className="font-sans font-bold text-[13px] text-red-600 mr-[5px]">
                  Important Note:
                </span>
                <span className="font-sans font-medium text-[13px] text-red-600">
                  Because the password lookup function is an automated email,
                  some email service providers will place the email in a Bulk
                  Mail or SPAM folder. Please be sure to check those folders if
                  you are unable to find an email from us containing a link that
                  allows you to reset your password.
                </span>
              </p>
              <p className="font-sans font-medium text-[13px] text-red-600 mt-[10px]">
                For security purposes, all credit card information will be
                removed from your account upon resetting your password.
              </p>
            </div>

            <Alert color="">
              <Button
                className="w-[580px] ml-[-20px] justify-center items-center"
                color="dark"
                onClick={() => {
                  showAlert();
                }}
              >
                <p className="font-sans font-medium text-[20px] text-white">
                  Reset Password
                </p>
              </Button>
            </Alert>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
