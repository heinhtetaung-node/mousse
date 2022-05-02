import React from 'react'
import loadingError from './LoadingError.module.css'

const Loading = () => {
    return (
        <div className={loadingError.loader}></div>
    )
}

export default Loading