const accessToken =
  "62f768313c77382aa94dcd655e7a563767839d8b2069308b21b6c9a4a2027707";

export const getDribbbleShots = async () => {
  const res = await fetch(
    "https://api.dribbble.com/v2/user/shots?access_token=" +
      process.env.ACCESS_TOKEN
  );
  const data = await res.json();

  return data;
};
