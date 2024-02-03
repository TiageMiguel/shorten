import type { Button as ButtonPrimitive } from 'bits-ui';
import { tv, type VariantProps } from 'tailwind-variants';
import Root from './button.svelte';

const buttonVariants = tv({
	base: 'inline-flex items-center rounded-full justify-center duration-300 text-base font-regular whitespace-nowrap transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
	variants: {
		variant: {
			default: 'bg-white text-foreground hover:bg-neutral-200',
			destructive: 'bg-red-700/40 text-black hover:bg-red-700/50',
			warning: 'bg-orange-700/40 text-black hover:bg-orange-700/50',
			info: 'bg-sky-700/40 text-black hover:bg-sky-700/50'
		},
		size: {
			default: 'px-4 py-2',
			sm: 'py-1.5 px-3 text-sm',
			lg: 'py-4 px-8',
			icon: 'h-9 w-9'
		}
	},
	defaultVariants: {
		variant: 'default',
		size: 'default'
	}
});

type Variant = VariantProps<typeof buttonVariants>['variant'];
type Size = VariantProps<typeof buttonVariants>['size'];

type Props = ButtonPrimitive.Props & {
	variant?: Variant;
	size?: Size;
};

type Events = ButtonPrimitive.Events;

export {
	Root,
	type Props,
	type Events,
	//
	Root as Button,
	type Props as ButtonProps,
	type Events as ButtonEvents,
	buttonVariants
};
