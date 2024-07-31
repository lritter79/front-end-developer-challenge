import styled from "styled-components";

export const TalentPipe = ({ active }: { active: boolean }) => {
  return <StyledDiv $active={active} />;
};

const StyledDiv = styled.div<{ $active?: boolean }>`
  width: 100px;
  height: 15px;
  background: linear-gradient(to right, #2f3133 50%, #1a1c1e 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 0.5s ease-out;
  transition: background 0.5s ease-in-out;
  background-position: ${(props) =>
    props.$active ? "left bottom" : "right bottom"};
`;
//  background: ${(props) => (props.$active ? "#2f3133" : "#1a1c1e")};
