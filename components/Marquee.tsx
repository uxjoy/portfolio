const Marquee = () => {
  return (
    <div className="relative flex overflow-x-hidden text-base uppercase font-semibold space-x-4 bg-indigo-500 text-white">
      <div className="py-6 animate-marquee whitespace-nowrap flex items-center gap-4">
        {marqueeItems.map(({ text }, i) => {
          return (
            <span key={i} className="flex items-center gap-4">
              <span> {text} </span>
              <span className="text-sm">
                <i className="ri-shining-2-fill"></i>
              </span>
            </span>
          );
        })}
      </div>

      <div className="absolute top-0 py-6 animate-marquee2 whitespace-nowrap  flex items-center gap-4">
        {marqueeItems.map(({ text }, i) => {
          return (
            <span key={i} className="flex items-center gap-4">
              <span> {text} </span>
              <span className="text-sm">
                <i className="ri-shining-2-fill"></i>
              </span>
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Marquee;

// Marquee Text
const marqueeItems = [
  {
    text: "ux design",
  },
  {
    text: "ui design",
  },
  {
    text: "product design",
  },
  {
    text: "user-interface",
  },
  {
    text: "app design",
  },
  {
    text: "web design",
  },
  {
    text: "prototyping",
  },
  {
    text: "user-research",
  },
  {
    text: "Human-Centered Design",
  },
  {
    text: "Design Thinking",
  },
  {
    text: "Interaction Design",
  },
  {
    text: "User Interface Enhancement",
  },
  {
    text: "Visual Design Expertise",
  },
  {
    text: "Usability Enhancement",
  },
  {
    text: "Product Design Solutions",
  },
];
