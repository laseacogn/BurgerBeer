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
    { id: 33, name: "Pineapple Juice", image: "24.jpg", originalPrice: 35.00, discountPercent: 5 },
    { id: 34, name: "Lemonade (Hot/Cold)", image: "25.jpg", originalPrice: 35.00, discountPercent: 5 },
    { id: 35, name: "Apple Juice", image: "26.jpg", originalPrice: 40.00, discountPercent: 10 },
    { id: 36, name: "Orange Juice", image: "27.jpg", originalPrice: 40.00, discountPercent: 5 },
    { id: 37, name: "Watermelon Juice", image: "28.jpg", originalPrice: 40.00, discountPercent: 15 },
    { id: 38, name: "Mango Smoothies", image: "29.jpg", originalPrice: 40.00, discountPercent: 15 },
    { id: 39, name: "Avocado Smoothies", image: "30.jpg", originalPrice: 40.00, discountPercent: 5 },
    { id: 40, name: "Strawberry Smoothies", image: "31.jpg", originalPrice: 40.00, discountPercent: 10 },
    { id: 41, name: "Strawberry Yogurt", image: "32.jpg", originalPrice: 40.00, discountPercent: 5 },
    { id: 42, name: "Blueberry Yogurt", image: "33.jpg", originalPrice: 40.00, discountPercent: 5 },
    { id: 43, name: "Peach Yogurt", image: "34.jpg", originalPrice: 40.00, discountPercent: 10 },
    { id: 44, name: "Passion Fruit Yogurt", image: "35.jpg", originalPrice: 40.00, discountPercent: 5 },
    { id: 45, name: "Mango Yogurt", image: "36.jpg", originalPrice: 40.00, discountPercent: 15 },
    { id: 46, name: "Lemon Tea", image: "37.jpg", originalPrice: 40.00, discountPercent: 15 },
    { id: 47, name: "Peach Tea", image: "38.jpg", originalPrice: 40.00, discountPercent: 5 },
    { id: 48, name: "Lychee Tea", image: "39.jpg", originalPrice: 40.00, discountPercent: 10 },
    { id: 49, name: "Apple Tea", image: "40.jpg", originalPrice: 40.00, discountPercent: 5 },
    { id: 50, name: "Ginger Tea", image: "41.jpg", originalPrice: 40.00, discountPercent: 5 },
    { id: 51, name: "Strawberry Soda", image: "42.jpg", originalPrice: 45.00, discountPercent: 10 },
    { id: 52, name: "Blueberry Soda", image: "43.jpg", originalPrice: 45.00, discountPercent: 5 },
    { id: 53, name: "Peach Soda", image: "44.jpg", originalPrice: 45.00, discountPercent: 15 },
    { id: 54, name: "Passion Fruit Soda", image: "45.jpg", originalPrice: 45.00, discountPercent: 15 },
    { id: 55, name: "Saigon Black Coffee", image: "55.jpg", originalPrice: 25.00, discountPercent: 10 },
    { id: 56, name: "Saigon Milk Coffee", image: "56.jpg", originalPrice: 30.00, discountPercent: 15 },
    { id: 57, name: "White Coffee", image: "57.jpg", originalPrice: 40.00, discountPercent: 15 },
    { id: 58, name: "Salt Coffee", image: "58.jpg", originalPrice: 40.00, discountPercent: 5 },
    { id: 59, name: "Coconut Coffee", image: "59.jpg", originalPrice: 40.00, discountPercent: 10 },
    { id: 60, name: "Mango Soda", image: "46.jpg", originalPrice: 45.00, discountPercent: 5 },
    { id: 61, name: "Larue Beer", image: "50.jpg", originalPrice: 25.00, discountPercent: 10 },
    { id: 62, name: "Huda Beer", image: "51.jpg", originalPrice: 25.00, discountPercent: 5 },
    { id: 63, name: "Saigon Red Beer", image: "52.jpg", originalPrice: 30.00, discountPercent: 15 },
    { id: 64, name: "Heiniken Beer", image: "53.jpg", originalPrice: 40.00, discountPercent: 15 },
    { id: 65, name: "Budweiser Beer", image: "54.jpg", originalPrice: 50.00, discountPercent: 5 },
    { id: 66, name: "Coca Cola", image: "47.jpg", originalPrice: 20.00, discountPercent: 10 },
    { id: 67, name: "Pepsi", image: "48.jpg", originalPrice: 20.00, discountPercent: 5 },
    { id: 68, name: "7up", image: "49.jpg", originalPrice: 20.00, discountPercent: 5 },
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
export default function Drink() {
  return (
    <div className="px-20">
      < Frame1 />
      < ProductStatistics />
    </div>
  );
}