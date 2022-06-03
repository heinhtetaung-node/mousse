import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { listProduct } from '../../../Redux/Action/ProductAction'
import { Error, Loading } from '../../index'
import prdouctStyle from './productStyle.module.css'

const Products = React.memo(() => {
    
    // All PRODUCTS AND SPECIFY PRODUCTS 
    const dispatch = useDispatch()
    const perLoad = 6 
    const listRef = useRef(null)
    const [datas, setData] = useState([])
    const [load, setLoad] = useState(true)
    const [index, setIndex] = useState(0)

    const productsList = useSelector(state => state.productsList)
    const { loading, error, products } = productsList

    const results = products.data
    

    useEffect(() => {
        dispatch(listProduct())
    }, [dispatch])

    useEffect(() => {
        setData(results?.slice(0, perLoad))
        setIndex(1)
    }, [results])

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (listRef && listRef.current) {
                if (window.scrollY + window.innerHeight >= listRef.current.clientHeight + listRef.current.offsetTop + 200) setLoad(true)
            }
        })
    }, [listRef])

    useEffect(() => {
        const getItems = () => {
            const pages = Math.floor(results?.length / perLoad)
            const maxIndex = results?.length % perLoad === 0 ? pages : pages + 1

            if (load && index <= maxIndex) {
                const start = perLoad * index
                const end = start + perLoad

                setData(datas.concat(results?.slice(start, end)))
                setIndex(index + 1)
            }
        }
        getItems()
        setLoad(false)
    }, [load, index, datas, results])

    return (
        <div className={prdouctStyle.main} ref={listRef}>
            <div className={prdouctStyle.grid_container}>
                {
                    loading ? (
                        <>
                            <Loading />
                        </>
                    ) : error ? (
                        <Error>{error}</Error>
                    ) : datas?.map(data => (
                            <div className={prdouctStyle.grid_item} key={data.id}>
                                <NavLink to={`/detail/${data.id}`}>
                                    <div className={prdouctStyle.image}>
                                        {data.attributes.Photo.data != null &&
                                            <>
                                                <div>
                                                    <img src={`http://159.223.81.146:8080${data.attributes.Photo.data[0].attributes.formats.small.url}`} alt="" />
                                                    {data.attributes.Photo.data.length > 1 &&
                                                        <img src={`http://159.223.81.146:8080${data.attributes.Photo.data[1].attributes.formats.small.url}`} alt="" />
                                                    }
                                                    {data.attributes.Photo.data.length < 2 &&
                                                        <img src={`http://159.223.81.146:8080${data.attributes.Photo.data[0].attributes.formats.small.url}`} alt="" />
                                                    }
                                                </div>
                                            </>
                                        }
                                    </div>
                                </NavLink>
                                <div className={prdouctStyle.grid_text}>
                                    <h3>{data.attributes.Title}</h3>
                                    <p>$ {data.attributes.Price}</p>
                                    <p>{data.attributes.trending.data.attributes.TrendingTitle}</p>
                                </div>
                                <div className={prdouctStyle.add_cart}>
                                    <button>ADD TO CART</button>
                                </div>
                            </div>
                        )  
                    )
                }
            </div>
        </div>
    )
})

export default Products