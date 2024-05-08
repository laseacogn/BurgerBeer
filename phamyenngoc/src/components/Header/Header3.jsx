import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Dropdown, Navbar, Button } from "flowbite-react";
import avatar from "../../assets/image/avatar/avatar.png";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineFacebook } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { AiOutlineYoutube } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai";
import { FaHeart } from "react-icons/fa";

function Header3() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

   const showAlert1 = () => {
    alert(
      "Please login member account to view wishlist!"
    );
  };
  const showAlert2 = () => {
    alert(
      "Please login member account to view cart!"
    );
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrolledDown = currentScrollPos > prevScrollPos;
      setPrevScrollPos(currentScrollPos);
      if (isScrolledDown && isVisible) {
        setIsVisible(false);
      } else if (!isScrolledDown && !isVisible) {
        setIsVisible(true);
      }
    };


    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isVisible, prevScrollPos]);

  return (
    <div
      className={`sticky mb-8 max-w-[1200px] top-0 left-0 right-0 w-full z-50  mx-auto transition-transform transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="w-full flex justify-between p-2 bg-white text-black bg-opacity-50">
        <div className="flex justify-center items-center font-sans text-lg">
          <ul className="flex justify-center items-center">
            <li className="flex justify-center items-center mr-4 ">
              <span className="text-orange-400 mr-2 font-bold">
                <CiLocationOn />
              </span>
              <span className="max-sm:hidden max-md:hidden">
                Da Nang University of Economics
              </span>
            </li>
            <li className="flex justify-center items-center ">
              <span className="text-btnprimary mr-2 font-bold">
                <AiOutlineMail />
              </span>
              <span>phamyenngoc.02@gmail.com</span>
            </li>
          </ul>
        </div>
        <div className="text-black flex justify-center items-center font-sans text-lg">
          <ul className="flex justify-center items-center cursor-pointer gap-2">
            <li className="flex justify-center items-center mr-1 ">
              <a href="https://www.facebook.com/BurgerNBeerDanang">
                <BsInstagram />
              </a>
            </li>
            <li className="flex justify-center items-center mr-1 ">
              <a href="https://www.facebook.com/BurgerNBeerDanang">
                <AiOutlineFacebook />
              </a>
            </li>
            <li className="flex justify-center items-center mr-1 ">
              <a href="https://www.facebook.com/BurgerNBeerDanang">
                <BsTwitter />
              </a>
            </li>
            <li className="flex justify-center items-center mr-1 ">
              <a href="https://www.facebook.com/BurgerNBeerDanang">
                <AiOutlineYoutube />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Navbar fluid rounded className="border rounded-lg">
        <Navbar.Brand>
          <div className="avatar">
            <div className="w-16 rounded-full">
              <img src={require(`./web_logo.png`)} alt="" />
            </div>
          </div>
          <Link to ="/home">
          <span className="self-center whitespace-nowrap font-bold text-black text-xl">
            BURGER N' BEER
          </span>
          </Link>
        </Navbar.Brand>
  
        <div className="flex md:order-2">
          <div className="w-10 h-10 rounded-full border border-black flex items-center justify-center mr-3 mt-2 hover:bg-btnprimary hover:text-[#B4E9D6] ">
              <FaHeart  onClick={() => showAlert1()}/>
            </div>


          <div className="dropdown dropdown-end mt-[5px] mr-3">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
            </div>
            <div
              tabIndex={0}
              className="mt-3 z-[1] card card-compact dropdown-content w-60 bg-[#FFFEFE] shadow"
            >
              <div className=" w-full card-body justify-center items-center">
                <span className="font-semibold text-[17px]">... Items</span>
                <span className="font-semibold text-[17px] text-cyan-500">
                  Subtotal: ...VND
                </span>
                <div className="card-actions">
                    <Button className="w-[200px]" color="dark" onClick={() => showAlert2()}>
                      <p className="font-bold text-[17px]">View Cart</p>
                    </Button>
                </div>
              </div>
            </div>
          </div>

          <Dropdown
            arrowIcon={false}
            inline
            label={
              <div className="avatar">
                <div className="w-14 rounded-full">
                  <img src={require("../../assets/image/avatar/admin.jpg")} alt="" />
                </div>
              </div>
            }
          >
            <Dropdown.Header>
              <span className="flex items-center justify-center text-xl font-sans font-semibold m-2 ">
                201121521128
              </span>
              <span className="block truncate text-sm font-medium">
                lasea02@gmail.com
              </span>
            </Dropdown.Header>
            <Link to="/corporate_account">
            <Dropdown.Item className="text-sm font-sans font-medium">DASH BOARD</Dropdown.Item>
            </Link>
            <Dropdown.Divider />
            <Link to="/admin_account">
              <Dropdown.Item className="text-sm font-sans font-medium">MY ACCOUNT</Dropdown.Item>
            </Link>
             <Dropdown.Divider />
            <Link to="/customer_serviceee">
              <Dropdown.Item className="text-sm font-sans font-medium">CUSTOMER SERVICE</Dropdown.Item>
            </Link>
            <Dropdown.Divider />
            <Link to="/">
            <Dropdown.Item className="text-sm font-sans font-medium">SIGN OUT</Dropdown.Item>
            </Link>
          </Dropdown>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link
            href="/homee"
            className="font-semibold text-center text-[18px] hover:text-red-500 transition-all"
          >
            HOME
          </Navbar.Link>
          <Navbar.Link
            href="/productt_manage"
            className="font-semibold text-center text-[18px] hover:text-red-500 transition-all"
          >
            SHOP
          </Navbar.Link>
          <Navbar.Link
            href="/voucherr_manage"
            className="font-semibold text-center text-[18px] hover:text-red-500 transition-all"
          >
            VOUCHER
          </Navbar.Link>
          <Navbar.Link
            href="/corporate_account"
            className="font-semibold text-center text-[18px] hover:text-red-500 transition-all"
          >
            DASHBOARD
          </Navbar.Link>
          <Navbar.Link
            href="/contacttt"
            className="font-semibold text-center text-[18px] hover:text-red-500 transition-all"
          >
            CONTACT US
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
export default Header3;
