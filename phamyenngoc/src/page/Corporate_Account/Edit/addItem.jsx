import React, {useState} from 'react'

const AddItem = () => {
 const [ID, setID] = useState('');
  const [Name, setName] = useState('');
  const [Category, setCategory] = useState('');
  const [Price, setPrice] = useState('');

  const handleIDChange = (event) => {
    setID(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  return (
    <div>
      <input type="text" value={ID} onChange={handleIDChange} placeholder="ID" />
      <input type="text" value={Name} onChange={handleNameChange} placeholder="Name" />
      <input type="text" value={Category} onChange={handleCategoryChange} placeholder="Category" />
      <input type="text" value={Price} onChange={handlePriceChange} placeholder="Price" />
      {/* Add buttons or functionality here to add the item */}
    </div>
  );
}

export default AddItem

