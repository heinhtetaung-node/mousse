import React from 'react'
import { Link } from "react-router-dom"
import notFound from './notFound.module.css'

const NotFound = () => {
    return (
        <div className={notFound.center}>
            <h2>Page Not Found</h2>
            <img src="/images/not-found.png" alt="Not-found" />
            <div className={notFound.button}>
                <Link to="/" className={notFound.buttonText}>Home Page</Link>
            </div>
        </div>
    )
}

export default NotFound