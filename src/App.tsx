import { Suspense } from "react";
import "./App.css";
import { TalentCalculator } from "./features/TalentCalculator/TalentCalculator";
import bg from "@/assets/talent-calc-bg.png";
function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div
        style={{
          width: "1050px",
          backgroundImage: `url(${bg})`,
          backgroundRepeat: "repeat",
          border: "1px solid #4c4b4a",
        }}
      >
        <TalentCalculator />
      </div>
    </Suspense>
  );
}

export default App;
