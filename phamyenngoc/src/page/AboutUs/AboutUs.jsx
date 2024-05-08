import React from "react";

const AboutUs = () => {
  return (
    <div className="max-w-[1200px] mx-auto  bg-[#FFFEFE] shadow-md rounded-lg">
      <div class="w-full mt-[5px] mb-[20px] ">
        
        <div className="w-[90%] border-b border-zinc-300 ml-[60px]">
          <p className="font-sans font-extrabold text-2xl text-black pb-[10px] text-center ">
            VISION
          </p>
        </div>
        <div className="w-[80%] mx-auto ">
          <p className="font-sans font-semibold text-[20px] text-gray-900 text-center mt-[20px]">
            “Becoming the fastest growing brand in the Vietnamese food and beverage market, through excellence in human development and breakthrough innovation.”
          </p>
          <div className="w-full flex justify-between items-center mt-[20px] mb-[20px]">
            <img className="w-[300px] h-[300px]" src={require("../../assets/image/avatar/us1.jpg")} alt=""/>
            <img className="w-[300px] h-[300px]" src={require("../../assets/image/avatar/us2.jpg")} alt=""/>
            <img className="w-[300px] h-[300px]" src={require("../../assets/image/avatar/us3.jpg")} alt=""/>
          </div>
        </div>
      </div>

      <div class="w-full mt-[30px] mb-[10px]">
        
        <div className="w-[90%] border-b border-zinc-300 ml-[60px]">
          <p className="font-sans font-extrabold text-2xl text-black pb-[20px] text-center ">
            MISSION
          </p>
        </div>
        <div className="w-[80%] mx-auto ">
           <div className="w-full flex justify-between items-center mt-[20px] mb-[20px]">
            <img className="w-[300px] h-[300px]" src={require("../../assets/image/avatar/us4.jpg")} alt=""/>
            <div className="justify-center items-center ml-[30px]">
              <p className="font-sans font-semibold text-[20px] text-gray-900 text-left ">
                1. Bringing moments of shared happiness to everyone
              </p>
              <p className="font-sans font-semibold text-[20px] text-gray-900 text-left mt-[15px]">
                2. We constantly strive to bring joy to customers with quick, easy service and delicious food, reasonable prices and high standards of safety and quality.
              </p>
              <p className="font-sans font-semibold text-[20px] text-gray-900 text-left mt-[15px]">
                3. We provide employees with a challenging, caring and fun working environment - motivating them to develop at their best.
              </p>
            </div>
        </div>

        <div className="w-full flex justify-between items-center mt-[10px] mb-[20px] pb-[20px]">
           
            <div className="justify-center items-center mr-[30px]">
              <p className="font-sans font-semibold text-[20px] text-gray-900 text-left ">
                4. Bringing moments of shared happiness to everyone
              </p>
              <p className="font-sans font-semibold text-[20px] text-gray-900 text-left mt-[15px]">
               5. We constantly strive to bring joy to customers with quick, easy service and delicious food, reasonable prices and high standards of safety and quality.
              </p>
              <p className="font-sans font-semibold text-[20px] text-gray-900 text-left mt-[15px]">
               6. We provide employees with a challenging, caring and fun working environment - motivating them to develop at their best.
              </p>
            </div>
             <img className="w-[300px] h-[300px]" src={require("../../assets/image/avatar/us5.jpg")} alt=""/>
        </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
