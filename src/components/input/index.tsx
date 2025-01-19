"use client";

import { RegisterOptions, UseFormRegister } from "react-hook-form";

interface InputProps {
  type: string;
  placeholder: string;
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  error?: string;
  rules?: RegisterOptions;
}

export function Input({
  name,
  type,
  placeholder,
  register,
  error,
  rules,
}: InputProps) {
  return (
    <>
      <input
        type="text"
        className="w-full border rounded-md h-11 bg-transparent px-2 "
        placeholder={placeholder}
        typeof={type}
        {...register(name, rules)}
        id={name}
      />
      {error && <p className="text-red-500 my-1">{error}</p>}
    </>
  );
}
