const trashedBlogs = [
  {
    id: 1,
    title: "Old JavaScript Patterns",
    deletedAt: "Aug 2, 2025",
  },
  {
    id: 2,
    title: "Unfinished Backend Notes",
    deletedAt: "Jul 28, 2025",
  },
];

function Trashed() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Trashed Blogs</h1>

      {trashedBlogs.length === 0 ? (
        <div className="bg-white rounded-xl p-6 text-center text-gray-500 shadow-sm">
          No trashed blogs
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-sm divide-y">
          {trashedBlogs.map((blog) => (
            <div
              key={blog.id}
              className="flex justify-between items-center p-4"
            >
              <div>
                <h3 className="text-gray-700 font-medium">{blog.title}</h3>
                <p className="text-sm text-gray-400">
                  Deleted on {blog.deletedAt}
                </p>
              </div>

              <div className="flex gap-2">
                <button className="text-sm text-blue-600 hover:underline">
                  Restore
                </button>
                <button className="text-sm text-red-500 hover:underline">
                  Delete forever
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Trashed;
