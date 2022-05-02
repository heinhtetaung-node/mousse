import React from 'react'
import {Tabname, Categories, Footer} from '../components/index'

const Category = ({ match }) => {
    const subCategoryId = match.params.id

    return (
        <Tabname title="Category">
            {/* ======== category start ======== */}
            <Categories subCategoryId={subCategoryId} />
            {/* ======== category end ======== */}

            {/* ======== footer start ======== */}
            <Footer />
            {/* ======== footer end ======== */}
        </Tabname>
    )
}

export default Category