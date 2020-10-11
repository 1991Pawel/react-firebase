export const getNewsData = (data: string) => {
  return new Intl.DateTimeFormat('en-GB').format(new Date(data));
};