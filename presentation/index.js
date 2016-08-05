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
          <div className="row">
            <NoteApi />
            <NoteContent />
          </div>
          <br />
          <AddNote />
      </div>
    );
  }
}