import React, { Component } from 'react';
import axios from 'axios';


class NoteApi extends Component {
  /**
   * 不报啊
用es6的语法，就不需要getInitState了
直接写构造函数了
   * @param  {[type]} props [description]
   * @return {[type]}       [description]
   */

	render() {
    //var result = this.props.booknote;
                      // {
                  //   React.Children.map(this.props.booknote, function (i,child) {
                  //     return <tr><th>{i}</th><th>{obj.apiName}</th></tr>;
                  //   })
                  // }
    console.log(this.props.children);
    console.log(Array.isArray(this.props.booknote));
		return (
		<div className="col-sm-12 col-md-8">
            <div className="panel-heading">API 笔记名称</div>
              <table className="table">
                <tbody>
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                  </tr>
                  </tbody> 
              </table>
        </div>
		);
	}
}


export default NoteApi;