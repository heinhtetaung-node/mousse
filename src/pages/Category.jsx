import React, { lazy, Suspense } from 'react'
const Tabname = lazy(() => import("../components/Tab/Tabname"))
const Categories = lazy(() => import("../components/Category/Category/Categories"))
const Footer = lazy(() => import("../components/Footer/Footer"))

const Category = ({ match }) => {
    const categoryId = match.params.id

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Tabname title="Category">
                {/* ======== category start ======== */}
                <Categories categoryId={categoryId} />
                {/* ======== category end ======== */}

                {/* ======== footer start ======== */}
                <Footer />
                {/* ======== footer end ======== */}
            </Tabname>
        </Suspense>
    )
}

export default Category