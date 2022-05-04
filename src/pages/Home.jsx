import React, { lazy, Suspense } from 'react'
import { heroSliderData, list, productData } from '../asset/index'

// import { Tabname, HeroSlider, Products, List, Footer } from '../components/index'

const Tabname = lazy(() => import("../components/Tab/Tabname"))
const HeroSlider = lazy(() => import("../components/Home/Slider/HeroSlider"))
const List = lazy(() => import("../components/Home/List/List"))
const Products = lazy(() => import("../components/Home/Products/Products"))
const Footer = lazy(() => import("../components/Footer/Footer"))

const Home = () => {

    const products = productData.getAllProducts()

    return (
        <Suspense fallback={<div>Loading...</div>}>
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
        </Suspense>
    )
}

export default Home