import { UserPlus, Users, BookOpen } from "lucide-react";

function Feed() {
  const bloggers = [
    {
      id: 1,
      name: "Kelvin Kariuki",
      avatar: "K",
      bio: "Full-stack developer documenting real SaaS & backend systems.",
      niche: "Backend • SaaS • Node.js",
      followers: 1240,
      posts: 34,
      followed: false,
    },
    {
      id: 2,
      name: "Jane Doe",
      avatar: "J",
      bio: "UI/UX designer focused on clarity, systems, and dashboards.",
      niche: "Design • UX",
      followers: 3890,
      posts: 58,
      followed: true,
    },
    {
      id: 3,
      name: "Mark Johnson",
      avatar: "M",
      bio: "Writing about databases, scaling, and backend decisions.",
      niche: "Databases • PostgreSQL",
      followers: 980,
      posts: 21,
      followed: false,
    },
    {
      id: 4,
      name: "Aisha Mwangi",
      avatar: "A",
      bio: "Tech growth, discipline, and career clarity for developers.",
      niche: "Career • Productivity",
      followers: 2120,
      posts: 46,
      followed: false,
    },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Discover Bloggers</h1>
        <p className="text-sm text-gray-500 mt-1">
          Explore creators and follow those you resonate with
        </p>
      </div>

      {/* Bloggers */}
      <div className="space-y-6">
        {bloggers.map((blogger) => (
          <div
            key={blogger.id}
            className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition"
          >
            {/* Top */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-semibold text-blue-600">
                  {blogger.avatar}
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-800">
                    {blogger.name}
                  </p>
                  <p className="text-xs text-gray-400">{blogger.niche}</p>
                </div>
              </div>

              <button
                className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm font-medium transition ${
                  blogger.followed
                    ? "bg-gray-100 text-gray-600"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                <UserPlus size={16} />
                {blogger.followed ? "Following" : "Follow"}
              </button>
            </div>

            {/* Bio */}
            <p className="text-sm text-gray-600 mb-4">{blogger.bio}</p>

            {/* Stats */}
            <div className="flex items-center gap-6 text-sm text-gray-500 pt-4 border-t border-gray-100">
              <div className="flex items-center gap-1">
                <Users size={16} />
                {blogger.followers.toLocaleString()} followers
              </div>
              <div className="flex items-center gap-1">
                <BookOpen size={16} />
                {blogger.posts} posts
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Feed;
