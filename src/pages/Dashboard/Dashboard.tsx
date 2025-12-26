// overview done here
function Dashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Dashboard Overview
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <p className="text-gray-500 text-sm">Projects</p>
          <h2 className="text-2xl font-semibold">12</h2>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <p className="text-gray-500 text-sm">Tasks</p>
          <h2 className="text-2xl font-semibold">34</h2>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <p className="text-gray-500 text-sm">Activity</p>
          <h2 className="text-2xl font-semibold">Active</h2>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
