import { Users } from "lucide-react";

function Bloggers() {
  const bloggers = [
    {
      id: 1,
      name: "Alex Morgan",
      niche: "Technology & Startups",
      bio: "Writes about software engineering, startups, and emerging tech.",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 2,
      name: "Sophia Lee",
      niche: "Travel & Lifestyle",
      bio: "Sharing travel stories, photography, and lifestyle inspiration.",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 3,
      name: "Daniel Kim",
      niche: "Business & Finance",
      bio: "Helping people understand money, investing, and entrepreneurship.",
      image: "https://randomuser.me/api/portraits/men/65.jpg",
    },
    {
      id: 4,
      name: "Emily Carter",
      niche: "Education & Writing",
      bio: "Passionate about teaching, writing, and personal growth.",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
    },
  ];

  return (
    <section className="mt-20 px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">Top Bloggers</h2>
        <p className="text-gray-500 mt-2">
          Meet some of the creators shaping conversations on our platform.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {bloggers.map((blogger) => (
          <div
            key={blogger.id}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition text-center"
          >
            <img
              src={blogger.image}
              alt={blogger.name}
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
            />

            <h3 className="text-lg font-semibold text-gray-800">
              {blogger.name}
            </h3>

            <p className="text-sm text-blue-600 font-medium mb-2">
              {blogger.niche}
            </p>

            <p className="text-sm text-gray-500">{blogger.bio}</p>

            <button className="mt-4 text-sm text-blue-600 hover:underline">
              View Profile
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Bloggers;
