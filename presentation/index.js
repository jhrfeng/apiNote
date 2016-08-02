import React from "react";

import {
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