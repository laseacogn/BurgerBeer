import React, { useState } from "react";

const SearchVoucher2 = ({ handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    handleSearch(event.target.value);
  };

  return (
    <div className="join mt-[5px]">
      <div>
        <div>
          <input
            className="input input-bordered join-item border-gray-950 w-[500px] rounded-none"
            placeholder="Enter Voucher Code Here"
            value={searchTerm}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="indicator">
        <button className="btn join-item bg-gray-950 text-white rounded-none">Search</button>
      </div>
    </div>
  );
};

export default SearchVoucher2;
