function MyBlogs() {
  const blogs = [
    {
      id: 1,
      title: "Understanding JavaScript Closures",
      status: "Published",
      views: 1240,
      date: "Jan 12, 2025",
    },
    {
      id: 2,
      title: "My journey learning backend development",
      status: "Draft",
      views: 0,
      date: "Jan 18, 2025",
    },
    {
      id: 3,
      title: "How systems beat motivation",
      status: "Published",
      views: 860,
      date: "Feb 2, 2025",
    },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">My Blogs</h1>

      <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-500">
            <tr>
              <th className="text-left px-6 py-3 font-medium">Title</th>
              <th className="text-left px-6 py-3 font-medium">Status</th>
              <th className="text-left px-6 py-3 font-medium">Views</th>
              <th className="text-left px-6 py-3 font-medium">Date</th>
            </tr>
          </thead>

          <tbody>
            {blogs.map((blog) => (
              <tr
                key={blog.id}
                className="border-t border-gray-100 hover:bg-gray-50"
              >
                <td className="px-6 py-4 font-medium text-gray-800">
                  {blog.title}
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      blog.status === "Published"
                        ? "bg-green-100 text-green-600"
                        : "bg-yellow-100 text-yellow-600"
                    }`}
                  >
                    {blog.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-gray-600">{blog.views}</td>
                <td className="px-6 py-4 text-gray-500">{blog.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MyBlogs;
