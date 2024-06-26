import React, { useState, useEffect } from "react";
import { Table, Button, Modal, Label, TextInput, Pagination } from "flowbite-react";
import { Link } from "react-router-dom";
import { AiFillHome, AiFillDelete } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { MdCategory } from "react-icons/md";
import { IoReorderFour, IoChevronBackCircle } from "react-icons/io5";
import { HiTemplate } from "react-icons/hi";
import { BiSolidDiscount } from "react-icons/bi";
import prdData from "../../../data/product.json";
import { FaPen } from "react-icons/fa6";
import {
  ref,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";
import { storage } from "../../../config/firebase.config";
import { v4 } from "uuid";
import categoryData from "../../../data/category.json";
import { useParams } from "react-router-dom";

export function CategoryDetail() {
  const [categories, setCategories] = useState([categoryData]);
  const [originalPrd, setOriginalPrd] = useState([]);
  const [products, setProducts] = useState([]);
  const { categoryID } = useParams();

  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(7);

  const [openModal1, setOpenModal1] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);

   useEffect(() => {
    const filteredProducts = prdData.filter(
      (product) => product.categoryId === parseInt(categoryID)
    );
    setProducts(filteredProducts);
    setOriginalPrd(filteredProducts);
    setCategories(categoryData)
  }, [categoryID]);

  const handleDelete = (index) => {
    const updatedProducts = products.filter((_, i) => i !== index);
    setProducts(updatedProducts);
  };
useEffect(() => {
    const totalPrd = originalPrd.length;
    const pages = Math.ceil(totalPrd / itemsPerPage);
    setTotalPages(pages);
  }, [itemsPerPage, originalPrd]);
  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const displayedProducts = originalPrd.slice(startIndex, endIndex);
    setProducts(displayedProducts);
  }, [currentPage, itemsPerPage, originalPrd]);
 



  const [imageUploads, setImageUploads] = useState()
  const [imageUrl, setImageUrl] = useState()


  const uploadFile = async () => {
    try {
      const imageId = v4();
      const imageRef = ref(storage, `/Blog2/${imageId}`);
      const snapshot = await uploadBytes(imageRef, imageUploads);
      const url = await getDownloadURL(snapshot.ref);
      return url;
    } catch (error) {
      console.error('Error uploading file:', error);
      throw error;
    }
  };

  const handleChange = e => {
    const file = e.target.files[0];
    setImageUploads(file);
  };

  const handleUpload = async () => {
    try {
      const url = await uploadFile();
      setImageUrl(url)
      return url
    } catch (error) {
      console.error('Error uploading file to Firebase:', error);
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

    if (isNaN(parsedPrice1) || isNaN(parsedPrice2)) {
      alert("Please enter valid prices");
      return;
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



  return (
    <div className="max-w-[1200px] mx-auto bg-[#FFDADA] mt-[-10px]">
      <div className="w-full h-[850px] flex mb-[20px]">
        <div className="w-[200px] h-full bg-[#FFFFFF] drop-shadow-lg justify-center items-center">
          <img
            className="w-[100px] h-[100px] ml-[55px] mt-[15px]"
            src={require(`../../../page/Home/lgburger.jpg`)}
            alt=""
          />
          <p className="font-sans font-black text-[20px] text-gray-900 text-center">
            BURGER N' BEER
          </p>
          <Link to="/corporate_account">
            <Button className="w-full h-[70px] flex rounded-none bg-[#FFFFFF] mt-[30px] drop-shadow">
              <AiFillHome className="w-[25px] h-[25px] text-gray-900 mr-[7px] mt-[10px]" />
              <p className="font-sans font-extrabold text-[17px] text-gray-900 mt-[13px]">
                DASHBOARD
              </p>
            </Button>
          </Link>
          <Link to="/user_manage">
            <Button className="w-full h-[70px] flex rounded-none bg-[#FFFFFF] mt-[20px] drop-shadow">
              <FaUserAlt className="w-[20px] h-[20px] text-gray-900 mr-[7px] mt-[10px]" />
              <p className="font-sans font-extrabold text-[17px] text-gray-900 mt-[13px]">
                USER MANAGE
              </p>
            </Button>
          </Link>
          <Link to="/category_manage">
            <Button className="w-full h-[70px] flex rounded-none bg-[#FFC0C0] mt-[20px] drop-shadow">
              <MdCategory className="w-[25px] h-[25px] text-gray-900 mr-[7px] mt-[10px]" />
              <p className="font-sans font-extrabold text-[17px] text-gray-900 mt-[13px]">
                CATEGORY
              </p>
            </Button>
          </Link>
          <Link to="/item_list">
            <Button className="w-full h-[70px] flex rounded-none bg-[#FFFFFF] mt-[20px] drop-shadow">
              <HiTemplate className="w-[25px] h-[25px] text-gray-900 mr-[7px] mt-[10px]" />
              <p className="font-sans font-extrabold text-[17px] text-gray-900 mt-[13px]">
                PRODUCT
              </p>
            </Button>
          </Link>
          <Link to="/voucher_manage">
            <Button className="w-full h-[70px] flex rounded-none bg-[#FFFFFF] mt-[20px] drop-shadow">
              <BiSolidDiscount className="w-[25px] h-[25px] text-gray-900 mr-[7px] mt-[10px]" />
              <p className="font-sans font-extrabold text-[17px] text-gray-900 mt-[13px]">
                VOUCHER
              </p>
            </Button>
          </Link>
          <Link to="/order_manage">
            <Button className="w-full h-[70px] flex rounded-none bg-[#FFFFFF] mt-[20px] drop-shadow">
              <IoReorderFour className="w-[25px] h-[25px] text-gray-900 mr-[7px] mt-[10px]" />
              <p className="font-sans font-extrabold text-[17px] text-gray-900 mt-[13px]">
                ORDER
              </p>
            </Button>
          </Link>
        </div>
        <div className="w-[1000px] no-scrollbar justify-center items-center">
          <div className="w-full flex justify-between items-center mb-[15px]">
            <Link to="/category_manage">
            <IoChevronBackCircle className="w-[25px] h-[25px] text-gray-700 ml-[25px] mt-[15px]"/>
            </Link>
            <p className="font-sans font-black text-[20px] text-gray-900 ml-[150px] mt-[15px]">
              PRODUCT LIST
            </p>
            <Button
              onClick={() => setOpenModal1(true)}
              className="mt-[10px] mr-[25px] rounded-none"
              color="dark"
            >
              <p className="font-sans font-bold text-[15px] text-white">
                ADD NEW PRODUCT
              </p>
            </Button>
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
                        onChange={(e) => { setID(e.target.value) }}
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
                        onChange={(e) => { setName(e.target.value) }}
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
                        onChange={(e) => { setCategory(e.target.value) }}
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

                      <input type="file"
                        className="file-input file-input-bordered w-full max-w-xs"
                        multiple
                        onChange={handleChange} />
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
                        onChange={(e) => { setBasisPrice(e.target.value) }}
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
                        onChange={(e) => { setDiscount(e.target.value) }}
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
                        onChange={(e) => { setSalePrice(e.target.value) }}
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
                        onChange={(e) => { setDescription(e.target.value) }}
                        id="email"
                        type="email"
                        required
                      />
                    </div>
                  </div>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={() => { setOpenModal1(false); AddItem() }} color="dark">I accept</Button>
                <Button color="gray" onClick={() => setOpenModal1(false)}>
                  Decline
                </Button>
              </Modal.Footer>
            </Modal>
          </div>

          

          <div className="w-[950px] h-[760px] bg-[#FFFFFF] drop-shadow-lg ml-[25px] no-scrollbar">
            <div className="w-full overflow-x-auto no-scrollbar">
              <Table hoverable>
                <Table.Head>
                  <Table.HeadCell className="font-sans text-semibold text-[17px] text-center">
                    ID
                  </Table.HeadCell>
                  <Table.HeadCell className="font-sans text-semibold text-[17px] ">
                    Product
                  </Table.HeadCell>
                  <Table.HeadCell className="font-sans text-semibold text-[17px] text-center">
                    Category
                  </Table.HeadCell>
                  <Table.HeadCell className="font-sans text-semibold text-[17px] text-center">
                    Basis_Price
                  </Table.HeadCell>
                  <Table.HeadCell className="font-sans text-semibold text-[17px] text-center">
                    Discount
                  </Table.HeadCell>
                  <Table.HeadCell className="font-sans text-semibold text-[17px] text-center">
                    Sale_Price
                  </Table.HeadCell>
                  <Table.HeadCell className="font-sans text-semibold text-[17px] text-center">
                    EDIT
                  </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                  {products.map((product, index) => (
                    <Table.Row
                      key={index}
                      className="bg-white dark:border-gray-700 dark:bg-gray-800"
                    >
                      <Table.Cell>
                        <p className="font-sans font-medium text-[17px] text-gray-900 dark:text-white text-center">
                          {product.id}
                        </p>
                      </Table.Cell>
                      <Table.Cell className="flex items-center w-[295px]">
                        <div className="flex items-center">
                          {parseInt(product.id) > 69 ? (
                            <div>
                              <img
                                className="w-[50px] h-[50px] self-center mr-[10px]"
                                style={{ borderRadius: "10px" }}
                                src={product.image}
                                alt={product.name}
                              />
                            </div>
                          ) : (
                            <div>
                              <img
                                className="w-[50px] h-[50px] self-center mr-[10px]"
                                style={{ borderRadius: "10px" }}
                                src={require(`../../../assets/image/Burger/${product.image}`)}
                                alt={product.name}
                              />
                            </div>
                          )}

                          <p className="font-sans font-medium text-[17px] text-gray-900 dark:text-white">
                            {" "}
                            {product.name}{" "}
                          </p></div>
                      </Table.Cell>
                      <Table.Cell>
                        <p className="font-sans font-medium text-[17px] text-gray-900 text-center">
                          {product.categoryName}
                        </p>
                      </Table.Cell>

                      <Table.Cell>
                        <p className="font-sans font-medium text-[17px] text-gray-900 text-center">
                          {product.originalPrice.toFixed(2)}$
                        </p>
                      </Table.Cell>
                      <Table.Cell>
                        <div className="flex justify-center items-center">
                          <p className="font-sans font-medium text-[17px] text-gray-900 text-center">
                            {product.discountPercent}%
                          </p>
                        </div>
                      </Table.Cell>
                      <Table.Cell className="font-sans font-medium text-[17px] text-center">
                        <p className=" text-gray-900">
                          {(
                            (product.originalPrice *
                              (100 - product.discountPercent)) /
                            100
                          ).toFixed(2)}
                          $
                        </p>
                      </Table.Cell>
                      <Table.Cell className="flex ">
                        <Button
                          onClick={() => setOpenModal2(true)}
                          className="w-[20px] text-gray-900 border-transparent hover-text-red mr-[20px]"
                          color="light"
                        >
                          <FaPen className="w-[17px] h-[17px]" />
                        </Button>
                        <Modal
                          show={openModal2}
                          onClose={() => setOpenModal2(false)}
                          className="no-scrollbar"
                        >
                          <Modal.Header className="h-[50px] pt-[10px]">
                            Edit Product
                          </Modal.Header>

                          <Modal.Body className="no-scrollbar">
                            <editItem />
                          </Modal.Body>
                        </Modal>
                        <Button
                          onClick={() => handleDelete(index)}
                          className="w-[20px] text-gray-900 border-transparent hover-text-red"
                          color="light"
                        >
                          <AiFillDelete className="w-[20px] h-[20px]" />
                        </Button>
                      </Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table>
            </div>
            <div className="flex overflow-x-auto sm:justify-center mt-[-7px]">
              <Pagination
                totalPages={totalPages}
                currentPage={currentPage}
                onPageChange={setCurrentPage}
                showIcons
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
