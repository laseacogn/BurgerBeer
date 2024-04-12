import React from "react";
import { Link, NavLink } from 'react-router-dom';


// Frame1.js
const Frame1 = () => {
  const frame1Styles = {
    boxSizing: 'border-box',
    position: 'relative',
    width: '1200px',
    height: '150px',
    background: '#FFFFFF',
    border: '2px solid #a6adbba8',
    borderRadius: '15px',
    zIndex: '1'
  };

  const imageStyles = {
    position: 'absolute',
    width: '70px',
    height: '70px',
    zIndex: '2',
    background: 'url(/images/pic/01.jpg)',
    backgroundSize: 'cover', // Make the image cover the container
    backgroundPosition: 'center',
    borderRadius: '15px', // Center the imagefit
  };

  const textStyles = {
    position: 'absolute',
    width: '145px',
    height: '36px',
    top: '107px',
    left: '40px',
    fontFamily: '"inter", sans-serif',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '20px',
    lineHeight: '24px',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
  };
  return (
    <div className="max-w-[1200px] mx-auto " style={{ paddingLeft: '-55px', paddingRight: '5rem' }}>
      <div style={frame1Styles}>
        <Link to="/combo">
          <span style={{ cursor: 'pointer' }}>
            <div style={{ ...imageStyles, left: '40px', top: '25px', background: 'url(/images/pic/01.jpg)', }} />
            <div style={{ ...textStyles, left: '40px' }} className="text-black hover:text-red-500" >Combo</div>
          </span>
        </Link>
        <Link to="/sidedish">
          <span style={{ cursor: 'pointer' }}>
            <div style={{ ...imageStyles, left: '185px', top: '25px', background: 'url(/images/pic/2.jpg)', }} />
            <div style={{ ...textStyles, left: '175px' }} className="text-black hover:text-red-500">Side Dish</div>
          </span>
        </Link>
        <Link to="/burger">
          <span style={{ cursor: 'pointer' }}>
            <div style={{ ...imageStyles, left: '330px', top: '25px', background: 'url(/images/pic/3.jpg)', }} />
            <div style={{ ...textStyles, left: '335px' }} className="text-black hover:text-red-500">Burger</div>
          </span>
        </Link>
        <Link to="/sandwich">
          <span style={{ cursor: 'pointer' }}>
            <div style={{ ...imageStyles, left: '475px', top: '25px', background: 'url(/images/pic/4.jpg)', }} />
            <div style={{ ...textStyles, left: '465px' }} className="text-black hover:text-red-500">Sandwich</div>
          </span>
        </Link>
        <Link to="/pizza">
          <span style={{ cursor: 'pointer' }}>
            <div style={{ ...imageStyles, left: '620px', top: '25px', background: 'url(/images/pic/5.jpg)', }} />
            <div style={{ ...textStyles, left: '630px' }} className="text-black hover:text-red-500">Pizza</div>
          </span>
        </Link>
        <Link to="/hotdog">
          <span style={{ cursor: 'pointer' }}><div style={{ ...imageStyles, left: '765px', top: '25px', background: 'url(/images/pic/6.jpg)', }} />
            <div style={{ ...textStyles, left: '760px' }} className="text-black hover:text-red-500">Hot Dog</div>
          </span>
        </Link>
        <Link to="/baguette">
          <span style={{ cursor: 'pointer' }}>
            <div style={{ ...imageStyles, left: '910px', top: '25px', background: 'url(/images/pic/7.jpg)', }} />
            <div style={{ ...textStyles, left: '905px' }} className="text-black hover:text-red-500">Baguette</div>
          </span>
        </Link>
        <Link to="/drink">
          <span style={{ cursor: 'pointer' }}>
            <div style={{ ...imageStyles, left: '1055px', top: '25px', background: 'url(/images/pic/8.jpg)', }} />
            <div style={{ ...textStyles, left: '1065px' }} className="text-black hover:text-red-500">Drink</div>
          </span>
        </Link>
      </div>
    </div>
  );
};
//ProductStatistic.js
const ProductStatistics = () => {
  const products = [
    { id: 28, name: "Carnitas Hotdog", image: "19.jpg", originalPrice: 80.00, discountPercent: 5 },
    { id: 29, name: "Meaty & Bacon Cheese Hotdog", image: "20.jpg", originalPrice: 100.00, discountPercent: 10 },
  ];
  return (
    <div className="max-w-[1200px] mx-auto " style={{ paddingTop: '30px', paddingBottom: '20px' }}>
      <div className="grid grid-cols-3 gap-4 text-center" >
        {products.map((product) => (
          <ProductItem product={product} />
        ))}
      </div>
    </div>
  );
};
const calculateDiscountedPrice = (originalPrice, discountPercent) => {
  const discountAmount = (originalPrice * discountPercent) / 100;
  return (originalPrice - discountAmount).toFixed(2);
};
function ProductItem({ product }) {
  return (
    <div className="w-60 flex item-center flex-col mx-auto " key={product.id}>
      <NavLink to={`${product.id}`}>
        <img
          className="w-full self-center"
          style={{ borderRadius: '60px' }}
          src={require(`../../assets/image/Burger/${product.image}`)}
          alt={product.name} />
        <div className="flex flex-col justify-center text-center">
          <p style={{ fontSize: '17px', fontWeight: '600', fontFamily: '"Inter", sans-serif' }}>{product.name}</p>
          <p style={{ textDecoration: 'line-through', fontFamily: '"Inter", sans-serif', fontSize: '17px', fontWeight: '400', color: '#707070' }}>${product.originalPrice.toFixed(2)}</p>
          <div className="flex justify-center text-center">
            <p style={{ color: '#F00E0E', fontFamily: '"Inter", sans-serif', fontSize: '17px', fontWeight: '600', marginRight: '15px' }}>{product.discountPercent}%</p>
            <p style={{ color: '#000000', fontFamily: '"Inter", sans-serif', fontSize: '17px', fontWeight: '600' }}>$ {calculateDiscountedPrice(product.originalPrice, product.discountPercent)}</p>
          </div>
        </div>
      </NavLink>
    </div>
  );
}
export default function Hotdog() {
  return (
    <div className="px-20">
      < Frame1 />
      < ProductStatistics />
    </div>
  );
}
