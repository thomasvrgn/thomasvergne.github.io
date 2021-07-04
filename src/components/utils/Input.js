import { forwardRef } from 'react';

export const Input = forwardRef(({ children, type = 'text', id, textarea = false, ...params }, ref) => (
  <div className="flex flex-col">
    <label htmlFor={id} className=" text-sm font-medium dark:text-white text-gray-700 text-opacity-90 dark:text-opacity-75">
      {children}
    </label>
    {textarea
      ? <textarea {...params} ref={ref} id={id} cols="30" rows="5" className="min-h-[3rem] py-2 text-lg px-4 mt-2 rounded-lg dark:bg-gray-900 dark:bg-opacity-70 shadow-sm bg-gray-100 text-gray-700 dark:text-gray-300 outline-none focus:outline-none"></textarea>
      : <input type={type} ref={ref} {...params} id={id} className="py-2 h-12 text-lg px-4 mt-2 rounded-lg dark:bg-gray-900 dark:bg-opacity-70 shadow-sm bg-gray-100 text-gray-700 dark:text-gray-300 outline-none focus:outline-none" />}
  </div>
));