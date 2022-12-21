import React from 'react';
import { getInitialData } from '../utils/data';

class NoteAppHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      search: '',
    };
    this.onNoteSearchHandler = this.onNoteSearchHandler.bind(this);
  }

  onNoteSearchHandler(event) {
    this.setState(() => {
      return {
        search: event.target.value,
      };
    });
  }

  render() {
    const notes = this.state.notes.filter((note) =>
      note.title.toLowerCase().includes(this.state.search.toLowerCase())
    );

    return (
      <>
        <div className="note-app__header">
          <h1>Notes</h1>
          <div className="note-search">
            <input
              type="text"
              placeholder="Cari catatan..."
              value={this.state.search}
              onChange={this.onNoteSearchHandler}
            />
          </div>
        </div>
      </>
    );
  }
}

// function NoteAppHeader({ search, onSearchHandle }) {
//   return (
//     <div className="note-app__header">
//       <h1>Notes</h1>
//       <div className="note-search">
//         <input
//           type="text"
//           placeholder="Cari catatan..."
//           value={search}
//           onChange={onSearchHandle}
//         />
//       </div>
//     </div>
//   );
// }

export default NoteAppHeader;
