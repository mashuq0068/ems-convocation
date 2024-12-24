import { useState } from "react";
import { motion } from "framer-motion";
import Preloader from "../../utils/Preloader";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [showPreloader, setShowPreloader] = useState(true);
  const navigate = useNavigate();

  return (
    <div>
      {showPreloader ? (
        <Preloader onFinish={() => setShowPreloader(false)} />
      ) : (
        <>
          <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-white to-gray-100 text-black relative overflow-hidden">
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

            {/* Animated Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5 }}
              className="rounded-full"
            >
              <img
                src="/images/nwu-logo-removebg-preview.png" // Update with correct path
                alt="University Logo"
                className="w-48 h-48 object-contain"
              />
            </motion.div>

            {/* Welcome Text */}
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="text-4xl font-bold mt-8 text-center text-gray-800 tracking-wide"
            >
              Welcome to the Convocation Portal
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 1 }}
              className="mt-4 text-lg text-gray-600 text-center"
            >
              Celebrating excellence and achievements together
            </motion.p>

            {/* Get Started Button */}
            <motion.button
              onClick={() => navigate("/login")}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 1.5 }}
              className="mt-8 px-8 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-lg hover:scale-105 hover:bg-orange-600 transition-transform"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Get Started
            </motion.button>
          </div>
        </>
      )}
    </div>
  );
};

export default HomePage;
