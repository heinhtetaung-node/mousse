import React, { useEffect, useRef, useState, useCallback } from 'react'
import { NavLink } from 'react-router-dom'
import { CheckBox } from '../../index'
import { useDispatch, useSelector } from 'react-redux'
import { listSubCategory } from '../../../Redux/Action/CategoryAction'
import { Loading, Error } from '../../index'
import { listProductbyCateogry } from '../../../Redux/Action/ProductAction'
import prdouctStyle from '../../Home/Products/productStyle.module.css'
import cate from './categoryStyle.module.css'
import noAvatar from '../../../asset/images/noAvatar.png'

const Categories = React.memo((props) => {
    const initFilter = {
        category: []
    }

    let subCates
    const { categoryId } = props
    const dispatch = useDispatch()
    const [data, getData] = useState([])
    const perLoad = 6 
    const listRef = useRef(null)
    const [load, setLoad] = useState(true)
    const [index, setIndex] = useState(0)
    const [filter, setFilter] = useState(initFilter)

    // SUBCATEGORY LIST
    const subCategoryList = useSelector(state => state.subCategoryList)
    const { loadings, errors, subCategories } = subCategoryList

    const results = subCategories.data
    if (results) subCates = results.attributes.trendings.data

    // PRODUCTS CATEGORY LIST
    const productsCatList = useSelector(state => state.productsCatList)
    const { loading, error, productsCat } = productsCatList

    const result = productsCat

    useEffect(() => {
        dispatch(listSubCategory(categoryId))
        dispatch(listProductbyCateogry(categoryId))
    }, [dispatch, categoryId])

    useEffect(() => {
        getData(result?.slice(0, perLoad))
        setIndex(1)
    }, [result])

    const filterRef = useRef(null)
    const showHideFilter = () => filterRef.current.classList.toggle('active_left')

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (listRef && listRef.current) {
                if (window.scrollY + window.innerHeight >= listRef.current.clientHeight + listRef.current.offsetTop + 150) setLoad(true)
            }
        })
    }, [listRef])

    useEffect(() => {
        const getItems = () => {
            const pages = Math.floor(result?.length / perLoad)
            const maxIndex = result?.length % perLoad === 0 ? pages : pages + 1

            if (load && index <= maxIndex) {
                const start = perLoad * index
                const end = start + perLoad

                getData(data.concat(result?.slice(start, end)))
                setIndex(index + 1)
            }
        }
        getItems()
        setLoad(false)
    }, [load, index, data, result])

    const filterSelect = (type, checked, item) => {
        if (checked) {
            switch (type) {
                case "CATEGORY":
                    setFilter({...filter, category: [...filter.category, item.id]})
                    break;
            
                default:
            }
        }else{
            switch (type) {
                case "CATEGORY":
                    const newCategory = filter.category.filter(e => e !== item.id)
                    setFilter({...filter, category: newCategory})
                    break
            
                default:
            }
        }
    }

    const updateProducts = useCallback(() => {
        let temp = result

        if (filter.category.length > 0) {
            temp = temp.filter(e => filter.category.includes(e.attributes.trending.data.id))
        }
        getData(temp)
    }, [filter, result])

    useEffect(() => {
        updateProducts()
    }, [updateProducts])

    return (
        <div className={cate.main} ref={listRef}>
            <div className={`left`} ref={filterRef}>
                <div className={cate.cate_left}>
                    <i className="fas fa-chevron-left" onClick={showHideFilter}></i>
                </div>
                <div className={cate.widget}>
                    <h2 className={cate.widget_title}>Trending</h2>
                    <div className={cate.widget_content}>
                        {
                            loadings ? (
                                <>
                                    <Loading />
                                </>
                            ) : errors ? (
                                <Error>{errors}</Error>
                            ) : subCates && (
                                subCates.map(subCate => (
                                    <div key={subCate.id} className={cate.widget_item}>
                                        <CheckBox 
                                            data={subCate.attributes.TrendingTitle} 
                                            onChange={(input) => filterSelect("CATEGORY", input.checked, subCate)} 
                                        />
                                    </div>
                                ))
                            )
                        }
                    </div>
                </div>
            </div>
            <div className={cate.filter__toggle}>
                <i className="fas fa-sort-amount-up-alt" onClick={showHideFilter}></i>
            </div>
            <div className={cate.right}>
                <div className={prdouctStyle.main}>
                    <div className={prdouctStyle.grid_container}>
                        {
                            loading ? (
                                <div className={prdouctStyle.loadingCenter}>
                                    <Loading />
                                </div>
                            ) : error ? (
                                <Error>{error}</Error>
                            ) : data?.map((data, index) => (
                                    <div className={prdouctStyle.grid_item} key={index}>
                                        <NavLink to={`/detail/${data.id}`}>
                                            <div className={prdouctStyle.image}>
                                                {data.attributes.Photo.data != null ?
                                                    <>
                                                        <div>
                                                            <img src={`https://app.moussemyanmar.com${data.attributes.Photo.data[0].attributes.formats.small.url}`} alt="" />
                                                            {data.attributes.Photo.data.length > 1 &&
                                                                <img src={`https://app.moussemyanmar.com${data.attributes.Photo.data[1].attributes.formats.small.url}`} alt="" />
                                                            }
                                                            {data.attributes.Photo.data.length < 2 &&
                                                                <img src={`https://app.moussemyanmar.com${data.attributes.Photo.data[0].attributes.formats.small.url}`} alt="" />
                                                            }
                                                        </div>
                                                    </> :
                                                    <>
                                                        <img src={noAvatar} alt="" />
                                                    </>
                                                }
                                            </div>
                                        </NavLink>
                                        <div className={prdouctStyle.grid_text}>
                                            <h3>{data.attributes.Title}</h3>
                                            <p>$ {data.attributes.Price}</p>
                                        </div>
                                    </div>
                                )  
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
})

export default Categories