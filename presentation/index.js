import React from "react";

import {
  HelloWorld,
  Fit,
  CheckLink,
  Propent1,
  SaveButton,
  CommentList,
  Counter,
  CountryDropDown,
  MyForm,
  Test1,
  Radio,
  RadioForm,
  AddNote,
  NoteApi,
  NoteContent,
  Search,
  Title
} from "../src";

export default class Presentation extends React.Component {
  render() {
    return (
      <div className="container">
          <Title />
          <Search />
          <br />
          <AddNote />
          <br />
          <div className="row">
            <NoteApi />
            <NoteContent />
          </div>
      </div>
    );
  }
}