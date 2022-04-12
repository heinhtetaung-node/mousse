import React from 'react'
import cate from './categoryStyle.module.css'
import { category, colors, size, productData } from '../../../asset/index'
import { CheckBox, Products } from '../../index'

const Categories = () => {
    const products = productData.getAllProducts()

    return (
        <div className={cate.main}>
            <div className={cate.left}>
                <div className={cate.widget}>
                    <h2 className={cate.widget_title}>Category</h2>
                    <div className={cate.widget_content}>
                        {category.map((item, index) => (
                            <div key={index} className={cate.widget_item}>
                                <CheckBox data={item.display} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className={cate.widget}>
                    <h2 className={cate.widget_title}>Color</h2>
                    <div className={cate.widget_content}>
                        {colors.map((item, index) => (
                            <div key={index} className={cate.widget_item}>
                                <CheckBox data={item.display} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className={cate.widget}>
                    <h2 className={cate.widget_title}>Size</h2>
                    <div className={cate.widget_content}>
                        {size.map((item, index) => (
                            <div key={index} className={cate.widget_item}>
                                <CheckBox data={item.display} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className={cate.right}>
                <Products data={products} />
            </div>
        </div>
    )
}

export default Categories