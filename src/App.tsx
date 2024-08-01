import { Suspense } from "react";
import "./App.css";
import { TalentCalculator } from "./features/TalentCalculator/TalentCalculator";
import bg from "@/assets/talent-calc-bg.png";
import styled from "styled-components";
function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AppContinar>
        <TalentCalculator />
      </AppContinar>
    </Suspense>
  );
}

export default App;

const AppContinar = styled.div`
  width: 1050px;
  background-image: url(${bg});
  background-repeat: repeat;
  border: 1px solid #4c4b4a;
`;
