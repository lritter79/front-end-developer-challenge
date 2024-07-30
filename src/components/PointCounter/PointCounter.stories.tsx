import type { Meta, StoryObj } from "@storybook/react";

import { PointCounter } from "./PointCounter";

const meta: Meta<typeof PointCounter> = {
  component: PointCounter,
};

export default meta;
type Story = StoryObj<typeof PointCounter>;

export const Default: Story = {
  args: {
    pointsSpent: 0,
    maxPoints: 6,
  },
};

export const HalfSpent: Story = {
  args: {
    pointsSpent: 3,
    maxPoints: 6,
  },
};

export const AllSpent: Story = {
  args: {
    pointsSpent: 6,
    maxPoints: 6,
  },
};
