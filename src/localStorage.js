export const getStore = () => {
	try {
		const store = localStorage.getItem("_store");
		if (store === null) {
			return undefined;
		}
		return JSON.parse(store);
	} catch (e) {
		console.log(e);
		return undefined;
	}
};

export const setStore = (state) => {
	localStorage.setItem("_store", JSON.stringify(state));
};