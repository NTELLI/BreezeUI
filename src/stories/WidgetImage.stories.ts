import type { Meta, StoryObj } from '@storybook/react';
import Widget from '../components/widget/index';

const meta = {
	title: 'Widget/Widget Image',
	component: Widget.Image,
	tags: ['autodocs'],
	argTypes: {},
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof Widget.Image>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Original: Story = {
	args: {
		filter: false,
		backgroundImage: 'src/stories/assets/colors.svg',
		tailwindCSS: 'h-80 w-80',
	},
};

export const Filter: Story = {
	args: {
		filter: true,
		backgroundImage: 'src/stories/assets/colors.svg',
		tailwindCSS: 'h-80 w-80',
	},
};
