import React from "react";
import { syncFilms } from "../actions/films";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

export default function (RenderComponent) {
	class Wrapper extends React.Component {
		componentWillMount() {
			this.props.syncFilms();
		}

		render() {
			const { Film, Loading } = this.props;
			const error = Film === null && !Loading ? 404 : false;

			return <RenderComponent {...this.props} data={Film} error={error} loading={Loading}/>;
		}
	}

	const mapStateToProps = (state, props) => {
		const { match: { params: { id } } } = props;
		return ({
			Loading: state.Films.loading,
			Film: state.Films.data.reduce((acc, elem) =>
					elem.url.match(/\d/)[0] === id
						? elem
						: acc,
				null
			)
		})
			;
	};
	const mapDispatchToProps = (dispatch) => bindActionCreators({
		syncFilms
	}, dispatch);

	return connect(mapStateToProps, mapDispatchToProps)(Wrapper);
}