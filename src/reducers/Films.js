const defaultState = {
	loading: false,
	loaded: false,
	data: []
};


const responseToData = (el) => ({
	...el,
	id: el.url.match(/\d+/)[0],
});

export default function (state = defaultState, action) {
	switch (action.type) {
		case "START_SYNC_FILMS":
			return {...state, loading: true};
		case "END_SYNC_FILMS":
			return {...state, loading: false, loaded: true};
		case "SAVE_FILMS":
			return {...state, data: action.data.map(responseToData)};
		default:
			return state;
	}
}