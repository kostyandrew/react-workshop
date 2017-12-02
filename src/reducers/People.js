const defaultState = {
	loading: false,
	loaded: false,
	data: []
};

const responseToData = (el) => ({
	...el,
	id: el.url.match(/\d+/)[0],
	filmsIDs: [...el.films.map(filmUrl => filmUrl.match(/\d+/)[0])]
});

export default function (state = defaultState, action) {
	switch (action.type) {
		case "START_SYNC_PEOPLE":
			return { ...state, loading: true };
		case "END_SYNC_PEOPLE":
			return { ...state, loading: false, loaded: true };
		case "ADD_PEOPLE":
			return { ...state, data: [...state.data, ...action.data.map(responseToData)] };
		default:
			return state;
	}
}