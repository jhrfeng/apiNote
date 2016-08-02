import React, { Component } from "react";

export default class SaveButton extends Component {

	handleClick() {
		console.log(555);
	}

	render() {
		return (
			<a className="save button" onClick={this.handleClick}>Save</a>
		);
	};
} 