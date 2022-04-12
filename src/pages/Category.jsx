import React from 'react'
import {Tabname, Categories, Footer} from '../components/index'

const Category = () => {
    return (
        <Tabname title="Category">
            {/* ======== category start ======== */}
            <Categories />
            {/* ======== category end ======== */}

            {/* ======== footer start ======== */}
            <Footer />
            {/* ======== footer end ======== */}
        </Tabname>
    )
}

export default Category