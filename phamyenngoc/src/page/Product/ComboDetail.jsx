import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import ItemProduct from './ItemProduct';
const ComboDetail = () => {
    const location = useLocation();
    const [product, setProduct] = useState(location.state?.product || {});
    const [productDetal, setProductDetal] = useState(location.state?.product?.note[0])

    const handleButton = (item) => {
        setProductDetal(item)
    }
    return (
        <div className="max-w-[1230px] px-[30px] mx-auto py-5 ">
            <div className='grid grid-cols-12  gap-6'>
                <div className='col-span-5 bg-black rounded-xl text-white'>
                    <div className='flex items-center justify-center mt-4'>
                        <img
                            className="w-36 h-36"
                            src={require(`../../assets/image/Burger/${product?.image}`)}
                            alt={product?.name} />
                    </div>
                    <div className='w-full text-center text-2xl font-bold text-white p-4'>
                        {product?.name}
                    </div>
                    {(product?.note).map((item) => (
                        <div className='border border-green-500 p-4 m-2 rounded-lg'>
                            <button className='w-full h-24 p-6 bg-gray-500 text-white font-bold hover:bg-gray-800 hover:text-red-500' onClick={() => { handleButton(item) }}>
                                {item.name}
                            </button>
                        </div>
                    ))}
                    <div className='flex items-center justify-between text-xl m-4'>
                        <span className='ml-8'>PRICE</span>
                        <span className='mr-8'>${product?.originalPrice}</span>
                    </div>
                    <div className='flex items-center justify-center mb-6'>
                        <button className='w-4/5 bg-green-500 h-16 rounded-xl hover:bg-blue-400'>ADD TO YOUR CARD</button>
                    </div>
                </div>
                <div className='col-span-7 border rounded-lg flex items-center justify-center'>
                    {productDetal && (
                        <div>
                            <ItemProduct product={productDetal} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ComboDetail
