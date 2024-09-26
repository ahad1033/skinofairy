const ContainerHeader = ({ title, subtitle }) => {
  return (
    <div className="flex gap-4 flex-col items-start mb-8 md:mb-10 lg:mb-12">
      <div className="flex gap-2 flex-col">
        <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-semibold text-left mb-2">
          {title}
        </h2>
        <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground text-left">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default ContainerHeader;
