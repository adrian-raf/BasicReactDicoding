import React from 'react';

function NoteItemAction({ archive, onDelete, id, onArchive }) {
  return (
    <div className="note-item__action">
      <button className="note-item__delete-button" onClick={() => onDelete(id)}>
        Delete
      </button>
      <button
        className="note-item__archive-button"
        onClick={() => onArchive(id)}
      >
        {archive === true ? 'Pindahkan' : 'Arsipkan'}
      </button>
    </div>
  );
}

export default NoteItemAction;
