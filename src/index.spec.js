import unicode10 from './index';

it('charAt', () => {
  expect(unicode10('🇵🇱🇨🇿').charCodeAt(1)).toEqual('🇨🇿');
  expect(unicode10('🇵🇱🇨🇿').charCodeAt(0)).toEqual('🇵🇱');
});

it('codeAt', () => {
  expect(unicode10('🇵🇱🇨🇿').hexCodeAt(1)).toEqual('1f1e8-1f1ff');
  expect(unicode10('🇵🇱🇨🇿').hexCodeAt(0)).toEqual('1f1f5-1f1f1');
  expect(unicode10('🇵🇱🇨🇿').hexCodeAt(4)).toBeUndefined();
});

it('1x 32Bit char', () => {
  expect(unicode10('🇵🇱').chars).toEqual(['🇵🇱']);
  expect(unicode10('🇵🇱').reverse()).toEqual('🇵🇱');
  expect(unicode10('🇵🇱').length).toBe(1);
});

it('2x 32Bit chars', () => {
  expect(unicode10('🇵🇱🇨🇿').chars).toEqual(['🇵🇱', '🇨🇿']);
  expect(unicode10('🇵🇱🇨🇿').reverse()).toEqual('🇨🇿🇵🇱');
  expect(unicode10('🇵🇱🇨🇿').length).toBe(2);
});

it('1x 8Bit char', () => {
  expect(unicode10('a').chars).toEqual(['a']);
  expect(unicode10('a').reverse()).toEqual('a');
  expect(unicode10('a').length).toBe(1);
});

it('1x 16Bit char', () => {
  expect(unicode10('😎').chars).toEqual(['😎']);
  expect(unicode10('😎').reverse()).toEqual('😎');
  expect(unicode10('😎').length).toBe(1);
});

it('shoud Fitzpatric works', () => {
  expect(unicode10('✌🏽 hand').chars).toEqual(['✌🏽', ' ', 'h', 'a', 'n', 'd']);
  expect(unicode10('✌🏽 hand').reverse()).toEqual('dnah ✌🏽');
});

it('2x 16Bit char', () => {
  expect(unicode10('jukben is 😎 and 🤓').chars).toEqual([
    'j',
    'u',
    'k',
    'b',
    'e',
    'n',
    ' ',
    'i',
    's',
    ' ',
    '😎',
    ' ',
    'a',
    'n',
    'd',
    ' ',
    '🤓',
  ]);
  expect(unicode10('jukben is 😎 and 🤓').reverse()).toEqual(
    '🤓 dna 😎 si nebkuj'
  );
  expect(unicode10('jukben is 😎 and 🤓').length).toBe(17);
});

it('flag and keycap and text between', () => {
  expect(unicode10('🇨🇿 is 🔟').chars).toEqual([
    '🇨🇿',
    ' ',
    'i',
    's',
    ' ',
    '🔟',
  ]);
  expect(unicode10('🇨🇿 is 🔟').reverse()).toEqual('🔟 si 🇨🇿');
  expect(unicode10('🇨🇿 is 🔟').length).toBe(6);
});

it('simple string', () => {
  expect(unicode10('hello world').chars).toEqual([
    'h',
    'e',
    'l',
    'l',
    'o',
    ' ',
    'w',
    'o',
    'r',
    'l',
    'd',
  ]);
  expect(unicode10('hello world').reverse()).toEqual('dlrow olleh');
  expect(unicode10('hello world').length).toBe(11);
});
