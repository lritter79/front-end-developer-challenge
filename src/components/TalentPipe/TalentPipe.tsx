import styled from "styled-components";

export const TalentPipe = ({ active }: { active: boolean }) => {
  return <StyledDiv $active={active} />;
};

const StyledDiv = styled.div<{ $active?: boolean }>`
  width: 100px;
  height: 13px;
  border-top: ${(props) =>
    props.$active ? "1px solid #4c4b4a" : "1px solid #1a1c1e"};
  border-bottom: ${(props) =>
    props.$active ? "1px solid #4c4b4a" : "1px solid #1a1c1e"};
  background: linear-gradient(to right, #2f3133 50%, #1a1c1e 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 0.5s ease-out;
  background-position: ${(props) =>
    props.$active ? "left bottom" : "right bottom"};
`;
