import { Suspense } from "react";
import "./App.css";
import { TalentCalculator } from "./features/TalentCalculator/TalentCalculator";
function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TalentCalculator />
    </Suspense>
  );
}

export default App;
