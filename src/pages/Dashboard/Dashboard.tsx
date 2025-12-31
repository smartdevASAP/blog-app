import { Plus, Bookmark } from "lucide-react";
import { dummyBlogs } from "../../assets/Dummies";
import { useAppContext } from "../../context/AppContext";

function Dashboard() {
  const recentBlogs = dummyBlogs.slice(0, 4);
  const { AddToReadList, bookmarkingFunc } = useAppContext();

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
        <StatCard label="My Total Blogs" value={dummyBlogs.length} />
        <StatCard
          label="Draft"
          value={dummyBlogs.filter((b) => b.status === "published").length}
        />
        <StatCard
          label="Trashed"
          value={dummyBlogs.filter((b) => b.status === "draft").length}
        />
        <StatCard
          label="Bookmarked"
          value={dummyBlogs.filter((b) => b.status === "trashed").length}
        />
      </section>

      {/* Recent Blogs */}
      <section className="space-y-4">
        <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
          Recent Blogs
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {recentBlogs.map((blog) => (
            <div
              key={blog.id}
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
                <span className="text-xs text-gray-400">{blog.createdAt}</span>
              </div>

              {/* Content */}
              <h3 className="text-base font-semibold text-gray-900 line-clamp-2">
                {blog.title}
              </h3>

              <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                {blog.excerpt}
              </p>

              <p className="mt-3 text-xs text-gray-400">
                By <span className="font-medium">{blog.author.name}</span>
              </p>

              {/* Primary CTA */}
              <button
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

              {/* Secondary actions */}
              <div className="mt-3 flex items-center justify-between">
                <button
                  onClick={() => AddToReadList(blog)}
                  className="
                    flex items-center gap-1.5
                    px-3 py-1.5
                    text-xs font-medium
                    text-gray-600
                    border border-gray-200
                    rounded-full
                    hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200
                    transition
                  "
                >
                  + Add to Readlist
                </button>

                <Bookmark
                  onClick={() => bookmarkingFunc(blog)}
                  size={22}
                  className="
                    text-gray-400
                    hover:text-blue-600
                    hover:scale-110
                    cursor-pointer
                    transition
                  "
                />
              </div>
            </div>
          ))}
        </div>
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
