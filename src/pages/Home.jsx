import React from 'react'
import { Tabname, HeroSlider} from '../components/index'
import heroSliderData from '../asset/datas/heroSlider'

const Home = () => {
    return (
        <Tabname title="Home">
            {/* ===== slider start ===== */}
            <HeroSlider data={heroSliderData} timeOut={3000} control={true} auto={true}/>
            {/* ===== slider end ===== */}
        </Tabname>
    )
}

export default Home