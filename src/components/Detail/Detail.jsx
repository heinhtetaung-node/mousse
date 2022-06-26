import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listDetail } from '../../Redux/Action/DetailAction'
import { Error, Loading } from "../index"
import Tabname from '../Tab/Tabname'
import det from "./det.module.css"
import prdouctStyle from '../Home/Products/productStyle.module.css'

const Detail = ({match}) => {
    const detailId = match.params.id
    const [datas, setDatas] = useState()
    const [activeSlide, setActiveSlide] = useState(0)
    
    const dataLength = datas?.attributes.Photo.data.length

    // DETAIL PRODUCT LIST
    const dispatch = useDispatch()
    const detailProductList = useSelector(state => state.detailProductList)
    const { loading, error, detail } = detailProductList

    useEffect(() => {
        dispatch(listDetail(detailId))
    }, [dispatch, detailId])

    useEffect(() => {
        setDatas(detail.data)
    }, [detail])

    const nextSlide = useCallback(() => {
        const index = activeSlide + 1 === dataLength ? 0 : activeSlide + 1
        setActiveSlide(index)
    }, [activeSlide, dataLength])

    const prevSlide = () => {
        const index = activeSlide - 1 < 0 ? dataLength - 1 : activeSlide - 1
        setActiveSlide(index)
    }

    return (
        <Tabname title="Detail">
            {
                loading ? (
                    <div className={prdouctStyle.loadingCenter}>
                        <Loading />
                    </div>
                ) : error ? (
                    <Error>{error}</Error>
                ) : (
                    <div className={det.main}>
                        <div className={det.container}>
                            <div className={det.imgContainer}>
                                {datas?.attributes.Photo.data.map((da, index) => (
                                    <div key={index} className={index === activeSlide ? "detailImg detailActive" : "detailImg"}>
                                        <img src={`http://159.223.81.146:8080${da.attributes.formats.small.url}`} className={det.imageHover} alt="" />
                                    </div>
                                ))}
                                <div className={det.arrowDetail}>
                                    <div className={det.control_item} onClick={prevSlide}>
                                        <i className="fas fa-chevron-up"></i>
                                    </div>
                                    <div className={det.control_item} onClick={nextSlide}>
                                        <i className="fas fa-chevron-down"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className={det.rightDetail}>
                            <h2>{datas?.attributes.Title}</h2>
                            <i><span>{datas?.attributes.Price.toLocaleString()}</span> kyats</i>
                            <p>{datas?.attributes.LongDescription}</p>
                            <p>Size: <span>{datas?.attributes.Size}</span></p>
                            <p>UpTo: <span>{datas?.attributes.UpTo}</span></p>
                            <p>Available Color: <span>{datas?.attributes.AvailableColor}</span></p>
                        </div>
                    </div>
                )
            }
        </Tabname>
        
    )
}

export default Detail