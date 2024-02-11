import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Funnypelican/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
    color: { control: "color" },
    paddingHorizontal: {
      control: { type: "range", min: 0, max: 100, step: 0.1 },
    },
    paddingVertical: {
      control: { type: "range", min: 0, max: 100, step: 0.1 },
    },
    fontSize: {
      control: { type: "range", min: 0, max: 100, step: 0.1 },
    },
    borderRadius: {
      control: { type: "range", min: 0, max: 200, step: 0.1 },
    },
    borderWidth: {
      control: { type: "range", min: 0, max: 50, step: 0.1 },
    },
    borderColor: {
      control: "color",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: "Weitere informationen",
  },
};

export const Secondary: Story = {
  args: {
    label: "Weitere informationen",
  },
};

export const Black: Story = {
  args: {
    label: "Weitere informationen",
    color: "#000",
  },
};

export const Medium: Story = {
  args: {
    size: "medium",
    label: "Weitere informationen",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    label: "Weitere informationen",
  },
};
