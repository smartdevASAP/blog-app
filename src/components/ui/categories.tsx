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

  const [activeCategory, setActiveCategory] = useState<Category>(
    categoriesArr[0]
  );

  return (
    <section id="categories" className="mt-16 px-4">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-6">
        Categories
      </h1>

      {/* 🔹 Category Nav */}
      <nav className="flex gap-6 md:gap-10 overflow-x-auto md:overflow-visible border-b border-gray-200 pb-3 justify-start md:justify-center">
        {categoriesArr.map((item) => (
          <button
            key={item._id}
            onClick={() => setActiveCategory(item)}
            className={`whitespace-nowrap text-sm md:text-lg transition relative pb-2 ${
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
      <div className="mt-6 text-center max-w-xl mx-auto">
        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
          {activeCategory.text}
        </p>
      </div>
    </section>
  );
}

export default Categories;
