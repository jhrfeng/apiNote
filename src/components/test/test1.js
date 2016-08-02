import React , { Component } from "react";
import ReactDOM from "react-dom";

// 非约束
export default class Test1 extends Component {

	constructor(props){
		super(props);
		this.state = {radio: "B"}
	}

	handleChange(event){
		this.setState({radio:event.target.value})
	}

	submitHandler(event) {
		event.preventDefault();
		//var node = ReactDOM.findDOMNode(this.refs.checked);
		alert(this.state.radio);
	}

	render(){
		return (
			<form onSubmit={this.submitHandler.bind(this)} >
				<input 
					type="radio" 
					value="A"
					checked={this.state.radio == "A"}
					onChange={this.handleChange.bind(this)} /> A
				<br />
				<input 
					type="radio" 
					value="B"
					checked={this.state.radio == "B"}
					onChange={this.handleChange.bind(this)} /> B
				<br />
				<input 
					type="radio" 
					value="C"
					checked={this.state.radio == "C"}
					onChange={this.handleChange.bind(this)} /> C
				<br />
				<button type="submit">Speak </button>
			</form>
		);
	}
}