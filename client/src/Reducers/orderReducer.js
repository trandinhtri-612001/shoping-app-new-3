export const OrderReducer = (
	state,
	action
) => {
	const { type, payload } =
		action;

	switch (type) {

case "ADD_ORDER":

	return{
...state,
cartloading:false,
carts:payload
	}
		case "GET_CART":
			return {
				...state,
				cartloading: false,
				carts: payload,
			};
		case "DELETE_CART":
			
			return {
				...state,
				cartloading: false,
				carts: state.carts.filter((el) => {
					return el._id !== payload._id
				})
				
			}
		case "UPDATE_CART":
			
			const newitem = state.carts.map(el => {
				if (el._id === payload._id) {
					return payload
				} else {
					return el
				}
			})
			return {
				...state,
				cartloading: false,
				carts:newitem
			}
		default:
			return state;
	}
};
