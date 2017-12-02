import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux'
import { syncPeople } from "../actions/people";


export default function (RenderComponent) {
	class Wrapper extends React.Component {
		componentWillMount() {
			this.props.syncPeople();
		}

		render() {
			const { People: { data, loading } } = this.props;

			return <RenderComponent {...this.props} data={data} loading={loading} />;
		}
	}

	const mapStateToProps = state => ({ People: state.People });
	const mapDispatchToProps = (dispatch) => bindActionCreators({
		syncPeople
	}, dispatch);

	return connect(mapStateToProps, mapDispatchToProps)(Wrapper);
}