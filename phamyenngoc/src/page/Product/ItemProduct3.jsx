import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaPen } from "react-icons/fa6";
import { AiFillDelete } from "react-icons/ai";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../config/firebase.config";
import { v4 } from "uuid";

const ItemProduct3 = ({ product, onDelete, onEdit, openModal2 }) => {
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

  const [showButtons, setShowButtons] = useState(false);

  const handleDelete = () => {
    onDelete(product.id);
  };

  const handleEdit = () => {
    onEdit(product.id);
  };

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


  return (
      <div className="w-full mx-auto h-full flex justify-center items-center py-4">
        <div className="flex items-center justify-center gap-8">
            <div
              className="card w-[270px] h-[350px] bg-base-100 shadow-xl"
              key={product.id}
            >
              <figure className="">
                <Link to={`/productttt/${product?.id}`}>
                  {parseInt(product.id) > 69 ? (
          <div>
            <img
              className="w-[200px] h-[150px] self-center"
              style={{ borderRadius: "px" }}
              src={product.image}
              alt={product.name}
            />
          </div>
        ) : (
          <div>
            <img
              className="w-[200px] h-[150px] self-center"
              style={{ borderRadius: "px" }}
              src={require(`../../assets/image/Burger/${product?.image}`)}
              alt={product?.name}
            />
          </div>
        )}

                </Link>
              </figure>
              <div className=" mt-[-20px] card-body items-center text-center">
                <h2 className="font-sans  text-[17px] font-semibold text-center">
                   {product?.name}
                </h2>
                <div className="w-[150px] mt-[-3px]">
                  <div className="flex justify-between items-center">
                    <button onClick={handleEdit}>
                      <div className="w-[50px] h-[50px] rounded-full bg-white shadow-md justify-center items-center mr-[30px] ml-[10px]">
                        <FaPen className="w-[38px] h-[38px] text-gray-700 ml-[7px] pt-[15px]" onClick={onEdit}/>
                      </div>
                    </button>
                    <button onClick={handleDelete}>
                      <div className="w-[50px] h-[50px] rounded-full bg-white shadow-md justify-center items-center">
                        <AiFillDelete className="w-[42px] h-[42px] text-gray-700 ml-[4px] pt-[12px]" />
                      </div>
                    </button>
                  </div>
                  <div className="w-[160px] font-sans font-medium text-[17px] justify-center text-center mb-[-20px]">
                    <p className=" mt-[15px] text-center line-through text-[#707070]">
                      {product?.originalPrice?.toFixed(3)} VND
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
                        {product?.discountPercent}%
                      </p>
                      <p
                        style={{
                          color: "#000000",
                          fontFamily: '"Inter", sans-serif',
                          fontSize: "17px",
                          fontWeight: "600",
                        }}
                      >
                        {(
                (product?.originalPrice * (100 - product?.discountPercent)) /
                100
              ).toFixed(3)}{" "}
              VND
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>


    
  );
};

export default ItemProduct3;
