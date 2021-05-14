export const Button = ({ children, coloured = false, href, blank = false, full = false, disabled = false }) => (
  <button className={`${disabled ? 'bg-gray-300 text-gray-800 pointer-events-none' : coloured ? 'bg-emerald-500 text-white hover:bg-emerald-600' : 'bg-white text-gray-800 hover:bg-gray-100'} py-2 px-8 rounded-lg shadow-lg font-medium focus:outline-none transition-colors duration-200 ${full ? 'w-full' : ''}`} onClick={() => goTo(href, blank)} disabled={disabled}>
    {children}
  </button>
);

const goTo = (link, blank) => window.open(link, blank ? '_blank' : '_self')