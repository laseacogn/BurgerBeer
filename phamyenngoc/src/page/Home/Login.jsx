import React, { useState, useEffect } from "react";
import { Button, Modal, Label, TextInput, Checkbox } from "flowbite-react";
import { HiMail } from "react-icons/hi";
import { FaFacebook } from "react-icons/fa6";
import { FaGooglePlus } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import Register from "./Register";
import ForgotPassword from "./ForgotPassword";
import userData from "../../data/user.json";
import { useNavigate } from "react-router-dom";


const Login = () => {
  useEffect(() => {
  window.scrollTo(0, 0);
}, []);

  const [openModal, setOpenModal] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  //Gọi hàm khi user đăng nhập   
  const handleLogin = () => {
    // Kiểm tra xem email và password có trong dữ liệu userData không
    const user = userData.find((user) => user.email === email && user.password === password);
    if (user) {
      // Nếu tìm thấy người dùng, điều hướng đến trang chính
      navigate("/home");
      alert("Welcome To Burger N' Beer!");
    } else if (!email || !password ){ 
      // Nếu không tìm thấy, hiển thị thông báo lỗi
      alert("Please fill in all fields");
    } else {
      // Nếu không tìm thấy, hiển thị thông báo lỗi
      alert("Email or password is incorrect.");
    }
  };

  return (
    <div className="max-w-[1200px] mx-auto">
      <div
        style={{
          width: "1200px",
          marginTop: "-10px",
          marginBottom: "20px",
          background: "#FFFEFE",
          boxShadow: "0px 4px 10px rgba(0, 0.2, 0, 0.2)",
        }}
      >
        <div className="w-[90%] border-b border-zinc-400 ml-[60px]">
          <p className="font-sans font-extrabold text-xl text-black pt-[20px] pb-[10px] ">
            MEMBER LOGIN
          </p>
        </div>
        <div className="w-[90%] mx-auto grid grid-cols-2">
          <div className="w-[540px] mx-auto justify-center items-center">
            <div className="w-[500px] mb-[20px] mt-[15px] bg-[#FFFEFE] shadow-xl rounded-lg">
              <div className="w-[90%] border-b border-zinc-400 ml-[25px] mb-[15px]">
                <p className="font-sans font-extrabold text-xl text-black pt-[15px] pb-[15px] ">
                  LOG IN
                </p>
              </div>
              <div className="w-[90%] ml-[25px]">
                <div className="max-w">
                  <div className="mb-2 block">
                    <Label
                      htmlFor="email"
                      value="Email Address"
                      className="font-sans font-medium text-[15px] text-black"
                    />
                  </div>
                  <TextInput id="email" type="email" icon={HiMail} required onChange={(e) => setEmail(e.target.value)} />
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
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="flex items-center gap-2 mt-[20px] justify-between">
                  <div className="flex items-center gap-2">
                    <Checkbox id="remember" className="w-[15px] h-[15px]" />
                    <Label htmlFor="remember">
                      {" "}
                      <p className="font-sans font-medium text-[13px] text-black">
                        Remember me
                      </p>
                    </Label>
                  </div>
                  <div>
                    <p
                      className="font-sans font-medium text-[13px] text-black hover:text-red-500 "
                      onClick={() => setOpenModal2(true)}
                    >
                      {" "}
                      Forgot your password?{" "}
                    </p>

                    <Modal
                      show={openModal2}
                      onClose={() => setOpenModal2(false)}
                    >
                      <Modal.Header className="h-[70px]">
                        <p className="font-sans font-extrabold text-xl text-black pt-[5px] pb-[15px] ">
                          RESET PASSWORD
                        </p>
                      </Modal.Header>
                      <Modal.Body>
                        <ForgotPassword />
                      </Modal.Body>
                    </Modal>
                  </div>
                </div>
                <Button onClick={handleLogin} className="w-full mt-[20px]" color="dark">
                  <p className="font-sans font-medium text-[20px] text-white">
                    {" "}
                    LOG IN{" "}
                  </p>
                </Button>
                <div className="flex w-full mt-[20px] pb-[20px] justify-center items-center">
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
                <div className="border-t border-zinc-400 mb-[15px] pb-[15px]">
                  <div>
                    <Button
                      onClick={() => setOpenModal(true)}
                      className="w-full mt-[20px] mb-[20px]"
                      color="dark"
                    >
                      <p className="font-sans font-medium text-[20px] text-white">
                        {" "}
                        REGITER{" "}
                      </p>
                    </Button>
                    <Modal
                      show={openModal}
                      onClose={() => setOpenModal(false)}
                    >
                      <Modal.Header className="h-[70px]">
                        <p className="font-sans font-extrabold text-xl text-black pt-[5px] pb-[15px] ">
                          CREATE AN ACCOUNT
                        </p>
                      </Modal.Header>
                      <Modal.Body className="no-scrollbar">
                        <div className="space-y-6 bg-[#FFFEFE] mt-[-10px]">
                          <Register />
                        </div>
                      </Modal.Body>
                    </Modal>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img
              className="w-full self-center h-[565px]"
              src={require(`../../page/Home/login.png`)}
              alt={""}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
