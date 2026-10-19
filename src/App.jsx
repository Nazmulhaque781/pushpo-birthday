import { useState } from "react";

import Opening from "./components/Opening";
import Birthday from "./components/Birthday";
import Memories from "./components/Memories";
import Special from "./components/Special";
import Letter from "./components/Letter";
import FinalSurprise from "./components/FinalSurprise";
import FloatingPetals from "./components/FloatingPetals";
import MusicButton from "./components/MusicButton";

function App() {
  const [step, setStep] = useState(0);

  const nextPage = () => {
    setStep((currentStep) => currentStep + 1);
  };

  return (
    <main className="min-h-screen overflow-hidden">
      <FloatingPetals />

      <MusicButton shouldStart={step > 0} />

      <div key={step} className="page-enter">
        {step === 0 && <Opening onOpen={nextPage} />}

        {step === 1 && <Birthday onNext={nextPage} />}

        {step === 2 && <Memories onNext={nextPage} />}

        {step === 3 && <Special onNext={nextPage} />}

        {step === 4 && <Letter onNext={nextPage} />}

        {step === 5 && <FinalSurprise onRestart={() => setStep(0)} />}
      </div>
    </main>
  );
}

export default App;
