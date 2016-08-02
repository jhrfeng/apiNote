import React, { Component } from "react";

export default class CheckLink extends Component {
	
	render(){
		return ( 
			<a {...this.props} >{'X'}{this.props.children} </a> 
		);
	}
}