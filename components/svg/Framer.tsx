const Framer = ({ className }: any) => {
  return (
    <svg
      className={className}
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="40" height="40" rx="10" fill="url(#paint0_linear_1332_1998)" />
      <rect x="0.5" y="0.5" width="39" height="39" rx="9.5" stroke="white" strokeOpacity="0.08" />
      <path d="M27.3332 23.6669H12.6665V16.3335H19.9999L27.3332 23.6669Z" fill="white" />
      <path d="M27.3332 9H12.6665L19.9999 16.3334H27.3332V9Z" fill="white" />
      <path d="M19.9999 23.6665V30.9999L12.6665 23.6665H19.9999Z" fill="white" />
      <defs>
        <linearGradient id="paint0_linear_1332_1998" x1="20" y1="0" x2="20" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#02C9FF" />
          <stop offset="0.333333" stopColor="#12ABFF" />
          <stop offset="0.811895" stopColor="#3470FF" />
          <stop offset="1" stopColor="#5438FF" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Framer;
