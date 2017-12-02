const startSyncPeople = () => ({
	type: "START_SYNC_PEOPLE"
});

const endSyncPeople = () => ({
	type: "END_SYNC_PEOPLE"
});

const addPeople = (data) => ({
	type: "ADD_PEOPLE",
	data
});

export const syncPeople = () => (dispatch, getState) => {
	if(getState().People.loaded) return;
	dispatch(startSyncPeople());
	makeRequest("https://swapi.co/api/people/", dispatch);
};

const makeRequest = (url, dispatch) =>
	fetch(url)
		.then((response) => response.json())
		.then(({ results: data, next }) => {
			dispatch(addPeople(data));
			if(next) {
				makeRequest(next, dispatch);
			} else {
				dispatch(endSyncPeople());
			}
		})
		.catch((e) => {
			dispatch(endSyncPeople());
			console.error(e)
		});