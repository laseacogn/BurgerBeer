import React, { useEffect, useState } from "react";
import categorieData from "../../data/category.json";
import ItemProduct3 from "./ItemProduct3";
import dataProduct from "../../data/product.json";
import { Pagination, Button, Modal, Label, TextInput } from "flowbite-react";
import { HiHome } from "react-icons/hi";
import { GrNext } from "react-icons/gr";
import { NavLink } from "react-router-dom";
import Search from "../../components/Search Product/Search";
import { IoIosAddCircle } from "react-icons/io";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../config/firebase.config";
import { v4 } from "uuid";

const PrdManage = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState(categorieData);
  const [categorieID, setCategoryID] = useState("");
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const handleDelete = (productId) => {
    const updatedProducts = products.filter(
      (product) => product.id !== productId
    );
    setProducts(updatedProducts);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const totalProducts = dataProduct.length;
        const itemsPerPage = 12;
        const pages = Math.ceil(totalProducts / itemsPerPage);
        setTotalPages(pages);
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = Math.min(startIndex + itemsPerPage, totalProducts);
        let filteredProducts = dataProduct.slice(startIndex, endIndex);

        if (searchTerm) {
          filteredProducts = dataProduct.filter((product) =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
          );
        }

        setProducts(filteredProducts);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [categorieID, currentPage, searchTerm]);

  useEffect(() => {
    if (categorieID === "") {
      setProducts(dataProduct);
    } else {
      const filteredProducts = dataProduct.filter(
        (product) => product.categoryId === categorieID
      );
      setProducts(filteredProducts);
    }
  }, [categorieID]);

  const handleSearch = (value) => {
    setSearchTerm(value);
  };

  const [openModal1, setOpenModal1] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);

  //Add New Product
  const [imageUploads, setImageUploads] = useState();
  const [imageUrl, setImageUrl] = useState();

  const uploadFile = async () => {
    try {
      const imageId = v4();
      const imageRef = ref(storage, `/Blog2/${imageId}`);
      const snapshot = await uploadBytes(imageRef, imageUploads);
      const url = await getDownloadURL(snapshot.ref);
      return url;
    } catch (error) {
      console.error("Error uploading file:", error);
      throw error;
    }
  };

  const handleChange = (e) => {
    const file = e.target.files[0];
    setImageUploads(file);
  };

  const handleUpload = async () => {
    try {
      const url = await uploadFile();
      setImageUrl(url);
      return url;
    } catch (error) {
      console.error("Error uploading file to Firebase:", error);
    }
  };

  const AddItem = async () => {
    const img = await handleUpload();
    console.log(img);
    if (
      !ID ||
      !Name ||
      !img ||
      !Category ||
      !BasisPrice ||
      !SalePrice ||
      !Discount ||
      !Description
    ) {
      alert("Please fill in all fields");
      return;
    }
    const parsedPrice1 = parseFloat(BasisPrice);
    const parsedPrice2 = parseFloat(SalePrice);
    const parsedPrice3 = parseFloat(Discount);

    if (isNaN(parsedPrice1) || isNaN(parsedPrice2) || isNaN(parsedPrice3)) {
      alert("Please enter valid prices");
      return;
    } else {
      alert("Add new product successfully!");
    }

    console.log(ID);
    const newItem = {
      id: ID,
      name: Name,
      image: img,
      categoryName: Category,
      originalPrice: parsedPrice1,
      discountPercent: Discount,
      description: Description,
    };

    setProducts([...products, newItem]);
  };

  const [ID, setID] = useState("");
  const [Name, setName] = useState("");
  const [Category, setCategory] = useState("");
  const [BasisPrice, setBasisPrice] = useState("");
  const [SalePrice, setSalePrice] = useState("");
  const [Discount, setDiscount] = useState("");
  const [Description, setDescription] = useState("");

  //Edit Product
  const [ID2, setID2] = useState("");
  const [Name2, setName2] = useState("");
  const [Category2, setCategory2] = useState("");
  const [BasisPrice2, setBasisPrice2] = useState("");
  const [SalePrice2, setSalePrice2] = useState("");
  const [Discount2, setDiscount2] = useState("");
  const [Description2, setDescription2] = useState("");

  const [editIndex, setEditIndex] = useState(null);
  const [editInfo, setEditInfo] = useState({
    ID2: "",
    Name2: "",
    Category2: "",
    BasisPrice2: "",
    Discount2: "",
    SalePrice2: "",
    Description2: "",
  });

  const openEditModal = (index) => {
    setEditIndex(index);
    const {
      ID2,
      Name2,
      Category2,
      BasisPrice2,
      Discount2,
      SalePrice2,
      Description2,
    } = products[index];
    setID(ID2);
    setName(Name2);
    setCategory(Category2);
    setBasisPrice(BasisPrice2);
    setDiscount(Discount2);
    setSalePrice2(SalePrice2);
    setDescription(Description2);

    setPrevID(ID2);
    setPrevName(Name2);
    setPrevCategory(Category2);
    setPrevBasisPrice(BasisPrice2);
    setPrevDiscount(Discount2);
    setPrevSalePrice(SalePrice2);
    setPrevDescription(Description2);

    setOpenModal2(true);
  };

  const updatedProducts = async () => {
    const img = await handleUpload();
    if (
      !ID2 ||
      !Name2 ||
      !img ||
      !Category2 ||
      !BasisPrice2 ||
      !SalePrice2 ||
      !Discount2 ||
      !Description2
    ) {
      alert("Please fill in all fields");
      return;
    }
    const parsedPrice4 = parseFloat(BasisPrice2);
    const parsedPrice5 = parseFloat(SalePrice2);
    const parsedPrice6 = parseFloat(Discount2);

    if (isNaN(parsedPrice4) || isNaN(parsedPrice5) || isNaN(parsedPrice6)) {
      alert("Please enter valid prices");
      return;
    } else {
      alert("Update product successfully!");
    }
    const updatedProducts = [...products];
    updatedProducts[editIndex] = {
      id: ID2,
      name: Name2,
      image: img,
      categoryName: Category2,
      originalPrice: parsedPrice4,
      discountPercent: parsedPrice6,
      description: Description2,
    };
    setProducts(updatedProducts);
    setOpenModal2(false);
  };

  const handleOpenEditModal = (products) => {
    setProducts(updatedProducts);
    setOpenModal2(true);
  };

   const [prevID, setPrevID] = useState("");
  const [prevName, setPrevName] = useState("");
  const [prevCategory, setPrevCategory] = useState("");
  const [prevBasisPrice, setPrevBasisPrice] = useState("");
  const [prevDiscount, setPrevDiscount] = useState("");
  const [prevSalePrice, setPrevSalePrice] = useState("");
  const [prevDescription, setPrevDescription] = useState("");

 


  return (
    <div>
      <div className="max-w-[1200px] mx-auto pb-2">
        <div className="w-full flex justify-between items-center">
          <div className="flex">
            <HiHome className="w-[25px] h-[25px] mb-[20px] mr-[10px]" />
            <NavLink to="/">
              <p className="font-inter font-bold text-[20px] mb-[20px] mr-[10px]">
                {" "}
                Home{" "}
              </p>
            </NavLink>

            <GrNext className="w-[15px] h-[15px] mt-[10px] mr-[10px]" />
            <NavLink to="/product">
              <p className="font-inter font-bold text-[20px] mb-[20px]">
                {" "}
                Products
              </p>
            </NavLink>
          </div>
          <div className="flex">
            <Search handleSearch={handleSearch} />
            <IoIosAddCircle
              className="w-[50px] h-[50px] ml-[10px]"
              color="dark"
              onClick={() => setOpenModal1(true)}
            />
          </div>
        </div>

        <div className="w-full mx-auto h-full flex justify-center items-center border shadow-md rounded-lg py-4">
          <div className="flex items-center justify-center gap-14">
            <button
              className="font-inter font-bold text-center text-[18px] hover:text-red-500 transition-all"
              onClick={() => {
                setCategoryID("");
              }}
            >
              <img
                className="w-[70px] h-[70px] ml-[15px]"
                style={{ borderRadius: "20px" }}
                src={require(`../../assets/image/category/10.jpg`)}
                alt={""}
              />
              All Product
            </button>
            {categories?.map((item, index) => (
              <div className="flex items-center justify-center" key={index}>
                <button
                  className="font-inter font-bold text-center text-[18px] hover:text-red-500 transition-all"
                  onClick={() => {
                    setCategoryID(item.ID);
                  }}
                >
                  <img
                    className="w-[70px] h-[70px] self-center"
                    style={{ borderRadius: "20px" }}
                    src={require(`../../assets/image/category/${item.image}`)}
                    alt={item.name}
                  />
                  {item.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        className="max-w-[1200px] mx-auto "
        style={{ paddingTop: "30px", paddingBottom: "20px" }}
      >
        <div className="grid grid-cols-3 gap-4 text-center">
          {products.map((product, index) => (
            <ItemProduct3
              key={index}
              product={product}
              onDelete={handleDelete}
              onEdit={() => openEditModal(index)}
              openModal2={openModal2}
            />
          ))}
        </div>
      </div>
      <div className="flex overflow-x-auto sm:justify-center">
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
          showIcons
        />
      </div>

      <Modal
        show={openModal1}
        onClose={() => setOpenModal1(false)}
        className="no-scrollbar"
      >
        <Modal.Header className="h-[50px] pt-[10px]">
          Add New Product
        </Modal.Header>
        <Modal.Body className="no-scrollbar">
          <div className="w-full mx-auto flex grid grid-cols-2 justify-between items-center">
            <div className="w-[95%]">
              <div className="max-w">
                <div className="mb-2 block">
                  <Label
                    htmlFor="email"
                    value="Product ID"
                    className="font-sans font-medium text-[15px] text-black"
                  />
                </div>
                <TextInput
                  onChange={(e) => {
                    setID(e.target.value);
                  }}
                  id="email"
                  type="email"
                  required
                />
              </div>
              <div className="mt-2">
                <div className="mb-2 block">
                  <Label
                    htmlFor="email"
                    value="Product Name"
                    className="font-sans font-medium text-[15px] text-black"
                  />
                </div>
                <TextInput
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  id="email"
                  type="email"
                  required
                />
              </div>
              <div className="mt-2">
                <div className="mb-2 block">
                  <Label
                    htmlFor="email"
                    value="Category"
                    className="font-sans font-medium text-[15px] text-black"
                  />
                </div>
                <select
                  onChange={(e) => {
                    setCategory(e.target.value);
                  }}
                  id="email"
                  name="email"
                  required
                  className="form-select border-slate-300 rounded-lg bg-slate-50 w-full h-[43px]"
                >
                  <option disabled selected>
                    --Select Category--
                  </option>
                  {categories.map((item, index) => (
                    <option value={item.name} key={index}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mt-2">
                <div className="mb-2 block">
                  <Label
                    htmlFor="email"
                    value="Product Image"
                    className="font-sans font-medium text-[15px] text-black"
                  />
                </div>

                <input
                  type="file"
                  className="file-input file-input-bordered w-full max-w-xs"
                  multiple
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="w-[95%] mt-[-5px]">
              <div className="max-w">
                <div className="mb-2 block">
                  <Label
                    htmlFor="email"
                    value="Basis Price"
                    className="font-sans font-medium text-[15px] text-black"
                  />
                </div>
                <TextInput
                  onChange={(e) => {
                    setBasisPrice(e.target.value);
                  }}
                  id="email"
                  type="email"
                  required
                />
              </div>
              <div className="mt-2">
                <div className="mb-2 block">
                  <Label
                    htmlFor="email"
                    value="Discount (%)"
                    className="font-sans font-medium text-[15px] text-black"
                  />
                </div>
                <TextInput
                  onChange={(e) => {
                    setDiscount(e.target.value);
                  }}
                  id="email"
                  type="email"
                  required
                />
              </div>
              <div className="mt-2">
                <div className="mb-2 block">
                  <Label
                    htmlFor="email"
                    value="Quantity"
                    className="font-sans font-medium text-[15px] text-black"
                  />
                </div>
                <TextInput
                  onChange={(e) => {
                    setSalePrice(e.target.value);
                  }}
                  id="email"
                  type="email"
                  required
                />
              </div>
              <div className="mt-2">
                <div className="mb-2 block">
                  <Label
                    htmlFor="email"
                    value="Description"
                    className="font-sans font-medium text-[15px] text-black"
                  />
                </div>
                <TextInput
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                  id="email"
                  type="email"
                  required
                />
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={() => {
              setOpenModal1(false);
              AddItem();
            }}
            color="dark"
          >
            I accept
          </Button>
          <Button color="gray" onClick={() => setOpenModal1(false)}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={openModal2}
        onClose={() => setOpenModal2(false)}
        className="no-scrollbar"
      >
        <Modal.Header className="h-[50px] pt-[10px]">Edit Product</Modal.Header>

        <Modal.Body className="no-scrollbar">
          <div className="w-full mx-auto flex grid grid-cols-2 justify-between items-center">
            <div className="w-[95%]">
              <div className="max-w">
                <div className="mb-2 block">
                  <Label
                    htmlFor="email"
                    value="Product ID"
                    className="font-sans font-medium text-[15px] text-black"
                  />
                </div>
                <TextInput
                 value={prevID}
                  onChange={(e) => {
                    setID2(e.target.value);
                  }}
                  id="email"
                  type="email"
                  required
                />
              </div>
              <div className="mt-2">
                <div className="mb-2 block">
                  <Label
                    htmlFor="email"
                    value="Product Name"
                    className="font-sans font-medium text-[15px] text-black"
                  />
                </div>
                <TextInput
                 value={prevName}
                  onChange={(e) => {
                    setName2(e.target.value);
                  }}
                  id="email"
                  type="email"
                  required
                />
              </div>
              <div className="mt-2">
                <div className="mb-2 block">
                  <Label
                    htmlFor="email"
                    value="Category"
                    className="font-sans font-medium text-[15px] text-black"
                  />
                </div>
                <select
                 value={prevCategory}
                  onChange={(e) => {
                    setCategory2(e.target.value);
                  }}
                  id="email"
                  name="email"
                  required
                  className="form-select border-slate-300 rounded-lg bg-slate-50 w-full h-[43px]"
                >
                  <option disabled selected>
                    --Select Category--
                  </option>
                  {categories.map((item, index) => (
                    <option value={item.name} key={index}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mt-2">
                <div className="mb-2 block">
                  <Label
                    htmlFor="email"
                    value="Product Image"
                    className="font-sans font-medium text-[15px] text-black"
                  />
                </div>

                <input
                  type="file"
                  className="file-input file-input-bordered w-full max-w-xs"
                  multiple
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="w-[95%] mt-[-5px]">
              <div className="max-w">
                <div className="mb-2 block">
                  <Label
                    htmlFor="email"
                    value="Basis Price"
                    className="font-sans font-medium text-[15px] text-black"
                  />
                </div>
                <TextInput
                 value={prevBasisPrice}
                  onChange={(e) => {
                    setBasisPrice2(e.target.value);
                  }}
                  id="email"
                  type="email"
                  required
                />
              </div>
              <div className="mt-2">
                <div className="mb-2 block">
                  <Label
                    htmlFor="email"
                    value="Discount (%)"
                    className="font-sans font-medium text-[15px] text-black"
                  />
                </div>
                <TextInput
                 value={prevDiscount}
                  onChange={(e) => {
                    setDiscount2(e.target.value);
                  }}
                  id="email"
                  type="email"
                  required
                />
              </div>
              <div className="mt-2">
                <div className="mb-2 block">
                  <Label
                    htmlFor="email"
                    value="Quantity"
                    className="font-sans font-medium text-[15px] text-black"
                  />
                </div>
                <TextInput
                 value={prevSalePrice}
                  onChange={(e) => {
                    setSalePrice2(e.target.value);
                  }}
                  id="email"
                  type="email"
                  required
                />
              </div>
              <div className="mt-2">
                <div className="mb-2 block">
                  <Label
                    htmlFor="email"
                    value="Description"
                    className="font-sans font-medium text-[15px] text-black"
                  />
                </div>
                <TextInput
                 value={prevDescription}
                  onChange={(e) => {
                    setDescription2(e.target.value);
                  }}
                  id="email"
                  type="email"
                  required
                />

              </div>
            </div>
          </div>
        </Modal.Body>

        <Modal.Footer className="h-[60px]">
          <Button
            onClick={() => {
              updatedProducts();
            }}
            color="dark"
            className="rounded-none"
          >
            <p className="font-sans font-semibold text-[15px] text-white">
              Accept
            </p>
          </Button>
          <Button
            className="rounded-none"
            color="light"
            onClick={() => setOpenModal2(false)}
          >
            <p className="font-sans font-semibold text-[15px] text-gray-900">
              Decline
            </p>
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default PrdManage;
