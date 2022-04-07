import React, {useRef} from 'react'
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

    const {pathname} = useLocation()
    const activeNav = mainNav.findIndex(e => e.path === pathname)

    console.log(activeNav)

    return (
        <div className={Nav.nav}>
            <div className={Nav.wrapper}>
                <div className={Nav.nav_menu}>
                    {
                        mainNav.map((item, index) => (
                            <div key={index} className={Nav.main} >
                                <Link className={Nav.nav_dispaly} to={item.path}>
                                    <span className={`nav_font ${index === activeNav ? 'active' : ''}`}>{ item.display }</span>
                                </Link>
                            </div>
                        ))
                    }
                </div>
                <div className={Nav.menu_icon}>
                    <i class="fas fa-cart-arrow-down"></i>
                </div>
            </div>
        </div>
    )
}

export default Navbar