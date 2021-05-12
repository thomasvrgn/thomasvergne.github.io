export const Button = ({ children, coloured = false, }) => (
  <button className={`${coloured ? 'bg-green-400 text-white' : 'bg-white text-gray-800'} py-2 px-8 rounded-lg shadow-lg font-medium`}>
    {children}
  </button>
)