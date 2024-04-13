import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';

const ItemProduct = (product) => {

    const calculateDiscountedPrice = (originalPrice, discountPercent) => {
        if (typeof originalPrice !== 'number' || typeof discountPercent !== 'number') {
            console.error('originalPrice and discountPercent must be numbers.');
            return null;
        }
        const discountAmount = (originalPrice * discountPercent) / 100;
        return (originalPrice - discountAmount).toFixed(2);
    };
    return (
        <div className="w-60 flex item-center flex-col mx-auto " key={product.id}>
            <NavLink to={`${product.id}`}>
                <img
                    className="w-full self-center"
                    style={{ borderRadius: '60px' }}
                    src={require(`../../assets/image/Burger/${product?.product?.image}`)}
                    alt={product?.product?.name} />
                <div className="flex flex-col justify-center text-center">
                    <p style={{ fontSize: '17px', fontWeight: '600', fontFamily: '"Inter", sans-serif' }}>{product?.product?.name}</p>
                    <p style={{ textDecoration: 'line-through', fontFamily: '"Inter", sans-serif', fontSize: '17px', fontWeight: '400', color: '#707070' }}>${(product?.product?.originalPrice)?.toFixed(2)}</p>
                    <div className="flex justify-center text-center">
                        <p style={{ color: '#F00E0E', fontFamily: '"Inter", sans-serif', fontSize: '17px', fontWeight: '600', marginRight: '15px' }}>{product?.product?.discountPercent}%</p>
                        <p style={{ color: '#000000', fontFamily: '"Inter", sans-serif', fontSize: '17px', fontWeight: '600' }}>$ {calculateDiscountedPrice(product?.product?.originalPrice, product?.product?.discountPercent)}</p>
                    </div>
                </div>
            </NavLink>
        </div>
    )
}
export default ItemProduct
