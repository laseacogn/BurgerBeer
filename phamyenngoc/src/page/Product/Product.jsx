import React, { useEffect, useState } from 'react'
import categorieData from '../../data/category.json'
import ItemProduct from './ItemProduct'
import dataProduct from '../../data/product.json'

const Product = () => {
    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState(categorieData);

    const [categorieID, setCategoryID] = useState('');
    const [totalPages, setTotalPages] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);


    useEffect(() => {

        if (categorieID === "") {
            setProducts(dataProduct)
        } else {
            const filteredProducts = dataProduct.filter(products => products.categoryId === categorieID);
            setProducts(filteredProducts);
        }

    }, [categorieID])


    return (
        <div>
            <div className="max-w-[1230px] px-[30px] mx-auto py-5">
                <div className="w-full mx-auto h-full flex justify-center items-center border shadow-md rounded-lg py-4">
                    <div className="flex items-center justify-center gap-14">
                        <button
                            className="font-inter font-semibold text-center text-[16px] hover:text-red-500 transition-all"
                            onClick={() => {
                                setCategoryID("");
                            }}
                        >
                            All Product
                        </button>
                        {categories?.map((item, index) => {
                            return (
                                <div
                                    className="flex items-center justify-center"
                                    key={index}
                                >
                                    <button
                                        className="font-inter font-semibold text-center text-[16px] hover:text-red-500 transition-all"
                                        onClick={() => {
                                            setCategoryID(item.id);
                                        }}
                                    >
                                        {item.name}{" "}
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <div className="max-w-[1200px] mx-auto " style={{ paddingTop: '30px', paddingBottom: '20px' }}>
                <div className="grid grid-cols-3 gap-4 text-center" >
                    {products.map((product) => (
                        <ItemProduct product={product} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Product
