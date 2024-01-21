export const getDribbbleShots = async () => {
  const res = await fetch(
    "https://api.dribbble.com/v2/user/shots?access_token=" +
      process.env.ACCESS_TOKEN
  );
  const data = await res.json();

  return data;
};
