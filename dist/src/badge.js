var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx } from "react/jsx-runtime";
import { cva } from 'class-variance-authority';
import { cn } from '../utils/cn';
var badgeVariants = cva('inline-flex items-center text-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2', {
    variants: {
        variant: {
            default: 'border-transparent bg-primary text-primary-foreground hover:bg-primary/80',
            secondary: 'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
            destructive: 'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80',
            outline: 'text-foreground',
            red: 'border border-red-500 text-red-500 bg-red-50 dark:bg-red-700 dark:text-white',
            blue: 'border border-blue-500 text-blue-500 bg-blue-50 dark:bg-blue-700 dark:text-white',
            green: 'border border-green-500 text-green-500 bg-green-50 dark:bg-green-700 dark:text-white',
            yellow: 'border border-yellow-500 text-yellow-500 bg-yellow-50 dark:bg-yellow-700 dark:text-white',
            gray: 'border border-stone-500 text-stone-500 bg-stone-50 dark:bg-stone-700 dark:text-white',
            indigo: 'border border-indigo-500 text-indigo-500 bg-indigo-50 dark:bg-indigo-700 dark:text-white',
            purple: 'border border-purple-500 text-purple-500 bg-purple-50 dark:bg-purple-700 dark:text-white',
            pink: 'border border-pink-500 text-pink-500 bg-pink-50 dark:bg-pink-700 dark:text-white',
            orange: 'border border-orange-500 text-orange-500 bg-orange-50 dark:bg-orange-700 dark:text-white',
            teal: 'border border-teal-500 text-teal-500 bg-teal-50 dark:bg-teal-700 dark:text-white',
            cyan: 'border border-cyan-500 text-cyan-500 bg-cyan-50 dark:bg-cyan-700 dark:text-white',
            white: 'border border-white text-white bg-white',
            black: 'border border-black text-black bg-black',
        },
    },
    defaultVariants: {
        variant: 'default',
    },
});
function Badge(_a) {
    var className = _a.className, variant = _a.variant, props = __rest(_a, ["className", "variant"]);
    return (_jsx("div", __assign({ className: cn(badgeVariants({ variant: variant }), className) }, props)));
}
export { Badge, badgeVariants };
