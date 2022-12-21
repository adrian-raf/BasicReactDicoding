import React, { Component } from 'react';
import NoteInput from './NoteInput';
import NoteList from './NoteList';
import { getInitialData } from '../utils/data';

export default class NoteAppBody extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
      // search: '',
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onAddNoteHandler({ title, body }) {
    this.setState((previous) => {
      return {
        notes: [
          ...previous.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: new Date().toDateString(),
            archived: false,
          },
        ],
      };
    });
  }
  render() {
    return (
      <div className="note-app__body">
        <NoteInput addNote={this.onAddNoteHandler} />
        <h2>Catatan Aktif</h2>
        <NoteList notes={this.state.notes} onDelete={this.onDeleteHandler} />
        <h2>Arsip</h2>
        <p className="notes-list__empty-message">Tidak ada catatan</p>
      </div>
    );
  }
}
