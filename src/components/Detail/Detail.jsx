import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listDetail } from '../../Redux/Action/DetailAction'
import { Error, Loading } from "../index"
import Tabname from '../Tab/Tabname'
import det from "./det.module.css"
import prdouctStyle from '../Home/Products/productStyle.module.css'
import Model from './Model'

const Detail = ({match}) => {
    const detailId = match.params.id
    const [datas, setDatas] = useState()
    const [activeSlide, setActiveSlide] = useState(0)
    const [clickedImg, setClickedImg] = useState(null)
    const [currentIndex, setCurrentindex] = useState(null)
    
    const dataLength = datas?.attributes.Photo.data.length
    const intialImg = datas?.attributes.Photo.data[0].attributes.formats.small.url

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

    const handelClick = (da, index) => {
        setCurrentindex(index)
        setClickedImg(da.attributes.formats.small.url)
    }

    const handelRotationRight = () => {
        const totalLength = dataLength
        if (currentIndex + 1 >= totalLength) {
            setCurrentindex(0)
            const newUrl = intialImg
            setClickedImg(newUrl)
            return
        }
        const newIndex = currentIndex + 1
        const newUrl = datas?.attributes.Photo.data.filter(item => {
            return datas?.attributes.Photo.data.indexOf(item) === newIndex
        })
        const newItem = newUrl[0].attributes.formats.small.url
        setClickedImg(newItem)
        setCurrentindex(newIndex)
    }

    const handelRotationLeft = () => {
        const totalLength = dataLength
        if (currentIndex === 0) {
            setCurrentindex(totalLength - 1)
            const newUrl = datas?.attributes.Photo.data[totalLength - 1].attributes.formats.small.url
            setClickedImg(newUrl)
            return
        }
        const newIndex = currentIndex - 1
        const newUrl = datas?.attributes.Photo.data.filter(item => {
            return datas?.attributes.Photo.data.indexOf(item) === newIndex
        })
        const newItem = newUrl[0].attributes.formats.small.url
        setClickedImg(newItem)
        setCurrentindex(newIndex)
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
                                {datas?.attributes.Photo.data.map((da, index) => {
                                    return (
                                        <div key={index} onClick={() => handelClick(da, index)} className={index === activeSlide ? "detailImg detailActive" : "detailImg"}>
                                        <img src={`http://159.223.81.146:8080${da.attributes.formats.small.url}`} alt="" />
                                    </div>
                                    )
                                })}
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
            {clickedImg && <Model clickedImg={clickedImg} handelRotationLeft={handelRotationLeft} handelRotationRight={handelRotationRight} setClickedImg={setClickedImg}/>}
        </Tabname>
        
    )
}

export default Detail