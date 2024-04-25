import React, { useState, useEffect } from "react";
import { Checkbox, Table, Button, Modal } from "flowbite-react";
import wishlistData from "../../data/wishlist.json";
import { HiShoppingCart } from "react-icons/hi";
import { Link } from "react-router-dom";
import { Pagination } from "flowbite-react";

const Wishlist = () => {
  const [products, setProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [openModal, setOpenModal] = useState(false);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setProducts(wishlistData);
  }, []);

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleDelete = (index) => {
    const updatedProducts = products.filter((_, i) => i !== index);
    setProducts(updatedProducts);
  };

   useEffect(() => {
    const fetchData = async () => {
      try {
        const totalProducts = wishlistData.length;
        const itemsPerPage = 5;
        const pages = Math.ceil(totalProducts / itemsPerPage);
        setTotalPages(pages);
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = Math.min(startIndex + itemsPerPage, totalProducts);
        const productsForPage = wishlistData.slice(startIndex, endIndex);
        setProducts(productsForPage);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [currentPage]);
  
  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="w-full mt-[10px] mb-[20px] bg-[#FFFEFE] shadow-md rounded-lg">
        <div className="w-[90%] border-b border-zinc-400 ml-[60px]">
          <p className="font-sans font-extrabold text-2xl text-black pb-[20px] text-center">
            WISH LIST
          </p>
        </div>
        <div className="w-[90%] mx-auto pb-[20px] ">
          <div className="overflow-x-auto">
            <Table hoverable>
              <Table.Head>
                <Table.HeadCell className="p-4">
                  <Checkbox />
                </Table.HeadCell>
                <Table.HeadCell className="font-sans text-semibold text-[17px] ">
                  PRODUCT
                </Table.HeadCell>
                <Table.HeadCell className="font-sans text-semibold text-[17px] text-center">
                  UNIT PRICE
                </Table.HeadCell>
                <Table.HeadCell className="font-sans text-semibold text-[17px] text-center">
                  QUANTITY
                </Table.HeadCell>
                <Table.HeadCell className="font-sans text-semibold text-[17px] text-center">
                  PRICE
                </Table.HeadCell>
                <Table.HeadCell>
                  <span className="sr-only">Edit</span>
                </Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
                {products.map((product, index) => (
                  <Table.Row
                    key={index}
                    className="bg-white dark:border-gray-700 dark:bg-gray-800"
                  >
                    <Table.Cell className="p-4">
                      <Checkbox />
                    </Table.Cell>
                    <Table.Cell className="flex items-center w-[250px]">
                      <img
                        className="w-[50px] h-[50px] self-center mr-[10px]"
                        style={{ borderRadius: "10px" }}
                        src={require(`../../assets/image/Burger/${product.image}`)}
                        alt={product.name}
                      />
                      <p className="whitespace-nowrap font-sans font-medium text-[15px] text-gray-900 dark:text-white">
                        {" "}
                        {product.name}{" "}
                      </p>
                    </Table.Cell>
                    <Table.Cell>
                      <div className="flex justify-center items-center">
                        <p className="line-through font-sans font-medium text-[15px] text-gray-700 mr-[20px]">
                          $ {product.originalPrice.toFixed(2)}
                        </p>
                        <p className="font-sans font-medium text-[15px] text-gray-900">
                          ${" "}
                          {(
                            (product.originalPrice *
                              (100 - product.discountPercent)) /
                            100
                          ).toFixed(2)}
                        </p>
                      </div>
                      <p className="font-sans font-medium text-[15px] text-center">
                        {" "}
                        Discount {product.discountPercent}%{" "}
                      </p>
                    </Table.Cell>
                    <Table.Cell>
                      <div className="flex justify-center items-center">
                        <Button
                          color="gray"
                          onClick={handleDecrease}
                          className="font-sans font-medium text-[15px] text-gray-900"
                        >
                          {" "}
                          -{" "}
                        </Button>
                        <Button color="gray"> {quantity} </Button>
                        <Button
                          color="gray"
                          onClick={handleIncrease}
                          className="font-sans font-medium text-[15px] text-gray-900"
                        >
                          {" "}
                          +{" "}
                        </Button>
                      </div>
                    </Table.Cell>
                    <Table.Cell className="font-sans font-medium text-[15px] text-center">
                      <p className=" text-gray-900">
                        {" "}
                        ${" "}
                        {(
                          ((product.originalPrice *
                            (100 - product.discountPercent)) /
                            100) *
                          quantity
                        ).toFixed(2)}
                      </p>
                      <p>
                        {" "}
                        You saved $
                        {(
                          (product.originalPrice -
                            (product.originalPrice *
                              (100 - product.discountPercent)) /
                              100) *
                          quantity
                        ).toFixed(2)}{" "}
                      </p>
                    </Table.Cell>
                    <Table.Cell>
                      <Button
                        onClick={() => handleDelete(index)}
                        className="font-sans font-medium text-[15px] text-gray-900 border-transparent hover:underline"
                        color="light"
                      >
                        Delete
                      </Button>
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          </div>
           <div className="flex overflow-x-auto sm:justify-center">
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
          showIcons
        />
      </div>
          <Button
            className=" w-[200px] font-sans font-semibold text-[17px] ml-[440px] mt-[10px]"
            color="dark"
            onClick={() => setOpenModal(true)}
          >
            ADD TO CART
          </Button>
          <Modal
            show={openModal}
            size="md"
            onClose={() => setOpenModal(false)}
            popup
          >
            <Modal.Header />
            <Modal.Body>
              <div className="text-center">
                <HiShoppingCart className="mx-auto mb-[5px] h-14 w-14 text-gray-500 dark:text-gray-200" />
                <h3 className="mb-5 font-sans text-[17px] font-bold text-gray-700">
                  ADDED TO CART !
                </h3>
                <div className="flex justify-center gap-4">
                  <Button
                    className=" w-[150px]"
                    color="failure"
                    onClick={() => setOpenModal(false)}
                  >
                    {"Keep Shopping"}
                  </Button>
                  <Link to="/cart">
                    <Button className="w-[150px]" color="gray">
                      Visit Cart
                    </Button>
                  </Link>
                </div>
              </div>
            </Modal.Body>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
