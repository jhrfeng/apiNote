import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import fetch from 'isomorphic-fetch';
import {Bmob} from 'bmob';

const bmobConfig = {
  headers: {
  	'X-Bmob-Application-Id': '218b83e164bae9cb45bc23add4af8f79',
  	'X-Bmob-REST-API-Key': '6cf51eef866ebce97d528ffef6e506fc',
  	'Content-Type': 'application/json'
  }
};

class AddNote extends Component {
	constructor(props) {
		super(props);
		this.state = {notes: this.props.notes}
		this.saveNoteapi = this.saveNoteapi.bind(this);

	}

	saveNoteapi(event){
		event.preventDefault();
		/*
			这里考虑AddNote只是个非约束组件，不需要考虑组件的随数据的变化。
			估不用react自己的value数据绑定 123456
		 */
		var apiType = ReactDOM.findDOMNode(this.refs.apiType);
		var apiName = ReactDOM.findDOMNode(this.refs.apiName);
		var apiKey = ReactDOM.findDOMNode(this.refs.apiKey);
		var apiValue = ReactDOM.findDOMNode(this.refs.apiValue);
		var formData = {
			apiType: apiType.value,
			apiKey: apiKey.value,
			apiName: apiName.value,
			apiValue: apiValue.value
		};
		console.log(formData);
		//tool.initialize("218b83e164bae9cb45bc23add4af8f79", "6cf51eef866ebce97d528ffef6e506fc");
		// fetch('https://api.bmob.cn/1/classes/api-note', {
		//   method: 'POST',
		//   headers: {
		//   	"Access-Control-Allow-Origin": "https://api.bmob.cn",
		//   	"Access-Control-Allow-Methods": "GET,POST,OPTIONS",
		//   	"Access-Control-Allow-Headers": 'X-Requested-With, Content-Type',
		//   	"X-Bmob-Application-Id": "218b83e164bae9cb45bc23add4af8f79",
		// 	"X-Bmob-REST-API-Key": "6cf51eef866ebce97d528ffef6e506fc",
		//     "Accept": "application/json",
		//     "Content-Type": "application/json"
		//   },
		//   body: JSON.stringify(formData)
		// })
		//  .then(function (data) { 
		//  	console.log('Request succeeded with JSON response', data); 
		//  }) 
		//  .catch(function (error) { 
		//  	console.log('Request failed', error); 
		//  });

	}


	render() {
		return (
	      <div className="row">
	        <div className="col-sam-12 col-md-12">
	        <form onSubmit={this.saveNoteapi}>
	          <div className="input-group">
	            <div className="input-group-btn">
	              <button type="button" className="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">笔记类型<span className="caret"></span></button>
	              <ul className="dropdown-menu">
	                <li><a href="#">Action</a></li>
	                <li><a href="#">Another action</a></li>
	              </ul>
	            </div>
	            <input className="form-control" type="text" ref="apiType" />
	          </div>
	          <br />
	          <div className="input-group">
	            <span className="input-group-addon">笔记名称</span>
	            <input type="text" className="form-control" ref="apiKey" />
	          </div>
	          <br />
	          <div className="input-group">
	            <span className="input-group-addon" >关键词组</span>
	            <input type="text" className="form-control" ref="apiValue" />
	          </div>
	          <br />
	          <div className="input-group">
	            <span className="input-group-addon" >笔记内容</span>
	            <input type="text" className="form-control"  ref="apiName" />
	          </div>
	          <br />
	          <button type="submit" className="btn btn-default" >保存</button>
	          </form>
	        </div>
	      </div>
		);
	}
}

AddNote.propTypes = {
	notes: PropTypes.object.isRequired
};

AddNote.defaultProps = {
	notes: {
		apiType: "",
		apiKey: "",
		apiValue: "",
		apiName: ""
	}
};


export default AddNote;