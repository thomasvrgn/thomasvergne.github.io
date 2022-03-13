export const HeadTitle = ({ children }) =>
  <h2 className="font-black justify-center sm:justify-start text-4xl sm:text-5xl text-black flex items-center">
    {children}
    <span className="hidden sm:block h-0.5 flex-auto mt-2 ml-16 bg-black opacity-10"></span>
  </h2>;

export const Title = ({ children }) =>
  <h3 className="font-black text-xl text-black">
    {children}
  </h3>;

export const Paragraph = ({ children }) =>
  <p className="text-lg text-black text-opacity-60">
    {children}
  </p>;