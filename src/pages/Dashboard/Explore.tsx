import { Search, Flame, TrendingUp, Bookmark } from "lucide-react";

function Explore() {
  const categories = [
    "Technology",
    "Programming",
    "Design",
    "AI",
    "Startups",
    "Productivity",
    "Finance",
  ];

  const posts = [
    {
      title: "Mastering React Performance in 2025",
      author: "Alex Morgan",
      category: "Programming",
      readTime: "6 min read",
      trending: true,
    },
    {
      title: "Why Most SaaS Fail in the First Year",
      author: "Sarah Kim",
      category: "Startups",
      readTime: "4 min read",
      trending: false,
    },
    {
      title: "Design Systems That Scale",
      author: "Michael Lee",
      category: "Design",
      readTime: "5 min read",
      trending: true,
    },
    {
      title: "AI Tools Every Developer Should Know",
      author: "Daniel James",
      category: "AI",
      readTime: "7 min read",
      trending: false,
    },
  ];

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
      <div className="relative max-w-xl">
        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        />
        <input
          type="text"
          placeholder="Search blogs, topics, or creators..."
          className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
        />
      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            className="px-4 py-1.5 text-sm rounded-full border border-gray-200 text-gray-600 hover:bg-gray-100 transition"
          >
            {category}
          </button>
        ))}
      </div>

      {/* Posts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <div
            key={post.title}
            className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                {post.category}
              </span>

              {post.trending && (
                <span className="flex items-center gap-1 text-xs text-orange-600 font-medium">
                  <Flame size={14} />
                  Trending
                </span>
              )}
            </div>

            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              {post.title}
            </h2>

            <p className="text-sm text-gray-500 mb-4">
              By {post.author} · {post.readTime}
            </p>

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

      {/* Trending Section */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp size={18} className="text-blue-600" />
          <h3 className="font-semibold text-gray-800">Trending Topics</h3>
        </div>

        <div className="flex flex-wrap gap-3">
          {["React", "Next.js", "AI", "SaaS", "Tailwind", "Node.js"].map(
            (topic) => (
              <span
                key={topic}
                className="px-3 py-1 text-sm rounded-full bg-gray-100 text-gray-600"
              >
                #{topic}
              </span>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default Explore;
