import { useState } from "react";
import LandingPage from "../../components/LandingPage";
import LoginForm from "../../components/LoginForm";
import Preloader from "../../components/Preloader";
import StepForm from "../../components/StepForm";
import SuccessScreen from "../../components/SuccessScreen";


const HomePage = () => {
  const [screen, setScreen] = useState('landing');
  const [showPreloader, setShowPreloader] = useState(true);

  return (
    <div>
      {showPreloader ? (
        <Preloader onFinish={() => setShowPreloader(false)} />
      ) : (
        <>
          {screen === 'landing' && <LandingPage onStart={() => setScreen('login')} />}
          {screen === 'login' && <LoginForm onLogin={() => setScreen('form')} />}
          {screen === 'form' && <StepForm onComplete={() => setScreen('success')} />}
          {screen === 'success' && <SuccessScreen />}
        </>
      )}
    </div>
  );
};

export default HomePage;
