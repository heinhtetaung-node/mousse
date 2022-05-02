import { CATEGORY_LIST_FAIL, CATEGORY_LIST_REQUEST, CATEGORY_LIST_SUCCESS, SUBCATEGORY_LIST_FAIL, SUBCATEGORY_LIST_REQUEST, SUBCATEGORY_LIST_SUCCESS } from "../Constants/CategoryConstants"
import axios from "axios"

// CATEGORY LIST
export const listCategory = () => async(dispatch) => {
    try {
        dispatch({ type: CATEGORY_LIST_REQUEST })

        const {data} = await axios.get(`http://159.223.81.146:8080/api/main-categories?populate=*`)
        dispatch({ type: CATEGORY_LIST_SUCCESS, payload: data })
    } catch (error) {
        const message = error + ' Something Wrong'
        dispatch({ type: CATEGORY_LIST_FAIL, payload: message })
    }
}

// CATEGORY LIST
export const listSubCategory = id => async(dispatch) => {
    try {
        dispatch({ type: SUBCATEGORY_LIST_REQUEST })

        const {data} = await axios.get(`http://159.223.81.146:8080/api/main-categories/${id}?populate=*`)
        dispatch({ type: SUBCATEGORY_LIST_SUCCESS, payload: data })
    } catch (error) {
        const message = error + ' Something Wrong'
        dispatch({ type: SUBCATEGORY_LIST_FAIL, payload: message })
    }
}