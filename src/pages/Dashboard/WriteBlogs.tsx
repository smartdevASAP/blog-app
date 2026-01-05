// import { useState } from "react";
// import { Image, Tag, Save, Send } from "lucide-react";
// import api from "../../services/api";
// import { toast } from "sonner";

// function WriteBlogs() {
//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");
//   const [tags, setTags] = useState("");
//   const [imageURL, setImageURL] = useState("");
//   //network request to the server to create the blog in the database
//   const addBlogToDatabase = async () => {
//     try {
//       const { data } = await api.post("/blog/write", {
//         title,
//         excerpt: content,
//         tags,
//         coverImage: imageURL,
//       });
//       if (data.success) {
//         toast.success("Blog added to database");
//         setTitle("");
//         setTags("");
//         setContent("");
//         setImageURL("");
//       }
//     } catch (err: any) {
//       console.log("error " + err.message);
//       toast.error(err.message);
//     }
//   };
//   return (
//     <div className="max-w-4xl mx-auto space-y-6">
//       {/* Header */}
//       <div className="flex items-center justify-between">
//         <div>
//           <h1 className="text-2xl font-bold text-gray-800">Write a new blog</h1>
//           <p className="text-sm text-gray-500 mt-1">
//             Share your ideas with the world
//           </p>
//         </div>

//         <div className="flex gap-3">
//           <button className="flex items-center gap-2 px-4 py-2 text-sm rounded-lg border border-gray-200 hover:bg-gray-100 transition">
//             <Save size={16} />
//             Save draft
//           </button>

//           <button
//             onClick={() => addBlogToDatabase()}
//             className="flex items-center gap-2 px-4 py-2 text-sm rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
//           >
//             <Send size={16} />
//             Publish
//           </button>
//         </div>
//       </div>

//       {/* Title */}
//       <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
//         <input
//           type="text"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           placeholder="Blog title..."
//           className="w-full text-2xl font-semibold placeholder-gray-400 focus:outline-none"
//         />
//       </div>

//       {/* Content Editor */}
//       <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
//         <textarea
//           value={content}
//           onChange={(e) => setContent(e.target.value)}
//           placeholder="Start writing your story..."
//           className="w-full min-h-[300px] resize-none text-gray-700 placeholder-gray-400 focus:outline-none leading-relaxed"
//         />
//       </div>

//       {/* Meta */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {/* Tags */}
//         <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
//           <div className="flex items-center gap-2 mb-2">
//             <Tag size={16} className="text-gray-500" />
//             <p className="text-sm font-medium text-gray-700">Tags</p>
//           </div>

//           <input
//             type="text"
//             value={tags}
//             onChange={(e) => setTags(e.target.value)}
//             placeholder="e.g. React, AI, SaaS"
//             className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         {/* Cover Image */}
//         <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
//           <div className="flex items-center gap-2 mb-2">
//             <Image size={16} className="text-gray-500" />
//             <p
//               onClick={() => setImageURL("https://dummy")}
//               className="text-sm font-medium text-gray-700"
//             >
//               Cover image
//             </p>
//           </div>

//           <button className="w-full text-sm border border-dashed border-gray-300 rounded-lg py-8 text-gray-500 hover:bg-gray-50 transition">
//             Click to upload image
//           </button>
//         </div>
//       </div>

//       {/* Footer hint */}
//       <p className="text-xs text-gray-400 text-center">
//         Drafts are saved locally. Publishing is disabled in demo mode.
//       </p>
//     </div>
//   );
// }

// export default WriteBlogs;

import { useState } from "react";
import { Image, Tag, Save, Send } from "lucide-react";
import api from "../../services/api";
import { toast } from "sonner";

const predefinedTags = [
  "React",
  "JavaScript",
  "Node.js",
  "AI",
  "SaaS",
  "Web Dev",
  "Cloud",
  "CSS",
  "HTML",
  "Programming",
];

function WriteBlogs() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  const [customTag, setCustomTag] = useState("");
  const [coverImage, setCoverImage] = useState<File | null>(null);
  const [previewURL, setPreviewURL] = useState("");

  // Upload image to server or storage
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setCoverImage(file);
    setPreviewURL(URL.createObjectURL(file));
  };

  // Submit blog
  const addBlogToDatabase = async () => {
    try {
      const tagToUse = customTag || selectedTag;
      if (!title || !content || !tagToUse || !coverImage) {
        toast.error("Please fill all fields and select/upload cover image");
        return;
      }

      // Example: using FormData to send image file
      const formData = new FormData();
      formData.append("title", title);
      formData.append("excerpt", content);
      formData.append("tags", tagToUse);
      formData.append("coverImage", coverImage);

      const { data } = await api.post("/blog/write", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (data.success) {
        toast.success("Blog added to database");
        setTitle("");
        setContent("");
        setSelectedTag("");
        setCustomTag("");
        setCoverImage(null);
        setPreviewURL("");
      }
    } catch (err: any) {
      console.log("error " + err.message);
      toast.error(err.message);
    }
  };

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

          <button
            onClick={addBlogToDatabase}
            className="flex items-center gap-2 px-4 py-2 text-sm rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
          >
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

          {/* Predefined tags */}
          <div className="flex flex-wrap gap-2 mb-2">
            {predefinedTags.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => {
                  setSelectedTag(tag);
                  setCustomTag("");
                }}
                className={`px-3 py-1 text-sm rounded-full border ${
                  selectedTag === tag
                    ? "bg-blue-600 text-white border-blue-600"
                    : "text-gray-700 border-gray-300 hover:bg-gray-100"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Custom tag */}
          <input
            type="text"
            value={customTag}
            onChange={(e) => {
              setCustomTag(e.target.value);
              setSelectedTag(""); // clear predefined if custom entered
            }}
            placeholder="Or write your own tag..."
            className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Cover Image */}
        <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <Image size={16} className="text-gray-500" />
            <p className="text-sm font-medium text-gray-700">Cover image</p>
          </div>

          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full text-sm border border-dashed border-gray-300 rounded-lg py-8 text-gray-500 hover:bg-gray-50 transition cursor-pointer"
          />

          {previewURL && (
            <img
              src={previewURL}
              alt="preview"
              className="mt-3 w-full h-48 object-cover rounded-lg border border-gray-200"
            />
          )}
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
