import { FileText, Eye, ThumbsUp, TrendingUp, Plus } from "lucide-react";

function Dashboard() {
  // Dummy data (replace later with API)
  const stats = [
    {
      label: "Total Blogs",
      value: 24,
      icon: <FileText size={20} />,
    },
    {
      label: "Total Views",
      value: "18.4k",
      icon: <Eye size={20} />,
    },
    {
      label: "Likes",
      value: 1_284,
      icon: <ThumbsUp size={20} />,
    },
    {
      label: "Growth",
      value: "+12.5%",
      icon: <TrendingUp size={20} />,
      positive: true,
    },
  ];

  const recentActivity = [
    {
      title: "How to Build Scalable APIs",
      status: "Published",
      time: "2 hours ago",
    },
    {
      title: "Understanding React Hooks",
      status: "Draft",
      time: "Yesterday",
    },
    {
      title: "Why TypeScript Matters",
      status: "Published",
      time: "3 days ago",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Dashboard Overview
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Track your content performance and activity
          </p>
        </div>

        <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition">
          <Plus size={16} />
          Write Blog
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-center justify-between"
          >
            <div>
              <p className="text-sm text-gray-500">{stat.label}</p>
              <h2 className="text-2xl font-semibold text-gray-800 mt-1">
                {stat.value}
              </h2>
            </div>

            <div
              className={`p-3 rounded-lg ${
                stat.positive
                  ? "bg-green-50 text-green-600"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              {stat.icon}
            </div>
          </div>
        ))}
      </div>

      {/* Lower Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 shadow-sm">
          <div className="p-6 border-b border-gray-100">
            <h3 className="font-semibold text-gray-800">Recent Activity</h3>
          </div>

          <div className="divide-y">
            {recentActivity.map((item) => (
              <div
                key={item.title}
                className="flex items-center justify-between p-6"
              >
                <div>
                  <p className="font-medium text-gray-800">{item.title}</p>
                  <p className="text-sm text-gray-500">{item.time}</p>
                </div>

                <span
                  className={`text-xs font-medium px-3 py-1 rounded-full ${
                    item.status === "Published"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Summary */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
          <h3 className="font-semibold text-gray-800 mb-4">
            Performance Summary
          </h3>

          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-500">Weekly Views</p>
              <p className="text-lg font-semibold text-gray-800">4,320</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Engagement Rate</p>
              <p className="text-lg font-semibold text-gray-800">6.8%</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Publishing Streak</p>
              <p className="text-lg font-semibold text-gray-800">5 weeks</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
