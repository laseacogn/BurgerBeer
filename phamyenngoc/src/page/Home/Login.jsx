import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div>
        <div style={{ width: '1200px', height:'154px', margin: '10px auto', position: 'relative', backgroundColor:'#F9DBDB',  color: '#FFFFFF', }} >
            <div>
                <div style={{ marginTop: '-20px', marginLeft:'60px',float: 'left', width:'160px', height:'140px' }}>
                <img src={require(`./web_logo.png`)} alt=""/>
            </div>
            <div>
                <p style={{width:'300px', paddingTop:'9px',marginLeft:'0px',fontFamily: '"inter", sans-serif', fontWeight: 'bold', fontSize: '25px', textAlign: 'center', color: 'black'}}> BURGER N' BEER</p>
            </div>
            </div>
            <div className='flex'>
                <p style={{position: 'absolute',
                        width: '324px',
                        height: '128px',
                        left: '350px',
                        top: '67px',
                        fontFamily: '"Inter", sans-serif',
                        fontStyle: 'normal',
                        fontWeight: '700',
                        fontSize: '35px',
                        lineHeight: '48px',
                        display: 'flex',
                        alignItems: 'center',
                        textAlign: 'center',
                        color: '#FF0707',}}> Log In
                </p>
                <p style={{position: 'absolute',
                        width: '324px',
                        height: '128px',
                        left: '1010px',
                        top: '70px',
                        fontFamily: '"Inter", sans-serif',
                        fontStyle: 'normal',
                        fontWeight: '400',
                        fontSize: '20px',
                        lineHeight: '29px',
                        display: 'flex',
                        alignItems: 'center',
                        textAlign: 'center',
                        color: '#000000'}}> You need help?
                </p>
            </div>
        </div>

    <div>
      <div
          style={{
            position: 'relative',
            width: '1200px',
            height: '640px',
            zIndex: '1',
            marginLeft: '158px',
          }}
        >
          <img src={require(`./pic4.jpg`)} alt="" style={{ width: '100%', height: '100%' }} />

      </div>

      <div style={{
        position: 'absolute',
        width: '458px',
        height: '550px',
        marginLeft: '790px',
        top: '408px',
        background: '#FFFFFF',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        borderRadius: '15px',
        zIndex: '2'
      }}>
        <div style={{
          position: 'absolute',
          width: '175px',
          height: '55px',
          left: '34px',
          top: '16px',
          fontFamily: '"Inter", sans-serif',
          fontStyle: 'normal',
          fontWeight: '750',
          fontSize: '32px',
          lineHeight: '39px',
          display: 'flex',
          alignItems: 'flex-end',
          color: '#000000'
        }}>Log In</div>
        <div style={{
          boxSizing: 'border-box',
          position: 'absolute',
          width: '405px',
          height: '58px',
          left: '25px',
          top: '98px',
          border: '1px solid #000000'
        }}>
          <div style={{
            position: 'absolute',
            width: '375px',
            height: '58px',
            left: '40px',
            top: '0px',
            fontFamily: '"Inter", sans-serif',
            fontStyle: 'normal',
            fontWeight: '300',
            fontSize: '20px',
            lineHeight: '29px',
            display: 'flex',
            alignItems: 'center',
            color: '#6E6262'
          }}>Email / Phone number</div>
          <div style={{
          boxSizing: 'border-box',
          position: 'absolute',
          width: '405px',
          height: '58px',
          marginLeft: '-2px',
          top: '85px',
          border: '1px solid #000000'
        }}>
          <div style={{
            position: 'absolute',
            width: '375px',
            height: '58px',
            left: '40px',
            top: '0px',
            fontFamily: '"Inter", sans-serif',
            fontStyle: 'normal',
            fontWeight: '300',
            fontSize: '20px',
            lineHeight: '29px',
            display: 'flex',
            alignItems: 'center',
            color: '#6E6262'
          }}>Password</div>
        </div>
        <div style={{
          position: 'absolute',
          width: '405px',
          height: '58px',
          marginLeft: '-2px',
          top: '170px',
          background: '#DF4141'}}>
            <div style={{
          paddingTop: '15px',
          marginLeft:'170px',
          fontFamily: '"Inter", sans-serif',
          fontStyle: 'normal',
          fontWeight: '600',
          fontSize: '20px',
          color: '#FFFFFF',
           alignItems: 'center',
        }}><Link to="/home">LOG IN</Link></div>
        </div>
        <div style={{
          boxSizing: 'border-box',
          position: 'absolute',
          width: '195px',
          height: '55px',
          marginLeft: '-2px',
          top: '300px',
          border: '1px solid #000000'
        }}>
          <div style={{
            position: 'absolute',
            width: '195px',
            height: '55px',
            marginLeft: '75px',
            top: '0px',
            fontFamily: '"Inter", sans-serif',
            fontStyle: 'normal',
            fontWeight: '300',
            fontSize: '20px',
            lineHeight: '29px',
            display: 'flex',
            alignItems: 'center',
            color: '#000000'
          }}>Facebook</div>
          <img src={require(`./logo_fb.png`)} alt="" style={{ marginLeft: '22px', marginTop:'8px', width: '40px', height: '40px' }} />
        </div>
        <div style={{
          boxSizing: 'border-box',
          position: 'absolute',
          width: '195px',
          height: '55px',
          left: '204px',
          marginTop: '300px',
          border: '1px solid #000000'
        }}>
          <div style={{
            position: 'absolute',
            width: '195px',
            height: '55px',
            left: '85px',
            top: '0px',
            fontFamily: '"Inter", sans-serif',
            fontStyle: 'normal',
            fontWeight: '300',
            fontSize: '20px',
            lineHeight: '29px',
            display: 'flex',
            alignItems: 'center',
            color: '#000000'
          }}>Google</div>
          <img src={require(`./logo_gg.png`)} alt="" style={{ marginLeft: '29px', marginTop:'8px', width: '40px', height: '40px' }} />
        </div>
        <div ></div>
        <div style={{
        position: 'absolute',
        width: '170px',
        height: '0px',
        marginLeft: '-2px',
        marginTop: '265px',
        border: '0.5px solid #000000',
        transform: 'rotate(-0.43deg)'
      }}></div>
      <div style={{
        position: 'absolute',
        width: '170px',
        height: '0px',
        left: '230px',
        marginTop: '265px',
        border: '0.5px solid #000000',
        transform: 'rotate(-0.43deg)'
      }}></div>
      <div style={{
        position: 'absolute',
        width: '78px',
        height: '42px',
        left: '186px',
        marginTop: '245px',
        fontFamily: '"Inter", sans-serif',
        fontStyle: 'normal',
        fontWeight: '200',
        fontSize: '16px',
        lineHeight: '19px',
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        color: '#000000'
      }}>OR</div>
      <div style={{
          position: 'absolute',
          width: '322px',
          height: '76px',
          Left: '50px',
          top: '375px',
          fontFamily: '"Inter", sans-serif',
          fontStyle: 'normal',
          fontWeight: '400',
          fontSize: '16px',
          lineHeight: '16px',
          display: 'flex',
          alignItems: 'center',
          color: '#927E7E'
        }}>New to Burger n' Beer?</div>
        <div style={{
          position: 'absolute',
          width: '98px',
          height: '76px',
          left: '240px',
          top: '375px',
          fontFamily: '"Inter", sans-serif',
          fontStyle: 'normal',
          fontWeight: '600',
          fontSize: '20px',
          lineHeight: '29px',
          display: 'flex',
          alignItems: 'center',
          textAlign: 'center',
          color: '#E90202'
        }}> <Link to="/register">Register</Link></div>

        </div>

        

        

        
    </div>
    </div>
    
    </div>
  );
}

export default Login;