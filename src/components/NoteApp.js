import React, { Component } from 'react';

import NoteAppBody from './NoteAppBody';
import NoteAppHeader from './NoteAppHeader';

class NoteApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
    };
    this.onSearchHandler = this.onSearchHandler.bind(this);
  }

  onSearchHandler(event) {
    this.setState(() => {
      return {
        search: event.target.value,
      };
    });
  }

  render() {
    // const notes = this.state.notes.filter((note) =>
    //   note.title.toLowerCase().includes(this.state.search.toLowerCase())
    // );
    // const enableNotes = notes.filter((note) => {
    //   return note.archived === false;
    // });
    // const archivedNotes = notes.filter((note) => {
    //   return note.archived === true;
    // });
    return (
      <>
        <NoteAppHeader />
        <NoteAppBody />
      </>
    );
  }
}

export default NoteApp;
