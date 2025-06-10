import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Pencil, Trash2 } from 'lucide-react';
import axios from 'axios';
import toast from 'react-hot-toast';
import api from '../lib/axios';

const NoteCard = ({ note, onDelete }) => {
  const navigate = useNavigate();

  const handleDelete = async (e) => {
    e.preventDefault(); // prevent link navigation
    try {
      await api.delete(`/notes/${note._id}`);
      toast.success("Note deleted!");
      onDelete(note._id); // Inform parent to remove it from state
    } catch (error) {
      toast.error("Failed to delete note.");
      console.error(error);
    }
  };

  const handleEdit = (e) => {
    e.preventDefault(); // prevent link navigation
    navigate(`/edit/${note._id}`);
  };

  return (
    <Link to={`/notes/${note._id}`}>
      <div className="bg-base-100 shadow-xl rounded-xl border border-base-300 p-5 transition-transform hover:scale-[1.02] hover:shadow-2xl duration-300 relative">
        
        {/* Title */}
        <h2 className="text-xl font-bold text-primary mb-2 line-clamp-1">
          {note.title || "Untitled Note"}
        </h2>

        {/* Content Preview */}
        <p className="text-base-content text-sm mb-6 line-clamp-3">
          {note.content || "No content provided."}
        </p>

        {/* Bottom Row */}
        <div className="absolute bottom-4 left-5 right-5 flex justify-between items-center text-xs text-base-content/70">
          {/* Date & Time */}
          <div>
            <span className="badge badge-outline badge-sm badge-info mr-2">Last updated</span>
            <span>{note.updatedAt ? new Date(note.updatedAt).toLocaleString() : "Unknown"}</span>
          </div>

          {/* Edit & Delete Buttons */}
          <div className="flex gap-3">
            <button onClick={handleEdit} className="btn btn-xs btn-outline btn-info tooltip" data-tip="Edit">
              <Pencil size={14} />
            </button>
            <button onClick={handleDelete} className="btn btn-xs btn-outline btn-error tooltip" data-tip="Delete">
              <Trash2 size={14} />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NoteCard;
