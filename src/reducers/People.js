const defaultState = {
	loading: false,
	loaded: false,
	data: []
};

export default function (state = defaultState, action) {
	switch (action.type) {
		case "START_SYNC_PEOPLE":
			return {...state, loading: true};
		case "END_SYNC_PEOPLE":
			return {...state, loading: false, loaded: true};
		case "ADD_PEOPLE":
			return {...state, data: [...state.data, ...action.data]};
		default:
			return state;
	}
}