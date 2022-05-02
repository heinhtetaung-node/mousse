import { CATEGORY_LIST_FAIL, CATEGORY_LIST_REQUEST, CATEGORY_LIST_SUCCESS, SUBCATEGORY_LIST_FAIL, SUBCATEGORY_LIST_REQUEST, SUBCATEGORY_LIST_SUCCESS } from "../Constants/CategoryConstants"

// CATEGORY LIST
export const categoryListReducer = (state = { categories: [] }, action) => {
    switch (action.type) {
        case CATEGORY_LIST_REQUEST:
            return { loading: true, categories: [] }
        case CATEGORY_LIST_SUCCESS:
            return { loading: false, categories: action.payload }
        case CATEGORY_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

// SUBCATEGORY LIST
export const subCategoryListReducer = (state = { subCategories: [] }, action) => {
    switch (action.type) {
        case SUBCATEGORY_LIST_REQUEST:
            return { loading: true, subCategories: [] }
        case SUBCATEGORY_LIST_SUCCESS:
            return { loading: false, subCategories: action.payload }
        case SUBCATEGORY_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}