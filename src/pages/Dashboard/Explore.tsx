import { Search, Flame, TrendingUp, Bookmark } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { toast } from "sonner";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

/* ---------------- TYPES ---------------- */
interface Blog {
  _id: string;
  title: string;
  excerpt: string;
  tags: string[];
  coverImage?: string;
  author: string; // assuming author is a string for now
  createdAt: string;
}

/* ---------------- SPINNER ---------------- */
function Spinner() {
  return (
    <div className="flex justify-center items-center py-12">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-600 border-t-transparent" />
    </div>
  );
}

/* ---------------- COMPONENT ---------------- */
function Explore() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  /* ---------------- FETCH BLOGS ---------------- */
  useEffect(() => {
    const getAllPosts = async () => {
      try {
        setLoading(true);
        const { data } = await api.get("/blog/all", { withCredentials: true });

        if (Array.isArray(data)) {
          setBlogs(data);
        } else if (Array.isArray(data.blogs)) {
          setBlogs(data.blogs);
        } else {
          toast.error("Invalid blogs response");
          setBlogs([]);
        }
      } catch (err: any) {
        toast.error("Failed to load blogs");
        setBlogs([]);
      } finally {
        setLoading(false);
      }
    };

    getAllPosts();
  }, []);

  /* ---------------- CATEGORIES ---------------- */
  const categories = useMemo(() => {
    if (!Array.isArray(blogs)) return [];
    return Array.from(new Set(blogs.flatMap((b) => b.tags || []))).slice(0, 8);
  }, [blogs]);

  /* ---------------- SEARCH FILTER ---------------- */
  const filteredBlogs = useMemo(() => {
    if (!search.trim()) return blogs;

    return blogs.filter(
      (blog) =>
        blog.title.toLowerCase().includes(search.toLowerCase()) ||
        blog.tags?.some((tag) =>
          tag.toLowerCase().includes(search.toLowerCase())
        )
    );
  }, [search, blogs]);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Explore</h1>
        <p className="text-sm text-gray-500 mt-1">
          Discover trending blogs and creators
        </p>
      </div>

      {/* Search */}
      <div className="relative flex gap-4 max-w-xl">
        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search by title or tag"
          className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 text-sm"
        />
      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSearch(category)}
            className="px-4 py-1.5 text-sm rounded-full border border-gray-200 text-gray-600 hover:bg-gray-100 transition"
          >
            {category}
          </button>
        ))}
      </div>

      {/* Blogs */}
      {loading && <Spinner />}
      {!loading && filteredBlogs.length === 0 && (
        <p className="text-gray-500 text-sm">No blogs found.</p>
      )}
      {!loading && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredBlogs.map((blog) => (
            <div
              onClick={() => navigate(`/dashboard/blog/${blog._id}`)}
              key={blog._id}
              className="cursor-pointer bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition"
            >
              {/* Tag + Trending */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                  {blog.tags?.[0] || "General"}
                </span>
                <span className="flex items-center gap-1 text-xs text-orange-600 font-medium">
                  <Flame size={14} />
                  Trending
                </span>
              </div>

              {/* Cover */}
              {blog.coverImage && (
                <img
                  src={blog.coverImage}
                  alt={blog.title}
                  className="h-40 w-full object-cover rounded-lg mb-4"
                />
              )}

              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                {blog.title}
              </h2>

              <p className="text-sm text-gray-500 mb-4">{blog.excerpt}</p>

              <div className="flex items-center justify-between">
                <button className="text-sm text-blue-600 hover:underline">
                  Read more →
                </button>

                <button className="p-2 rounded-lg hover:bg-gray-100">
                  <Bookmark size={18} className="text-gray-500" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Trending Topics */}
      {!loading && categories.length > 0 && (
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp size={18} className="text-blue-600" />
            <h3 className="font-semibold text-gray-800">Trending Topics</h3>
          </div>

          <div className="flex flex-wrap gap-3">
            {categories.map((topic) => (
              <span
                key={topic}
                className="px-3 py-1 text-sm rounded-full bg-gray-100 text-gray-600"
              >
                #{topic}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Explore;
