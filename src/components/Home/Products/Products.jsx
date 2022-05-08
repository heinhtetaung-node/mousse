import React, { useEffect, useRef, useState } from 'react'
import prdouctStyle from './productStyle.module.css'

const Products = React.memo((props) => {

    const perLoad = 6 
    const listRef = useRef(null)
    const [data, setData] = useState([])
    const [load, setLoad] = useState(true)
    const [index, setIndex] = useState(0)

    useEffect(() => {
        setData(props.data.slice(0, perLoad))
        setIndex(1)
    }, [props.data])

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (listRef && listRef.current) {
                if (window.scrollY + window.innerHeight >= listRef.current.clientHeight + listRef.current.offsetTop + 200) setLoad(true)
            }
        })
    }, [listRef])

    useEffect(() => {
        const getItems = () => {
            const pages = Math.floor(props.data.length / perLoad)
            const maxIndex = props.data.length % perLoad === 0 ? pages : pages + 1

            if (load && index <= maxIndex) {
                const start = perLoad * index
                const end = start + perLoad

                setData(data.concat(props.data.slice(start, end)))
                setIndex(index + 1)
            }
        }
        getItems()
        setLoad(false)
    }, [load, index, data, props.data])

    console.log('products', data)

    return (
        <div className={prdouctStyle.main} ref={listRef}>
            <div className={prdouctStyle.grid_container}>
                {data.map((product, index) => (
                    <div className={prdouctStyle.grid_item} key={index}>
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
})

export default Products