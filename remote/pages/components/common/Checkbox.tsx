import { VariantProps, cva } from "class-variance-authority";
import React, { FC, SyntheticEvent } from "react";
import { cn } from "@/lib/utils";

const checkboxContainerVariants = cva("items-center", {
  variants: {
    width: {
      full: "flex justify-between",
      fit: "inline-flex justify-center",
    },
  },
  defaultVariants: {
    width: "fit",
  },
});

const labelVariants = cva("ml-2 font-primary", {
  variants: {
    size: {
      s: "text-sm",
      m: "text-base",
      l: "text-lg",
      xl: "text-xl",
    },
    disabled: {
      true: "text-gray-400",
      false: "text-slate-600",
    },
    font: {
      primary: "font-primary",
      secondary: "font-secondary",
    },
  },
});

const checkboxVariants = cva(
  [
    "peer",
    "rounded-md",
    "border",
    "flex items-center justify-center",
    "disabled:hover:border-neutral-50",
    "disabled:border-neutral-50",
    "disabled:cursor-not-allowed",
  ],
  {
    variants: {
      checked: {
        false: ["bg-white", "border-neutral-50", "hover:border-neutral-60"],
        true: ["bg-teal-600", "border-teal-600", "hover:border-teal-800"],
      },
      size: {
        s: "w-2 h-2",
        m: "w-4 h-4",
        l: "w-6 h-6",
        xl: "w-8 h-8",
      },
    },
    defaultVariants: {
      checked: false,
      size: "m",
    },
  }
);

type CheckBoxVariantProps = VariantProps<typeof checkboxVariants>;

interface ChangeEvent<T = Element> extends SyntheticEvent<T> {
  target: EventTarget & T;
}

export type CheckboxProps = {
  id?: string;
  label: string;
  checked?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  disabled?: boolean;
  width?: "full" | "fit";
  size?: "s" | "m" | "l" | "xl";
  font?: "primary" | "secondary";
} & CheckBoxVariantProps;

const Checkbox: FC<CheckboxProps> = ({
  id,
  label,
  checked,
  onChange,
  className,
  disabled,
  width,
  size,
  font,
}) => {
  const _id = id || label;
  return (
    <div className={cn(checkboxContainerVariants({ width }))}>
      <input
        id={_id}
        type="checkbox"
        className={cn(checkboxVariants({ checked, size, className }))}
        onChange={onChange}
        checked={checked}
        disabled={disabled}
      />
      <label
        htmlFor={_id}
        className={cn(labelVariants({ size, disabled, font }))}
      >
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
