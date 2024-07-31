import { TalentTree as TalentTreeType } from "../../types";

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
        <button
          data-cy={`talent-${talent.id}`}
          key={talent.id}
          onClick={() => {
            if (
              index === 0 ||
              talentTree.talents[index - 1].selected
            ) {
              if (!talent.selected)
                handleSelect(talentTree.id, talent.id);
            }
          }}
          onContextMenu={(e) => {
            e.preventDefault();
            if (
              index === talentTree.talents.length - 1 ||
              !talentTree.talents[index + 1].selected
            ) {
              if (talent.selected)
                handleUnselect(talentTree.id, talent.id);
            }
          }}
        >
          {talent.name}
        </button>
      ))}
    </div>
  );
};
