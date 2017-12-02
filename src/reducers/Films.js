const defaultState = {
	loading: false,
	loaded: false,
	data: []
};

export default function (state = defaultState, action) {
	switch (action.type) {
		case "START_SYNC_FILMS":
			return {...state, loading: true};
		case "END_SYNC_FILMS":
			return {...state, loading: false, loaded: true};
		case "SAVE_FILMS":
			return {...state, data: action.data};
		default:
			return state;
	}
}