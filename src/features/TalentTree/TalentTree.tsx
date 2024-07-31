import { TalentButton } from "@/components/TalentButton/TalentButton";
import { TalentTree as TalentTreeType } from "@/types";

export const TalentTree = ({
  talentTree,
  handleSelect,
  handleUnselect,
}: {
  talentTree: TalentTreeType;
  handleSelect: (treeId: string, talentId: string) => void;
  handleUnselect: (treeId: string, talentId: string) => void;
}) => {
  return (
    <div data-cy={`talent-tree-${talentTree.id}`}>
      {talentTree.name.toLocaleUpperCase()}
      {talentTree.talents.map((talent, index) => (
        <TalentButton
          key={talent.id}
          talent={talent}
          disabled={
            index !== 0 && !talentTree.talents[index - 1].selected
          }
          handleRightClick={() => {
            if (
              index === talentTree.talents.length - 1 ||
              !talentTree.talents[index + 1].selected
            ) {
              if (talent.selected)
                handleUnselect(talentTree.id, talent.id);
            }
          }}
          handleLeftClick={() => {
            if (
              index === 0 ||
              talentTree.talents[index - 1].selected
            ) {
              if (!talent.selected)
                handleSelect(talentTree.id, talent.id);
            }
          }}
        />
      ))}
    </div>
  );
};
