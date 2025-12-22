function Trending() {
  // Dummy trending posts data
  const trendingPosts = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?auto=format&fit=crop&w=400&h=200&q=80",
      title: "10 Tips to Write Better Blogs",
      author: "John Doe",
      category: "Writing",
      excerpt:
        "Learn simple tricks to improve your blogging skills and engage more readers.",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&h=200&q=80",
      title: "Top Travel Destinations in 2025",
      author: "Jane Smith",
      category: "Travel",
      excerpt:
        "Discover amazing places to visit and write about for your next adventure.",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=400&h=200&q=80",
      title: "How to Monetize Your Blog",
      author: "Alice Johnson",
      category: "Business",
      excerpt:
        "Step-by-step guide to turning your blog into a source of income.",
    },
  ];

  return (
    <section id="trending" className="mt-16 px-6 md:px-16">
      <h2 className="md:text-3xl text-xl text-gray-600  font-semibold text-center mb-10">
        Trending Posts
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {trendingPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-xl shadow-md hover:shadow-lg overflow-hidden transition transform hover:-translate-y-1"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <p className="text-sm text-blue-500 font-medium">
                {post.category}
              </p>
              <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-500 text-sm mb-2">{post.excerpt}</p>
              <p className="text-gray-400 text-xs">By {post.author}</p>
            </div>
            <button className="w-full py-2 bg-blue-600 text-white">
              Open Blog
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Trending;
