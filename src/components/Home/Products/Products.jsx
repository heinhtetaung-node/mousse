import React from 'react'
import prdouctStyle from './productStyle.module.css'
import {productData} from '../../../asset/index'

const Products = () => {
    return (
        <div className={prdouctStyle.main}>
            <h1>Best Seller</h1>
            <div className={prdouctStyle.grid_container}>
                {productData.getAllProducts().map(product => (
                    <div className={prdouctStyle.grid_item} key={product.id}>
                        <div className={prdouctStyle.image}>
                            <img src={product.image01} alt="" />
                            <img src={product.image02} alt="" />
                        </div>
                        <div className={prdouctStyle.grid_text}>
                            <h3>{product.title}</h3>
                            <p>$ {product.price}</p>
                        </div>
                        <div className={prdouctStyle.add_cart}>
                            <button>ADD TO CART</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Products