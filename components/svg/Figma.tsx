const Figma = ({ className }: any) => {
  return (
    <svg
      className={className}
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="40" height="40" rx="10" fill="#1E293B" />
      <rect x="0.5" y="0.5" width="39" height="39" rx="9.5" stroke="white" strokeOpacity="0.08" />
      <path d="M12 12C12 9.792 13.792 8 16 8H20V16H16C13.792 16 12 14.208 12 12Z" fill="#F24E1E" />
      <path d="M20 8H24C26.208 8 28 9.792 28 12C28 14.208 26.208 16 24 16H20V8Z" fill="#FF7262" />
      <path d="M12 20C12 17.792 13.792 16 16 16H20V24H16C13.792 24 12 22.208 12 20Z" fill="#A259FF" />
      <path
        d="M28 20C28 22.208 26.208 24 24 24C21.792 24 20 22.208 20 20C20 17.792 21.792 16 24 16C26.208 16 28 17.792 28 20Z"
        fill="#1ABCFE"
      />
      <path
        d="M16 32C18.208 32 20 30.208 20 28V24H16C13.792 24 12 25.792 12 28C12 30.208 13.792 32 16 32Z"
        fill="#0ACF83"
      />
    </svg>
  );
};

export default Figma;
