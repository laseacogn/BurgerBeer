import React,{useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import { FaChartLine, FaUser } from 'react-icons/fa';
import { IoBagHandle } from 'react-icons/io5';
import { MdOutlineCategory } from 'react-icons/md';
import { TbBuildingWarehouse } from 'react-icons/tb';
import { TiTicket } from 'react-icons/ti';
import { Checkbox } from 'flowbite-react';
import { FaPen } from "react-icons/fa";
import { IoChevronBack } from "react-icons/io5";

//Category
export function Category() {
  useEffect(() => {
  window.scrollTo(0, 0);
}, []);

  return (
    <div className="max-w-[1200px] mx-auto " >
      <div className="flex gap-2">
        <div className="min-w-72 bg-[#4B4949] rounded-md p-7">
          <div className="flex flex-col h-full">
            <p className="text-[#FFFFFF] text-xl font-bold text-center">ADMIN</p>
            <div className="flex flex-col pl-7 font-medium text-slate-500 text-lg my-auto gap-4 ">
              <NavLink
                to=""
                className="flex gap-2 text-[#FFFFFF] items-center hover:cursor-pointer hover:bg-blue-200 rounded-md py-4 px-2 ease-in duration-300"
              >
                <FaChartLine />
                <p className="text-[#FFFFFF]">Statistic</p>
              </NavLink>
              <NavLink
                to="/admin"
                className="flex gap-2 text-[#FFFFFF] items-center hover:cursor-pointer hover:bg-blue-200 rounded-md py-4 px-2 ease-in duration-300"
              >
                <FaUser />
                <p className="text-[#FFFFFF]">User Management</p>
              </NavLink>
              <NavLink
                to="/admin/itemlist"
                className="flex gap-2 text-[#FFFFFF] items-center hover:cursor-pointer hover:bg-blue-200 rounded-md py-4 px-2 ease-in duration-300"
              >
                <IoBagHandle />
                <p className="text-[#FFFFFF]">Items List</p>
              </NavLink>
              <NavLink
                to="/admin/category"
                className="flex gap-2 text-[#50FAD1] items-center hover:cursor-pointer hover:bg-blue-200 rounded-md py-4 px-2 ease-in duration-300"
              >
                <MdOutlineCategory />
                <p className="text-[#50FAD1]">Category</p>
              </NavLink>
              <NavLink
                to=""
                className="flex gap-2 text-[#FFFFFF] items-center hover:cursor-pointer hover:bg-blue-200 rounded-md py-4 px-2 ease-in duration-300"
              >
                <TbBuildingWarehouse />
                <p className="text-[#FFFFFF]">Inventory List</p>
              </NavLink>
              <NavLink
                to=""
                className="flex gap-2 text-[#FFFFFF] items-center hover:cursor-pointer hover:bg-blue-200 rounded-md py-4 px-2 ease-in duration-300"
              >
                <TiTicket />
                <p className="text-[#FFFFFF]">Voucher</p>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col">
          <div className="w-full flex flex-row justify-between items-center">
            <p className="w-[700px] text-center text-2xl font-medium p-2 text-black"> CATEGORY </p>
            <button className="bg-[#4B4949] text-white text-base font-medium px-4 py-2 rounded self-end shadow-md">
              Create New Category
            </button>
          </div>
          <div className="w-full pt-[10px]">
            <div className="flex flex-col text-slate-500">
              <input
                className="bg-slate-200 p-1 focus:outline-none rounded"
                type="text"
                placeholder="    Search Category"
                id="name"
              />
            </div>
            <div className="flex flex-col mr-2 divide-y p-2">
              <div className="grid grid-cols-5 mt-4 font-bold gap-2 items-center text-center">
                <p> </p>
                <p>Category ID</p>
                <p>Category Name</p>
                <p>Number Of Items</p>
                <p> </p>
              </div>

              <div className="grid grid-cols-5 mt-4 break-words items-center gap-2 text-center">
                <Checkbox id="agree" className='ml-[85px]' />
                <p>001</p>
                <p>Baguette</p>
                <p>3</p>
                <NavLink to="/admin/category/baguette">
                  <FaPen />
                </NavLink>
              </div>


              <div className="grid grid-cols-5 mt-4 break-words items-center gap-2 text-center">
                <Checkbox id="agree" className='ml-[85px]' />
                <p>002</p>
                <p>Burger</p>
                <p>8</p>
                <NavLink to="/admin/category/burger">
                  <FaPen />
                </NavLink>
              </div>


              <div className="grid grid-cols-5 mt-4 break-words items-center gap-2 text-center">
                <Checkbox id="agree" className='ml-[85px]' />
                <p>003</p>
                <p>Combo</p>
                <p>10</p>
                <NavLink to="/admin/category/combo">
                  <FaPen /> </NavLink>
              </div>


              <div className="grid grid-cols-5 mt-4 break-words items-center gap-2 text-center">
                <Checkbox id="agree" className='ml-[85px]' />
                <p>004</p>
                <p>Drink</p>
                <p>36</p>
                <NavLink to="/admin/category/drink">
                  <FaPen /></NavLink>
              </div>


              <div className="grid grid-cols-5 mt-4 break-words items-center gap-2 text-center">
                <Checkbox id="agree" className='ml-[85px]' />
                <p>005</p>
                <p>Hotdog</p>
                <p>2</p>
                <NavLink to="/admin/category/hotdog">
                  <FaPen /></NavLink>
              </div>


              <div className="grid grid-cols-5 mt-4 break-words items-center gap-2 text-center">
                <Checkbox id="agree" className='ml-[85px]' />
                <p>006</p>
                <p>Pizza</p>
                <p>3</p>
                <NavLink to="/admin/category/pizza">
                  <FaPen /></NavLink>
              </div>


              <div className="grid grid-cols-5 mt-4 break-words items-center gap-2 text-center">
                <Checkbox id="agree" className='ml-[85px]' />
                <p>007</p>
                <p>Sandwich</p>
                <p>2</p>
                <NavLink to="/admin/category/sandwich">
                  <FaPen /></NavLink>
              </div>


              <div className="grid grid-cols-5 mt-4 break-words items-center gap-2 text-center">
                <Checkbox id="agree" className='ml-[85px]' />
                <p>008</p>
                <p>Sidedish</p>
                <p>5</p>
                <NavLink to="/admin/category/sidedish">
                  <FaPen /></NavLink>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

//Baguette
export function Category_Baguette() {
  return (
    <div className="max-w-[1200px] mx-auto " >
      <div className="flex gap-2">
        <div className="min-w-72 bg-[#4B4949] rounded-md p-7">
          <div className="flex flex-col h-full">
            <p className="text-[#FFFFFF] text-xl font-bold text-center">ADMIN</p>
            <div className="flex flex-col pl-7 font-medium text-slate-500 text-lg my-auto gap-4 ">
              <NavLink
                to=""
                className="flex gap-2 text-[#FFFFFF] items-center hover:cursor-pointer hover:bg-blue-200 rounded-md py-4 px-2 ease-in duration-300"
              >
                <FaChartLine />
                <p className="text-[#FFFFFF]">Statistic</p>
              </NavLink>
              <NavLink
                to="/admin"
                className="flex gap-2 text-[#FFFFFF] items-center hover:cursor-pointer hover:bg-blue-200 rounded-md py-4 px-2 ease-in duration-300"
              >
                <FaUser />
                <p className="text-[#FFFFFF]">User Management</p>
              </NavLink>
              <NavLink
                to="/admin/itemlist"
                className="flex gap-2 text-[#FFFFFF] items-center hover:cursor-pointer hover:bg-blue-200 rounded-md py-4 px-2 ease-in duration-300"
              >
                <IoBagHandle />
                <p className="text-[#FFFFFF]">Items List</p>
              </NavLink>
              <NavLink
                to="/admin/category"
                className="flex gap-2 text-[#50FAD1] items-center hover:cursor-pointer hover:bg-blue-200 rounded-md py-4 px-2 ease-in duration-300"
              >
                <MdOutlineCategory />
                <p className="text-[#50FAD1]">Category</p>
              </NavLink>
              <NavLink
                to=""
                className="flex gap-2 text-[#FFFFFF] items-center hover:cursor-pointer hover:bg-blue-200 rounded-md py-4 px-2 ease-in duration-300"
              >
                <TbBuildingWarehouse />
                <p className="text-[#FFFFFF]">Inventory List</p>
              </NavLink>
              <NavLink
                to=""
                className="flex gap-2 text-[#FFFFFF] items-center hover:cursor-pointer hover:bg-blue-200 rounded-md py-4 px-2 ease-in duration-300"
              >
                <TiTicket />
                <p className="text-[#FFFFFF]">Voucher</p>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col">
          <div className="w-full flex flex-row justify-between items-center">
            <NavLink to="/admin/category">
              <IoChevronBack alt="" className='w-[20px] ml-[5px]' />
            </NavLink>
            <p className="w-[700px] text-center text-2xl font-medium p-2 text-black"> BAGUETTE </p>
            <button className="bg-[#4B4949] text-white text-base font-medium px-4 py-2 rounded self-end shadow-md">
              Create New Item
            </button>
          </div>
          <div className="w-full pt-[10px]">
            <div className="flex flex-col text-slate-500">
              <input
                className="bg-slate-200 p-1 focus:outline-none rounded"
                type="text"
                placeholder="    Search Items"
                id="name"
              />
            </div>
            <div className="flex flex-col mr-2 divide-y p-2">
              <div className="grid grid-cols-4 mt-4 font-bold gap-2 items-center text-center">
                <p>Item ID</p>
                <p>Item Name</p>
                <p>Category</p>
                <p>Price</p>
              </div>
              <div className="grid grid-cols-4 mt-4 break-words items-center gap-2 text-center">
                <p>001</p>
                <p>Vietnamese Baguette Chasiu</p>
                <p>Baguette</p>
                <p>30.00 $</p>
              </div>
              <div className="grid grid-cols-4 mt-4 break-words items-center gap-2 text-center">
                <p>002</p>
                <p>Vietnamese Baguette Grilled Pork</p>
                <p>Baguette</p>
                <p>30.00 $</p>
              </div>
              <div className="grid grid-cols-4 mt-4 break-words items-center gap-2 text-center">
                <p>003</p>
                <p>Vietnamese Baguette Mixed</p>
                <p>Baguette</p>
                <p>40.00 $</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

//Burger
export function Category_Burger() {
  return (
    <div className="max-w-[1200px] mx-auto " >
      <div className="flex gap-2">
        <div className="min-w-72 bg-[#4B4949] rounded-md p-7">
          <div className="flex flex-col h-full">
            <p className="text-[#FFFFFF] text-xl font-bold text-center">ADMIN</p>
            <div className="flex flex-col pl-7 font-medium text-slate-500 text-lg my-auto gap-4 ">
              <NavLink
                to=""
                className="flex gap-2 text-[#FFFFFF] items-center hover:cursor-pointer hover:bg-blue-200 rounded-md py-4 px-2 ease-in duration-300"
              >
                <FaChartLine />
                <p className="text-[#FFFFFF]">Statistic</p>
              </NavLink>
              <NavLink
                to="/admin"
                className="flex gap-2 text-[#FFFFFF] items-center hover:cursor-pointer hover:bg-blue-200 rounded-md py-4 px-2 ease-in duration-300"
              >
                <FaUser />
                <p className="text-[#FFFFFF]">User Management</p>
              </NavLink>
              <NavLink
                to="/admin/itemlist"
                className="flex gap-2 text-[#FFFFFF] items-center hover:cursor-pointer hover:bg-blue-200 rounded-md py-4 px-2 ease-in duration-300"
              >
                <IoBagHandle />
                <p className="text-[#FFFFFF]">Items List</p>
              </NavLink>
              <NavLink
                to="/admin/category"
                className="flex gap-2 text-[#50FAD1] items-center hover:cursor-pointer hover:bg-blue-200 rounded-md py-4 px-2 ease-in duration-300"
              >
                <MdOutlineCategory />
                <p className="text-[#50FAD1]">Category</p>
              </NavLink>
              <NavLink
                to=""
                className="flex gap-2 text-[#FFFFFF] items-center hover:cursor-pointer hover:bg-blue-200 rounded-md py-4 px-2 ease-in duration-300"
              >
                <TbBuildingWarehouse />
                <p className="text-[#FFFFFF]">Inventory List</p>
              </NavLink>
              <NavLink
                to=""
                className="flex gap-2 text-[#FFFFFF] items-center hover:cursor-pointer hover:bg-blue-200 rounded-md py-4 px-2 ease-in duration-300"
              >
                <TiTicket />
                <p className="text-[#FFFFFF]">Voucher</p>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col">
          <div className="w-full flex flex-row justify-between items-center">
            <NavLink to="/admin/category">
              <IoChevronBack alt="" className='w-[20px] ml-[5px]'></IoChevronBack>
            </NavLink>
            <p className="w-[700px] text-center text-2xl font-medium p-2 text-black"> BURGER </p>
            <button className="bg-[#4B4949] text-white text-base font-medium px-4 py-2 rounded self-end shadow-md">
              Create New Item
            </button>
          </div>
          <div className="w-full pt-[10px]">
            <div className="flex flex-col text-slate-500">
              <input
                className="bg-slate-200 p-1 focus:outline-none rounded"
                type="text"
                placeholder="    Search Items"
                id="name"
              />
            </div>
            <div className="flex flex-col mr-2 divide-y p-2">
              <div className="grid grid-cols-4 mt-4 font-bold gap-2 items-center text-center">
                <p>Item ID</p>
                <p>Item Name</p>
                <p>Category</p>
                <p>Price</p>
              </div>
              <div className="grid grid-cols-4 mt-4 break-words items-center gap-2 text-center">
                <p>001</p>
                <p>BBQ Pull Pork Burger</p>
                <p>Burger</p>
                <p>99.00 $</p>
              </div>
              <div className="grid grid-cols-4 mt-4 break-words items-center gap-2 text-center">
                <p>002</p>
                <p>Cheese Burger</p>
                <p>Burger</p>
                <p>99.00 $</p>
              </div>
              <div className="grid grid-cols-4 mt-4 break-words items-center gap-2 text-center">
                <p>003</p>
                <p>Double Cheese Burger</p>
                <p>Burger</p>
                <p>99.00 $</p>
              </div>
              <div className="grid grid-cols-4 mt-4 break-words items-center gap-2 text-center">
                <p>004</p>
                <p>Bacon & Egg Burger</p>
                <p>Burger</p>
                <p>99.00 $</p>
              </div>
              <div className="grid grid-cols-4 mt-4 break-words items-center gap-2 text-center">
                <p>005</p>
                <p>The Classic Burger</p>
                <p>Burger</p>
                <p>80.00 $</p>
              </div>
              <div className="grid grid-cols-4 mt-4 break-words items-center gap-2 text-center">
                <p>006</p>
                <p>Fries Fish Burger</p>
                <p>Burger</p>
                <p>80.00 $</p>
              </div>
              <div className="grid grid-cols-4 mt-4 break-words items-center gap-2 text-center">
                <p>007</p>
                <p>Japanese Fried Chicken Burger</p>
                <p>Burger</p>
                <p>80.00 $</p>
              </div>
              <div className="grid grid-cols-4 mt-4 break-words items-center gap-2 text-center">
                <p>008</p>
                <p>Black Bean Burger</p>
                <p>Burger</p>
                <p>70.00 $</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

//Pizza
export function Category_Pizza() {
  return (
    <div className="max-w-[1200px] mx-auto " >
      <div className="flex gap-2">
        <div className="min-w-72 bg-[#4B4949] rounded-md p-7">
          <div className="flex flex-col h-full">
            <p className="text-[#FFFFFF] text-xl font-bold text-center">ADMIN</p>
            <div className="flex flex-col pl-7 font-medium text-slate-500 text-lg my-auto gap-4 ">
              <NavLink
                to=""
                className="flex gap-2 text-[#FFFFFF] items-center hover:cursor-pointer hover:bg-blue-200 rounded-md py-4 px-2 ease-in duration-300"
              >
                <FaChartLine />
                <p className="text-[#FFFFFF]">Statistic</p>
              </NavLink>
              <NavLink
                to="/admin"
                className="flex gap-2 text-[#FFFFFF] items-center hover:cursor-pointer hover:bg-blue-200 rounded-md py-4 px-2 ease-in duration-300"
              >
                <FaUser />
                <p className="text-[#FFFFFF]">User Management</p>
              </NavLink>
              <NavLink
                to="/admin/itemlist"
                className="flex gap-2 text-[#FFFFFF] items-center hover:cursor-pointer hover:bg-blue-200 rounded-md py-4 px-2 ease-in duration-300"
              >
                <IoBagHandle />
                <p className="text-[#FFFFFF]">Items List</p>
              </NavLink>
              <NavLink
                to="/admin/category"
                className="flex gap-2 text-[#50FAD1] items-center hover:cursor-pointer hover:bg-blue-200 rounded-md py-4 px-2 ease-in duration-300"
              >
                <MdOutlineCategory />
                <p className="text-[#50FAD1]">Category</p>
              </NavLink>
              <NavLink
                to=""
                className="flex gap-2 text-[#FFFFFF] items-center hover:cursor-pointer hover:bg-blue-200 rounded-md py-4 px-2 ease-in duration-300"
              >
                <TbBuildingWarehouse />
                <p className="text-[#FFFFFF]">Inventory List</p>
              </NavLink>
              <NavLink
                to=""
                className="flex gap-2 text-[#FFFFFF] items-center hover:cursor-pointer hover:bg-blue-200 rounded-md py-4 px-2 ease-in duration-300"
              >
                <TiTicket />
                <p className="text-[#FFFFFF]">Voucher</p>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col">
          <div className="w-full flex flex-row justify-between items-center">
            <NavLink to="/admin/category">
              <IoChevronBack alt="" className='w-[20px] ml-[5px]'></IoChevronBack>
            </NavLink>
            <p className="w-[700px] text-center text-2xl font-medium p-2 text-black"> PIZZA </p>
            <button className="bg-[#4B4949] text-white text-base font-medium px-4 py-2 rounded self-end shadow-md">
              Create New Item
            </button>
          </div>
          <div className="w-full pt-[10px]">
            <div className="flex flex-col text-slate-500">
              <input
                className="bg-slate-200 p-1 focus:outline-none rounded"
                type="text"
                placeholder="    Search Items"
                id="name"
              />
            </div>
            <div className="flex flex-col mr-2 divide-y p-2">
              <div className="grid grid-cols-4 mt-4 font-bold gap-2 items-center text-center">
                <p>Item ID</p>
                <p>Item Name</p>
                <p>Category</p>
                <p>Price</p>
              </div>
              <div className="grid grid-cols-4 mt-4 break-words items-center gap-2 text-center">
                <p>001</p>
                <p>Carnitas & Corn Pizza</p>
                <p>Pizza</p>
                <p>130.00 $</p>
              </div>
              <div className="grid grid-cols-4 mt-4 break-words items-center gap-2 text-center">
                <p>002</p>
                <p>Hawaiian Pizza</p>
                <p>Pizza</p>
                <p>130.00 $</p>
              </div>
              <div className="grid grid-cols-4 mt-4 break-words items-center gap-2 text-center">
                <p>003</p>
                <p>Cheese Pizza</p>
                <p>Pizza</p>
                <p>160.00 $</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

//Create New Items
