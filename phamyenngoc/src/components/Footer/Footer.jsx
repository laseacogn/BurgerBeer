import React from 'react'
import { BsInstagram } from "react-icons/bs";
import { AiOutlineFacebook } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { AiOutlineYoutube } from "react-icons/ai";
//Footer
const Footer = () => {
  return (
    <div id="footer">
      <div style={{ width: '1200px', height: '220px', margin: '10px auto', backgroundColor: 'black', color: '#FFFFFF', }} >
        <div>
          <div>
            <p style={{ width: '400px', paddingTop: '9px', marginLeft: '0px', fontFamily: '"inter", sans-serif', fontWeight: 'bold', fontSize: '30px', textAlign: 'center', color: 'white' }}> BURGER N' BEER</p>
          </div>
          <div style={{ marginTop: '-48px', marginLeft: '60px', float: 'left', width: '250px', height: '180px' }}>
            <img src={require(`./web_logo.png`)} alt="" />
          </div>
        </div>
        <div style={{ marginTop: '-6px', width: '780px', float: 'right', lineHeight: '20px', marginRight: '40px' }}>
        <div></div>
          <div>
            <ul style={{ width: '1000px', float: 'left', padding: '10px 15px 0 0', margin: '0 15px 0 0', color: '#e0e0e0', fontFamily: '"inter", sans-serif', fontWeight: 'bold', fontSize: '15px', display: 'flex' }}>
              <li style={{ paddingLeft: '0', important: true, borderRight: '1px solid #646464', marginRight: '40px', paddingRight: '40px' }}>BURGER N' BEER</li>
              <li style={{ borderRight: '1px solid #646464', marginRight: '40px', paddingRight: '40px' }}>CEO Pham Yen Ngoc</li>
              <li style={{ borderRight: '0', important: true }}>Business Licence No. 214-87-03359</li>
            </ul>
          </div>
          <p style={{ float: 'left', padding: '12px 15px 0 0', margin: '0 15px 0 0', color: '#e0e0e0', fontFamily: '"inter", sans-serif', fontWeight: 'bold', fontSize: '15px', display: 'flex' }}>31 An Thuong 4, My An Ward, Ngu Hanh Son District, Da Nang</p>

          <div style={{ float: 'left', padding: '12px 15px 0 0', margin: '0 15px 0 0', color: '#e0e0e0', fontFamily: '"Inter", sans-serif', fontWeight: 'bold', fontSize: '15px', display: 'flex' }}>Copyright © Since 2024           All Rights Reserved.</div>

          <div style={{ float: 'left', padding: '0 15px 0 0', margin: '0 15px 0 0', display: 'flex' }}>
            <div style={{ display: 'flex', padding: '0 15px 0 0', margin: '50px 15px 0 -345px' }}>
              <li style={{ display: 'inline-block', marginRight: '10px', fontSize: '25px' }}>
                <a href="https://www.facebook.com/BurgerNBeerDanang">
                  <BsInstagram />
                </a>
              </li>
              <li style={{ display: 'inline-block', marginRight: '10px', fontSize: '30px' }}>
                <a href="https://www.facebook.com/BurgerNBeerDanang">
                  <AiOutlineFacebook />
                </a>
              </li>
              <li style={{ display: 'inline-block', marginRight: '10px', fontSize: '25px' }}>
                <a href="https://www.facebook.com/BurgerNBeerDanang">
                  <BsTwitter />
                </a>
              </li>
              <li style={{ display: 'inline-block', marginRight: '10px', fontSize: '30px' }}>
                <a href="https://www.facebook.com/BurgerNBeerDanang">
                  <AiOutlineYoutube />
                </a>
              </li>
            </div>

          </div>
        </div>
        <div style={{ clear: 'both' }}></div>
      </div>
    </div>
  );
};

export default Footer;