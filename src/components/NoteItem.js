import React from 'react';
import NoteItemAction from './NoteItemAction';
import NoteItemContent from './NoteItemContent';

export default function NoteItem({
  archive,
  onDelete,
  title,
  createdAt,
  body,
  id,
  onArchive,
}) {
  return (
    <div className="note-item">
      <NoteItemContent title={title} createdAt={createdAt} body={body} />
      <NoteItemAction
        id={id}
        onDelete={onDelete}
        archive={archive}
        onArchive={onArchive}
      />
    </div>
  );
}
