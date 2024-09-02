import { twMerge } from 'tailwind-merge';

interface inputProps {
  type: string;
  id?: string;
  value?: string;
  placeholder?: string;
  className?: string;
}

export function Input({
  type,
  id,
  value,
  placeholder,
  className: additionalClassName,
}: inputProps) {
  const baseClassName =
    ' w-full w-max-[396px] py-3 px-4 rounded-xl border-borders border-2';
  return (
    <input
      className={twMerge(baseClassName, additionalClassName)}
      type={type}
      id={id}
      value={value}
      placeholder={placeholder}
    />
  );
}
