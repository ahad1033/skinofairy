const Container = ({ children, className = "" }) => {
  return (
    <div
      className={`w-full px-4 md:px-8 lg:px-16 py-10 md:py-12 lg:py-20 container mx-auto ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
