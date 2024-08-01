import "./App.css";
import bg from "@/assets/talent-calc-bg.png";
import styled from "styled-components";
import { ErrorBoundary } from "react-error-boundary";
import { QueryClient, QueryClientProvider } from "react-query"; // Import the QueryClient class
import { Page } from "@/pages/page";
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary fallback={<span>Something went wrong</span>}>
        <AppContinar>
          <Page />
        </AppContinar>
      </ErrorBoundary>
    </QueryClientProvider>
  );
}

export default App;

const AppContinar = styled.div`
  width: 1050px;
  background-image: url(${bg});
  background-repeat: repeat;
  border: 1px solid #4c4b4a;
`;
