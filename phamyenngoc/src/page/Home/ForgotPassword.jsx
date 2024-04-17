import React from "react";
import { Button, Label, TextInput } from "flowbite-react";
import { MdEmail } from "react-icons/md";
import { Alert } from "flowbite-react";

const ForgotPassword = () => {
  const showAlert = () => {
    alert(
      "Member ID and Password verification Email has been sent.\n\n" +
      "Please check your Email!" 
    );
  };

  return (
    <div>
      <div className="w-full mx-auto justify-center items-center">
        <div className="w-full mb-[20px]">
          <div className="w-full">
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
