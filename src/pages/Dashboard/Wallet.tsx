function Wallet() {
  const walletData = {
    totalSupported: 2450, // dummy amount
    currency: "KES",
    lastSupportDate: "12 Aug 2025",
    supportsCount: 7,
  };

  const history = [
    { id: 1, amount: 500, date: "12 Aug 2025", note: "Monthly support" },
    { id: 2, amount: 300, date: "02 Jul 2025", note: "Creator appreciation" },
    { id: 3, amount: 1000, date: "10 Jun 2025", note: "Platform support" },
    { id: 4, amount: 650, date: "18 May 2025", note: "Community support" },
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Wallet</h1>
        <p className="text-sm text-gray-500">
          Track how you support Weblog developers
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <p className="text-sm text-gray-500">Total Supported</p>
          <h2 className="text-2xl font-semibold mt-1">
            {walletData.currency} {walletData.totalSupported}
          </h2>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <p className="text-sm text-gray-500">Support Count</p>
          <h2 className="text-2xl font-semibold mt-1">
            {walletData.supportsCount} times
          </h2>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <p className="text-sm text-gray-500">Last Support</p>
          <h2 className="text-lg font-semibold mt-1">
            {walletData.lastSupportDate}
          </h2>
        </div>
      </div>

      {/* Support History */}
      <div className="bg-white rounded-xl border border-gray-200">
        <div className="p-6 border-b border-gray-100">
          <h3 className="text-lg font-semibold text-gray-800">
            Support History
          </h3>
        </div>

        <div className="divide-y">
          {history.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-4 text-sm"
            >
              <div>
                <p className="text-gray-700 font-medium">{item.note}</p>
                <p className="text-gray-400 text-xs">{item.date}</p>
              </div>
              <p className="font-semibold text-gray-800">
                {walletData.currency} {item.amount}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-blue-700">
          Support Weblog developers to help improve the platform 🚀
        </p>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition">
          Support Now
        </button>
      </div>
    </div>
  );
}

export default Wallet;
