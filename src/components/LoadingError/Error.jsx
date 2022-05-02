import React from 'react'
import loadingError from './LoadingError.module.css'

const Error = ({children}) => {
    return (
        <div className={loadingError.error}>{children}</div>
    )
}

export default Error