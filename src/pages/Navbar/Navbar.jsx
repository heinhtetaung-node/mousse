import React, { useEffect, useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { listCategory } from '../../Redux/Action/CategoryAction'
import Nav from './Navbar.module.css'
import { Loading, Error } from '../../components/index'

const Navbar = () => {
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
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
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

    return (
        <div className={`nav`} ref={headerRef}>
            <div className={Nav.wrapper}>
                <div className={Nav.mobile_toggle} onClick={menuToggle}>
                    <i className="fas fa-bars"></i>
                </div>
                <Link className={Nav.logo} to={'/'}>
                    <h2>Mousse1</h2>
                </Link>
                <nav ref={menuLeft}>
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
                                    <NavLink to={`/category/${result.id}`}>
                                        <span>{result.attributes.Title}</span> 
                                    </NavLink>
                                </div>
                            ))
                        )
                    }
                </nav>
                <div className={Nav.menu_icon}>
                    {/* <i className="fas fa-cart-arrow-down"></i> */}
                </div>
            </div>
        </div>
    )
}

export default Navbar
