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

function Header() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

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
          <Link to ="/">
          <span className="self-center whitespace-nowrap font-bold text-black text-xl">
            BURGER N' BEER
          </span>
          </Link>
        </Navbar.Brand>
  
        <div className="flex md:order-2">
          <Link to="/wishlist">
            <div className="w-10 h-10 rounded-full border border-black flex items-center justify-center mr-3 mt-2 hover:bg-btnprimary hover:text-[#B4E9D6] ">
              <FaHeart />
            </div>
          </Link>


          <div className="dropdown dropdown-end mt-[5px] mr-3">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 "
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
                <span className="badge badge-sm indicator-item">8</span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="mt-3 z-[1] card card-compact dropdown-content w-60 bg-[#FFFEFE] shadow"
            >
              <div className=" w-full card-body justify-center items-center">
                <span className="font-semibold text-[17px]">8 Items</span>
                <span className="font-semibold text-[17px] text-cyan-500">
                  Subtotal: $999
                </span>
                <div className="card-actions">
                  <Link to="/cart">
                    <Button className="w-[200px]" color="dark">
                      <p className="font-bold text-[17px]">View Cart</p>
                    </Button>
                  </Link>
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
                  <img src={avatar} alt="" />
                </div>
              </div>
            }
          >
            <Dropdown.Header>
              <span className="flex items-center justify-center text-xl font-sans font-semibold m-2 ">
                Pham Thi Yen Ngoc
              </span>
              <span className="block truncate text-sm font-medium">
                phamyenngoc.02@gmail.com
              </span>
            </Dropdown.Header>
            <Link to="/myaccount">
              <Dropdown.Item className="text-sm font-sans font-medium">MY ACCOUNT</Dropdown.Item>
            </Link>
            <Link to="">
              <Dropdown.Item className="text-sm font-sans font-medium">CUSTOMER SERVICE</Dropdown.Item>
            </Link>
            <Dropdown.Divider />
            <Link to="">
            <Dropdown.Item className="text-sm font-sans font-medium">CORPORATE ACCOUNT</Dropdown.Item>
            </Link>
            <Dropdown.Divider />
            <Link to="/login">
            <Dropdown.Item className="text-sm font-sans font-medium">SIGN OUT</Dropdown.Item>
            </Link>
          </Dropdown>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link
            href="/"
            className="font-semibold text-center text-[18px] hover:text-red-500 transition-all"
          >
            HOME
          </Navbar.Link>
          <Navbar.Link
            href="/product"
            className="font-semibold text-center text-[18px] hover:text-red-500 transition-all"
          >
            SHOP
          </Navbar.Link>
          <Navbar.Link
            href="/aboutus"
            className="font-semibold text-center text-[18px] hover:text-red-500 transition-all"
          >
            ABOUT US
          </Navbar.Link>
          <Navbar.Link
            href="/contact"
            className="font-semibold text-center text-[18px] hover:text-red-500 transition-all"
          >
            CONTACT US
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
export default Header;
