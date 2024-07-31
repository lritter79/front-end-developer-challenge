import { Talent } from "@/types";
export const TalentButton = ({
  talent,
  disabled,
  handleLeftClick,
  handleRightClick,
}: {
  talent: Talent;
  disabled: boolean;
  handleLeftClick: () => void;
  handleRightClick: () => void;
}) => {
  const { description, name } = talent;
  return (
    <button
      disabled={disabled}
      data-cy={`talent-${talent.id}`}
      title={`${name}: ${description}`}
      onClick={handleLeftClick}
      onContextMenu={(e) => {
        e.preventDefault();
        void handleRightClick();
      }}
    >
      Icon Button
    </button>
  );
};
