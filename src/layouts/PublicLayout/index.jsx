import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

const PublicLayout = ({ children }) => {
    return (
        <div>
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default PublicLayout;
