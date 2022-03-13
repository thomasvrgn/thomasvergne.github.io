export default function Button({ children, withIcon, black, ...props }) {
  const Icon = withIcon;
  return <button className={`group rounded-md w-full sm:w-auto py-2 px-8 flex items-center font-medium tracking-wide ` + (black ? '!bg-black text-white hover:shadow-xl transition-all duration-500' : 'border text-neutral-600')} {...props}>
    <span className="mx-auto" children={children} />
    {withIcon && <Icon className="text-white -ml-5 mt-0.5 opacity-0 group-hover:ml-2 group-hover:opacity-100 transition-all duration-100" />}
  </button>
}