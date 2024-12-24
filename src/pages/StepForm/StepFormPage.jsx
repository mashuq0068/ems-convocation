import { useState } from "react";
import { motion } from "framer-motion";

const CircularProgressBar = ({ step, totalSteps }) => {
  const radius = 50; // Radius of the circle
  const circumference = 2 * Math.PI * radius;
  const progress = (step / totalSteps) * circumference;

  return (
    <div className="relative flex pt-12 items-center justify-center">
      <svg
        className="w-28 h-28 transform -rotate-90"
        viewBox="0 0 120 120"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="60"
          cy="60"
          r={radius}
          fill="none"
          stroke="#e5e5e5"
          strokeWidth="10"
        />
        <motion.circle
          cx="60"
          cy="60"
          r={radius}
          fill="none"
          stroke="#f97316"
          strokeWidth="10"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - progress}
          strokeLinecap="round"
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: circumference - progress }}
          transition={{ duration: 0.5 }}
        />
      </svg>
      <span className="absolute text-orange-600 text-xl font-bold">
        {`${step}/${totalSteps}`}
      </span>
    </div>
  );
};

const StepFormPage = () => {
  const [step, setStep] = useState(1);
  const totalSteps = 5;

  const nextStep = () => {
    if (step < totalSteps) setStep((prev) => prev + 1);
  };

  const renderInput = (label, type, placeholder) => (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: 0.5 }}
    >
      <label className="block mb-4">
        <span className="text-gray-700">{label}</span>
      </label>
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
      >
        <input
          required
          type={type}
          placeholder={placeholder}
          className="w-full px-4 py-3 border input-gradient-border animate-border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
        />
      </motion.div>
    </motion.div>
  );

  return (
    <div className="h-screen flex flex-col gap-8 items-center bg-gradient-to-br from-orange-50 via-white to-orange-100 relative">
      {/* Circular Progress Bar */}
      <CircularProgressBar step={step} totalSteps={totalSteps} />

      {/* Step Form Content */}
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-lg">
        <h2 className="text-2xl font-bold text-center text-orange-600 mb-4">
          {`Step ${step}`}
        </h2>
        <form className="space-y-4">
          {/* Dynamic Form Inputs based on Step */}
          {step === 1 && (
            <>
              {renderInput("Full Name", "text", "Enter your full name")}
              {renderInput("Email", "email", "Enter your email")}
            </>
          )}
          {step === 2 && (
            <>
              {renderInput("Highest Qualification", "text", "Enter your qualification")}
              {renderInput("Institution", "text", "Enter your institution")}
            </>
          )}
          {step === 3 && (
            <>
              {renderInput("Program Name", "text", "Enter program name")}
              {renderInput("Program Code", "text", "Enter program code")}
            </>
          )}
          {step === 4 && (
            <>
              {renderInput("Employer Name", "text", "Enter employer name")}
              {renderInput("Job Title", "text", "Enter job title")}
            </>
          )}
          {step === 5 && (
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <p className="text-center">Review your information and submit.</p>
            </motion.div>
          )}
        </form>

        <button
          onClick={nextStep}
          className="w-full py-3 mt-6 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition"
          disabled={step >= totalSteps} // Disable button on last step
        >
          {step >= totalSteps ? "Finish" : "Next Step"}
        </button>
      </div>
    </div>
  );
};

export default StepFormPage;
