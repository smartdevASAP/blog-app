import { useState } from "react";

function Categories() {
  type Category = {
    _id: number;
    category: string;
    text: string;
  };

  const categoriesArr: Category[] = [
    {
      _id: 0,
      category: "Business",
      text: "Business-related insights and trends.",
    },
    {
      _id: 1,
      category: "Politics",
      text: "Political analysis and global affairs.",
    },
    {
      _id: 2,
      category: "Education",
      text: "Learning resources and educational content.",
    },
    {
      _id: 3,
      category: "Travels",
      text: "Travel stories, guides, and experiences.",
    },
    {
      _id: 4,
      category: "Adverts",
      text: "Promotions, ads, and announcements.",
    },
  ];

  // ✅ default selected category
  const [activeCategory, setActiveCategory] = useState<Category>(
    categoriesArr[0]
  );

  return (
    <div className="mt-12">
      <h1 className="text-3xl font-bold text-center mb-8">Categories</h1>

      {/* 🔹 Category Nav */}
      <nav className="flex justify-center gap-10 border-b border-gray-200 pb-3">
        {categoriesArr.map((item) => (
          <button
            key={item._id}
            onClick={() => setActiveCategory(item)}
            className={`text-lg transition relative pb-2 ${
              activeCategory._id === item._id
                ? "text-blue-600 font-semibold after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-blue-600"
                : "text-gray-500 hover:text-gray-800"
            }`}
          >
            {item.category}
          </button>
        ))}
      </nav>

      {/* 🔹 Conditional Content */}
      <section className="mt-6 text-center max-w-xl mx-auto">
        <p className="text-gray-600 text-base leading-relaxed">
          {activeCategory.text}
        </p>
      </section>
    </div>
  );
}

export default Categories;
