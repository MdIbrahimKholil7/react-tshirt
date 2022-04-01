import React from 'react';

const Product = ({product}) => {
    const {picture,price,name}=product
    console.log(product)
    return (
        <div className='border-solid border-[1px] p-4 indigo-200 h-[450px] rounded-lg'>
            <div className='w-full h-[300px]'>
                <img className='w-full h-full object-cover rounded-lg' src={picture} alt="product image" />
            </div>
            <div className="details pt-1">
                <h1>{name}</h1>
                <p>Price:{price}</p>
                <button className='bg-slate-800 px-6 py-3 rounded-lg text-white my-3'>
                    Add To Cart
                </button>
            </div>
        </div>
    );
};

export default Product;