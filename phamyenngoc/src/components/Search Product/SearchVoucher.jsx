import React, { useState } from "react";

const SearchVoucher = ({ handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    handleSearch(event.target.value);
  };

  return (
      <div>
        <div>
          <input
            className="font-sans text-[15px] input input-bordered join-item border-gray-950 w-[280px] ml-[20px] mt-[10px] rounded-none"
            placeholder="Enter voucher code here"
            value={searchTerm}
            onChange={handleChange}
          />
        </div>
      </div>
  );
};

export default SearchVoucher;
