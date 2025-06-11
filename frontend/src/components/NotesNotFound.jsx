import React from 'react';
import { FileX } from 'lucide-react';

function NotesNotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <div className="text-primary mb-4">
        <FileX size={48} />
      </div>
      <h2 className="text-2xl font-bold text-primary mb-2">No Notes Found</h2>
      <p className="text-base-content/70 mb-6">
        You haven’t created any notes yet. Your ideas are waiting!
      </p>
      <button
        className="btn btn-accent btn-sm"
        onClick={() => window.location.href = '/create'}
      >
        Create your first note
      </button>
    </div>
  );
}

export default NotesNotFound;
