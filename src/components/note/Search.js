import React, { Component } from 'react';

class Search extends Component  {
	render() {
		return (
			<div className="row">
	        <div className="col-sm-12 col-md-12">
	          <div className="input-group">
	            <input type="text" className="form-control" placeholder="请输入搜索内容" />
	            <span className="input-group-addon" >搜索</span>
	          </div>
	        </div>
	      	</div>
		);
	}
}

export default Search;