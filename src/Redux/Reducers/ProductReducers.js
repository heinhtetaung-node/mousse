import { PRODUCTS_CAT_FAIL, PRODUCTS_CAT_REQUEST, PRODUCTS_CAT_SUCCESS, PRODUCTS_LIST_FAIL, PRODUCTS_LIST_REQUEST, PRODUCTS_LIST_SUCCESS } from "../Constants/ProductConstants"

// ALL PRODUCT LIST
export const productsListReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case PRODUCTS_LIST_REQUEST:
            return { loading: true, products: [] }
        case PRODUCTS_LIST_SUCCESS:
            return { loading: false, products: action.payload }
        case PRODUCTS_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

// PRODUCTS CATEGORY LIST
export const productsCatListReducer = (state = { productsCat: [] }, action) => {
    switch (action.type) {
        case PRODUCTS_CAT_REQUEST:
            return { loading: true, productsCat: [] }
        case PRODUCTS_CAT_SUCCESS:
            return { loading: false, productsCat: action.payload }
        case PRODUCTS_CAT_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}
