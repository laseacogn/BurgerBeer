import React from 'react'
import Header2 from '../components/Header/Header2';
import Footer from '../components/Footer/Footer';


const LayoutDefault = ({ children }) => {
    return (
        <>
            <Header2 />
            {children}
            <Footer />
        </>
    );
}

export default LayoutDefault;