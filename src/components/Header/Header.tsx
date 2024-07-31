import styled from "styled-components";

export const Header = () => {
  return (
    <Container>
      <h1>
        TitanStar Legends - Rune Mastery Loadout Talent Calculator
        9000
      </h1>
    </Container>
  );
};

const Container = styled.div`
  background-color: #191b1d;
  color: white;
  text-align: center;
  vertical-align: middle;
`;
