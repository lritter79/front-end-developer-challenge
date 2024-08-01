import styled from "styled-components";

export const PointCounter = ({
  pointsSpent,
  maxPoints,
}: {
  pointsSpent: number;
  maxPoints: number;
}) => {
  return (
    <Container>
      <div>
        <StyledSpan data-cy="points-spent">{pointsSpent}</StyledSpan>
        <StyledSpan>/</StyledSpan>
        <StyledSpan data-cy="max-points">{maxPoints}</StyledSpan>
      </div>

      <PointsSpentP>Points Spent</PointsSpentP>
    </Container>
  );
};

const Container = styled.div`
  background-color: #050709;
  color: white;
  border: 1px solid #4c4b4a;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 175px;
  padding-top: 15px;
  padding-bottom: 15px;
  margin-left: 75px;
`;

const StyledSpan = styled.span`
  letter-spacing: 5px;
  font-size: 22px;
`;

const PointsSpentP = styled.p`
  color: #4d5b68;
  margin: 0px;
  font-size: 22px;
  font-weight: 300;
`;
