import React, { Component, PropTypes} from "react";

export default class Propent1 extends Component {
	render() {
		var props = {
			one: 'bar',
			two: 'foo'
		};
		return (
			<div {...props} >
				1111 {this.props.one} {this.props.two}
			</div>
		); 
	}
}