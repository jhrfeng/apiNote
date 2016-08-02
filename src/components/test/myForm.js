import React , { Component } from "react";
import ReactDOM from "react-dom";

export default class MyForm extends Component {

	constructor(props) {
		super(props);
		this.state = {helloTo:"Hello World!"};
	}

	handleChange(event) {
		this.setState({helloTo: event.target.value.toUpperCase()});
	}

	submitHandler(event) {
		event.preventDefault();
		//var helloTo = ReactDOM.findDOMNode(this.refs.helloTo)
		//alert(helloTo.value);
		alert(this.state.helloTo);
	}

	render() {
		return (
			<form onSubmit={this.submitHandler.bind(this)}>
				<input type="text"  
					value={this.state.helloTo} 
					onChange={this.handleChange.bind(this)} />
				<br/>
				<button type="submit"> Speak </button>
			</form>
		);
	}
}