import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaChartLine, FaUser } from 'react-icons/fa';
import { IoBagHandle } from 'react-icons/io5';
import { MdOutlineCategory } from 'react-icons/md';
import { TbBuildingWarehouse } from 'react-icons/tb';
import { TiTicket } from 'react-icons/ti';

export function Admin() {
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
              className="flex gap-2 text-[#50FAD1] items-center hover:cursor-pointer hover:bg-blue-200 rounded-md py-4 px-2 ease-in duration-300"
            >
              <FaUser />
              <p className="text-[#50FAD1]">User Management</p>
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
              className="flex gap-2 text-[#FFFFFF] items-center hover:cursor-pointer hover:bg-blue-200 rounded-md py-4 px-2 ease-in duration-300"
            >
              <MdOutlineCategory />
              <p className="text-[#FFFFFF]">Category</p>
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
        <button className="bg-[#4B4949] text-white text-base font-medium px-4 py-2 rounded self-end mr-20 shadow-md">
          Logout
        </button>
        <div className="flex flex-col text-slate-500">
          <p className="text-center text-2xl font-medium p-2 text-black">User Manager</p>
          <div className="flex justify-between pr-8 gap-4 text-lg font-semibold">
            <div className="flex flex-col gap-2">
              <label htmlFor="name">Search by Name</label>
              <input
                className="bg-slate-200 p-1 focus:outline-none rounded"
                type="text"
                placeholder="Enter user name"
                id="name"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="phone">Search by Phone</label>
              <input
                className="bg-slate-200 p-1 focus:outline-none rounded"
                type="text"
                placeholder="Enter user phone"
                id="phone"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email">Search by Email</label>
              <input
                type="text"
                className="bg-slate-200 p-1 focus:outline-none rounded"
                placeholder="Enter user email"
                id="email"
              />
            </div>
          </div>
          <div className="flex flex-col mr-8 divide-y p-2">
            <div className="grid grid-cols-6 mt-4 font-semibold gap-2 items-center  text-center">
              <p>UserID</p>
              <p>User Name</p>
              <p>Status</p>
              <p>Phone</p>
              <p>Email</p>
              <p>Adress</p>
            </div>
            <div className="grid grid-cols-6 mt-4 break-words items-center gap-2  text-center">
              <p >000001</p>
              <p >Pham Thi Yen Ngoc</p>
              <p>1</p>
              <p>0564751400</p>
              <p className="">phamyenngoc.02@gmail.com</p>
              <p className="">26 An Thuong 4, Ngu Hanh Son, Da Nang</p>
            </div>
            <div className="grid grid-cols-6 mt-4 break-words items-center gap-2  text-center">
              <p >000002</p>
              <p >Lasea Cogn</p>
              <p>1</p>
              <p>0837018566</p>
              <p className="text-wrap">lasea02@gmail.com</p>
              <p className="text-wrap">
                30 An Thuong 36, Ngu Hanh Son, Da Nang
              </p>
            </div>
            <div className="grid grid-cols-6 mt-4 break-words items-center gap-2  text-center">
              <p >000003</p>
              <p >Nguyen Thu Huyen</p>
              <p>1</p>
              <p>09670124565</p>
              <p className="">huyendr98@gmail.com</p>
              <p className="text-wrap">
                01 Vu Dinh Long, Son Tra, Da Nang
              </p>
            </div>
            <div className="grid grid-cols-6 mt-4 break-words items-center gap-2  text-center">
              <p >000004</p>
              <p >Hoang Nguyen Linh Chi</p>
              <p>1</p>
              <p>0899005579</p>
              <p className="text-balance">lyncii0920@gmail.com</p>
              <p className="text-wrap">
                12 Trung Nu Vuong, Hai Chau, Da Nang
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
