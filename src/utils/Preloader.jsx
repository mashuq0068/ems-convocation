import { useEffect, } from "react";

const Preloader = ({ onFinish }) => {
  useEffect(() => {
    // Automatically move to the main app after 3 seconds
    const timer = setTimeout(onFinish, 2500);
    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, [onFinish]);

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-white">
      <video
        src="/videoes/graduation.mp4"
        autoPlay
        muted
        className=" w-[200px] object-cover"
      />
    </div>
  );
};

export default Preloader;
