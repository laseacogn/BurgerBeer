import React from "react";
import { Button, Label, TextInput } from "flowbite-react";
import { FaLocationDot, FaPhoneVolume } from "react-icons/fa6";
import { MdEmail, MdDriveFileRenameOutline  } from "react-icons/md";
import { HiMail } from "react-icons/hi";
import { AiTwotoneMessage } from "react-icons/ai";
export function ContactUs() {
  const showAlert = () => {
    alert(
      "Your message has been sent. We'll respond to you as soon as possible.\n\n" +
      "Thank you!"
    );
  };
  return (
    <div className="max-w-[1200px] mx-auto">
      <div
      style={{
        width: "1200px",
        marginTop: "-10px",
        marginBottom: "20px",
        background: "#FFFEFE",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        borderRadius: "15px",
      }}
    >
      <div className="w-[90%] border-b border-zinc-400 ml-[60px]">
        <p className="font-sans font-extrabold text-xl text-black pt-[20px] pb-[10px] ">
          CONTACT US
        </p>
      </div>
      <div className="w-[90%] mx-auto grid grid-cols-2">
        <div className="w-[540px] mx-auto justify-center items-center">
          <p className="font-sans font-extrabold text-xl text-black pt-[20px] pb-[10px]">
            Contact Information{" "}
          </p>
          <div className="flex mt-[20px]">
            <FaLocationDot className="w-[15px] h-[15px] mr-[5px]" />
            <p className="font-sans font-medium text-[15px] text-black mr-[5px]">
              Address:{" "}
            </p>
            <p className="font-sans font-normal text-[15px] text-black">
              31 An Thuong 4, My An Ward, Ngu Hanh Son District, Da Nang
            </p>
          </div>
          <div className="flex mt-[15px]">
            <FaPhoneVolume className="w-[15px] h-[15px] mr-[5px] mt-[3px]" />
            <p className="font-sans font-medium text-[15px] text-black mr-[5px]">
              Phone:{" "}
            </p>
            <p className="font-sans font-normal text-[15px] text-black">
              (+84) 564751400
            </p>
          </div>
          <div className="flex mt-[15px]">
            <MdEmail className="w-[17px] h-[17px] mr-[5px] mt-[2px]" />
            <p className="font-sans font-medium text-[15px] text-black mr-[5px]">
              Email:{" "}
            </p>
            <p className="font-sans font-normal text-[15px] text-black">
              phamyenngoc.02@gmail.com
            </p>
          </div>
        </div>

        <div className="w-[540px] mx-auto justify-center items-center">
          <p className="font-sans font-extrabold text-xl text-black pt-[20px] pb-[10px]">
            Send Us A Message{" "}
          </p>
          <div className="mt-[20px]">
            <div className="max-w">
              <div className="mb-2 block">
                <Label htmlFor="email" value="Your email" className="font-sans font-medium text-[15px] text-black"/>
              </div>
              <TextInput
                id="email"
                type="email"
                icon={HiMail}
                placeholder="Enter your email here..."
                required
              />
            </div>
            <div className="mt-[20px]">
              <div className="mb-2 block">
                <Label htmlFor="name" value="Full Name" className="font-sans font-medium text-[15px] text-black"/>
                
              </div>
              <TextInput
                id="email"
                type="email"
                icon={MdDriveFileRenameOutline }
                placeholder="Enter your full name here..."
                required
              />
            </div>

            <div className="mt-[15px]">

              <TextInput
                id="email"
                type="email"
                icon={""}
                placeholder="Enter your content here..."
                required
              />
            </div>
          </div>
          <Button className="w-1/4 h-[45px] mt-[30px] mb-[20px]" color="dark" onClick={() => {
                  showAlert();
                }}> 
          <p className="font-sans font-extrabold text-[17px] text-white"> Submit </p>
          </Button>
        </div>
      </div>
    </div>

    <div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.3202928921733!2d108.24396867459957!3d16.04886063998392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314217de9efd7169%3A0x3b0b042ca72a853f!2sBurger%20n%E2%80%99%20Beer!5e0!3m2!1svi!2s!4v1713211007572!5m2!1svi!2s" 
      style={{width:"1200px", height:"450px", style:"border:0;", allowfullscreen:"", loading:"lazy", referrerpolicy:"no-referrer-when-downgrade"}}></iframe>
    </div>
    </div>
    
    
  );
}
