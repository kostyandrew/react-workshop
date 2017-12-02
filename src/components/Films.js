import React from "react";
import { Link } from "react-router-dom";
import connectFilms from "../containers/Films";

class Films extends React.Component {
	render() {
		const { data } = this.props;
		return data
			? data.map((film) => {
				const id = (film.url.match(/\d/)[0]);
				return (
						<div key={film.episode_id}>
							<h1>
								<Link to={`/films/${id}`}>
									{film.title}
								</Link>
							</h1>
							<br />
							Director: {film.director}
						</div>
					)
				}
			)
			: "Loading";
	}
}

export default connectFilms(Films);