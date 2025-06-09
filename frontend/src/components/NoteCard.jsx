// import React from 'react'

// const NoteCard = () => {
//   return (
//     <div>NoteCard</div>
//   )
// }

// export default NoteCard

import React from 'react';
import { Link } from 'react-router-dom';



const NoteCard = ({ note }) => {
  return <Link to={`/notes/${note._id}`}>
  <div className="bg-base-100 shadow-xl rounded-xl border border-base-300 p-5 transition-transform hover:scale-[1.02] hover:shadow-2xl duration-300">
      {/* Title */}
      <h2 className="text-xl font-bold text-primary mb-2 line-clamp-1">
        {note.title || "Untitled Note"}
      </h2>

      {/* Content Preview */}
      <p className="text-base-content text-sm mb-4 line-clamp-3">
        {note.content || "No content provided."}
      </p>

      {/* Last Updated */}
      <div className="text-xs text-base-content/70 flex justify-between items-center">
        <span className="badge badge-outline badge-sm badge-info">Last updated</span>
        <span>{note.updatedAt ? new Date(note.updatedAt).toLocaleString() : "Unknown"}</span>
      </div>
    </div>
  </Link> 
    
  
};

export default NoteCard;
