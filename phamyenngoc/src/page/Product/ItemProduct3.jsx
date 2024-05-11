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
    <div
      className="w-60 flex item-center flex-col mx-auto "
      key={product.id}
      onMouseEnter={() => setShowButtons(true)}
      onMouseLeave={() => setShowButtons(false)}
    >
      <div className="relative">
        {parseInt(product.id) > 69 ? (
          <div>
            <img
              className="w-full self-center"
              style={{ borderRadius: "60px" }}
              src={product.image}
              alt={product.name}
            />
          </div>
        ) : (
          <div>
            <img
              className="w-full self-center"
              style={{ borderRadius: "60px" }}
              src={require(`../../assets/image/Burger/${product?.image}`)}
              alt={product?.name}
            />
          </div>
        )}

        {showButtons && (
          <div className="absolute inset-0 flex justify-around items-center">
            <button onClick={handleEdit}>
              <div className="w-[50px] h-[50px] rounded-full bg-white justify-center items-center">
                <FaPen
                  className="w-[40px] h-[40px] text-gray-900 ml-[5px] pt-[10px]"
                  onClick={onEdit}
                />
              </div>
            </button>
            <button onClick={handleDelete}>
              <div className="w-[50px] h-[50px] rounded-full bg-gray-900 justify-center items-center">
                <AiFillDelete className="w-[40px] h-[40px] text-white ml-[5px] pt-[10px]" />
              </div>
            </button>
          </div>
        )}
      </div>

      <Link to={`/productttt/${product?.id}`}>
        <div className="flex flex-col justify-center text-center">
          <p
            style={{
              fontSize: "17px",
              fontWeight: "600",
              fontFamily: '"Inter", sans-serif',
            }}
          >
            {product?.name}
          </p>
          <p
            style={{
              textDecoration: "line-through",
              fontFamily: '"Inter", sans-serif',
              fontSize: "17px",
              fontWeight: "400",
              color: "#707070",
            }}
          >
            {product?.originalPrice?.toFixed(3)} VND
          </p>
          <div className="flex justify-center text-center">
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
              {" "}
              {(
                (product?.originalPrice * (100 - product?.discountPercent)) /
                100
              ).toFixed(3)}{" "}
              VND
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ItemProduct3;
