import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Trash2 } from 'lucide-react';
import toast from 'react-hot-toast';
import api from '../lib/axios';

const NoteDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const res = await api.get(`/notes/${id}`);
        setNote(res.data);
        setTitle(res.data.title);
        setContent(res.data.content);
      } catch (error) {
        console.error("Failed to fetch note:", error);
        toast.error("Could not fetch note.");
      } finally {
        setLoading(false);
      }
    };
    fetchNote();
  }, [id]);

  const handleSave = async () => {

    if (!title.trim()) {
    toast.error("Title is required!");
    return;
    }
    try {
      const res = await api.put(`/notes/${id}`, { title, content });
      setNote(res.data.updatedNote);
      toast.success("Note updated!");
      setEditing(false);
    } catch (error) {
      console.error("Failed to update note:", error);
      toast.error("Could not update note.");
    }
  };

  const handleDelete = async () => {
    const confirm = window.confirm("Are you sure you want to delete this note?");
    if (!confirm) return;    

    try {
      await api.delete(`/notes/${id}`);
      toast.success("Note deleted!");
      navigate('/');
    } catch (error) {
      console.error("Failed to delete note:", error);
      toast.error("Could not delete note.");
    }
  };

  return (
    <div className="min-h-screen bg-base-200 px-4 py-6">
      {/* Go Back */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-sm text-primary hover:underline mb-6"
      >
        <ArrowLeft size={18} />
        Go Back
      </button>

      <div className="max-w-3xl mx-auto bg-base-100 border border-base-300 shadow-2xl rounded-2xl p-8 backdrop-blur-lg transition-all duration-300">
        {loading ? (
          <div className="text-center text-primary py-10">Loading...</div>
        ) : note ? (
          <>
            {/* Title */}
            {editing ? (
  <>
    <label className="label">
      <span className="label-text text-base-content font-medium ">Title</span>
    </label>
    <input
      type="text"
      className="input input-bordered w-full text-xl font-semibold mb-4 bg-base-100"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
    />

    <label className="label">
      <span className="label-text text-base-content font-medium">Content</span>
    </label>
    <textarea
      className="textarea textarea-bordered w-full h-60 mb-6 bg-base-100"
      value={content}
      onChange={(e) => setContent(e.target.value)}
    />
  </>
) : (
  <>
    <h1 className="text-3xl font-bold text-primary mb-4 break-words">
      {note.title || "Untitled Note"}
    </h1>
    <p className="text-base-content leading-relaxed whitespace-pre-wrap mb-8">
      {note.content || "No content available."}
    </p>
  </>
)}


            {/* Action Buttons */}
            <div className="flex justify-between items-center mt-6 text-sm text-base-content/60">
              <span>
                Last updated:{" "}
                {note.updatedAt
                  ? new Date(note.updatedAt).toLocaleString()
                  : "Unknown"}
              </span>

              <div className="flex gap-3">
                {editing ? (
                  <button
                    className="btn btn-outline btn-primary btn-sm shadow-md"
                    onClick={handleSave}
                  >
                    Save
                  </button>
                ) : (
                  <button
                    className="btn btn-outline btn-primary btn-sm shadow-md"
                    onClick={() => setEditing(true)}
                  >
                    Edit
                  </button>
                )}
                <button
                  className="btn btn-outline btn-error btn-sm shadow-md"
                  onClick={handleDelete}
                >
                  <Trash2 size={16} className="mr-1" />
                  Delete
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="text-center text-error py-10 text-lg font-medium">
            Note not found.
          </div>
        )}
      </div>
    </div>
  );
};

export default NoteDetailPage;
