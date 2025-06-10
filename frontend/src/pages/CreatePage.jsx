import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import axios from "axios";
import toast from "react-hot-toast";

const CreatePage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleCreate = async () => {
    if (!title.trim() && !content.trim()) {
    toast.error("Title and Content are required!");
    return;
    }

    try {
      const posted = await axios.post("http://localhost:5001/api/notes", {
        title,
        content,
      });
      console.log("Note created:", posted.data);
      toast.success("Note created successfully!");
      setTitle("");
      setContent("");
      navigate("/")
    } catch (error) {
      console.error("Failed to create note:", error);
      if (error.response.status === 429){
        toast.error("Maximium submissions reached, try after some time!",{duration:4000,icon:"🏃‍♂️" })
      } else{
        toast.error("Failed to create notes!")
      }
    }
  };

  return (
    <div className="min-h-screen bg-base-200 px-4 py-6">
      {/* Go Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-sm text-primary hover:underline mb-6"
      >
        <ArrowLeft size={18} />
        Go Back
      </button>

      {/* Card Container */}
      <div className="max-w-3xl mx-auto bg-base-100 p-6 shadow-2xl rounded-xl border border-base-300 backdrop-blur-md">
        <h1 className="text-2xl font-bold text-primary mb-4 text-center">
          Create a New Note
        </h1>

        {/* Title Field */}
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text text-base-content">Title</span>
          </label>
          <input
            type="text"
            placeholder="Enter note title"
            className="input input-bordered bg-base-100"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        {/* Content Field */}
        <div className="form-control mb-16">
          <label className="label">
            <span className="label-text text-base-content">Content</span>
          </label>
          <textarea
            className="textarea textarea-bordered h-40 bg-base-100"
            placeholder="Write your note..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>

        {/* Create Button */}
        <div className="flex justify-end">
          <button className="btn btn-primary px-8" onClick={handleCreate}>
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePage;
