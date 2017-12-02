import React from "react";
import connectFilms from "../containers/Films";

class Films extends React.Component {
	render() {
		const { data } = this.props;
		return data
			? data.map((film) => (
				<div key={film.episode_id}>
					<h1>{film.title}</h1>
					<br />
					Director: {film.director}
				</div>
			))
			: "Loading";
	}
}

export default connectFilms(Films);