export const Input = ({ children, type = 'text', id, textarea = false, ...params }) => (
  <div className="flex flex-col">
    <label htmlFor={id} className=" text-sm font-medium text-white text-opacity-75">
      {children}
    </label>
    {textarea
      ? <textarea {...params} id={id} cols="30" rows="5" className="min-h-[3rem] py-2 text-lg px-4 mt-2 rounded-lg bg-gray-900 bg-opacity-70 shadow-sm text-gray-300 outline-none focus:outline-none"></textarea>
      : <input type={type} {...params} id={id} className="py-2 h-12 text-lg px-4 mt-2 rounded-lg bg-gray-900 bg-opacity-70 shadow-sm text-gray-300 outline-none focus:outline-none" />}
  </div>
);
