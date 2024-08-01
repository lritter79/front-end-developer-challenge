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
      $selected={selected}
      aria-label={talent.name}
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

const Button = styled.button<{ $selected?: boolean }>`
  z-index: 2;
  background: ${(props) =>
    props.$selected
      ? `linear-gradient(
    180deg,
    #6ea8eb 0%,
    #6ea8eb 50%,
    #273d55 51%,
    #698dc3 100%
  )`
      : `linear-gradient(
    180deg,
    #4b4b4b 0%,
    #4b4b4b 50%,
    #3d3d3d 51%,
    #4c4c4c 100%
  )`};
  filter: ${(props) =>
    props.$selected
      ? "drop-shadow(0 0 0.25rem #273d55)"
      : "drop-shadow(0 0 0rem #273d55)"};
  color: inherit;
  border: none;
  padding: 5px 5px 1px 5px;
  cursor: pointer;
  outline: inherit;
  transition: all 0.5s ease-out;
`;

const StyledImage = styled.img<{ $selected?: boolean }>`
  filter: ${(props) =>
    props.$selected ? "" : "contrast(0.7) brightness(0.68)"};
  &:hover {
    filter: ${(props) =>
      props.$selected ? "" : "contrast(0.7) brightness(0.78)"};
  }
  transition: all 0.5s ease-out;
`;
