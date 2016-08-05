import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class AddNote extends Component {
	constructor(props) {
		super(props);
		this.state = {show: this.props.show}
		this.saveNoteapi = this.saveNoteapi.bind(this);

	}

	saveNoteapi(event){
		event.preventDefault();
		/*
			这里考虑AddNote只是个非约束组件，不需要考虑组件的随数据的变化。
			估不用react自己的value数据绑定 123456
		 */
		var formData = {
			apiType: ReactDOM.findDOMNode(this.refs.apiType).value,
			apiKey: ReactDOM.findDOMNode(this.refs.apiName).value,
			apiName: ReactDOM.findDOMNode(this.refs.apiKey).value,
			apiValue: ReactDOM.findDOMNode(this.refs.apiValue).value
		};

		axios.get('http://127.0.0.1:5984/_uuids')
		  .then( response => {
		    axios.put('http://127.0.0.1:5984/apinote/'+response.data.uuids[0], 
		    	formData )
		    .then(response => {
		    	//this.setState({show: "none"});
		    })
		    .catch(response => {
		    	console.log(error);
		    });
		  })
		  .catch(response => {
		    console.log(error);
		  });
	}


	render() {
		return (
	      <div className="row" style={{display: this.state.show}} >
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
	show: PropTypes.string.isRequired
};

AddNote.defaultProps = {
	show: "inline"
};


export default AddNote;