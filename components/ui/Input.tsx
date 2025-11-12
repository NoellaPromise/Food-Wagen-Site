import { InputHTMLAttributes, ReactNode } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  startIcon?: ReactNode;
  wrapperClassName?: string;
}

export default function Input({
  startIcon,
  wrapperClassName,
  className,
  ...props
}: InputProps) {
  return (
    <div className={["relative", wrapperClassName || ""].join(" ").trim()}>
      {startIcon ? (
        <span className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
          {startIcon}
        </span>
      ) : null}
      <input
        className={[
          "w-full bg-gray-50 rounded-lg focus:outline-none text-gray-700 placeholder:text-gray-400",
          startIcon ? "pl-12 pr-4 py-3" : "px-4 py-3",
          className || "",
        ]
          .filter(Boolean)
          .join(" ")}
        {...props}
      />
    </div>
  );
}


