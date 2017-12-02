import React from "react";
import { Link } from "react-router-dom";
import connectPeople from "../containers/People";

class People extends React.Component {
	render() {
		const { loading, data } = this.props;
		return loading
			? "Loading"
			: data.map((el) => <div key={el.id}>
				<h1>
					<Link to={`/people/${el.id}`}>{el.name}</Link>
				</h1>
			</div>);
	}
}

export default connectPeople(People);