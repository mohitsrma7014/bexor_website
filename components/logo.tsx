export const Logo = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 120 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <text x="0" y="28" fontSize="32" fontWeight="bold" fill="#ffffffff" fontFamily="Arial">
        BEXOR
      </text>
      <circle cx="105" cy="18" r="4" fill="#6366f1" opacity="0.8" />
      <circle cx="112" cy="18" r="3" fill="#00d4ff" opacity="0.6" />
    </svg>
  );
};
