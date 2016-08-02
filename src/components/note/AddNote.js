import React, { Component } from 'react';

class AddNote extends Component {
	render() {
		return (
	      <div className="row">
	        <div className="col-sam-12 col-md-12">
	          <div className="input-group">
	            <div className="input-group-btn">
	              <button type="button" className="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">笔记类型<span className="caret"></span></button>
	              <ul className="dropdown-menu">
	                <li><a href="#">Action</a></li>
	                <li><a href="#">Another action</a></li>
	              </ul>
	            </div>
	            <input type="text" className="form-control" />
	          </div>
	          <br />
	          <div className="input-group">
	            <span className="input-group-addon">笔记名称</span>
	            <input type="text" className="form-control" />
	          </div>
	          <br />
	          <div className="input-group">
	            <span className="input-group-addon" >关键词组</span>
	            <input type="text" className="form-control" />
	          </div>
	          <br />
	          <div className="input-group">
	            <span className="input-group-addon" >笔记内容</span>
	            <input type="text" className="form-control" />
	          </div>
	          <br />
	          <button type="button" className="btn btn-default">保存</button>

	        </div>
	      </div>
		);
	}
}

export default AddNote;