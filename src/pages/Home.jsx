import React from 'react'
import { Tabname, HeroSlider, Products, List, Footer } from '../components/index'
import { heroSliderData, list } from '../asset/index'

const Home = () => {
    return (
        <Tabname title="Home">
            {/* ===== slider start ===== */}
            <HeroSlider data={heroSliderData} timeOut={3000} control={true} auto={true}/>
            {/* ===== slider end ===== */}

            {/* ===== list start ===== */}
            <List data={list}/>   
            {/* ===== list end ===== */}

            {/* ======== products start ======== */}
            <Products />
            {/* ======== products end ======== */}

            {/* ======== footer start ======== */}
            <Footer />
            {/* ======== footer end ======== */}
        </Tabname>
    )
}

export default Home