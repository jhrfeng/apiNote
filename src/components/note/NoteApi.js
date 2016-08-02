import React, { Component } from 'react';

class NoteApi extends Component {
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
                    <th scope="row">1</th>
                    <td>Mark</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                  </tr>
                  </tbody> 
              </table>
        </div>
		);
	}
}

export default NoteApi;