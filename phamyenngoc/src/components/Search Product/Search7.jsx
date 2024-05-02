import React, { useState } from 'react';
import statusData from "../../data/status.json"

const Search7 = ({ handleSearch }) => {
    const [status, setStatus] = useState(statusData);

    const handleChange = (event) => {
        const selectedStatus = status.find(cat => cat.name === event.target.value);
        handleSearch(selectedStatus ? selectedStatus.name : null);
    };

    return (
        <div className="join mb-[15px]">
            <div>
                <div>
                    <select
                        onChange={handleChange}
                        id="Status"
                        name="Status"
                        required
                        className="form-select border-gray-950 w-[200px] h-[48px] rounded-none"
                    >
                        <option disabled selected>
                            Select Status
                        </option>
                        {status.map((item, index) => (
                            <option value={item.id} key={index}>
                                {item.name}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="indicator">
                <button className="btn join-item bg-gray-950 text-white rounded-none">Search</button>
            </div>
        </div>
    );
};

export default Search7;
