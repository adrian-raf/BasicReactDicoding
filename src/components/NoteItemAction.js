import React from 'react';

function NoteItemAction({ archive, onDelete }) {
  return (
    <div className="note-item__action">
      <button className="note-item__delete-button" onDelete={onDelete}>
        Delete
      </button>
      <button className="note-item__archive-button" archive={archive}>
        Arsipkan
      </button>
    </div>
  );
}

export default NoteItemAction;
