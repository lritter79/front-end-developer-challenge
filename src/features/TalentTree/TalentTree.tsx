import { CenteredRowFlexbox } from "@/components/CenteredRowFlexbox";
import { TalentButton } from "@/components/TalentButton/TalentButton";
import { TalentPipe } from "@/components/TalentPipe/TalentPipe";
import { TalentTree as TalentTreeType } from "@/types";
import React from "react";
import styled, { keyframes } from "styled-components";

export const TalentTree = ({
  talentTree,
  handleSelect,
  handleUnselect,
  addBottomMargin = false,
}: {
  talentTree: TalentTreeType;
  handleSelect: (treeId: string, talentId: string) => void;
  handleUnselect: (treeId: string, talentId: string) => void;
  addBottomMargin?: boolean;
}) => {
  const talentIconsURLs = Object.values(
    import.meta.glob("@/assets/talentIcons/*.png", {
      eager: true,
      query: "?url",
      import: "default",
    })
  ) as string[];

  return (
    <FadeIn>
      <CenteredRowFlexbox
        style={{ marginBottom: addBottomMargin ? "50px" : 0 }}
        data-cy={`talent-tree-${talentTree.id}`}
      >
        <h5 style={{ marginRight: "50px" }}>
          {talentTree.name.toLocaleUpperCase()}
        </h5>
        {talentTree.talents.map((talent, index) => {
          const isFirst = index === 0;
          const isLast = index === talentTree.talents.length - 1;
          return (
            <React.Fragment key={talent.id}>
              <TalentButton
                imageUrl={
                  talentIconsURLs.find((url) =>
                    url.includes(`icon-${talent.id}-light`)
                  ) ?? ""
                }
                key={talent.id}
                talent={talent}
                disabled={
                  !isFirst && !talentTree.talents[index - 1].selected
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
                    isFirst ||
                    talentTree.talents[index - 1].selected
                  ) {
                    if (!talent.selected)
                      handleSelect(talentTree.id, talent.id);
                  }
                }}
              />
              {!isLast && (
                <TalentPipe
                  key={`pipe-${talent.id}`}
                  active={talent.selected}
                />
              )}
            </React.Fragment>
          );
        })}
      </CenteredRowFlexbox>
    </FadeIn>
  );
};

const fadeInAnimation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 100;
  }
`;

const FadeIn = styled.div`
  min-width: 692px;
  animation-name: ${fadeInAnimation};
  animation-duration: 1s;
  animation-iteration-count: 1;
`;
