import React, { useState } from "react";
import { Button, Label, TextInput } from "flowbite-react";
import { MdEmail } from "react-icons/md";
import { Alert } from "flowbite-react";
import userData from "../../data/user.json";
import adminData from "../../data/adminAccount.json";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const handleSubmit = () => {
    const userExists = userData.find((user) => user.email === email);
    const adminExists = adminData.find((admin) => admin.email === email);
    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (!email) {
      alert("Please fill in fields");
      return;
    } else if (!emailRegex.test(email)) {
      alert("Email must be a valid Gmail address");
      return;
    } else if (!userExists && !adminExists) {
      alert(
        "Your search did not return any results.\n\n" +
          "Please try again with other information!"
      );
      return;
    } else if (userExists || adminExists) {
      alert(
        "Member ID and Password verification Email has been sent.\n\n" +
          "Please check your Email!"
      );
      return;
    }
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
              <TextInput
                id="email"
                type="email"
                icon={MdEmail}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
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
                  handleSubmit();
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
