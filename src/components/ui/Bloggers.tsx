import { useState } from "react";

function Bloggers() {
  const bloggers = [
    {
      _id: 1,
      name: "Aisha Mburu",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg",
      role: "Travel Blogger",
    },
    {
      _id: 2,
      name: "Kwame Njoroge",
      avatar: "https://randomuser.me/api/portraits/men/72.jpg",
      role: "Tech Writer",
    },
    {
      _id: 3,
      name: "Zuri Kamau",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      role: "Lifestyle Blogger",
    },
    {
      _id: 4,
      name: "Jahlani Otieno",
      avatar: "https://randomuser.me/api/portraits/men/80.jpg",
      role: "Business Writer",
    },
  ];

  return (
    <section id="authors" className="mt-16 px-4 md:px-12">
      <h2 className="text-3xl font-bold text-center mb-10">Top Bloggers</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {bloggers.map((blogger) => (
          <div
            key={blogger._id}
            className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-xl transition"
          >
            <img
              src={blogger.avatar}
              alt={blogger.name}
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-lg font-semibold">{blogger.name}</h3>
            <p className="text-gray-500 text-sm">{blogger.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Bloggers;
