"use client";

interface InputProps {
  label: string;
  name: string;
  type: string;
  required: boolean;
  placeholder?: string;
  autoComplete?: string;
  onValueChange?: (value: string) => void;
}

import React, { useState } from "react";

export default function Input({
  label,
  name,
  type = "text",
  required = false,
  placeholder = "",
  autoComplete,
  onValueChange,
}: InputProps) {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (onValueChange) {
      onValueChange(e.target.value);
    }
  };

  return (
    <div className={"flex flex-col w-full"}>
      <label htmlFor={name} className={"ml-1 leading-4"}>
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        required={required}
        autoComplete={autoComplete}
        id={name}
        name={name}
        className={"border-1 border-black p-0.5 focus:outline-none"}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}
