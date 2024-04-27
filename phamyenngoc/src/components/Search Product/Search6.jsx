import React, { useState } from 'react';
import categoryData from '../../data/category.json';

const Search6 = ({ handleSearch }) => {
    const [category, setCategory] = useState(categoryData);

    const handleChange = (event) => {
        const selectedCategory = category.find(cat => cat.name === event.target.value);
        handleSearch(selectedCategory ? selectedCategory.name : null);
    };

    return (
        <div className="join mb-[15px]">
            <div>
                <div>
                    <select
                        onChange={handleChange}
                        id="Category"
                        name="Category"
                        required
                        className="form-select border-gray-950 w-[200px] h-[48px] rounded-none"
                    >
                        <option disabled selected>
                            Select Category
                        </option>
                        {category.map((item, index) => (
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

export default Search6;
