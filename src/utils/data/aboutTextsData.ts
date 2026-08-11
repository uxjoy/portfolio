// Working Experience Data
export const workHistoryList = [
  {
    designation: "Senior Product Designer",
    company: "ShareTrip",
    url: "https://sharetrip.net",
    duration: "Jul 2023 - Now",
  },
  {
    designation: "Product Designer",
    company: "ShareTrip",
    url: "https://sharetrip.net",
    duration: "Jul 2022 - Jun 2023",
  },
  {
    designation: "UX/UI Designer",
    company: "Lemonhive",
    url: "https://lemonhive.com",
    duration: "May 2020 - Jun 2022",
  },
  {
    designation: "Jr. Ux/UI Designer",
    company: "CreativeSoft Technology",
    url: "https://creativesofttechnology.com",
    duration: "May 2019 - Apr 2020",
  },
];

// Map month abbreviations used in duration strings to 0-indexed month
const MONTHS: Record<string, number> = {
  Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
  Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11,
};

// Parse the start date from a duration string like "May 2019 - Apr 2020" or "Jul 2023 - Now"
const parseStartDate = (duration: string): Date => {
  const match = duration.match(/([A-Z][a-z]{2})\s(\d{4})/);
  if (!match) return new Date();
  return new Date(Number(match[2]), MONTHS[match[1]] ?? 0);
};

// Total years of experience, derived from the earliest role in workHistoryList
// up to `until` (defaults to now). Exported as a function (not a constant) so it
// can be called on the client for a live "current date" value instead of freezing
// at build time. Single source of truth for every "experience" badge across the site.
export const getExperienceYears = (until: Date = new Date()): number => {
  const earliest = workHistoryList
    .map(({ duration }) => parseStartDate(duration).getTime())
    .reduce((min, time) => Math.min(min, time), Infinity);

  const start = new Date(earliest);
  let years = until.getFullYear() - start.getFullYear();
  if (until.getMonth() < start.getMonth()) years--;
  return Math.max(0, years);
};

// Education
export const educationHistory = {
  title: "Computer Science & Engineering",
  institution: "State University of Bangladesh",
  duration: "2015 - 2019",
  url: "https://www.sub.ac.bd",
};

export const figmaPortfolioLink =
  "https://www.figma.com/design/zyZ85JTfEGwQWydcvuoF0J/Joy's-Portfolio?node-id=21-21968&t=tmsdPCar96Cu0vos-1";
export const linkedinLink = "https://linkedin.com/in/uxjoy";
export const dribbbleLink = "https://dribbble.com/uxjoy_";
export const twitterLink = "https://x.com/uxjoy_";
