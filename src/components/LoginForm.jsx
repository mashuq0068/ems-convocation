/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';

const LoginForm = ({ onLogin }) => {
  return (
    <div className="h-screen flex justify-center items-center bg-gradient-to-br from-orange-50 via-white to-orange-100 relative">
      {/* Subtle Animated Background Circles */}
      <motion.div
        className="absolute top-16 left-10 w-48 h-48 bg-orange-300 rounded-full blur-3xl opacity-30"
        animate={{ scale: [1, 1.2, 1], y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-64 h-64 bg-orange-400 rounded-full blur-3xl opacity-20"
        animate={{ scale: [1, 1.3, 1], y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      {/* Login Card */}
      <motion.div
        className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md relative z-10"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, type: "spring", stiffness: 80 }}
      >
        {/* Logo */}
        <motion.div
          className="flex justify-center mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src="/images/nwu-logo-removebg-preview.png" // Ensure this path points to your logo
            alt="University Logo"
            className="w-20 h-20"
          />
        </motion.div>

        {/* Welcome Message */}
        <motion.h2
          className="text-2xl font-extrabold text-center text-orange-600 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          Welcome Back!
        </motion.h2>
        <p className="text-center text-gray-600 mb-6 text-sm">
          Log in to access your convocation details.
        </p>

        {/* Form */}
        <form className="space-y-6">
          {/* Student ID Input */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <input
              type="text"
              placeholder="Student ID"
              className="w-full px-4 py-3 border input-gradient-border animate-border  border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
            />
          </motion.div>

          {/* Password Input */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <input
              type="number"
              placeholder="Passing Year"
              className="w-full px-4 py-3 input-gradient-border animate-border border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
            />
          </motion.div>

          {/* Login Button */}
          <motion.button
            type="submit"
            className="w-full px-4 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-md cursor-not-allowed hover:bg-orange-600 transition-colors"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onLogin}
          >
            Login
          </motion.button>
        </form>

        {/* Extra Links */}
        <motion.div
          className="mt-6 text-center text-sm text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <a href="#" className="text-orange-500 hover:underline">
            Forgot Password?
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LoginForm;
