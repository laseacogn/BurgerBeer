import React,{useEffect, useState} from 'react';
import ratingData from "../../data/rating.json";
import { Pagination } from "flowbite-react";

const Revieww = () => {
  const [review, setReview] = useState([]);
   useEffect(() => {
    setReview(ratingData);
  }, []);

    const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const [enlargedImage, setEnlargedImage] = useState(null);
  
  const handleImageClick = (imageSrc) => {
    setEnlargedImage(imageSrc);
  };

  const handleCloseEnlargedImage = () => {
    setEnlargedImage(null);
  };

   useEffect(() => {
    const fetchData = async () => {
      try {
        const totalProducts = ratingData.length;
        const itemsPerPage = 3;
        const pages = Math.ceil(totalProducts / itemsPerPage);
        setTotalPages(pages);
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = Math.min(startIndex + itemsPerPage, totalProducts);
        const productsForPage = ratingData.slice(startIndex, endIndex);
        setReview(productsForPage);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [currentPage]);

  return (
    <div className='w-full mx-auto justify-center items-center'>
        <div className='w-[92%] bg-[#FEFFFF] mt-[-30px]'>
              {review.map((review, index) => (
            <div className='w-full border-b-2 ml-[40px]'> 
            
            <div className='w-full flex mt-[30px]'>
                <img
                      className="w-[60px] h-[60px] ml-[20px] rounded-full"
                      src={require(`../../assets/image/avatar/${review.avatar}`)}
                      alt={review.name}
                    />
                <div className='ml-[20px] font-sans text-[17px]'>
                    <p className='font-semibold'>{review.name}</p>
                    <img
                      className="w-[90px] h-[20px]"
                      src={require(`../../assets/image/rating/${review.rating}`)}
                      alt={review.name}
                    />
                    <div className='flex font-sans font-normal text-[15px] text-gray-600'>
                    <p className='mr-[15px]'>{review.date}</p>|<p className='ml-[15px]'>Note: {review.note}</p>
                    </div>
                </div>
            </div>
            <p className='ml-[100px] mt-[10px] font-sans text-[15px] font-normal text-black'>{review.content}</p>
            <div className='flex w-[90px] h-[90px] ml-[100px] mt-[10px] mb-[30px] '>
                    <img
                      src={require(`../../assets/image/Review/${review.image1}`)}
                      alt={review.name}
                       onClick={() => handleImageClick(review.image1)}
                style={{ cursor: 'pointer' }}
                    />
                    <img
                      className='ml-[15px]'
                      src={require(`../../assets/image/Review/${review.image2}`)}
                      alt={review.name}
                       onClick={() => handleImageClick(review.image2)}
                style={{ cursor: 'pointer' }}
                    />
                    <img
                      className='ml-[15px]'
                      src={require(`../../assets/image/Review/${review.image3}`)}
                      alt={review.name}
                       onClick={() => handleImageClick(review.image3)}
                style={{ cursor: 'pointer' }}
                    />
                </div>
              {enlargedImage && (
   
      <img
        src={require(`../../assets/image/Review/${enlargedImage}`)}
        alt="Enlarged Image"
        className="w-[300px] h-[300px] mt-[-20px] ml-[100px]"
        onClick={handleCloseEnlargedImage}
        style={{ cursor: 'pointer' }}
      />
  )}
                
            </div>
              ))}

             <div className="flex overflow-x-auto sm:justify-center">
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
          showIcons
        />
      </div>

        </div>
         
    </div>
  )
}

export default Revieww
