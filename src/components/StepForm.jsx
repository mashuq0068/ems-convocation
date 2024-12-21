import { useState } from 'react';
import { motion } from 'framer-motion';

const StepForm = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prev) => prev + 1);

  return (
    <div className="h-screen flex flex-col items-center bg-gray-50">
      {/* <div className="w-full max-w-lg p-8 bg-white rounded-md shadow-md mt-16">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {step === 1 && (
            <div>
              <h2 className="text-xl font-bold mb-4">Step 1: Personal Information</h2>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-2 mb-4 border rounded-md"
              />
              <button
                onClick={nextStep}
                className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Next
              </button>
            </div>
          )}
          {step === 2 && (
            <div>
              <h2 className="text-xl font-bold mb-4">Step 2: Upload Documents</h2>
              <input type="file" className="mb-4" />
              <button
                onClick={nextStep}
                className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Next
              </button>
            </div>
          )}
          {step === 3 && (
            <div>
              <h2 className="text-xl font-bold mb-4">Step 3: Review & Submit</h2>
              <button
                className="w-full px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
              >
                Submit
              </button>
            </div>
          )}
        </motion.div>
      </div> */}
    </div>
  );
};

export default StepForm;
