import { Talent } from "@/types";
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
    <button
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
    </button>
  );
};
