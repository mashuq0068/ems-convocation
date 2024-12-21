
import Lottie from 'lottie-react';
// import confettiAnimation from '../assets/animations/confetti.json';

const SuccessScreen = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-green-50">
      <Lottie 
    //   animationData={confettiAnimation} 
      className="w-72 h-72" />
      <h2 className="text-3xl font-bold text-green-700 mt-4">Form Submitted Successfully!</h2>
    </div>
  );
};

export default SuccessScreen;
