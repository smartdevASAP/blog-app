import { Globe, PenTool, Bookmark } from "lucide-react";

function Features() {
  // features options
  const Featured_options = [
    {
      _id: 1,
      Icon: <PenTool className="w-10 h-10 text-blue-500 mb-4" />,
      heading: "Write Freely",
      text: "Create posts effortlessly with a clean editor.",
    },
    {
      _id: 2,
      Icon: <Globe className="w-10 h-10 text-green-500 mb-4" />,
      heading: "Explore Content",
      text: "Discover trending articles, topics, and authors worldwide.",
    },
    {
      _id: 3,
      Icon: <Bookmark className="w-10 h-10 text-yellow-500 mb-4" />,
      heading: "Share Ideas",
      text: "Bookmark your favorite posts and create reading lists.",
    },
  ];

  return (
    <section className="mt-16 px-6 pt-8 border-t-2 border-gray-100 md:px-16">
      <h2 className="text-3xl font-bold text-center mb-10">
        Why Blog With Us?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {Featured_options.map((item) => (
          <div
            key={item._id}
            className="bg-white p-8 rounded-xl shadow-2xl hover:shadow-lg transition transform hover:-translate-y-1 text-center"
          >
            <div className="flex justify-center items-center mb-4">
              {" "}
              {item.Icon}
            </div>
            <h3 className="text-xl font-semibold mb-3">{item.heading}</h3>
            <p className="text-gray-500 text-sm">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
