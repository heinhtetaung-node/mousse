import { DETAIL_PRODUCT_FAIL, DETAIL_PRODUCT_REQUEST, DETAIL_PRODUCT_SUCCESS } from "../Constants/DetailConstants"

// DETAIL PRODUCT LIST
export const detailProductListReducer = (state = { detail: [] }, action) => {
    switch (action.type) {
        case DETAIL_PRODUCT_REQUEST:
            return { loading: true, detail: [] }
        case DETAIL_PRODUCT_SUCCESS:
            return { loading: false, detail: action.payload }
        case DETAIL_PRODUCT_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}
