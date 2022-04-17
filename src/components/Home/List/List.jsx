import React from 'react'
import listStyle from './listStyle.module.css'

const List = props => {
    const data = props.data

    return (
        <div className={listStyle.header}>
            <h1>Popular Trend</h1>
            <div className={listStyle.main}>
                {data.map((list, index) => (
                    <div className={listStyle.container} key={index}>
                        <img src={list.img} alt="" />
                        <div className={listStyle.info}>
                            <h2>{list.title}</h2>
                            <button>SHOP NOW</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default List