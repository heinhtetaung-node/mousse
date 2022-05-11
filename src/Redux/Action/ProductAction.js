import { PRODUCTS_LIST_FAIL, PRODUCTS_LIST_REQUEST, PRODUCTS_LIST_SUCCESS } from "../Constants/ProductConstants"
import axios from "axios"

// ALL PRODUCTS LIST
export const listProduct = () => async(dispatch) => {
    try {
        dispatch({ type: PRODUCTS_LIST_REQUEST })

        const {data} = await axios.get(`http://159.223.81.146:8080/api/products`)
        dispatch({ type: PRODUCTS_LIST_SUCCESS, payload: data })
    } catch (error) {
        const message = error + ' Something Wrong'
        dispatch({ type: PRODUCTS_LIST_FAIL, payload: message })
    }
}