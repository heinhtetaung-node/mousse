import { PRODUCTS_CAT_FAIL, PRODUCTS_CAT_REQUEST, PRODUCTS_CAT_SUCCESS, PRODUCTS_LIST_FAIL, PRODUCTS_LIST_REQUEST, PRODUCTS_LIST_SUCCESS } from "../Constants/ProductConstants"
import axios from "axios"

// ALL PRODUCTS LIST
export const listProduct = () => async(dispatch) => {
    try {
        dispatch({ type: PRODUCTS_LIST_REQUEST })

        const {data} = await axios.get(`https://app.moussemyanmar.com/api/products?populate=*&pagination[page]=1&pagination[pageSize]=100`)
        dispatch({ type: PRODUCTS_LIST_SUCCESS, payload: data })
    } catch (error) {
        const message = error + ' Something Wrong'
        dispatch({ type: PRODUCTS_LIST_FAIL, payload: message })
    }
}

export const listProductbyCateogry = categoryId => async(dispatch) => {
    const id = parseInt(categoryId)
    
    try {
        dispatch({ type: PRODUCTS_CAT_REQUEST })

        const {data} = await axios.get(`https://app.moussemyanmar.com/api/products?populate=*&pagination[page]=1&pagination[pageSize]=100`)
        const filterByCat = data.data.filter(d => d.attributes.main_category.data.id === id)
        
        dispatch({ type: PRODUCTS_CAT_SUCCESS, payload: filterByCat })
    } catch (error) {
        const message = error + ' Something Wrong'
        dispatch({ type: PRODUCTS_CAT_FAIL, payload: message })
    }
}
