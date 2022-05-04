import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { listCategory } from '../../Redux/Action/CategoryAction'
import Nav from './Navbar.module.css'
import { Loading, Error } from '../../components/index'

const Navbar = () => {
    const [select, setSelect] = useState(null)

    const dispatch = useDispatch()

    const headerRef = useRef(null)
    const menuLeft = useRef(null)

    const categoryList = useSelector(state => state.categoryList)
    const { loading, error, categories } = categoryList
    const results = categories.data

    useEffect(() => {
        dispatch(listCategory())
    }, [dispatch])

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                headerRef.current.classList.add('shrink')
            }else{
                headerRef.current.classList.remove('shrink')
            }
        })
        return () => {
            window.removeEventListener('scroll')
        }
    }, [])    

    const menuToggle = () => menuLeft.current.classList.toggle('active')

    const selectCategory = (category) => { 
        if (category) setSelect(category)
    }

    return (
        <div className={`nav`} ref={headerRef}>
            <div className={Nav.wrapper}>
                <div className={Nav.mobile_toggle} onClick={menuToggle}>
                    <i className="fas fa-bars"></i>
                </div>
                <div className={Nav.logo} onClick={() => {window.location.href="/"}}>
                    <h2>Mousse</h2>
                </div>
                <div className={`nav_menu`} ref={menuLeft}>
                    <div className={Nav.toggle_close} onClick={menuToggle}>
                        <i className="fas fa-chevron-left"></i>
                    </div>
                    {
                        loading ? (
                            <>
                                <Loading />
                            </>
                        ) : error ? (
                            <Error>{error}</Error>
                        ) : results && (
                            results.map(result => (
                                <div key={result.id} className={Nav.main} onClick={menuToggle}>
                                    <Link className={Nav.nav_dispaly} to={`/category/${result.id}`}>
                                        <span className={`nav_font ${result.id === select ? 'active' : ''}`} onClick={() => selectCategory(result.id)}>{result.attributes.Title}</span>
                                    </Link>
                                </div>
                            ))
                        )
                    }
                </div>
                <div className={Nav.menu_icon}>
                    <i className="fas fa-cart-arrow-down"></i>
                </div>
            </div>
        </div>
    )
}

export default Navbar