import React from 'react';
import NoteItemAction from './NoteItemAction';
import NoteItemContent from './NoteItemContent';

export default function NoteItem({ archive, onDelete, title, date, body }) {
  return (
    <div className="note-item">
      <NoteItemContent />
      <NoteItemAction />
    </div>
  );
}
