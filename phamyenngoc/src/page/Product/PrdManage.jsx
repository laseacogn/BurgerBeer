import React, { useEffect, useState } from "react";
import categorieData from "../../data/category.json";
import dataProduct from "../../data/product.json";
import { Carousel, Button, Modal, Label, TextInput } from "flowbite-react";
import { HiHome } from "react-icons/hi";
import { GrNext } from "react-icons/gr";
import { NavLink } from "react-router-dom";
import popularPrdData from "../../data/popularPrd.json";
import rcmData from "../../data/rcmPrd.json";
import { IoIosAddCircle } from "react-icons/io";
import { FaPen } from "react-icons/fa6";
import { FaPenAlt } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { IoTime } from "react-icons/io5";
import { FaShop, FaPhoneVolume } from "react-icons/fa6";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../config/firebase.config";
import { v4 } from "uuid";

const PrdManage = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const now = new Date();
    const currentHour = now.getHours();
    const openingHour = 7;
    const closingHour = 22;

    setIsOpen(currentHour >= openingHour && currentHour < closingHour);
  }, []);

  const [products, setProducts] = useState([]);
  const [popularPrd, setPopularPrd] = useState([]);
  const [rcmPrd, setRcmPrd] = useState([]);
  const [categories, setCategories] = useState(categorieData);
  const [categorieID, setCategoryID] = useState("");
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setPopularPrd(popularPrdData);
    setRcmPrd(rcmData);
  }, []);

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
    setCurrentPage(1);
  };
  const handleCategorySelect = (categoryId) => {
    setCategoryID(categoryId);
    setCurrentPage(1);
  };

  const calculateDiscountedPrice = (originalPrice, discountPercent) => {
    if (
      typeof originalPrice !== "number" ||
      typeof discountPercent !== "number"
    ) {
      console.error("originalPrice and discountPercent must be numbers.");
      return null;
    }
    const discountAmount = (originalPrice * discountPercent) / 100;
    return (originalPrice - discountAmount).toFixed(3);
  };

  //Xoa san pham
  const handleDelete1 = (index) => {
    const updatedProducts = popularPrd.filter((_, i) => i !== index);
    setPopularPrd(updatedProducts);
  };
  const handleDelete2 = (index) => {
    const updatedProducts = rcmPrd.filter((_, i) => i !== index);
    setRcmPrd(updatedProducts);
  };

  //Edit Popular Prd
  const [openModal1, setOpenModal1] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const [openModal3, setOpenModal3] = useState(false);
  const [openModal4, setOpenModal4] = useState(false);
  const [openModal5, setOpenModal5] = useState(false);
  const [openModal6, setOpenModal6] = useState(false);

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
      alert("Add new product to popular list successfully!");
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

    setPopularPrd([...popularPrd, newItem]);
  };

  const [ID, setID] = useState("");
  const [Name, setName] = useState("");
  const [Category, setCategory] = useState("");
  const [BasisPrice, setBasisPrice] = useState("");
  const [SalePrice, setSalePrice] = useState("");
  const [Discount, setDiscount] = useState("");
  const [Description, setDescription] = useState("");

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
    const updatedProducts = [...popularPrd];
    updatedProducts[editIndex] = {
      id: ID2,
      name: Name2,
      image: img,
      categoryName: Category2,
      originalPrice: parsedPrice4,
      discountPercent: parsedPrice6,
      description: Description2,
    };
    setPopularPrd(updatedProducts);
    setOpenModal2(false);
  };

  //Edit Rcm Prd
  const AddItem2 = async () => {
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
      alert("Add new product to recommendation list successfully!");
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

    setRcmPrd([...rcmPrd, newItem]);
  };

  const openEditModal2 = (index) => {
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
    setOpenModal4(true);
  };

  const updatedProducts2 = async () => {
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
    const updatedProducts = [...rcmPrd];
    updatedProducts[editIndex] = {
      id: ID2,
      name: Name2,
      image: img,
      categoryName: Category2,
      originalPrice: parsedPrice4,
      discountPercent: parsedPrice6,
      description: Description2,
    };
    setRcmPrd(updatedProducts);
    setOpenModal4(false);
  };

  //Edit Category
  const AddCategory = async () => {
    const img = await handleUpload();
    console.log(img);
    if (!ID3 || !Namee || !img) {
      alert("Please fill in all fields");
      return;
    } else {
      alert("Add new category successfully !");
    }

    const newItem = {
      ID: ID3,
      name: Namee,
      image: img,
      quantity: Quantity,
    };

    setCategories([...categories, newItem]);
  };

  const [ID3, setID3] = useState("");
  const [Namee, setNamee] = useState("");
  const [Quantity, setQuantity] = useState("");

  const [ID4, setID4] = useState("");
  const [Nameee, setNameee] = useState("");
  const [Quantity2, setQuantity2] = useState("");

  const [editInfo2, setEditInfo2] = useState({
    ID4: "",
    Name4: "",
    Quantity4: "",
  });

  const openEditModall = (index) => {
    setEditIndex(index);
    const { ID4, Nameee, Quantity2 } = categories[index];
    setID(ID4);
    setName(Nameee);
    setQuantity2(Quantity2);
    setOpenModal6(true);
  };

  const updatedCategory = async () => {
    const img = await handleUpload();
    if (!ID4 || !Nameee || !img) {
      alert("Please fill in all fields");
      return;
    } else {
      alert("Update category successfully !");
    }

    const updatedCategory = [...categories];
    updatedCategory[editIndex] = {
      ID: ID4,
      name: Nameee,
      image: img,
      quantity: Quantity2,
    };
    setCategories(updatedCategory);
    setOpenModal6(false);
  };

  const handleDelete = (index) => {
    const updatedcategories = categories.filter((_, i) => i !== index);
    setCategories(updatedcategories);
  };
  return (
    <div>
      <div className="max-w-[1200px] mx-auto pb-2">
        <div className="w-full flex justify-between items-center">
          <div className="flex">
            <HiHome className="w-[25px] h-[25px] mb-[20px] mr-[10px]" />
            <NavLink to="/homee">
              <p className="font-inter font-bold text-[20px] mb-[20px] mr-[10px]">
                {" "}
                Home{" "}
              </p>
            </NavLink>

            <GrNext className="w-[15px] h-[15px] mt-[10px] mr-[10px]" />
            <NavLink to="/shoppp">
              <p className="font-inter font-bold text-[20px] mb-[20px]">
                {" "}
                Shop
              </p>
            </NavLink>
          </div>
        </div>

        <div className="w-full flex justify-between items-center mt-[-50px] mb-[-40px]">
          <Carousel
            className="w-[750px] h-56 sm:h-64 xl:h-80 2xl:h-96"
            leftControl=" "
            rightControl=" "
          >
            <img src={require(`../../assets/image/aboutus/5.jpeg`)} alt="..." />
            <img src={require(`../../assets/image/aboutus/6.jpeg`)} alt="..." />
            <img src={require(`../../assets/image/aboutus/7.png`)} alt="..." />
            <img src={require(`../../assets/image/aboutus/8.png`)} alt="..." />
            <img src={require(`../../assets/image/aboutus/9.png`)} alt="..." />
          </Carousel>
          <div className="w-[420px] h-[285px] bg-[#FEFFFF] shadow-lg">
            <p className="text-center font-sans text-[20px] font-bold text-gray-900 mt-[22px]">
              {" "}
              We welcome you to Burger N' Beer{" "}
            </p>
            <div className=" flex font-sans text-[18px] font-semibold text-gray-900 ml-[40px]">
              <FaShop className="mr-[7px] mt-[25px]" />
              <p className="mt-[20px]"> 31 An Thuong 4, Da Nang</p>
            </div>
            <div className=" flex font-sans text-[18px] font-semibold text-gray-900 ml-[40px]">
              <IoTime className="mr-[7px] mt-[15px]" />
              <p
                className="mt-[10px]"
                style={{ color: isOpen ? "green" : "red" }}
              >
                {isOpen ? "Opened: 07:00 - 22:30" : "Closed: 07:00 - 22:30"}
              </p>
            </div>
            <div className=" flex font-sans text-[18px] font-semibold text-gray-900 ml-[40px]">
              <FaPhoneVolume className="mr-[7px] mt-[15px]" />
              <p className="mt-[10px]"> (+84) 564751400</p>
            </div>
            <p className=" w-[400px] ml-[10px] mt-[20px] font-sans text-[15px] font-light italic text-gray-900 text-center">
              “People have a hard time letting go of their suffering. Out of a
              fear of the unknown, they prefer suffering that is familiar.”
            </p>
            <p className=" w-[400px] ml-[10px] mt-[5px] font-sans text-[15px] font-light text-gray-900 text-center">
              ___Thich Nhat Hanh___
            </p>
          </div>
        </div>

        <div className="w-[1200px] mx-auto flex justify-between items-center mt-[15px]">
          <p className="font-sans font-bold text-[20px] "> MENU</p>
          <IoIosAddCircle
            className="w-[40px] h-[40px] "
            color="dark"
            onClick={() => setOpenModal5(true)}
          />
        </div>
        <Modal
          show={openModal5}
          onClose={() => setOpenModal5(false)}
          className="no-scrollbar"
        >
          <Modal.Header className="h-[50px] pt-[10px]">
            Add New Category
          </Modal.Header>
          <Modal.Body className="no-scrollbar">
            <div className="w-full mx-auto justify-between items-center">
              <div className="w-[95%]">
                <div className="max-w">
                  <div className="mb-2 block">
                    <Label
                      htmlFor="email"
                      value="Category ID"
                      className="font-sans font-medium text-[15px] text-black"
                    />
                  </div>
                  <TextInput
                    onChange={(e) => {
                      setID3(e.target.value);
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
                      value="Category Name"
                      className="font-sans font-medium text-[15px] text-black"
                    />
                  </div>
                  <TextInput
                    onChange={(e) => {
                      setNamee(e.target.value);
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
                      value="Category Image"
                      className="font-sans font-medium text-[15px] text-black"
                    />
                  </div>

                  <input
                    type="file"
                    className="file-input file-input-bordered w-full"
                    multiple
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button
              onClick={() => {
                setOpenModal5(false);
                AddCategory();
              }}
              color="dark"
            >
              Accept
            </Button>
            <Button color="gray" onClick={() => setOpenModal5(false)}>
              Decline
            </Button>
          </Modal.Footer>
        </Modal>
        <div className="w-full mx-auto h-full flex justify-center items-center py-4">
          <div className="max-w-[1200px] no-scrollbar grid grid-cols-8 items-center justify-center gap-8">
            {categories?.map((item, index) => (
              <div className="flex items-center justify-center" key={index}>
                <NavLink to="/productt_manage">
                  <button
                    className="font-inter font-bold text-center text-[18px] hover:text-red-500 transition-all"
                    onClick={() => handleCategorySelect(item.ID)}
                  >
                    <div className="card card-compact w-[122px]  bg-base-100 shadow-xl">
                      <figure>
                        {parseInt(item.ID) > 8 ? (
                          <div>
                            <img
                              className="w-[122px] h-[122px] self-center"
                              style={{ borderRadius: "px" }}
                              src={item.image}
                              alt={item.name}
                            />
                          </div>
                        ) : (
                          <div>
                            <img
                              className="w-[122px] h-[122px] self-center"
                              style={{ borderRadius: "0px" }}
                              src={require(`../../assets/image/category/${item.image}`)}
                              alt={item.name}
                            />
                          </div>
                        )}
                      </figure>
                      <div className="card-body">
                        <h2 className="font-inter font-bold text-center text-[20px] hover:text-red-500 transition-all">
                          {item.name}
                        </h2>
                      </div>
                      <div
                        onClick={(e) => e.stopPropagation()}
                        style={{ borderRadius: "15px" }}
                        className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity"
                      >
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setOpenModal6(true);
                            openEditModall(index);
                          }}
                        >
                          <div className="w-[40px] h-[40px] rounded-full bg-white shadow-md justify-center items-center mr-[15px] ml-[5px]">
                            <FaPen className="w-[30px] h-[30px] text-gray-700 ml-[5px] pt-[10px]" />
                          </div>
                        </button>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            handleDelete(index);
                          }}
                        >
                          <div className="w-[40px] h-[40px] rounded-full bg-white shadow-md justify-center items-center">
                            <AiFillDelete className="w-[37px] h-[37px] text-gray-700 ml-[2px] pt-[5px]" />
                          </div>
                        </button>
                      </div>
                    </div>
                  </button>
                </NavLink>
              </div>
            ))}
          </div>
        </div>
        <Modal
          show={openModal6}
          onClose={() => setOpenModal6(false)}
          className="no-scrollbar"
        >
          <Modal.Header className="h-[50px] pt-[10px]">
            Edit Category
          </Modal.Header>
          <Modal.Body className="no-scrollbar">
            <div className="w-full mx-auto justify-between items-center">
              <div className="w-[95%]">
                <div className="max-w">
                  <div className="mb-2 block">
                    <Label
                      htmlFor="email"
                      value="Category ID"
                      className="font-sans font-medium text-[15px] text-black"
                    />
                  </div>
                  <TextInput
                    onChange={(e) => {
                      setID4(e.target.value);
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
                      value="Category Name"
                      className="font-sans font-medium text-[15px] text-black"
                    />
                  </div>
                  <TextInput
                    onChange={(e) => {
                      setNameee(e.target.value);
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
                      value="Category Image"
                      className="font-sans font-medium text-[15px] text-black"
                    />
                  </div>

                  <input
                    type="file"
                    className="file-input file-input-bordered w-full"
                    multiple
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer className="">
            <Button
              onClick={() => {
                updatedCategory();
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
              onClick={() => setOpenModal6(false)}
            >
              <p className="font-sans font-semibold text-[15px] text-gray-900">
                Decline
              </p>
            </Button>
          </Modal.Footer>
        </Modal>

        {/* Popular */}
        <div className="w-[1200px] mx-auto flex justify-between items-center mt-[15px]">
          <p className="font-sans font-bold text-[20px] "> POPULAR</p>
          <IoIosAddCircle
            className="w-[40px] h-[40px] "
            color="dark"
            onClick={() => setOpenModal1(true)}
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

        <div className="max-w-[1200px] no-scrollbar mx-auto h-full flex justify-center items-center py-4">
          <div className="max-w-[1200px] no-scrollbar grid grid-cols-5 items-center justify-center gap-8">
            {popularPrd.map((product, index) => (
              <div
                className="card w-[213px] h-[350px] bg-base-100 shadow-xl"
                key={index}
              >
                <figure className="">
                  <NavLink to={`/productttt/${product.id}`}>
                    <p className="font-sans font-normal text-[12px] text-green-500">
                      Recommended
                    </p>
                    {parseInt(product.id) > 69 ? (
                      <div>
                        <img
                          className="w-[150px] h-[150px] self-center"
                          style={{ borderRadius: "px" }}
                          src={product.image}
                          alt={product.name}
                        />
                      </div>
                    ) : (
                      <div>
                        <img
                          className="w-[150px] h-[150px] self-center"
                          style={{ borderRadius: "px" }}
                          src={require(`../../assets/image/Burger/${product?.image}`)}
                          alt={product?.name}
                        />
                      </div>
                    )}
                  </NavLink>
                </figure>
                <div className=" mt-[-20px] card-body items-center text-center">
                  <h2 className="font-sans text-[17px] font-semibold text-center">
                    {product.name}
                  </h2>
                  <div className="w-[150px] mt-[-3px]">
                    <div className="flex justify-between items-center">
                      <button>
                        <div className="w-[50px] h-[50px] rounded-full bg-white shadow-md justify-center items-center mr-[30px] ml-[10px]">
                          <FaPen
                            className="w-[38px] h-[38px] text-gray-700 ml-[7px] pt-[15px]"
                            onClick={() => {
                              setOpenModal2(true);
                              openEditModal(index);
                            }}
                          />
                        </div>
                      </button>
                      <button onClick={() => handleDelete1(index)}>
                        <div className="w-[50px] h-[50px] rounded-full bg-white shadow-md justify-center items-center">
                          <AiFillDelete className="w-[42px] h-[42px] text-gray-700 ml-[4px] pt-[12px]" />
                        </div>
                      </button>
                    </div>
                    <div className="w-[160px] font-sans font-medium text-[17px] justify-center text-center mb-[-20px]">
                      <p className=" mt-[15px] text-center line-through text-[#707070]">
                        {product.originalPrice.toFixed(3)} VND{" "}
                      </p>
                      <div className="mt-[5px] flex justify-center text-center">
                        <p
                          style={{
                            color: "#F00E0E",
                            fontFamily: '"Inter", sans-serif',
                            fontSize: "17px",
                            fontWeight: "600",
                            marginRight: "15px",
                          }}
                        >
                          {product.discountPercent}%
                        </p>
                        <p
                          style={{
                            color: "#000000",
                            fontFamily: '"Inter", sans-serif',
                            fontSize: "17px",
                            fontWeight: "600",
                          }}
                        >
                          {calculateDiscountedPrice(
                            product.originalPrice,
                            product.discountPercent
                          )}{" "}
                          VND
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-[1200px] mx-auto flex justify-between items-center mt-[15px]">
          <p className="font-sans font-bold text-[20px] mt-[15px]">
            {" "}
            RECOMMENDATION
          </p>
          <IoIosAddCircle
            className="w-[40px] h-[40px] "
            color="dark"
            onClick={() => setOpenModal3(true)}
          />
        </div>

        <Modal
          show={openModal3}
          onClose={() => setOpenModal3(false)}
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
                setOpenModal3(false);
                AddItem2();
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
        <div className="max-w-[1200px] no-scrollbar mx-auto h-full flex justify-center items-center py-4">
          <div className="max-w-[1200px] no-scrollbar grid grid-cols-5 items-center justify-center gap-8">
            {rcmPrd.map((product, index) => (
              <div
                className="card w-[213px] h-[350px] bg-base-100 shadow-xl"
                key={index}
              >
                <figure className="">
                  <NavLink to={`/productttt/${product.id}`}>
                    <p className="font-sans font-normal text-[12px] text-green-500">
                      New
                    </p>

                    {parseInt(product.id) > 69 ? (
                      <div>
                        <img
                          className="w-[150px] h-[150px] self-center"
                          style={{ borderRadius: "px" }}
                          src={product.image}
                          alt={product.name}
                        />
                      </div>
                    ) : (
                      <div>
                        <img
                          className="w-[150px] h-[150px] self-center"
                          style={{ borderRadius: "px" }}
                          src={require(`../../assets/image/Burger/${product.image}`)}
                          alt={product.name}
                        />
                      </div>
                    )}
                  </NavLink>
                </figure>
                <div className=" mt-[-20px] card-body items-center text-center">
                  <h2 className="font-sans w-[180px] text-[17px] font-semibold text-center">
                    {product.name}
                  </h2>
                  <div className="w-[150px] mt-[-3px]">
                    <div className="flex justify-between items-center">
                      <button>
                        <div className="w-[50px] h-[50px] rounded-full bg-white shadow-md justify-center items-center mr-[30px] ml-[10px]">
                          <FaPen
                            className="w-[38px] h-[38px] text-gray-700 ml-[7px] pt-[15px]"
                            onClick={() => {
                              setOpenModal2(true);
                              openEditModal2(index);
                            }}
                          />
                        </div>
                      </button>
                      <button onClick={() => handleDelete2(index)}>
                        <div className="w-[50px] h-[50px] rounded-full bg-white shadow-md justify-center items-center">
                          <AiFillDelete className="w-[42px] h-[42px] text-gray-700 ml-[4px] pt-[12px]" />
                        </div>
                      </button>
                    </div>
                    <div className="w-[160px] font-sans font-medium text-[17px] justify-center text-center mb-[-20px]">
                      <p className=" mt-[15px] text-center line-through text-[#707070]">
                        {product.originalPrice.toFixed(3)} VND{" "}
                      </p>
                      <div className="mt-[5px] flex justify-center text-center">
                        <p
                          style={{
                            color: "#F00E0E",
                            fontFamily: '"Inter", sans-serif',
                            fontSize: "17px",
                            fontWeight: "600",
                            marginRight: "15px",
                          }}
                        >
                          {product.discountPercent}%
                        </p>
                        <p
                          style={{
                            color: "#000000",
                            fontFamily: '"Inter", sans-serif',
                            fontSize: "17px",
                            fontWeight: "600",
                          }}
                        >
                          {calculateDiscountedPrice(
                            product.originalPrice,
                            product.discountPercent
                          )}{" "}
                          VND
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

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

      <Modal
        show={openModal4}
        onClose={() => setOpenModal4(false)}
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
              updatedProducts2();
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
            onClick={() => setOpenModal4(false)}
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
