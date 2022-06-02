import React, { lazy, Suspense } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { listProductbyCateogry } from '../Redux/Action/ProductAction.js'
const Tabname = lazy(() => import("../components/Tab/Tabname"))
const Categories = lazy(() => import("../components/Category/Category/Categories"))
const Footer = lazy(() => import("../components/Footer/Footer"))

const Category = ({ match }) => {
    // const dispatch = useDispatch()
    const categoryId = match.params.id

    // const productsCatList = useSelector(state => state.productsCatList)
    // const { loading, error, productsCat } = productsCatList

    // const results = productsCat
    // useEffect(() => {
    //     dispatch(listProductbyCateogry(categoryId))
    // }, [dispatch, categoryId])

    // useEffect(() => {
    //     console.log('results', results)
    // }, [results])

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