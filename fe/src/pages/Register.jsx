import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "../contexts/ToastContext";
import { register } from "../api/graphql/user";
import { Lock, Mail, User, UserPlus, ArrowLeft } from "lucide-react";
import { FaGoogle, FaFacebook, FaGithub } from 'react-icons/fa';

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.username ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      toast.warning("Please fill in all fields");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    if (formData.password.length < 6) {
      toast.warning("Password must be at least 6 characters");
      return;
    }

    setIsLoading(true);
    try {
      const { token, user } = await register(
        formData.email,
        formData.password,
        formData.username
      );

      if (token) {
        localStorage.setItem("token", token);
      }
      localStorage.setItem("user", JSON.stringify(user));

      toast.success("Account created successfully! Welcome aboard!");
      navigate("/");
    } catch (error) {
      toast.error(error.message || "Registration failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialLogin = (provider) => {
    toast.info(`${provider} registration is in progress... 🚧`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center relative overflow-hidden px-4 py-8">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-pink-500/20 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse"></div>
      </div>

      {/* Back button */}
      <Link
        to="/"
        className="fixed top-6 left-6 z-20 flex items-center gap-2 text-white/70 hover:text-white transition-colors cursor-pointer"
      >
        <ArrowLeft className="w-5 h-5" />
        <span className="font-medium">Back to Menu</span>
      </Link>

      {/* Register container - 2 columns */}
      <div className="relative z-10 w-full max-w-5xl bg-slate-800/40 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left Column - Traditional Register */}
          <div className="p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-500/20 rounded-full mb-4 border border-purple-500/30">
                <UserPlus className="w-8 h-8 text-purple-400" />
              </div>
              <h1 className="text-3xl font-bold text-white mb-2">Create Account</h1>
              <p className="text-purple-300">Join the adventure today</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-purple-200 mb-2"
                >
                  Username
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-400" />
                  <input
                    id="username"
                    name="username"
                    type="text"
                    value={formData.username}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 bg-slate-900/50 border border-purple-500/30 rounded-lg text-white placeholder-purple-300/50 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
                    placeholder="johndoe"
                    disabled={isLoading}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-purple-200 mb-2"
                >
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-400" />
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 bg-slate-900/50 border border-purple-500/30 rounded-lg text-white placeholder-purple-300/50 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
                    placeholder="you@example.com"
                    disabled={isLoading}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-purple-200 mb-2"
                >
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-400" />
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 bg-slate-900/50 border border-purple-500/30 rounded-lg text-white placeholder-purple-300/50 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
                    placeholder="••••••••"
                    disabled={isLoading}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-purple-200 mb-2"
                >
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-400" />
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 bg-slate-900/50 border border-purple-500/30 rounded-lg text-white placeholder-purple-300/50 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
                    placeholder="••••••••"
                    disabled={isLoading}
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white py-3 rounded-lg font-bold text-lg tracking-wide transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 cursor-pointer mt-6"
              >
                {isLoading ? "Creating account..." : "Create Account"}
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-purple-200">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-purple-400 hover:text-purple-300 font-bold transition cursor-pointer"
                >
                  Sign in
                </Link>
              </p>
            </div>
          </div>

          {/* Right Column - Social Register */}
          <div className="p-8 md:p-12 bg-slate-900/30 border-l border-white/10">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-2">Quick Sign Up</h2>
              <p className="text-purple-300 text-sm">Register with your social account</p>
            </div>

            <div className="space-y-4">
              {/* Google */}
              <button
                onClick={() => handleSocialLogin('Google')}
                className="w-full flex items-center justify-center gap-3 bg-white hover:bg-gray-100 text-gray-800 py-3 px-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 cursor-pointer"
              >
                <FaGoogle className="w-5 h-5 text-red-500" />
                <span>Continue with Google</span>
              </button>

              {/* Facebook */}
              <button
                onClick={() => handleSocialLogin('Facebook')}
                className="w-full flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 cursor-pointer"
              >
                <FaFacebook className="w-5 h-5" />
                <span>Continue with Facebook</span>
              </button>

              {/* GitHub */}
              <button
                onClick={() => handleSocialLogin('GitHub')}
                className="w-full flex items-center justify-center gap-3 bg-gray-800 hover:bg-gray-900 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 cursor-pointer"
              >
                <FaGithub className="w-5 h-5" />
                <span>Continue with GitHub</span>
              </button>
            </div>

            <div className="mt-8 p-4 bg-purple-500/10 rounded-lg border border-purple-500/20">
              <p className="text-purple-200 text-sm text-center">
                <span className="font-semibold">Fast & Secure</span>
                <br />
                Create account instantly with social login
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Register;
