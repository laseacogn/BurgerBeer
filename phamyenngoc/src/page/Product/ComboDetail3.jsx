import React from 'react';
import { Link } from 'react-router-dom';

const Frame1 = () => {
  return (
    <div className="max-w-[1200px] mx-auto " style={{paddingLeft:'-55px', paddingRight:'5rem'}}>
      <div style={{position: 'relative', width: '1200px', height: '855px', background: '#FFE3E3', left: '0px'}}>
        <div style={{position: 'absolute', width: '40px', height: '40px', left: '12px', top: '12px'}}></div>
        <div style={{position: 'absolute', width: '450px', height: '750px', left: '55px', marginTop: '55px', background: 'url(/images/pic/9.jpg)', backgroundSize: 'cover',filter: 'drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.1))', borderRadius: '15px',}}>
            <div style={{position: 'absolute',
                        left: '30px',
                        right: '0%',
                        top: '2.34%',
                        bottom: '89.43%',
                        fontFamily:'"inter", sans-serif',
                        fontStyle: 'normal',
                        fontWeight: '800',
                        fontSize: '25px',
                        lineHeight: '39px',
                        display: 'flex',
                        alignItems: 'center',
                        textAlign: 'center',
                        color: '#FFFFFF',
                        }}> COMBO SINGLE 1
            </div>
            <Link to="/combo/:productID"><div style={{boxSizing: 'border-box', position: 'absolute', width: '400px', height: '95px', left: '16px', top: '105px', background: 'rgba(255, 255, 255, 0.15)', border: '1px solid rgba(0,0,0)', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', borderRadius: '15px'}}
                  className="hover: border-5px-solid-green">
                <div style={{position: 'absolute',
                            width: '80px',
                            height: '80px',
                            left: '12px',
                            top: '3px',
                            background: 'rgba(77, 107, 124, 0.64)',
                            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                            borderRadius: '15px'}}></div>
                <div style={{position: 'absolute',
                            width: '80px',
                            height: '80px',
                            marginLeft: '12px',
                            top: '3px',
                            borderRadius: '15px',
                            backgroundSize: 'cover',
                            background: 'url(/images/pic/2.jpg)'}}></div>
                <div style={{position: 'absolute',
                            width: '335px',
                            height: '65px',
                            paddingLeft: '165px',
                            top: '12px',
                            fontFamily: '"inter", sans-serif',
                            fontStyle: 'normal',
                            fontWeight: '800',
                            fontSize: '20px',
                            lineHeight: '29px',
                            display: 'flex',
                            alignItems: 'center',
                            textAlign: 'center',
                            color: '#FFFFFF'}}>Side Dish
                </div>
            </div>
            </Link>
            <Link to="/combo3/:productID">
            <div style={{boxSizing: 'border-box',
                        position: 'absolute',
                        width: '400px',
                        height: '95px',
                        left: '16px',
                        top: '415px',
                        background: 'rgba(255, 255, 255, 0.15)',
                        border: '1px solid #000000',
                        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                        borderRadius: '15px'}}>
                <div style={{position: 'absolute',
                            width: '80px',
                            height: '80px',
                            left: '12px',
                            top: '6px',
                            background: 'rgba(77, 107, 124, 0.64)',
                            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                            borderRadius: '15px'}}>
                </div>
                <div style={{position: 'absolute',
                            width: '80px',
                            height: '80px',
                            marginLeft: '12px',
                            top: '6px',
                            backgroundSize: 'cover',
                            borderRadius: '15px',
                            background: 'url(/images/pic/8.jpg)'}}>
                </div>
                <div style={{position: 'absolute',
                            width: '335px',
                            height: '65px',
                            paddingLeft: '185px',
                            top: '12px',
                            fontFamily: '"inter", sans-serif',
                            fontStyle: 'normal',
                            fontWeight: '800',
                            fontSize: '20px',
                            lineHeight: '29px',
                            display: 'flex',
                            alignItems: 'center',
                            textAlign: 'center',
                            color: '#FFFFFF'}}>Drink
                </div>
            </div>
            </Link>
            <Link to="/combo2/:productID">
            <div style={{boxSizing: 'border-box',
                        position: 'absolute',
                        width: '400px',
                        height: '95px',
                        left: '16px',
                        top: '260px',
                        background: 'rgba(255, 255, 255, 0.15)',
                        border: '1px solid #000000',
                        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                        borderRadius: '15px'}}>
                <div style={{position: 'absolute',
                            width: '80px',
                            height: '80px',
                            left: '12px',
                            top: '8px',
                            background: 'rgba(77, 107, 124, 0.64)',
                            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                            borderRadius: '15px'}}>
                </div>
                <div style={{position: 'absolute',
                            width: '80px',
                            height: '80px',
                            marginLeft: '12px',
                            top: '8px',
                            backgroundSize: 'cover',
                            borderRadius: '15px',
                            background: 'url(/images/pic/3.jpg)'}}>
                </div>
                <div style={{position: 'absolute',
                            width: '335px',
                            height: '65px',
                            left: '170px',
                            paddingTop: '32px',
                            fontFamily: '"inter", sans-serif',
                            fontStyle: 'normal',
                            fontWeight: '800',
                            fontSize: '20px',
                            lineHeight: '29px',
                            display: 'flex',
                            alignItems: 'center',
                            textAlign: 'center',
                            color: '#FFFFFF'}}>Main Dish
                </div>
            </div>
            </Link>
            <div style={{position: 'absolute',
                        width: '400px',
                        height: '75px',
                        left: '16px',
                        top: '640px',
                        background: '#097120',
                        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                        borderRadius: '15px'}}>
                <div style={{position: 'absolute',
                            width: '400px',
                            height: '65px',
                            left: '90px',
                            top: '5px',
                            fontFamily:'"inter", sans-serif',
                            fontStyle: 'normal',
                            fontWeight: '800',
                            fontSize: '20px',
                            lineHeight: '29px',
                            display: 'flex',
                            alignItems: 'center',
                            textAlign: 'center',
                            color: '#FFFFFF'}}
                    className="hover:text-red-500" >ADD TO YOUR CART
                </div>
            </div>

          <div style={{position: 'absolute',
                    width: '430px',
                    height: '50px',
                    marginLeft: '30px',
                    top: '590px',
                    fontFamily: '"inter", sans-serif',
                    fontStyle: 'normal',
                    fontWeight: '800',
                    fontSize: '25px',
                    lineHeight: '39px',
                    display: 'flex',
                    alignItems: 'center',
                    textAlign: 'center',
                    color: '#FFFFFF'}}>
                <p style={{marginRight:'160px'}}>PRICE </p> 
                <p>130.000đ</p>
          </div>
        </div>
        <div style={{position: 'absolute',
                    width: '620px',
                    height: '750px',
                    left: '525px',
                    marginTop: '55px',
                    background: 'rgba(255, 255, 255, 0.4)',
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                    borderRadius: '15px'}}>
            <div style={{position: 'absolute',
                        width: '540px',
                        height: '130px',
                        left: '37px',
                        top: '24px',
                        background: '#FFFFFF',
                        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                        borderRadius: '15px'}}> 
                <div style={{position: 'absolute',
                            width: '100px',
                            height: '100px',
                            marginLeft: '25px',
                            top: '15px',
                            backgroundSize: 'cover',
                            borderRadius: '15px',
                            background: 'url(/Burger/47.jpg)'}}>
                </div>
                <div style={{position: 'absolute',
                            width: '355px',
                            height: '40px',
                            left: '155px',
                            paddingTop: '30px',
                            fontFamily: '"inter", sans-serif',
                            fontStyle: 'normal',
                            fontWeight: '600',
                            fontSize: '20px',
                            lineHeight: '24px',
                            display: 'flex',
                            alignItems: 'center',
                            color: '#000000'}}>Coca Cola
                </div>
                <div style={{position: 'absolute',
                            width: '129px',
                            height: '22px',
                            left: '155px',
                            paddingTop: '105px',
                            fontFamily: '"inter", sans-serif',
                            fontStyle: 'normal',
                            fontWeight: '600',
                            fontSize: '20px',
                            lineHeight: '24px',
                            display: 'flex',
                            alignItems: 'center',
                            color: 'rgba(0, 0, 0, 0.7)'}}>20.000đ
                </div>
                <img src={require(`./add.jpg`)} alt="" style={{ marginLeft: '495px', marginTop:'82px', width: '35px', height: '35px' }} />
            </div>
            <div style={{position: 'absolute',
                        width: '540px',
                        height: '130px',
                        left: '37px',
                        top: '175px',
                        background: '#FFFFFF',
                        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                        borderRadius: '15px'}}> 
                <div style={{position: 'absolute',
                            width: '100px',
                            height: '100px',
                            marginLeft: '25px',
                            top: '15px',
                            backgroundSize: 'cover',
                            borderRadius: '15px',
                            background: 'url(/Burger/48.jpg)'}}>
                </div>
                <div style={{position: 'absolute',
                            width: '355px',
                            height: '40px',
                            left: '155px',
                            paddingTop: '30px',
                            fontFamily: '"inter", sans-serif',
                            fontStyle: 'normal',
                            fontWeight: '600',
                            fontSize: '20px',
                            lineHeight: '24px',
                            display: 'flex',
                            alignItems: 'center',
                            color: '#000000'}}>Pepsi
                </div>
                <div style={{position: 'absolute',
                            width: '129px',
                            height: '22px',
                            left: '155px',
                            paddingTop: '105px',
                            fontFamily: '"inter", sans-serif',
                            fontStyle: 'normal',
                            fontWeight: '600',
                            fontSize: '20px',
                            lineHeight: '24px',
                            display: 'flex',
                            alignItems: 'center',
                            color: 'rgba(0, 0, 0, 0.7)'}}>20.000đ
                </div>
                <img src={require(`./add.jpg`)} alt="" style={{ marginLeft: '495px', marginTop:'82px', width: '35px', height: '35px' }} />
            </div>
            <div style={{position: 'absolute',
                        width: '540px',
                        height: '130px',
                        left: '37px',
                        top: '325px',
                        background: '#FFFFFF',
                        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                        borderRadius: '15px'}}> 
                <div style={{position: 'absolute',
                            width: '100px',
                            height: '100px',
                            marginLeft: '25px',
                            top: '15px',
                            backgroundSize: 'cover',
                            borderRadius: '15px',
                            background: 'url(/Burger/49.jpg)'}}>
                </div>
                <div style={{position: 'absolute',
                            width: '355px',
                            height: '40px',
                            left: '155px',
                            paddingTop: '30px',
                            fontFamily: '"inter", sans-serif',
                            fontStyle: 'normal',
                            fontWeight: '600',
                            fontSize: '20px',
                            lineHeight: '24px',
                            display: 'flex',
                            alignItems: 'center',
                            color: '#000000'}}>7up
                </div>
                <div style={{position: 'absolute',
                            width: '129px',
                            height: '22px',
                            left: '155px',
                            paddingTop: '105px',
                            fontFamily: '"inter", sans-serif',
                            fontStyle: 'normal',
                            fontWeight: '600',
                            fontSize: '20px',
                            lineHeight: '24px',
                            display: 'flex',
                            alignItems: 'center',
                            color: 'rgba(0, 0, 0, 0.7)'}}>20.000đ
                </div>
                <img src={require(`./add.jpg`)} alt="" style={{ marginLeft: '495px', marginTop:'82px', width: '35px', height: '35px' }} />
            </div>

          
            </div>
          </div>
        </div>
    
  );
};
export default function ComboDetail3() {
  return (
    <div className="px-20">
      < Frame1 />
     
    </div>
  );
}