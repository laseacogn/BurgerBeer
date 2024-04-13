import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Dropdown, Navbar } from 'flowbite-react';
import avatar from '../../assets/image/avatar/avatar.png'
import { BsInstagram } from "react-icons/bs";
import { AiOutlineFacebook } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { AiOutlineYoutube } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai";
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

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isVisible, prevScrollPos]);

  return (
    <div
      className={`sticky mb-8 max-w-[1200px] top-0 left-0 right-0 w-full z-50  mx-auto transition-transform transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'
        }`} >
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
      <Navbar fluid rounded className='border rounded-lg'>
        <Navbar.Brand>
          <div className="avatar">
            <div className="w-16 rounded-full">
              <img src={require(`./web_logo.png`)} alt="" />
            </div>
          </div>
          <span className="self-center whitespace-nowrap font-bold text-black text-xl">
            BURGER N' BEER
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
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
              <span className="flex items-center justify-center text-xl m-2 ">
                Pham Thi Yen Ngoc
              </span>
              <span className="block truncate text-sm font-medium">
                phamyenngoc.02@gmail.com
              </span>
            </Dropdown.Header>
            <Link to="/admin">
              <Dropdown.Item>DASHBOARD</Dropdown.Item>
            </Link>
            <Link to="/user">
              <Dropdown.Item>PROFILE</Dropdown.Item>
            </Link>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="/">
            HOME
          </Navbar.Link>
          <Navbar.Link href="/product">SHOP</Navbar.Link>
          <Navbar.Link href="/https://www.siliconii.com/">LOCATION</Navbar.Link>
          <Navbar.Link href="/contact">CONTACT US</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
export default Header;
