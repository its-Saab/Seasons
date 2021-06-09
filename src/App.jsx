//npm packages
import React, { useState } from "react";

//project files
import { SeasonDisplay } from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { lat: null, errorMessage: "", loading: true };
	}

	componentDidMount() {
		window.navigator.geolocation.getCurrentPosition(
			(position) =>
				this.setState({ lat: position.coords.latitude, loading: false }),
			(err) =>
				this.setState({
					errorMessage: err.message,
					loading: false,
				})
		);
	}

	renderContent() {
		if (this.state.loading) {
			return <Spinner message={"Please allow to reach your location"} />;
		}
		if (this.state.errorMessage.length !== 0) {
			return <h1>{this.state.errorMessage}</h1>;
		}
		return <SeasonDisplay lat={this.state.lat} />;
	}
	render() {
		return <div className="App">{this.renderContent()}</div>;
	}
}

export default App;
