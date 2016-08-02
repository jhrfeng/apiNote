import React, { Component } from "react";

export default class HelloWorld extends Component {

	ComponentWillMount() {
		console.log(3);
		this.setState({name:"true"});
	}
	render() {
		console.log(4);
		return (
			<h1> Hello, {this.props.name} </h1>
		);
	}
	componentDidMount(){
		console.log(5);
		this.setState({name:"false"});
	}
}