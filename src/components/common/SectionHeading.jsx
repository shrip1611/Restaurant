const SectionHeading = ({
  title,
  subtitle,
  align = "center",
  light = false,
}) => {
  return (
    <div
      className={`mb-12 ${
        align === "center" ? "text-center" : "text-left"
      }`}
    >
      <h1
        className={`uppercase tracking-widest font-bold
        text-3xl md:text-4xl lg:text-5xl
        ${light ? "text-gray-100" : "text-white-100"}`}
      >
        {title}
      </h1>

      {subtitle && (
        <p
          className={`mt-3 uppercase tracking-widest text-xs md:text-sm
          ${light ? "text-gray-100" : "text-white-100"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
