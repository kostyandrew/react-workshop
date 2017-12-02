import React from "react";

export default function (RenderComponent) {
	return class extends React.Component {
		constructor(props) {
			super(props);

			this.state = {
				data: null
			};
		}

		componentWillMount() {
			fetch("https://swapi.co/api/films/")
				.then((response) => response.json())
				.then(({results: data}) => this.setState({data}))
				.catch((e) => console.error(e));
		}

		render() {
			const {data} = this.state;

			return <RenderComponent {...this.props} data={data}/>;
		}
	}
}