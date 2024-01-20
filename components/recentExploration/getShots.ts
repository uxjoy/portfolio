export interface ShotsType {
  map(
    arg0: (_shot: any, i: any) => import("react").JSX.Element
  ): import("react").ReactNode;
  id: number;
  title: string;
  description: null;
  html_url: string;
  tags: [];
  images: {
    hidpi: string;
    normal: string;
    one_x: string;
    two_x: string;
    four_x: string;
    teaser: string;
  };
  published_at: Date;
  updated_at: Date;
  low_profile: false;
  animated: false;
  width: number;
  height: number;
  attachments: [];
  projects: [];
  video: null;
}

export const getDribbbleShots = async () => {
  const res = await fetch(
    "https://api.dribbble.com/v2/user/shots?access_token=" +
      process.env.ACCESS_TOKEN
  );
  const data: ShotsType = await res.json();

  return data;
};

// ================== Images type ==================

// images: {
//   hidpi: "https://cdn.dribbble.com/userupload/5472400/file/original-56d175e45358c05a5b8618574e4852e0.jpg?resize=1600x1200";
//   normal: "https://cdn.dribbble.com/userupload/5472400/file/original-56d175e45358c05a5b8618574e4852e0.jpg?resize=400x300";
//   one_x: "https://cdn.dribbble.com/userupload/5472400/file/original-56d175e45358c05a5b8618574e4852e0.jpg?resize=400x300";
//   two_x: "https://cdn.dribbble.com/userupload/5472400/file/original-56d175e45358c05a5b8618574e4852e0.jpg?resize=800x600";
//   four_x: "https://cdn.dribbble.com/userupload/5472400/file/original-56d175e45358c05a5b8618574e4852e0.jpg?resize=1600x1200";
//   teaser: "https://cdn.dribbble.com/userupload/5472400/file/original-56d175e45358c05a5b8618574e4852e0.jpg?resize=200x150";
// }
