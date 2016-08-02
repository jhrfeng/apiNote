import React, { Component, PropTypes } from 'react';

class CommentList extends Component {
	componentDidMount() {
		this.props.onMount;
	}

	 handleComplete(event) {
    	this.callMethodOnProps('onMount', event.target.value);
  	}

	render() {
		const { isActive } = this.props;
		const className = isActive ? 'active-list' : 'inactive-list';	
		return (
			<ul className={className}>
				<li onClick={this.props.onMount}> Comment One </li>
			</ul>
		)
	}
}

CommentList.propTypes = {
	onMount: PropTypes.func.isRequired,
	isActive: PropTypes.bool
};

export default CommentList;