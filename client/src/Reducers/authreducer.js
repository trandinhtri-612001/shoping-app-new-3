export const Authreducer = (
	state,
	action
) => {
	const { type, payload } =
		action;
	switch (type) {
		case "FAILURE":
			return {
				...state,
				authloading: false,
				isauthenticated: false,
				user: payload,
			};
		case "GET_USER":
			return {
				...state,
				authloading: false,
				isauthenticated: true,
				user: payload,
			};

		case "LOGOUT":
			return {
				...state,
				authloading: true,
				isauthenticated: false,
				uer: payload,
			};

		default:
			return { ...state };
	}
};
