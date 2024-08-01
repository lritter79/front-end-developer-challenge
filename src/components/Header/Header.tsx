import styled from "styled-components";

export const Header = () => {
  return (
    <Container>
      <h1
        style={{
          fontWeight: 400,
          fontSize: "24px",
          lineHeight: "40px",
          paddingBottom: "8px",
          paddingTop: "8px",
        }}
      >
        TitanStar Legends - Rune Mastery Loadout Talent Calculator
        9000
      </h1>
    </Container>
  );
};

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
