import React, { useState, useEffect } from "react";
import { Checkbox, Table, Button, Modal, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
import { AiFillHome, AiFillDelete } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { MdCategory } from "react-icons/md";
import { IoAddCircle, IoReorderFour } from "react-icons/io5";
import { HiTemplate } from "react-icons/hi";
import { BiSolidDiscount } from "react-icons/bi";
import categoryData from "../../data/category.json";
import { Pagination } from "flowbite-react";
import { FaPen } from "react-icons/fa6";
import {
  ref,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";
import { storage } from "../../config/firebase.config";
import { v4 } from "uuid";


const Categoryy = () => {
  const [categorys, setCategorys] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const [openModal1, setOpenModal1] = useState(false);

  useEffect(() => {
    setCategorys(categoryData);
  }, []);
  
  const handleDelete = (index) => {
    const updatedcategorys = categorys.filter((_, i) => i !== index);
    setCategorys(updatedcategorys);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const totalcategorys = categoryData.length;
        const itemsPerPage = 7;
        const pages = Math.ceil(totalcategorys / itemsPerPage);
        setTotalPages(pages);
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = Math.min(startIndex + itemsPerPage, totalcategorys);
        const categorysForPage = categoryData.slice(startIndex, endIndex);
        setCategorys(categorysForPage);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [currentPage]);


  const [imageUrl, setImageUrl] = useState();
  const [imageUploads, setImageUploads] = useState(null);


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

  const AddCategory = async () => {
    const img = await handleUpload();
    console.log(img);
    if (
      !ID ||
      !Name ||
      !img ||
      !Quantity
    ) {
      alert("Please fill in all fields");
      return;
    }

    const newItem = {
      ID: ID,
      name: Name,
      image: img,
      quantity: Quantity,
    };

    setCategorys([...categorys, newItem]);
  };


  const [ID, setID] = useState("");
  const [Name, setName] = useState("");
  const [Quantity, setQuantity] = useState("");

  return (
   <div className="max-w-[1200px] mx-auto bg-[#FFDADA] mt-[-10px]">
      <div className="w-full h-[850px] flex mb-[20px]">
        <div className="w-[200px] h-full bg-[#FFFFFF] drop-shadow-lg justify-center items-center">
          <img
            className="w-[100px] h-[100px] ml-[55px] mt-[15px]"
            src={require(`../../page/Home/lgburger.jpg`)}
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
          <div className="w-full flex justify-between items-center">
            <p className="font-sans font-black text-[20px] text-gray-900 ml-[350px] mt-[10px]">
            CATEGORY MANAGE
          </p>
          <Button  onClick={() => setOpenModal1(true)}
          className="mt-[10px] mr-[25px] rounded-none"
          color="dark">
            <p className="font-sans font-bold text-[15px] text-white">ADD NEW CATEGORY</p>
          </Button>

          <Modal
              show={openModal1}
              onClose={() => setOpenModal1(false)}
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
                          value="Category Name"
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
                          value="Quantity Products"
                          className="font-sans font-medium text-[15px] text-black"
                        />
                      </div>
                      <TextInput
                        onChange={(e) => { setQuantity(e.target.value) }}
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

                      <input type="file"
                        className="file-input file-input-bordered w-full"
                        multiple
                        onChange={handleChange} />
                    </div>
                  </div>
                  
                  </div>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={() => { setOpenModal1(false); AddCategory() }} color="dark">I accept</Button>
                <Button color="gray" onClick={() => setOpenModal1(false)}>
                  Decline
                </Button>
              </Modal.Footer>
            </Modal>


          </div>
          <div className="w-[950px] h-[780px] bg-[#FFFFFF] drop-shadow-lg ml-[25px] mt-[10px] no-scrollbar">

            <div className="w-full overflow-x-auto">
              <Table hoverable>
                <Table.Head>
                  <Table.HeadCell className="font-sans text-semibold text-[17px] text-center">
                    ID
                  </Table.HeadCell>
                  <Table.HeadCell className="font-sans text-semibold text-[17px] ">
                    Category
                  </Table.HeadCell>
                 
                  <Table.HeadCell className="font-sans text-semibold text-[17px] text-center">
                    QUANTITY
                  </Table.HeadCell>
                  <Table.HeadCell className="font-sans text-semibold text-[17px] text-center">
                   EDIT
                  </Table.HeadCell>
                </Table.Head>
               
                <Table.Body className="divide-y">
                  
                  {categorys.map((category, index) => (
                    
                    <Table.Row
                      key={index}
                      className="bg-white dark:border-gray-700 dark:bg-gray-800"
                    >
                      <Table.Cell className="p-4">
                        <p className="whitespace-nowrap font-sans font-medium text-[17px] text-gray-900 dark:text-white text-center">{category.ID}</p>
                      </Table.Cell>
                      <Table.Cell className="flex items-center w-[250px]">

                        {parseInt(category.ID) > 8 ? (
                            <div>
                              <img
                                className="w-[50px] h-[50px] self-center mr-[10px]"
                                style={{ borderRadius: "10px" }}
                                src={category.image}
                                alt={category.name}
                              />
                            </div>
                          ) : (
                            <div>
                              <img
                                className="w-[50px] h-[50px] self-center mr-[10px]"
                                style={{ borderRadius: "10px" }}
                                src={require(`../../assets/image/category/${category.image}`)}
                                alt={category.name}
                              />
                            </div>
                          )}
                   
                        <p className="whitespace-nowrap font-sans font-medium text-[17px] text-gray-900 dark:text-white">
                          {" "}
                          {category.name}{" "}
                        </p>
                      </Table.Cell>
                      <Table.Cell className="font-sans font-medium text-[17px] text-center">
                         <Link to ={`/category_manage/${category.ID}`}>
                        <p className=" text-gray-900">
                          {category.quantity}
                        </p>
                        </Link>
                      </Table.Cell>
                      <Table.Cell className="flex justify-center items-center">
                        <Button
                          className="w-[20px] text-gray-900 border-transparent hover-text-red mr-[20px]" 
                          color="light"
                        >
                          <FaPen className="w-[17px] h-[17px]"/>
                        </Button>
                        <Button
                          onClick={() => handleDelete(index)}
                          className="w-[20px] text-gray-900 border-transparent hover-text-red"
                          color="light"
                        >
                          <AiFillDelete className="w-[20px] h-[20px]"/>
                        </Button>
                      </Table.Cell>
                    </Table.Row>
                  ))}
                  
                </Table.Body>
               
              </Table>
            </div>
            <div className="flex overflow-x-auto sm:justify-center ">
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
  )
}

export default Categoryy
