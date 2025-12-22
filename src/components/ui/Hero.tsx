import { stars_svg } from "../../assets/assets_config";
import { blog_img } from "../../assets/assets_config";
function Hero() {
  return (
    <section id="home" className="p-12 text-center">
      <div className="flex justify-center items-center gap-2">
        <h1 className="text-4xl font-bold text-gray-600 flex items-center gap-2">
          Write. Publish. Inspire.
          <img src={stars_svg} alt="stars" className="inline-block w-6 h-6" />
        </h1>
      </div>

      <p className="text-sm text-gray-400 mt-3">
        Share your voice with the world. Discover stories, ideas, and creators
        shaping the conversation.
      </p>
      <div className="flex items-center justify-center h-auto mt-8">
        <img src={blog_img} alt="" />
      </div>
      {/* buttons here */}
      <button className="px-5 mt-12 md:w-[200px]  w-full py-2 rounded-xs bg-blue-600 shadow-sm text-white">
        Blog
      </button>
    </section>
  );
}

export default Hero;
