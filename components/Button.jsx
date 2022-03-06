export default function Button({ children, withIcon, ...props }) {
  const Icon = withIcon;
  return <button className="group hover:shadow-xl transition-all duration-500 rounded-md py-2 px-8 flex items-center mx-auto !bg-black text-white font-medium tracking-wide" {...props}>
    {children}
    <Icon className="text-white -ml-5 mt-0.5 opacity-0 group-hover:ml-2 group-hover:opacity-100 transition-all duration-100" />
  </button>
}