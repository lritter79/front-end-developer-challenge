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
      <img
        style={{
          filter: selected ? "" : "contrast(0.7) brightness(0.68)",
        }}
        src={imageUrl}
      ></img>
    </Button>
  );
};

const Button = styled.button<{ $selected?: boolean }>`
  /* Adapt the colors based on primary prop */
  filter: ${(props) =>
    props.$selected ? "" : "contrast(0.7) brightness(0.68)"};
`;
