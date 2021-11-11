export const Productreducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'GET_PRODUCT':
          
            return {
                ...state,
                products: payload,
                productloading:false
            }
        case 'GET_FULL_PRODUCT':
            return {
                ...state,
                products: payload,
                productloading:false
            }
        default:
            return state
    }
}
