import React from "react";
import { Dropdown } from "flowbite-react";

const Booking = () => {
  const Branch = [
    { name: "All Restaurant" },
    { name: "Burger N' Beer - 31 An Thuong 4, Ngu Hanh Son District" },
    { name: "Burger N' Beer - 26 An Thuong 4, Ngu Hanh Son District" },
  ];
  return (
    <div className="max-w-[1200px] mx-auto">
      <div class="w-full mt-[10px] mb-[20px] bg-[#FFFEFE] shadow-md rounded-lg">
        <div className="w-[90%] border-b border-zinc-400 ml-[60px]">
          <p className="font-sans font-extrabold text-2xl text-black pt-[20px] pb-[20px] text-center ">
            RESERVATIONS
          </p>
        </div>
        <div className="w-[90%] mx-auto">
          <p className="font-sans font-bold text-xl text-black pt-[20px] text-center ">
            Reserve a table at any of our restaurants in your city Da Nang
          </p>
          <p className="font-sans font-semibold text-lg text-black pt-[20px] pb-[20px] text-center border-b border-zinc-400">
            Due to Holiday, there is a 10% surcharge on all bills during 1 day
            (18/04/2024 - 18/04/2024). <br />
            Thank you for your support.
          </p>
        </div>
        <div className="w-[90%] mx-auto flex mt-[20px]">
          <div className="join mb-[15px]">
            <div className="flex">
              <label className="form-control w-[200px] max-w-xs">
                <div className="label w-[200px]">
                  <span className="label-text font-sans text-[15px] font-semibold ">Branch Da Nang</span>
                </div>
                <Dropdown
                  label="All Restaurants"
                  color="light"
                  className="w-[200px] rounded-none"
                  dismissOnClick={false}
                >
                  {Branch.map((branch, index) => (
                    <Dropdown.Item>
                      <p className="font-sans text-xs font-normal text-left ">{branch.name}</p>
                    </Dropdown.Item>
                  ))}
                </Dropdown>
              </label>

              
            </div>
            <div className="indicator">
              <button className="btn join-item bg-gray-950 text-white">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
