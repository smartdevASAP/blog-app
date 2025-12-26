import { useState } from "react";
import { Image, Tag, Save, Send } from "lucide-react";

function WriteBlogs() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Write a new blog</h1>
          <p className="text-sm text-gray-500 mt-1">
            Share your ideas with the world
          </p>
        </div>

        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 text-sm rounded-lg border border-gray-200 hover:bg-gray-100 transition">
            <Save size={16} />
            Save draft
          </button>

          <button className="flex items-center gap-2 px-4 py-2 text-sm rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition">
            <Send size={16} />
            Publish
          </button>
        </div>
      </div>

      {/* Title */}
      <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Blog title..."
          className="w-full text-2xl font-semibold placeholder-gray-400 focus:outline-none"
        />
      </div>

      {/* Content Editor */}
      <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Start writing your story..."
          className="w-full min-h-[300px] resize-none text-gray-700 placeholder-gray-400 focus:outline-none leading-relaxed"
        />
      </div>

      {/* Meta */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Tags */}
        <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <Tag size={16} className="text-gray-500" />
            <p className="text-sm font-medium text-gray-700">Tags</p>
          </div>

          <input
            type="text"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            placeholder="e.g. React, AI, SaaS"
            className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Cover Image */}
        <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <Image size={16} className="text-gray-500" />
            <p className="text-sm font-medium text-gray-700">Cover image</p>
          </div>

          <button className="w-full text-sm border border-dashed border-gray-300 rounded-lg py-8 text-gray-500 hover:bg-gray-50 transition">
            Click to upload image
          </button>
        </div>
      </div>

      {/* Footer hint */}
      <p className="text-xs text-gray-400 text-center">
        Drafts are saved locally. Publishing is disabled in demo mode.
      </p>
    </div>
  );
}

export default WriteBlogs;
