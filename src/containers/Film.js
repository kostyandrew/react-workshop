import React from "react";

export default function (RenderComponent) {
	return class extends React.Component {
		constructor(props) {
			super(props);

			this.state = {
				data: null,
				error: false
			};
		}

		componentWillMount() {
			const { match: { params: { id } } } = this.props;
			fetch(`https://swapi.co/api/films/${id}`)
				.then((response) => {
					if (response.ok) {
						return response.json();
					} else {
						this.setState({ error: response.status });
						return null;
					}
				})
				.then((data) => this.setState({ data }))
				.catch((e) => console.error(e))
		}

		render() {
			const { data, error } = this.state;

			return <RenderComponent {...this.props} data={data} error={error}/>;
		}
	}
}