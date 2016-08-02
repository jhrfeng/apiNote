import React, { Component, PropTypes } from "react";

class Radio extends Component {
	constructor(props){
		super(props);
		this.state = {value: props.defaultValue};
	}

	handleChange(event) {
		if(this.props.onChange) {
			this.props.onChange(event);
		}
		this.setState({value: event.target.value});
	}

/**
 * 这个是和react的dom-diff算法相关的。react对dom做遍历的时候，
 * 会根据data-reactid生成虚拟dom树。
 * 如果你没有手动的添加unique constant key的话，react是无法记录你的dom操作的。
 * 它只会在重新渲染的时候，
 * 继续使用相应dom数组的序数号(就是array[index]这种)来比对dom树。
 * @return {[type]} [description]
 */
	_renderSlides() {
		var value = this.props.defaultValue || this.state.value;
		return this.props.children.map((child, index) => {
			return (
						<label key={index} >
							<input type="radio"
								name={this.props.name}
								value={child.props.value}
								checked={child.props.value == value}
								onChange={this.handleChange.bind(this)}
							/>
							{child.props.children}
							<br/>
						</label>
					);
		});
	}

	render() {
		return (<span>{this._renderSlides()}</span>);
	}
}

Radio.propTypes = {
	onChange: PropTypes.func
};

Radio.defaultProps = {
	defaultValue: "",
	name: "signle"
};

export default Radio;