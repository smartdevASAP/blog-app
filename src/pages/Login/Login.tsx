import { toast } from "sonner";
import { FcGoogle } from "react-icons/fc";
import { useAppContext } from "../../context/AppContext";

function Login() {
  const { email, password, setEmail, setPassword, login } = useAppContext();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please fill in all fields");
      return;
    }
    if (!email.includes("@")) {
      toast.error("Enter a valid email address");
      return;
    }

    toast.success("Logged in successfully!");
    setEmail("");
    setPassword("");
  };

  const handleGoogleLogin = () => {
    toast.success("Redirecting to Google login...");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Welcome Back
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-gray-600 mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full px-4 py-2 border border-gray-200 rounded-lg 
                         placeholder:text-gray-400
                         focus:border-blue-400 focus:ring-2 focus:ring-blue-100
                         outline-none transition"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-600 mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-200 rounded-lg
                         placeholder:text-gray-400
                         focus:border-blue-400 focus:ring-2 focus:ring-blue-100
                         outline-none transition"
            />
          </div>

          {/* Submit Button */}
          <button
            onClick={() => login()}
            type="submit"
            className="w-full py-2 bg-blue-600 text-white font-semibold rounded-lg
                       hover:bg-blue-700 transition"
          >
            Log In
          </button>
        </form>

        {/* OR Divider */}
        <div className="flex items-center my-5">
          <hr className="flex-1 border-gray-200" />
          <span className="px-2 text-gray-400 text-sm">or</span>
          <hr className="flex-1 border-gray-200" />
        </div>

        {/* Google Login */}
        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-3 py-2
                     border border-gray-200 rounded-lg
                     hover:bg-gray-100 transition"
        >
          <FcGoogle size={20} />
          Continue with Google
        </button>

        {/* Footer */}
        <p className="mt-6 text-center text-gray-500 text-sm">
          Don't have an account?{" "}
          <a href="/register" className="text-blue-600 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
