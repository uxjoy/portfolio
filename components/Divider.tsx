import Link from "next/link";

interface DividerProps {
  starText: string;
  endText: string;
  centerText?: string;
}

const Divider = ({ starText, centerText, endText }: DividerProps) => {
  return (
    <>
      <div className="divider hidden md:flex items-center justify-center gap-5 px-1 text-xs md:text-base w-full">
        <span className="uppercase min-w-[152px] text-white/60 text-nowrap">
          {starText}
        </span>
        <span className="divider-line h-[1px] w-full bg-white/5"></span>

        {centerText ? (
          <span className="uppercase text-center text-white/60 text-nowrap px-2">
            {centerText}
          </span>
        ) : (
          <Link
            href={"http://figma.com"}
            target="_blank"
            className="relative flex items-center py-1.5 pl-2.5 pr-3 bg-white/5 border border-white/5 rounded-full group"
          >
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.94446 4.4444C4.94446 2.91107 6.1889 1.66663 7.72224 1.66663H10.5V7.22218H7.72224C6.1889 7.22218 4.94446 5.97774 4.94446 4.4444Z"
                fill="#F24E1E"
              />
              <path
                d="M10.5 1.66663H13.2778C14.8111 1.66663 16.0556 2.91107 16.0556 4.4444C16.0556 5.97774 14.8111 7.22218 13.2778 7.22218H10.5V1.66663Z"
                fill="#FF7262"
              />
              <path
                d="M4.94446 9.99995C4.94446 8.46661 6.1889 7.22217 7.72224 7.22217H10.5V12.7777H7.72224C6.1889 12.7777 4.94446 11.5333 4.94446 9.99995Z"
                fill="#A259FF"
              />
              <path
                d="M16.0556 9.99995C16.0556 11.5333 14.8111 12.7777 13.2778 12.7777C11.7444 12.7777 10.5 11.5333 10.5 9.99995C10.5 8.46661 11.7444 7.22217 13.2778 7.22217C14.8111 7.22217 16.0556 8.46661 16.0556 9.99995Z"
                fill="#1ABCFE"
              />
              <path
                d="M7.72224 18.3333C9.25557 18.3333 10.5 17.0888 10.5 15.5555V12.7777H7.72224C6.1889 12.7777 4.94446 14.0222 4.94446 15.5555C4.94446 17.0888 6.1889 18.3333 7.72224 18.3333Z"
                fill="#0ACF83"
              />
            </svg>

            <span className="bg-gradient-to-l from-sky-500 via-primary-300 to-sky-500 bg-clip-text text-transparent pl-1 group-hover:px-1.5 ease-in-out duration-300 delay-150">
              figma.portfolio.uxjoy
            </span>

            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.5037 9.41421L7.89712 18.0208L6.48291 16.6066L15.0895 8H7.50373V6H18.5037V17H16.5037V9.41421Z"
                fill="white"
              />
              <path
                d="M16.5037 9.41421L7.89712 18.0208L6.48291 16.6066L15.0895 8H7.50373V6H18.5037V17H16.5037V9.41421Z"
                fill="url(#paint0_linear_2275_3263)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_2275_3263"
                  x1="6.48291"
                  y1="12.0104"
                  x2="18.5037"
                  y2="12.0104"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#0EA5E9" />
                  <stop offset="0.5" stop-color="#9AE66E" />
                  <stop offset="0.58" stop-color="#84DC82" />
                  <stop offset="1" stop-color="#0EA5E9" />
                </linearGradient>
              </defs>
            </svg>

            <div className="bottom-line absolute left-1/2 -translate-x-1/2 bottom-0 w-0 h-[1px] bg-primary-default rounded-tl rounded-tr invisible opacity-0 group-hover:w-10 group-hover:opacity-100 group-hover:visible ease-in-out duration-200 delay-100"></div>
          </Link>
        )}

        <span className="divider-line h-[1px] w-full bg-white/5"></span>

        <span className="uppercase min-w-[152px] text-white/60 text-nowrap text-right">
          {endText}
        </span>
      </div>
    </>
  );
};

export default Divider;
