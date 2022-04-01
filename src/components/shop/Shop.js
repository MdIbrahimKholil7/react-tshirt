import React from 'react';
import useProducts from '../../hooks/useProducts';
import Product from '../product/Product';
import './Shop.css'
const Shop = () => {

    const [products, setProducts] = useProducts()
    console.log(products)
    return (
        <div className='shop-container '>
            <div className="product-container px-9 py-10">
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                    />)
                }
            </div>
            <div className="cart-container bg-orange-200 sticky top-[80px] h-[87vh]">
                <h1>this is cart section </h1>
            </div>
        </div>
    );
};

export default Shop;