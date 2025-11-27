import React from "react";

interface TextareaFieldProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  required?: boolean;
}

export function TextareaField({
  label,
  required,
  rows = 4,
  ...props
}: TextareaFieldProps) {
  return (
    <div>
      <label className="mb-1 block text-xs font-semibold uppercase tracking-[0.16em] text-slate-700">
        {label}
        {required && <span className="text-brand"> *</span>}
      </label>
      <textarea
        rows={rows}
        className="w-full rounded-2xl border border-slate-300 px-3 py-2 text-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand-light"
        {...props}
      />
    </div>
  );
}
