import React,{useEffect} from "react";
import { Button, Label, TextInput } from "flowbite-react";
import { HiMail } from "react-icons/hi";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { FaPhone, FaComments } from "react-icons/fa6";

const Booking = () => {
  useEffect(() => {
  window.scrollTo(0, 0);
}, []);

  const showAlert = () => {
    alert(
      "Your reservation at Burger N' Beer has been successful.\n\n" +
        "Thank you!"
    );
  };
  const Branch = [
    { name: "All Restaurant" },
    { name: "Burger N' Beer - 31 An Thuong 4, Ngu Hanh Son District" },
    { name: "Burger N' Beer - 26 An Thuong 4, Ngu Hanh Son District" },
  ];
  const People = [
    { name: "1 people" },
    { name: "2 people" },
    { name: "3 people" },
    { name: "4 people" },
    { name: "5 people" },
    { name: "6 people" },
    { name: "7 people" },
    { name: "8 people" },
    { name: "9 people" },
    { name: "10 people (maximum capacity" },
  ];
  return (
    <div className="max-w-[1200px] mx-auto">
      <div class="w-full mt-[10px] mb-[20px] bg-[#FFFEFE] shadow-md rounded-lg">
        <div className="w-[90%] border-b border-zinc-400 ml-[60px]">
          <p className="font-sans font-extrabold text-2xl text-black pb-[20px] text-center ">
            RESERVATIONS
          </p>
        </div>
        <div className="w-[90%] mx-auto ">
          <p className="font-sans font-bold text-xl text-black pt-[20px] text-center ">
            Reserve a table at any of our restaurants in your city Da Nang
          </p>
          <p className="font-sans font-semibold text-lg text-black pt-[20px] pb-[20px] text-center border-b border-zinc-400">
            Due to Holiday, there is a 10% surcharge on all bills during 1 day
            (18/04/2024 - 18/04/2024). <br />
            Thank you for your support.
          </p>
        </div>
        <div className="w-[90%] mx-auto mt-[20px] ">
          <p className="font-sans font-bold text-xl text-black">
            INDICATES REQUIRED FIELD
          </p>
          <div className="w-full mx-auto flex mt-[20px] grid grid-cols-2 justify-between items-center">
            <div className="w-[540px] mx-auto justify-center items-center">
              <div className="w-[90%] ml-[25px]">
                <div className="max-w">
                  <div className="mb-2 block">
                    <Label
                      htmlFor="name"
                      value="First Name"
                      className="font-sans font-semibold text-[17px] text-black"
                    />
                  </div>
                  <TextInput
                    id="email"
                    type="email"
                    icon={MdDriveFileRenameOutline}
                    required
                  />
                </div>
                <div className="mt-[20px]">
                  <div className="mb-2 block">
                    <Label
                      htmlFor="name"
                      value="Last Name"
                      className="font-sans font-semibold text-[17px] text-black"
                    />
                  </div>
                  <TextInput
                    id="email"
                    type="email"
                    icon={MdDriveFileRenameOutline}
                    required
                  />
                </div>
                <div className="mt-[20px]">
                  <div className="mb-2 block">
                    <Label
                      htmlFor="phone"
                      value="Phone Number"
                      className="font-sans font-semibold text-[17px] text-black"
                    />
                  </div>
                  <TextInput id="email" type="email" icon={FaPhone} required />
                </div>

                <div className="mt-[20px]">
                  <div className="mb-2 block">
                    <Label
                      htmlFor="email"
                      value="Email Address"
                      className="font-sans font-semibold text-[17px] text-black"
                    />
                  </div>
                  <TextInput id="email" type="email" icon={HiMail} required />
                </div>
              </div>
            </div>

            <div className="w-[540px] mx-auto justify-center items-center">
              <div className="w-[90%] ml-[25px]">
                <div className="max-w">
                  <div className="mb-2 block">
                    <Label
                      htmlFor="branch"
                      value="Branch Da Nang"
                      className="font-sans font-semibold text-[17px] text-black"
                    />
                  </div>
                  <select
                    id="branch"
                    name="branch"
                    class="form-select  w-full border-slate-300 rounded-lg bg-slate-50"
                  >
                    {Branch.map((branch, index) => (
                      <option value={branch.name}>
                        <p className="font-sans font-medium text-[15px] text-black">
                          {branch.name}
                        </p>
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mt-[20px] max-w-full">
                  <div className="mb-2 block">
                    <Label
                      htmlFor="people"
                      value="Adult"
                      className="font-sans font-semibold text-[17px] text-black"
                    />
                  </div>
                  <select
                    id="people"
                    name="people"
                    class="form-select w-full border-slate-300 rounded-lg bg-slate-50"
                  >
                    {People.map((people, index) => (
                      <option value={people.name}>
                        <p className="font-sans font-medium text-[15px] text-black">
                          {people.name}
                        </p>
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mt-[20px] max-w-full">
                  <div className="mb-2 block">
                    <Label
                      htmlFor="time"
                      value="Date & Time"
                      className="font-sans font-semibold text-[17px] text-black"
                    />
                  </div>
                  <div className="flex items-center justify-center w-full">
                    <input
                      type="datetime-local"
                      className="form-select w-full border-slate-300 rounded-lg bg-slate-50"
                    />
                  </div>
                </div>
                <div className="mt-[20px]">
                  <div className="mb-2 block">
                    <Label
                      htmlFor="recomment"
                      value="Recommendations/Specs"
                      className="font-sans font-semibold text-[17px] text-black"
                    />
                  </div>
                  <TextInput
                    id="email"
                    type="email"
                    icon={FaComments}
                    required
                  />
                </div>
              </div>
            </div>
          </div>
          <Button
            className="w-1/3 h-[45px] mt-[20px] ml-[360px]"
            color="dark"
            onClick={() => {
              showAlert();
            }}
          >
            <p className="font-sans font-extrabold text-[17px] text-white">
              {" "}
              RESERVE{" "}
            </p>
          </Button>
        </div>

        <div className="w-[90%] mx-auto mt-[20px] ">
          <p className="font-sans font-bold text-xl text-black pt-[20px] text-center border-t border-zinc-400">
            Find the table for you
          </p>
          <p className="font-sans font-semibold text-lg text-black pt-[10px] text-center">
            Specify your prefer and search to find the proper table for you
          </p>
          <p className="font-sans font-bold text-xl text-black pt-[10px] text-center">
            Or
          </p>
          <p className="font-sans font-semibold text-lg text-black pt-[10px] text-center">
            Reservation support
          </p>
          <p className="font-sans font-bold text-xl text-black pt-[10px] text-center">
            Domestic number: 1900 1900 <br />
            International number: (+84) 564751400
          </p>
          <p className="font-sans font-bold text-xl text-black pt-[10px] pb-[20px] text-center">
            After choosing press 2 for English, please press 1 for Reservation
          </p>
        </div>
      </div>
    </div>
  );
};

export default Booking;
