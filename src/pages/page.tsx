import { useQuery } from "react-query"; // Import the QueryClient class
import { TalentTree as TalentTreeType } from "@/types";
import { TalentCalculator } from "@/features/TalentCalculator/TalentCalculator";
import { CenteredRowFlexbox } from "@/components/CenteredRowFlexbox";
import { Header } from "@/components/Header/Header";
import styled, { keyframes } from "styled-components";

export const Page = () => {
  const { isLoading, error, data } = useQuery<
    TalentTreeType[],
    Error
  >({
    queryKey: ["talentTree"],
    queryFn: () =>
      fetch(`${import.meta.env.VITE_API_URL}/talentTrees`).then(
        (res) => res.json()
      ),
  });

  if (isLoading) {
    return (
      <div style={{ height: "376px" }}>
        <Header />
        <PulseDiv>
          <CenteredRowFlexbox>Loading...</CenteredRowFlexbox>
        </PulseDiv>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ height: "376px" }}>
        {"An error has occurred: " + error.message}
      </div>
    );
  }

  if (!data) {
    return (
      <div style={{ height: "376px" }}>
        <Header />
        <CenteredRowFlexbox>No Talents Found</CenteredRowFlexbox>
      </div>
    );
  }

  return <TalentCalculator talentTrees={data} />;
};

const pulseAnimation = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 100;
  }
100% {
    opacity: 0;
}
`;
const PulseDiv = styled.div`
  animation-name: ${pulseAnimation};
  animation-duration: 2s;
  animation-iteration-count: infinite;
`;
