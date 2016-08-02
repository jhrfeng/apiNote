import React , { Component, PropTypes } from 'react';
import autobind from 'autobind-decorator';

class Counter extends Component {
	constructor(props) {
		super(props);
		this.state = {count: props.initialCount};
	}

	//@autobind
	tick() {
		this.setState({count: this.state.count + 1});
	}

	// @autobind
	// handleClick = () => {
 //   		console.log('clickity');
 //  	}

	render() {
		return (
			<div onClick={this.tick}>
				Clicks1111: {this.state.count}
			</div >	
		);
	}
}
Counter.propTypes = {
	onMount: PropTypes.func.isRequired
};
Counter.defaultProps = {
	initialCount: 1,
	onMount: () => {}
};
export default Counter;