import React , {Component} from "react";

export default class CountryDropDown extends Component {

	constructor(props) {
		super(props);
		this.state = {options: ["B"]};
	}

	handleChange(event) {
		var checked = [];
		var sel = event.target;
		console.log(sel.options[1].selected);
		for(var i=0; i< sel.length; i++){
			var option = sel.options[i];
			if(option.selected){
				checked.push(option.value);
			}
		}
		this.setState({options: checked});
	}

	submitHandler(event){
		event.preventDefault();
		alert(this.state.options);
	}

	render() {
		return (
			<form onSubmit={this.submitHandler.bind(this)}>
				<select multiple="true" value={this.state.options}
					onChange={this.handleChange.bind(this)} >
					<option value="A"> First </option>option>
					<option value="B"> Second </option>option>
					<option value="C"> Third </option>option>
				</select>
				<br />
				<button type="submit">Speak </button>	
			</form>
		);
	}
}