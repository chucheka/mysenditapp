const initialState = {
	parcels: null,
	isLoading: false,
	errors: null
};

const parcelReducer = (state = initialState, action) => {
	switch (action) {
		case '':
			return {
				...state
			};
			break;

		default:
			break;
	}
};

export default parcelReducer;
