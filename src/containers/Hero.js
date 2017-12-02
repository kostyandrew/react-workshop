import React from "react";
import { syncPeople } from "../actions/people";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

export default function (RenderComponent) {
	class Wrapper extends React.Component {
		componentWillMount() {
			this.props.syncPeople();
		}

		render() {
			const { Hero, Loading } = this.props;
			const error = Hero === null && !Loading ? 404 : false;

			return <RenderComponent {...this.props} data={Hero} error={error} loading={Loading} />;
		}
	}

	const mapStateToProps = (state, props) => {
		const { match: { params: { id } } } = props;
		return ({
			Loading: state.People.loading,
			Hero: state.People.data.reduce((acc, elem) =>
					elem.url.match(/\d+/)[0] === id
						? elem
						: acc,
				null
			)
		})
			;
	};
	const mapDispatchToProps = (dispatch) => bindActionCreators({
		syncPeople
	}, dispatch);

	return connect(mapStateToProps, mapDispatchToProps)(Wrapper);
}