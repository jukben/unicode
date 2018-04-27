/**
 * Let's define helper functions
 */
const isRegionalIndicator = (prev, curr) =>
  /^[\u{1F1E6}-\u{1F1FF}]{2}$/u.test(`${prev}${curr}`);
const isKeyKap = curr => /^[\u{0023}-\u{0039}]\u{20E3}$/u.test(curr);
const isFitzpatric = curr => {
  return /[\u{1F3FB}-\u{1F3FF}]$/u.test(curr);
};
const isJoiner = (prev, curr) => {
  return /\u{200D}$/u.test(prev) || /\u{200D}$/u.test(curr);
};
const isSex = prev => {
  return /[\u{2640}\u{2642}]$/u.test(prev);
};

const unicode = string => {
  const chars = [...string].reduce((a, v, i, arr) => {
    const prev = a[a.length - 1];
    const curr = arr[i];

    if (!prev) {
      a.push(curr);
      return a;
    }

    if (isJoiner(prev, curr)) {
      a.splice(a.length - 1, 1, `${a[a.length - 1]}${curr}`);
      return a;
    }

    if (isSex(prev)) {
      a.splice(a.length - 1, 1, `${a[a.length - 1]}${curr}`);
      return a;
    }

    isRegionalIndicator(prev, curr) || isKeyKap(curr) || isFitzpatric(curr)
      ? a.splice(a.length - 1, 1, `${prev}${curr}`)
      : a.push(curr);

    return a;
  }, []);

  const reverse = () => chars.reverse().join("");

  const charAt = place => chars[place];

  const hexCodeAt = place => {
    if (!chars[place]) return undefined;

    return [...chars[place]].map(a => a.codePointAt(0).toString(16)).join("-");
  };

  return {
    reverse,
    chars,
    charAt,
    hexCodeAt,
    length: chars.length
  };
};

export default unicode;
