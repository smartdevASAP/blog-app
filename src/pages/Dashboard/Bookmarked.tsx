function Bookmarked() {
  const bookmarks = [
    {
      id: 1,
      title: "Understanding React Server Components",
      author: "Jane Doe",
      date: "Aug 12, 2025",
    },
    {
      id: 2,
      title: "Designing Scalable Node.js APIs",
      author: "John Smith",
      date: "Aug 08, 2025",
    },
    {
      id: 3,
      title: "Why Clean Architecture Matters",
      author: "Alex Johnson",
      date: "Aug 01, 2025",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Bookmarked</h1>
        <p className="text-sm text-gray-500">Articles you’ve saved for later</p>
      </div>

      {/* Empty State */}
      {bookmarks.length === 0 ? (
        <div className="bg-white p-10 rounded-xl border border-gray-200 text-center">
          <p className="text-gray-500">No bookmarks yet</p>
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-gray-200 divide-y">
          {bookmarks.map((item) => (
            <div
              key={item.id}
              className="p-5 flex items-center justify-between hover:bg-gray-50 transition"
            >
              <div>
                <h3 className="font-semibold text-gray-800">{item.title}</h3>
                <p className="text-sm text-gray-500">
                  {item.author} • {item.date}
                </p>
              </div>

              <button className="text-sm text-blue-600 hover:underline">
                Open
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Bookmarked;
