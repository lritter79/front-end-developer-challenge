import { useEffect, useReducer, useState } from "react";
import { MAX_TALENT_POINTS } from "../../constants";
import { PointCounter } from "../../components/PointCounter/PointCounter";
import SkillTree from "../../data.json";
import { TalentTree } from "../TalentTree/TalentTree";
import { TalentTree as TalentTreeType } from "../../types";
const promise = new Promise<void>((resolve) => {
  setTimeout(() => {
    resolve();
  }, 5000);
});
type Action =
  | { type: "select_talent"; treeId: string; talentId: string }
  | { type: "unselect_talent"; treeId: string; talentId: string }
  | { type: "reset" };

const talentTreeReducer = (
  state: TalentTreeType[],
  action: Action
): TalentTreeType[] => {
  switch (action.type) {
    case "select_talent":
      return state.map((tree) =>
        tree.id === action.treeId
          ? {
              ...tree,
              talents: tree.talents.map((talent) =>
                talent.id === action.talentId
                  ? { ...talent, selected: true }
                  : talent
              ),
            }
          : tree
      );

    case "unselect_talent":
      return state.map((tree) =>
        tree.id === action.treeId
          ? {
              ...tree,
              talents: tree.talents.map((talent) =>
                talent.id === action.talentId
                  ? { ...talent, selected: false }
                  : talent
              ),
            }
          : tree
      );
    case "reset":
      return state.map((tree) => ({
        ...tree,
        talents: tree.talents.map((talent) => ({
          ...talent,
          selected: false,
        })),
      }));
    default:
      throw Error("Unknown action.");
  }
};

export const TalentCalculator = () => {
  const maxPoints = MAX_TALENT_POINTS;
  const [pointsSpent, setPointsSpent] = useState(0);
  const pointsRemaining = maxPoints - pointsSpent;
  const [talentTreeState, dispatch] = useReducer(
    talentTreeReducer,
    SkillTree.talentTrees
  );

  const handleSelect = (treeId: string, talentId: string) => {
    if (pointsRemaining === 0) {
      return;
    }
    setPointsSpent(pointsSpent + 1);
    dispatch({ type: "select_talent", treeId, talentId });
  };

  const handleUnselect = (treeId: string, talentId: string) => {
    dispatch({ type: "unselect_talent", treeId, talentId });
    setPointsSpent(pointsSpent - 1);
  };

  useEffect(() => {
    const pointsSpent = talentTreeState.reduce((acc, tree) => {
      return (
        acc +
        tree.talents.reduce((acc, talent) => {
          return acc + (talent.selected ? 1 : 0);
        }, 0)
      );
    }, 0);
    setPointsSpent(pointsSpent);
  }, [SkillTree.talentTrees]);

  return (
    <div>
      <button
        onClick={() => {
          dispatch({ type: "reset" });
          setPointsSpent(0);
        }}
      >
        Reset
      </button>
      {talentTreeState.map((tree: TalentTreeType) => (
        <TalentTree
          talentTree={{
            ...tree,
          }}
          handleSelect={handleSelect}
          handleUnselect={handleUnselect}
          key={tree.name}
        />
      ))}
      <PointCounter pointsSpent={pointsSpent} maxPoints={maxPoints} />
    </div>
  );
};
