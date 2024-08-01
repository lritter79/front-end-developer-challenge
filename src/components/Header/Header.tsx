import styled from "styled-components";

export const Header = () => {
  return (
    <Container>
      <StyledH1>
        TitanStar Legends - Rune Mastery Loadout Talent Calculator
        9000
      </StyledH1>
    </Container>
  );
};

const StyledH1 = styled.h1`
  font-weight: 400;
  font-size: 24px;
  line-height: 40px;
  padding-bottom: 8px;
  padding-top: 8px;
`;

const Container = styled.div`
  background-color: #1f2123;
  color: white;
  text-align: center;
  vertical-align: middle;
  padding: 0px 100px;
  margin-bottom: 80px;
  margin-left: 30px;
  margin-right: 30px;
`;
