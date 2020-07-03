export const getData = (seconds: number) => {
  const today = new Date(seconds * 1000);
  const data = new Intl.DateTimeFormat('en-GB').format(today);
  const h = today.getHours();
  const m = today.getMinutes();
  const hours = h < 10 ? `0${h}` : h;
  const minuts = m < 10 ? `0${m}` : m;

  return { data, hours, minuts };
};
