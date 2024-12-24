/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useState } from "react";
import axiosInstance from "../../config/axiosConfig";

const LoginFormPage = () => {
  const [formData, setFromData] = useState({
    id: null,
  });
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [studentData, setStudentData] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Example API endpoint
      const response = await axiosInstance.get(
        `/api/initial-tables?filters[StudentID][$eq]=${formData.id}`
      );
      if (response.status === 200) {
        setIsAuthorized(true);
        setStudentData(response?.data?.data);
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };
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
        <p className="text-center text-gray-600 mb-6 ">
          Log in to access your convocation details.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Student ID Input */}
          {!isAuthorized || isLoading ? (
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              {/* <label className="block  font-medium text-gray-700 mb-1">
                Student ID
              </label> */}
              <input
                required
                onChange={(e) =>
                  setFromData({ ...formData, id: e.target.value })
                }
                type="text"
                placeholder="Student ID"
                className="w-full px-4 py-3 border input-gradient-border animate-border  border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
              />
            </motion.div>
          ) : (
            <>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
              >
                {/* <label className="block  font-medium text-gray-700 mb-1">
                  CGPA
                </label> */}
                <input
                  required
                  value={`CGPA: ${studentData[0]?.CGPA}`}
                  type="text"
                  readOnly
                  placeholder="Student ID"
                  className="w-full px-4 py-3 border input-gradient-border animate-border  border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
              >
                {/* <label className="block  font-medium text-gray-700 mb-1">
                  Passing Year
                </label> */}
                <input
                  required
                  value={`Passing Year: ${studentData[0]?.PassingYear}`}
                  type="text"
                  placeholder="Student ID"
                  className="w-full px-4 py-3 border input-gradient-border animate-border  border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
                />
              </motion.div>
            </>
          )}

          {/* Login Button */}
          {!isAuthorized ? (
            <motion.button
              type="submit"
              className="w-full px-4 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-md  hover:bg-orange-600 transition-colors"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3, delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              // onClick={onLogin}
            >
              Login
            </motion.button>
          ) : (
            <motion.button
              type="submit"
              className="w-full px-4 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-md  hover:bg-orange-600 transition-colors"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3, delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              // onClick={onLogin}
            >
              Let's Enter
            </motion.button>
          )}
        </form>
      </motion.div>
    </div>
  );
};

export default LoginFormPage;
