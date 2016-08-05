import React, { Component } from 'react';
import axios from 'axios';


class NoteApi extends Component {
  componentDidMount() {
    // 获取note列表

  }

  /**
   * [_renderSlides 获取note列表]
   * @return {[type]} [description]
   */
  _renderSlides() {
    return (
      axios.get('http://localhost:5984/apinote/_all_docs?limit=20')
        .then(response => {
          var rows = response.rows
          for(const[i, data] of rows){
            console.log(data.)
          }
          return response.rows
        })
        .catch(response => {

        });
      <tr>
        <td scope="row"></td>
        <td></td>
      </tr>
    );
  }

	render() {
		return (
		<div className="col-sm-12 col-md-8">
            <div className="panel-heading">API 笔记名称</div>
              <table className="table">
                <tbody>
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                  </tr>
                  <tr>
                    <td scope="row">1</td>
                    <td>Mark</td>
                  </tr>
                  <tr>
                    <td scope="row">2</td>
                    <td>Jacob</td>
                  </tr>
                  <tr>
                    <td scope="row">3</td>
                    <td>Larry</td>
                  </tr>
                  </tbody> 
              </table>
        </div>
		);
	}
}

export default NoteApi;