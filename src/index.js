const isRegionalIndicator = (prev, curr) =>
  /^[\u{1F1E6}-\u{1F1FF}]{2}$/u.test(`${prev}${curr}`);
const isKeyKap = (prev, curr) =>
  /^[\u{0023}-\u{0039}]\u{20E3}$/u.test(`${prev}${curr}`);
const isFitzpatric = (prev, curr) => {
  return /[\u{1F3FB}-\u{1F3FF}]$/u.test(`${prev}${curr}`);
};

const unicode = string => {
  const chars = [...string].reduce((a, v, i, arr) => {
    const prev = a[a.length - 1];
    const curr = arr[i];

    if (!prev) {
      a.push(curr);
      return a;
    }

    isRegionalIndicator(prev, curr) ||
    isKeyKap(prev, curr) ||
    isFitzpatric(prev, curr)
      ? a.splice(a.length - 1, 1, `${prev}${curr}`)
      : a.push(curr);

    return a;
  }, []);

  const reverse = () => chars.reverse().join('');

  const charAt = place => chars[place];

  const hexCodeAt = place => {
    if (!chars[place]) return undefined;

    return [...chars[place]].map(a => a.codePointAt(0).toString(16)).join('-');
  };

  return {
    reverse,
    chars,
    charAt,
    hexCodeAt,
    length: chars.length,
  };
};

export default unicode;
