import React from 'react';
import CustomLink from '../customLink/CustomLink';
import './Header.css'
const Header = () => {
    return (
        <div className='"nav w-full sticky top-0 text-white bg-slate-800 h-[80px] flex justify-center items-center'>
            <div className="nav w-11/12  mx-auto h-full flex justify-between items-center">
                <div className="logo">
                    <h1 className='text-2xl'>Marvel T-Shirt</h1>
                </div>
                <div className='flex items-center'>
                    <CustomLink to='/'>Shop</CustomLink>
                    <CustomLink to='/order'>Order</CustomLink>
                    <CustomLink to='/contact'>Contact</CustomLink>
                </div>
            </div>
        </div>
    );
};

export default Header;