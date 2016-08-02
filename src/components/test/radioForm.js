import React , { Component } from "react";
import Radio from "./radio";

export default class RadioForm extends Component {
	constructor(props){
		super(props);
		this.state={my_radio:"B"}
	}

	handleChange(event) {
		alert(event.target.value);
		this.setState({my_radio: event.target.value});
	}

	submitHandler(event){
		event.preventDefault();
		alert(this.state.my_radio);
	}

	render() {
		return (
			<form onSubmit={this.submitHandler.bind(this)}>
				<input type="text" name="given_name" autoFocus="true" />
				<br/>
				<Radio ref="radio" 
					value={this.state.my_radio} 
					onChange={this.handleChange.bind(this)} >
					<option value="A">First</option>
					<option value="B">Second</option>
					<option value="C">Third</option>
				</Radio>
				<br/>
				<button type="submit"> Speak </button>
			</form>
		);
	}
}