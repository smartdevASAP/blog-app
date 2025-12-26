import { Heart, MessageCircle, Bookmark, Share2 } from "lucide-react";

function Feed() {
  const feedPosts = [
    {
      id: 1,
      author: "Kelvin Kariuki",
      avatar: "K",
      title: "How I’m Structuring My SaaS Backend in Node.js",
      excerpt:
        "Here’s the exact folder structure and reasoning I’m using for my current SaaS project...",
      likes: 128,
      comments: 24,
      bookmarked: false,
      time: "2h ago",
    },
    {
      id: 2,
      author: "Jane Doe",
      avatar: "J",
      title: "Designing Dashboards That Users Actually Love",
      excerpt:
        "Most dashboards fail because they focus on data instead of clarity. Let’s fix that...",
      likes: 312,
      comments: 48,
      bookmarked: true,
      time: "5h ago",
    },
    {
      id: 3,
      author: "Mark Johnson",
      avatar: "M",
      title: "Why I Switched From MongoDB to PostgreSQL",
      excerpt:
        "After building 3 production apps, here’s why Postgres made more sense...",
      likes: 89,
      comments: 16,
      bookmarked: false,
      time: "1d ago",
    },
  ];

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800">My Feed</h1>
        <p className="text-sm text-gray-500 mt-1">
          Latest posts from creators you follow
        </p>
      </div>

      {/* Feed */}
      <div className="space-y-6">
        {feedPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition"
          >
            {/* Author */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-semibold text-blue-600">
                {post.avatar}
              </div>
              <div>
                <p className="text-sm font-medium text-gray-800">
                  {post.author}
                </p>
                <p className="text-xs text-gray-400">{post.time}</p>
              </div>
            </div>

            {/* Content */}
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              {post.title}
            </h2>
            <p className="text-sm text-gray-600 mb-4">{post.excerpt}</p>

            {/* Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <div className="flex items-center gap-6">
                <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-red-500 transition">
                  <Heart size={18} />
                  {post.likes}
                </button>

                <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-blue-500 transition">
                  <MessageCircle size={18} />
                  {post.comments}
                </button>

                <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700 transition">
                  <Share2 size={18} />
                </button>
              </div>

              <button
                className={`p-2 rounded-lg transition ${
                  post.bookmarked
                    ? "text-blue-600"
                    : "text-gray-500 hover:bg-gray-100"
                }`}
              >
                <Bookmark size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Feed;
