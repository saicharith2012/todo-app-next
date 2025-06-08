import { RefObject } from "react";

export default function LabelledInput({
  label,
  type,
  placeholder,
  ref,
}: LabelledInputProps) {
  const defaultStyles = "border px-4 py-2 focus:outline-0";

  return (
    <div className="flex flex-col flex-start gap-1">
      <div>{label}</div>
      <input
        type={type}
        placeholder={placeholder}
        className={`${defaultStyles}`}
        ref={ref}
      ></input>
    </div>
  );
}

interface LabelledInputProps {
  label: string;
  type: string;
  placeholder: string;
  ref?: RefObject<HTMLInputElement | null>;
}
