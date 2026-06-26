const Input = ({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  name,
}) => {
  return (
    <div className="space-y-2">
      <label className="text-sm text-slate-300">
        {label}
      </label>

      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="
        w-full
        rounded-xl
        border
        border-slate-700
        bg-slate-800
        px-4
        py-3
        text-white
        placeholder:text-slate-500
        outline-none
        transition
        focus:border-violet-500
        "
      />
    </div>
  );
};

export default Input;