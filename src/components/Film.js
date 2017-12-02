import React from "react";
import {Link} from "react-router-dom";
import connectFilm from "../containers/Film";
import NoMatch from "./NoMatch";

class Film extends React.Component {
	render() {
		const { data, error, loading } = this.props;
		return error === 404 ?
			<NoMatch />
			: !loading
				? (<div>
					<Link to="/films">Back to films</Link>
					<h1>{data.title} #{data.episode_id}</h1>
					<div>
						Director: {data.director}
					</div>
					<div>
						{data.opening_crawl}
					</div>
				</div>)
				: "Loading";
	}
}

export default connectFilm(Film);