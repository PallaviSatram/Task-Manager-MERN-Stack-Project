import Logo from "../Logo";

const AuthForm = ({
  title,
  subtitle,
  children,
  buttonText,
  onSubmit,
  footer,
}) => {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-6">
      <div className="w-full max-w-md rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-2xl">

        <Logo />

        <div className="mt-8">

          <h2 className="text-2xl font-bold text-white">
            {title}
          </h2>

          <p className="mt-2 text-slate-400">
            {subtitle}
          </p>

        </div>

        <form
          onSubmit={onSubmit}
          className="mt-8 space-y-5"
        >

          {children}

          <button
            className="
            w-full
            rounded-xl
            bg-violet-600
            py-3
            text-white
            font-semibold
            transition
            hover:bg-violet-700
            "
          >
            {buttonText}
          </button>

        </form>

        <div className="mt-6 text-center">
          {footer}
        </div>

      </div>
    </div>
  );
};

export default AuthForm;