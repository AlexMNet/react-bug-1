export const sortNames = (arr) => {
  return arr.sort(function (a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });
};

const capitalizeWords = (words) => {
  return words
    .split(' ')
    .map((word) => word[0].toUpperCase() + word.substring(1))
    .join(' ');
};

export const cleanInput = (str) => {
  return capitalizeWords(
    str
      .replace(/[^A-Za-z\s]/g, '')
      .replace(/\s{2,}/g, ' ')
      .trim()
  );
};
