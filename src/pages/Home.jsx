import React, { lazy, Suspense } from 'react'
import { heroSliderData, productData } from '../asset/index'

const Tabname = lazy(() => import("../components/Tab/Tabname"))
const HeroSlider = lazy(() => import("../components/Home/Slider/HeroSlider"))
const Products = lazy(() => import("../components/Home/Products/Products"))
const Footer = lazy(() => import("../components/Footer/Footer"))

const Home = () => {

    const products = productData.getAllProducts()

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Tabname title="Home">
                {/* ===== slider start ===== */}
                <HeroSlider data={heroSliderData} timeOut={15000} control={true} auto={true}/>
                {/* ===== slider end ===== */}

                {/* ======== products start ======== */}
                <div className='product'>
                    <h1>All Products</h1>
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