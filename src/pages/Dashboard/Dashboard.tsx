import { Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

function Dashboard() {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");

  const navigate = useNavigate();

  // Redirect to write blog
  const redirect = () => {
    navigate("/dashboard/write");
  };

  // Fetch blogs from backend
  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const { data } = await api.get("/blog/all");
      if (Array.isArray(data.blogs)) {
        setBlogs(data.blogs);
      } else {
        setBlogs([]);
        console.error("Invalid blogs response");
      }
    } catch (err: any) {
      console.error("Error fetching blogs:", err.message);
      setBlogs([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  // Sort blogs based on createdAt
  const sortedBlogs = [...blogs].sort((a, b) => {
    if (sortOrder === "newest") {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    } else {
      return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
    }
  });

  // Quick stats
  const totalBlogs = blogs.length;
  const published = blogs.filter((b) => b.status === "published").length;
  const draft = blogs.filter((b) => b.status === "draft").length;
  const trashed = blogs.filter((b) => b.status === "trashed").length;

  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-xl md:text-3xl font-bold text-gray-900">
            Dashboard Overview
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Manage your content and recent activity
          </p>
        </div>

        <button
          onClick={redirect}
          className="
            inline-flex items-center gap-2
            bg-blue-600 text-white
            px-5 h-11
            rounded-xl
            text-sm font-semibold
            shadow-sm
            hover:bg-blue-700 hover:shadow-md
            active:scale-[0.97]
            transition
            whitespace-nowrap
          "
        >
          <Plus size={16} />
          Write Blog
        </button>
      </div>

      {/* Quick Stats */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard label="Total Blogs" value={totalBlogs} />
        <StatCard label="Published" value={published} />
        <StatCard label="Draft" value={draft} />
        <StatCard label="Trashed" value={trashed} />
      </section>

      {/* Sorting Options */}
      <section className="flex items-center gap-4">
        <p className="text-sm font-medium text-gray-700">Sort by:</p>
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value as "newest" | "oldest")}
          className="border border-gray-200 rounded-lg px-3 py-1 text-sm focus:ring-1 focus:ring-blue-500"
        >
          <option value="newest">Newest → Oldest</option>
          <option value="oldest">Oldest → Newest</option>
        </select>
      </section>

      {/* Recent Blogs */}
      <section className="space-y-4">
        <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
          Recent Blogs
        </h2>

        {loading && <p className="text-gray-500">Loading blogs...</p>}

        {!loading && sortedBlogs.length === 0 && (
          <p className="text-gray-500">No blogs found.</p>
        )}

        {!loading && sortedBlogs.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {sortedBlogs.map((blog) => (
              <div
                key={blog._id}
                className="
                  bg-white border border-gray-200
                  rounded-2xl p-5
                  shadow-sm
                  hover:shadow-md hover:-translate-y-0.5
                  transition
                "
              >
                {/* Status & Date */}
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`text-xs font-semibold px-2.5 py-1 rounded-full capitalize ${
                      blog.status === "published"
                        ? "bg-green-50 text-green-700"
                        : blog.status === "draft"
                        ? "bg-yellow-50 text-yellow-700"
                        : "bg-red-50 text-red-700"
                    }`}
                  >
                    {blog.status}
                  </span>
                  <span className="text-xs text-gray-400">
                    {new Date(blog.createdAt).toLocaleDateString()}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-base font-semibold text-gray-900 line-clamp-2">
                  {blog.title}
                </h3>

                <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                  {blog.excerpt}
                </p>

                <p className="mt-3 text-xs text-gray-400">
                  By{" "}
                  <span className="font-medium">
                    {typeof blog.author === "string"
                      ? "Unknown Author"
                      : blog.author?.name || "Unknown Author"}
                  </span>
                </p>

                {/* Primary CTA */}
                <button
                  onClick={() => navigate(`/dashboard/blog/${blog._id}`)}
                  className="
                    mt-4 w-full
                    flex items-center justify-center
                    bg-blue-600 text-white
                    py-2.5
                    rounded-xl
                    text-sm font-semibold
                    shadow-sm
                    hover:bg-blue-700 hover:shadow-md
                    active:scale-[0.97]
                    transition
                  "
                >
                  Read Blog
                </button>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: number }) {
  return (
    <div
      className="
        bg-white border border-gray-200
        rounded-2xl p-4
        shadow-sm
        hover:shadow-md
        transition
      "
    >
      <p className="text-xs text-gray-500">{label}</p>
      <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
    </div>
  );
}

export default Dashboard;
