import React from 'react';
import NoteInput from './NoteInput';
import NoteItem from './NoteItem';

class NoteAppHeader extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <>
        <div className="note-app__header">
          <h1>Notes</h1>
          <div className="note-search">
            <input type="text" placeholder="Cari catatan..." />
          </div>
        </div>
      </>
    );
  }
}

export default NoteAppHeader;
