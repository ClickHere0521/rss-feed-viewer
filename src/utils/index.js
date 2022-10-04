export const getImg = (htmlText) => {
  const matches = htmlText.match(/<img(.*?)>/);
  return matches && matches.length ? matches[0] : "";
};
