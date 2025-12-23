import { toast } from "sonner";
import { useAppContext } from "../../context/AppContext";
function Footer() {
  const { name, setName } = useAppContext();

  const handleSubscribe = () => {
    if (!name) {
      toast.error("Please enter your email address");
      return;
    }

    if (!name.includes("@")) {
      toast.error("Enter a valid email address");
      return;
    }

    toast.success("Subscribed successfully!", {
      description: "You'll now receive our latest updates",
    });
    console.log(name);
    setName(" "); // clear input
  };

  return (
    <footer className="mt-20 border-t border-gray-200 bg-blue-100/1.3">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg text-gray-700 mb-4">
            Quick Links
          </h3>
          <ul className="space-y-3 text-gray-500 text-sm">
            <li>
              <a href="#home" className="hover:text-gray-800 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-gray-800 transition">
                About
              </a>
            </li>
            <li>
              <a href="#privacy" className="hover:text-gray-800 transition">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#terms" className="hover:text-gray-800 transition">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#support" className="hover:text-gray-800 transition">
                Support
              </a>
            </li>
          </ul>
        </div>

        {/* Social / Contact */}
        <div>
          <h3 className="font-semibold text-lg text-gray-700 mb-4">
            Connect with Us
          </h3>
          <ul className="space-y-3 text-gray-500 text-sm">
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-800 transition"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-800 transition"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-800 transition"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://reddit.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-800 transition"
              >
                Reddit
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="md:col-span-2">
          <h3 className="font-semibold text-lg text-gray-700 mb-4">
            Stay in the Loop
          </h3>
          <p className="text-gray-500 text-sm mb-4 max-w-md">
            Get updates on new blogs, featured writers, and platform news.
          </p>

          <div className="flex items-center gap-3">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="email"
              placeholder="blogger@gmail.com"
              className="flex-1 px-4 py-2 rounded-full border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
            <button
              onClick={handleSubscribe}
              className="px-5 py-2 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-700 transition"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-100 py-4 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} Weblog. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
