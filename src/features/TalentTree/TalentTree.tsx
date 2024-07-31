import { Header } from "../../components/Header/Header";
import { TalentTree as TalentTreeType } from "../../types";

export const TalentTree = ({
  talentTree,
}: {
  talentTree: TalentTreeType;
}) => {
  return (
    <div>
      <Header />
      {talentTree.name}
    </div>
  );
};
