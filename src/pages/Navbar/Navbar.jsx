import React, { useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Nav from './Navbar.module.css'

const mainNav = [
    {
        display: 'Home',
        path: "/"
    },
    {
        display: 'Cateogry',
        path: "/category"
    },
    {
        display: 'Size',
        path: "/size"
    },
    {
        display: 'About',
        path: "/about"
    },
]

const Navbar = () => {

    const headerRef = useRef(null)
    const menuLeft = useRef(null)
    const {pathname} = useLocation()
    const activeNav = mainNav.findIndex(e => e.path === pathname)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (document.body.scrollTop > 25 || document.documentElement.scrollTop > 25) {
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
                <div className={`nav_menu`} ref={menuLeft}>
                    <div className={Nav.toggle_close} onClick={menuToggle}>
                        <i className="fas fa-chevron-left"></i>
                    </div>
                    {
                        mainNav.map((item, index) => (
                            <div key={index} className={Nav.main} onClick={menuToggle}>
                                <Link className={Nav.nav_dispaly} to={item.path}>
                                    <span className={`nav_font ${index === activeNav ? 'active' : ''}`}>{ item.display }</span>
                                </Link>
                            </div>
                        ))
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