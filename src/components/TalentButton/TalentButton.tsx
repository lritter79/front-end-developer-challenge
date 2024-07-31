import { Talent } from "@/types";
import styled from "styled-components";
export const TalentButton = ({
  talent,
  disabled,
  handleLeftClick,
  handleRightClick,
  imageUrl,
}: {
  talent: Talent;
  disabled: boolean;
  handleLeftClick: () => void;
  handleRightClick: () => void;
  imageUrl: string;
}) => {
  const { description, name, id, selected } = talent;

  return (
    <Button
      className="talent-button"
      disabled={disabled}
      data-cy={`talent-${id}`}
      title={`${name}: ${description}`}
      onClick={handleLeftClick}
      onContextMenu={(e) => {
        e.preventDefault();
        void handleRightClick();
      }}
    >
      <StyledImage $selected={selected} src={imageUrl}></StyledImage>
    </Button>
  );
};

const Button = styled.button<{ $selected?: boolean }>``;

const StyledImage = styled.img<{ $selected?: boolean }>`
  filter: ${(props) =>
    props.$selected ? "" : "contrast(0.7) brightness(0.68)"};
  &:hover {
    filter: ${(props) =>
      props.$selected ? "" : "contrast(0.7) brightness(0.78)"};
  }
`;
