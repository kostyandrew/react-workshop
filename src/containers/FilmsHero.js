import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux'
import { syncFilms } from "../actions/films";


export default function (RenderComponent) {
	class Wrapper extends React.Component {
		componentWillMount() {
			this.props.syncFilms();
		}

		render() {
			const { Films: { data, loading } } = this.props;

			return <RenderComponent {...this.props} dataFilms={data} loadingFilms={loading} />;
		}
	}

	const mapStateToProps = state => ({ Films: state.Films });
	const mapDispatchToProps = (dispatch) => bindActionCreators({
		syncFilms
	}, dispatch);

	return connect(mapStateToProps, mapDispatchToProps)(Wrapper);
}