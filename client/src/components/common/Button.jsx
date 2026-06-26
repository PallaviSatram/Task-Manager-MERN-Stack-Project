const Button = ({ children, type = "button", onClick, disabled }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="
      w-full
      rounded-xl
      bg-violet-600
      py-3
      font-semibold
      text-white
      transition-all
      duration-300
      hover:bg-violet-700
      hover:scale-[1.02]
      active:scale-95
      disabled:opacity-50
      disabled:cursor-not-allowed
      "
    >
      {children}
    </button>
  );
};

export default Button;