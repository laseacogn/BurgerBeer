import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";
import { FaCheckCircle } from 'react-icons/fa';

const product = [
  { id: 11, name: "French Fries With Classic Seasoning", image: "2.jpg", originalPrice: 40.00, discountPercent: 5 },
  { id: 12, name: "French Fries With Cheese Powder", image: "2.jpg", originalPrice: 40.00, discountPercent: 5 },
  { id: 13, name: "Coleslaw Salad", image: "3.jpg", originalPrice: 40.00, discountPercent: 5 },
  { id: 14, name: "Chicken Nugget", image: "4.jpg", originalPrice: 60.00, discountPercent: 10 },
  { id: 15, name: "Potato Cheese Balls", image: "5.jpg", originalPrice: 50.00, discountPercent: 5 },
  { id: 16, name: "BBQ Pull Pork Burger", image: "6.jpg", originalPrice: 99.00, discountPercent: 5 },
  { id: 17, name: "Cheese Burger", image: "7.jpg", originalPrice: 99.00, discountPercent: 5 },
  { id: 18, name: "Double Cheese Burger", image: "8.jpg", originalPrice: 140.00, discountPercent: 10 },
  { id: 19, name: "Bacon & Egg Burger", image: "9.jpg", originalPrice: 99.00, discountPercent: 5 },
  { id: 20, name: "The Classic Burger", image: "10.jpg", originalPrice: 80.00, discountPercent: 15 },
  { id: 21, name: "Fries Fish Burger", image: "11.jpg", originalPrice: 80.00, discountPercent: 15 },
  { id: 21, name: "Japanese Chicken Burger", image: "12.jpg", originalPrice: 80.00, discountPercent: 5 },
  { id: 22, name: "Black Bean Burger", image: "13.jpg", originalPrice: 70.00, discountPercent: 10 },
  { id: 23, name: "Chicken Club Sanwich", image: "14.jpg", originalPrice: 99.00, discountPercent: 15 },
  { id: 24, name: "Bacon & Egg Grill Cheese Sandwich", image: "15.jpg", originalPrice: 80.00, discountPercent: 5 },
  { id: 25, name: "Carnitas & Corn Pizza", image: "16.jpg", originalPrice: 130.00, discountPercent: 10 },
  { id: 26, name: "Hawaiian Pizza", image: "17.jpg", originalPrice: 130.00, discountPercent: 10 },
  { id: 27, name: "Cheese Pizza", image: "18.jpg", originalPrice: 160.00, discountPercent: 15 },
  { id: 28, name: "Carnitas Hotdog", image: "19.jpg", originalPrice: 80.00, discountPercent: 5 },
  { id: 29, name: "Meaty & Bacon Cheese Hotdog", image: "20.jpg", originalPrice: 100.00, discountPercent: 10 },
  { id: 30, name: "Baguette Chasiu", image: "21.jpg", originalPrice: 30.00, discountPercent: 5 },
  { id: 31, name: "Baguette Grilled Pork", image: "22.jpg", originalPrice: 30.00, discountPercent: 5 },
  { id: 32, name: "Baguette Mixed", image: "23.jpg", originalPrice: 40.00, discountPercent: 5 },
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
]

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
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: '15px',
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

export default function ProductDT() {
  const params = useParams();
  const productId = params.productId;
  const prd = product.find(prd => prd.id === +productId);

  const navigate = useNavigate();
  const handleTextClick = () => {
    navigate(-1);
  };
  return (
    <div className="px-20">

      <Frame1 />

      <div className="max-w-[1200px] mx-auto " style={{ paddingLeft: '-55px', paddingRight: '5rem' }}>
        <div style={{ position: 'relative', width: '1200px', height: '600px', background: '#FFE3E3', left: '0px', top: '30px', marginBottom: '65px', borderRadius: '15px' }}>
          <div><p style={{ display: 'block', fontSize: '20px', textDecoration: 'underline', paddingTop: '7px', marginLeft: '80px' }} onClick={handleTextClick}> Go Back</p></div>

          <div className="flex ">
            <img src={require(`../../assets/image/Burger/${prd.image}`)} alt=""
              width={405} height={405} style={{ marginLeft: '100px', paddingTop: '80px', borderRadius: '15px' }} />
            <div style={{ marginLeft: "auto", marginRight: "auto", marginTop: '50px' }}>
              <p style={{ marginLeft: '3px', paddingTop: '26px', fontSize: '25px', fontWeight: '600', fontFamily: '"Inter", sans-serif;' }}> {prd.name}</p>

              <td className="py-4" colSpan={2}>
                <table style={{ width: '100%', borderTop: '1px solid #dddddd', marginRight: '120px' }}>
                  <tbody>
                    <tr>
                      <td style={{ height: '16px', width: '390px' }} colSpan={2}></td>
                    </tr>
                    <tr>
                      <td style={{ width: '70px' }}>PRICE</td>
                      <td>
                        <div style={{ display: 'inline' }}>
                          <span style={{ color: '#323232', fontSize: '24px', fontWeight: 'bold' }}>{(prd.originalPrice * (100 - prd.discountPercent) / 100).toFixed(2)} USD</span>&nbsp;&nbsp;&nbsp;
                          <span style={{ color: '#ee2f49', fontSize: '24px', fontWeight: 'bold' }}>{prd.discountPercent}%</span>
                        </div>
                        <div style={{ clear: 'both' }}></div>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ paddingTop: '10px' }}>RETAIL</td>
                      <td style={{ paddingTop: '10px' }}>
                        <span style={{ textDecoration: 'line-through' }}>{prd.originalPrice}.00 USD</span> ( You saved {(prd.originalPrice - (prd.originalPrice * (100 - prd.discountPercent) / 100)).toFixed(2)} USD )
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
              <div className="flex">
                <div style={{
                  width: '238px',
                  height: '42.5px',
                  backgroundColor: '#ee2f49',
                  color: '#FFFFFF',
                  textAlign: 'center',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  lineHeight: '42.5px',
                  cursor: 'pointer'
                }}>ADD TO CART
                </div>
                <div style={{
                  width: '238px',
                  height: '42.5px',
                  backgroundColor: 'white',
                  color: 'black',
                  border: '0.5px solid black',
                  textAlign: 'center',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  lineHeight: '42.5px',
                  cursor: 'pointer',
                  marginLeft: '30px'
                }}> ADD TO WISH LIST
                </div>
              </div>
              <div style={{ display: 'flex', paddingTop: '12px' }}>
                <p style={{ fontFamily: '"Roboto", sans-serif', color: '#323232', fontSize: '13px' }}>&gt; 100% Authentic Product Guarantee</p>
                <p className="text-green-500 ml-1"><FaCheckCircle /></p>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>

  );
}
