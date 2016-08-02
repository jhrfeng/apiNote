import React, { Component, PropTypes } from "react";

export default class Fit extends Component {
	render() {
		const styles = {
	        position: "absolute",
	        display: "block",
	        color: "red",
	        width: "100%",
	        height: "20%",
	        textAlign: "center",
	        padding: "20px 50px"
		};
		return (
			<div className={this.props.className} style={styles}>
				{this.props.children}
			</div>
		);
	}
}

Fit.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
  className: PropTypes.string
};