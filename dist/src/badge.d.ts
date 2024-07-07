import { type VariantProps } from 'class-variance-authority';
import type * as React from 'react';
declare const badgeVariants: (props?: ({
    variant?: "default" | "destructive" | "outline" | "secondary" | "red" | "blue" | "green" | "yellow" | "gray" | "indigo" | "purple" | "pink" | "orange" | "teal" | "cyan" | "white" | "black" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {
}
declare function Badge({ className, variant, ...props }: BadgeProps): import("react/jsx-runtime").JSX.Element;
export { Badge, badgeVariants };
