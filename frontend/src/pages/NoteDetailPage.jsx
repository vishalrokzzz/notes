import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ArrowLeft } from 'lucide-react';
import toast from 'react-hot-toast';
import api from '../lib/axios';

const NoteDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const res = await api.get(`/notes/${id}`);
        setNote(res.data);
      } catch (error) {
        console.error("Failed to fetch note:", error);
        toast.error("Could not fetch note.");
      } finally {
        setLoading(false);
      }
    };

    fetchNote();
  }, [id]);

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

      <div className="max-w-3xl mx-auto bg-base-100 border border-base-300 shadow-2xl rounded-xl p-6 backdrop-blur-sm">
        {loading ? (
          <div className="text-center text-primary py-10">Loading...</div>
        ) : note ? (
          <>
            <h1 className="text-3xl font-bold text-primary mb-4 break-words">{note.title || "Untitled Note"}</h1>
            <p className="text-base-content leading-relaxed whitespace-pre-wrap mb-8">
              {note.content || "No content available."}
            </p>
            <div className="flex justify-end text-sm text-base-content/60">
              Last updated:{" "}
              {note.lastUpdated ? (
                <span className="ml-2">{new Date(note.lastUpdated).toLocaleString()}</span>
              ) : (
                <span className="ml-2">Unknown</span>
              )}
            </div>
          </>
        ) : (
          <div className="text-center text-error">Note not found.</div>
        )}
      </div>
    </div>
  );
};

export default NoteDetailPage;
