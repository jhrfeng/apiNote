import React from "react";
import axios from 'axios';

import {
  AddNote,
  NoteApi,
  NoteContent,
  Search,
  Title
} from "../src";

export default class Presentation extends React.Component {

    /**
   * [_renderSlides 获取note列表]
   * @return {[type]} [description]
   */
  async _renderSlides() {
    const response = await axios.get('http://127.0.0.1:3000/service/queryAllNote');
    return response.data;
  }

  render() {
    var result = _renderSlides();
    console.log("result", result);
    return (
      <div className="container">
          <Title />
          <Search />
          <br />
          <div className="row">
            <NoteApi booknote={this._renderSlides()}/>
            <NoteContent />
          </div>
          <br />
          <AddNote />
      </div>
    );
  }
}