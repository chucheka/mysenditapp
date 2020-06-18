const initialState = {
	items: null,
	isLoading: false,
	errors: null
};

const adminReducer = (state = initialState, action) => {
	switch (action) {
		case 'hhs':
			return {
				...state
			};
			break;

		default:
			break;
	}
};

export default adminReducer;
