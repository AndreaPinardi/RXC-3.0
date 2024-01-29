import { VariantProps, cva } from "class-variance-authority";
import React, { FC, SyntheticEvent, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ChangeEvent<T = Element> extends SyntheticEvent<T> {
  target: EventTarget & T;
}

export type TextInputProps = {
  type: "text" | "number"
  label: string;
  placeholder?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  disabled?: boolean;
  width?: "full" | "fit";
  ref?: React.Ref<HTMLInputElement>
};

const TextInput: FC<TextInputProps> = forwardRef(({
  type,
  label,
  placeholder,
  onChange,
  className,
  disabled,
  width,
}, ref) => {
  
  return (
    <div className="relative">
      <input
        ref={ref}
        type={type}
        className="px-4 py-2 border rounded"
        onChange={onChange}
        onBlur={(e) => console.log(e.target.value)}
        disabled={disabled}
        placeholder={placeholder || label}
      />
      <label htmlFor={label} className="absolute -top-3 left-3 bg-white px-1 text-sm">
        {label}
      </label>
    </div>
  );
});

export default TextInput;
