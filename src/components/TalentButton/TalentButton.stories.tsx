import type { Meta, StoryObj } from "@storybook/react";
import { TalentButton } from "./TalentButton";
import img from "@assets/talentIcons/icon-2-light.png";
const meta: Meta<typeof TalentButton> = {
  component: TalentButton,
};

export default meta;
type Story = StoryObj<typeof TalentButton>;

export const Default: Story = {
  args: {
    talent: {
      id: "1",
      name: "Talent Name",
      description: "Talent Description",
      selected: false,
    },
    disabled: false,
    handleLeftClick: () => {},
    handleRightClick: () => {},
    imageUrl:
      "https://storybook.js.org/images/placeholders/50x50.png",
  },
};

export const Disabled: Story = {
  args: {
    talent: {
      id: "1",
      name: "Talent Name",
      description: "Talent Description",
      selected: false,
    },
    disabled: true,
    handleLeftClick: () => {},
    handleRightClick: () => {},
    imageUrl:
      "https://storybook.js.org/images/placeholders/50x50.png",
  },
};
