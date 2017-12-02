const startSyncFilms = () => ({
	type: "START_SYNC_FILMS"
});

const endSyncFilms = () => ({
	type: "END_SYNC_FILMS"
});

const saveFilms = (data) => ({
	type: "SAVE_FILMS",
	data
});

export const syncFilms = () => (dispatch, getState) => {
	if(getState().Films.loaded) return;
	dispatch(startSyncFilms());
	fetch("https://swapi.co/api/films/")
		.then((response) => response.json())
		.then(({ results: data }) => {
			dispatch(saveFilms(data));
			dispatch(endSyncFilms());
		})
		.catch((e) => {
			dispatch(endSyncFilms());
			console.error(e)
		});
};