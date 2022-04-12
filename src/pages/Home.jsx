import React from 'react'
import { Tabname, HeroSlider, Products, List, Footer } from '../components/index'
import { heroSliderData, list, productData } from '../asset/index'

const Home = () => {

    const products = productData.getAllProducts()

    return (
        <Tabname title="Home">
            {/* ===== slider start ===== */}
            <HeroSlider data={heroSliderData} timeOut={3000} control={true} auto={true}/>
            {/* ===== slider end ===== */}

            {/* ===== list start ===== */}
            <List data={list}/>   
            {/* ===== list end ===== */}

            {/* ======== products start ======== */}
            <div className='product'>
                <h1>Best Seller</h1>
                <Products data={products} />
            </div>
            {/* ======== products end ======== */}

            {/* ======== footer start ======== */}
            <Footer />
            {/* ======== footer end ======== */}
        </Tabname>
    )
}

export default Home