// ----------------------------------------------------------------------
const Footer = () => {
  return (
    <footer className="bg-black text-white min-h-[150px] md:min-h-[200px] lg:min-h-[300px] flex flex-col items-center justify-center">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center">
        Skinofairy
      </h2>

      <p className="mt-4 text-xs md:text-sm lg:text-md text-center">
        © {new Date().getFullYear()} All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
