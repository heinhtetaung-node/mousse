import React, {useEffect, useState, useCallback} from 'react'
import heroSlider from './heroSlider.module.css'

const HeroSlider = props => {

    const data =  props.data
    const timeOut = props.timeOut ? props.timeOut : 5000
    const [activeSlide, setActiveSlide] = useState(0)

    const nextSlide = useCallback(() => {
        const index = activeSlide + 1 === data.length ? 0 : activeSlide + 1
        setActiveSlide(index)
    }, [activeSlide, data])

    const prevSlide = useCallback(() => {
        const index = activeSlide - 1 < 0 ? data.length - 1 : activeSlide - 1
        setActiveSlide(index)
    }, [activeSlide, data])

    useEffect(() => {
        if (props.auto) {
            const slideAuto = setInterval(() => {
                nextSlide()
            }, timeOut)
            return () => {
                clearInterval(slideAuto)
            }
        }
    }, [timeOut, props, nextSlide])

    return (
        <>
            <div className={heroSlider.container}>
                <div className={heroSlider.hero_slider}>
                    {
                        data.map((item, index) => (
                            <HeroSliderItem key={index} item={item} active={index === activeSlide} />
                        ))
                    }
                </div>
                <div className={heroSlider.slider_control}>
                    <div className={heroSlider.control_item} onClick={prevSlide}>
                        <i className="fas fa-chevron-left"></i>
                    </div>
                    <div className={heroSlider.control_item}>
                        <div className={heroSlider.index}> {activeSlide + 1} / {data.length} </div>
                    </div>
                    <div className={heroSlider.control_item} onClick={nextSlide}>
                        <i className="fas fa-chevron-right"></i>
                    </div>
                </div>
            </div>
        </>
    )
}

const HeroSliderItem = props => (
    <div className={`hero_slider_item ${props.active ? 'slider_active' : ''}`}>
        <div className={`hero_slider_info`}>
            <div className={`hero_slider_title`}>
                <span>{props.item.title}</span>
            </div>
            <div className={`hero_slider_description`}>
                <span>{props.item.description}</span>
            </div>
        </div>
        <div className={`hero_slider_image`}>
            <img src={props.item.img} alt="" />
        </div>
    </div>
)

export default HeroSlider