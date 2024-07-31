import type { Meta, StoryObj } from "@storybook/react";
import { TalentPipe } from "./TalentPipe";
const meta: Meta<typeof TalentPipe> = {
  component: TalentPipe,
};

export default meta;
type Story = StoryObj<typeof TalentPipe>;

export const Default: Story = {
  args: {
    active: false,
  },
};
