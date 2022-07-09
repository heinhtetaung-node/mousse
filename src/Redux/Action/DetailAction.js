import { DETAIL_PRODUCT_FAIL, DETAIL_PRODUCT_REQUEST, DETAIL_PRODUCT_SUCCESS } from "../Constants/DetailConstants"
import axios from "axios"

// DETAIL LIST
export const listDetail = id => async(dispatch) => {
    try {
        dispatch({ type: DETAIL_PRODUCT_REQUEST })

        const {data} = await axios.get(`https://app.moussemyanmar.com/api/products/${id}?populate=*`)
        dispatch({ type: DETAIL_PRODUCT_SUCCESS, payload: data })
    } catch (error) {
        const message = error + ' Something Wrong'
        dispatch({ type: DETAIL_PRODUCT_FAIL, payload: message })
    }
}