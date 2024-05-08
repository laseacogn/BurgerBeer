import React from 'react'
import Header3 from '../components/Header/Header3';
import Footer from '../components/Footer/Footer';


const LayoutAdmin = ({ children }) => {
    return (
        <>
            <Header3 />
            {children}
            <Footer />
        </>
    );
}

export default LayoutAdmin;