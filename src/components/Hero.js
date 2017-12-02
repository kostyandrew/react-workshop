import React from "react";
import {Link} from "react-router-dom";
import connectHero from "../containers/Hero";
import connectFilmsHero from "../containers/FilmsHero";
import NoMatch from "./NoMatch";

class Hero extends React.Component {
	render() {
		const { error, data, dataFilms, loading, loadingFilms } = this.props;
		return loading
			? "loading"
			: error === 404 ? <NoMatch />
				: (
					<div>
						<h1>{data.name}</h1>

						{!loadingFilms
							? <ul>
								{data.filmsIDs.map((id) => {
									const film = dataFilms.reduce((acc, el) => el.id === id ? el : acc, null);
									return <li key={id}>
										<Link to={`/films/${id}`}>{film.title}</Link>
									</li>
								})}
							</ul>
							: "loading films"}
					</div>
				)
	}
}

export default connectFilmsHero(connectHero(Hero));