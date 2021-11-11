export const ProductReducer = (state, action) => {
    const { type,
        payload,
    } = action
   
    switch (type) {
        case 'ADD_PRODUCT':
            return {
                ...state,
		authLoading:false,
		isAuthenticated:true,
		user:payload
            }
        
        case 'LOG_OUT':
            return {
                ...state,
                authLoading: false,
                isAuthenticated: false,
                user:payload
            }
        default:
            return state
    }

}