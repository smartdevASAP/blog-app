// export default BlogDetails;
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../services/api";
import { toast } from "sonner";

interface Author {
  _id: string;
  name: string;
  avatar?: string;
}

interface Blog {
  _id: string;
  title: string;
  excerpt: string;
  tags: string[];
  coverImage: string;
  author: Author;
  createdAt: string;
  updatedAt: string;
}

function Spinner() {
  return (
    <div className="flex justify-center items-center py-12">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-600 border-t-transparent" />
    </div>
  );
}

function BlogDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!id) return;

    const fetchBlog = async () => {
      try {
        setLoading(true);
        const { data } = await api.get(`/blog/${id}`);

        if (data.success) {
          setBlog(data.blog);
        } else {
          toast.error(data.message || "Blog not found");
        }
      } catch (err: any) {
        toast.error(err.response?.data?.message || "Error fetching blog");
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) return <Spinner />;

  if (!blog)
    return <p className="text-center text-gray-500 py-12">Blog not found.</p>;

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="text-blue-600 text-sm font-medium hover:underline"
      >
        &larr; Back
      </button>

      {/* Title */}
      <h1 className="text-3xl font-bold text-gray-800">{blog.title}</h1>

      {/* Author + date */}
      <div className="flex items-center gap-3 text-sm text-gray-500">
        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-700">
          {blog.author?.avatar ? (
            <img
              src={blog.author.avatar}
              alt={blog.author.name}
              className="w-8 h-8 rounded-full object-cover"
            />
          ) : (
            blog.author?.name?.[0] || "U"
          )}
        </div>
        <p>{blog.author?.name || "Unknown Author"}</p>
        <p>· {new Date(blog.createdAt).toLocaleDateString()}</p>
      </div>

      {/* Cover Image */}
      {blog.coverImage && (
        <img
          src={blog.coverImage}
          alt={blog.title}
          className="w-full h-64 object-cover rounded-lg"
        />
      )}

      {/* Content */}
      <p className="text-gray-700">{blog.excerpt}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {blog.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 text-sm rounded-full bg-gray-100 text-gray-600"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default BlogDetails;
