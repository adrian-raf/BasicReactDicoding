import React, { Component } from 'react';
import { getInitialData } from '../utils/data';
import NoteAppHeader from './NoteAppHeader';
import NoteInput from './NoteInput';

export class NoteApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
  }

  onDeleteHandler(id) {
    const catatan = this.state.notes.filter((note) => note.id !== id);
    this.setState({ catatan });
  }

  onAddNoteHandler({ title, body, createdAt, archived }) {
    this.setState((previous) => {
      return {
        catatan: [
          ...previous.catatan,
          {
            id: +new Date(),
            title,
            body,
            createdAt,
            archived,
          },
        ],
      };
    });
  }

  render() {
    return (
      <div id="root">
        <NoteAppHeader />
        <NoteInput />
      </div>
    );
  }
}

export default NoteApp;
