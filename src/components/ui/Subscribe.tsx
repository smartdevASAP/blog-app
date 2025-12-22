import { Coffee } from "lucide-react";

function SupportCreators() {
  return (
    <section id="coffee" className="mt-24 px-6">
      <div className="max-w-4xl mx-auto bg-blue-500 rounded-2xl p-10 text-center shadow-lg">
        <Coffee className="w-12 h-12 text-white mx-auto mb-4" />

        <h2 className="text-3xl font-bold text-white mb-3">
          Support Your Favorite Creators
        </h2>

        <p className="text-amber-100 mb-8 max-w-2xl mx-auto">
          Love the content? Buy a creator a coffee and help them keep writing
          great stories for the community.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-md hover:bg-amber-100 transition">
            ☕ Buy Me a Coffee
          </button>

          <button className="px-6 py-3 border border-white text-white font-semibold rounded-md hover:bg-white hover:text-amber-600 transition">
            Become a Supporter
          </button>
        </div>

        <p className="text-xs text-amber-100 mt-5">
          Secure payments • Support directly • Cancel anytime
        </p>
      </div>
    </section>
  );
}

export default SupportCreators;
