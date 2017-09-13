import unicode from './index';

it('charAt', () => {
  expect(unicode('🇵🇱🇨🇿').charAt(1)).toEqual('🇨🇿');
  expect(unicode('🇵🇱🇨🇿').charAt(0)).toEqual('🇵🇱');
});

it('codeAt', () => {
  expect(unicode('🇵🇱🇨🇿').hexCodeAt(1)).toEqual('1f1e8-1f1ff');
  expect(unicode('🇵🇱🇨🇿').hexCodeAt(0)).toEqual('1f1f5-1f1f1');
  expect(unicode('🇵🇱🇨🇿').hexCodeAt(4)).toBeUndefined();
});

it('1x 32Bit char', () => {
  expect(unicode('🇵🇱').chars).toEqual(['🇵🇱']);
  expect(unicode('🇵🇱').reverse()).toEqual('🇵🇱');
  expect(unicode('🇵🇱').length).toBe(1);
});

it('2x 32Bit chars', () => {
  expect(unicode('🇵🇱🇨🇿').chars).toEqual(['🇵🇱', '🇨🇿']);
  expect(unicode('🇵🇱🇨🇿').reverse()).toEqual('🇨🇿🇵🇱');
  expect(unicode('🇵🇱🇨🇿').length).toBe(2);
});

it('1x 8Bit char', () => {
  expect(unicode('a').chars).toEqual(['a']);
  expect(unicode('a').reverse()).toEqual('a');
  expect(unicode('a').length).toBe(1);
});

it('1x 16Bit char', () => {
  expect(unicode('😎').chars).toEqual(['😎']);
  expect(unicode('😎').reverse()).toEqual('😎');
  expect(unicode('😎').length).toBe(1);
});

it('shoud Fitzpatric works', () => {
  expect(unicode('✌🏽 hand').chars).toEqual(['✌🏽', ' ', 'h', 'a', 'n', 'd']);
  expect(unicode('✌🏽 hand').reverse()).toEqual('dnah ✌🏽');
});

it('2x 16Bit char', () => {
  expect(unicode('jukben is 😎 and 🤓').chars).toEqual([
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
  expect(unicode('jukben is 😎 and 🤓').reverse()).toEqual(
    '🤓 dna 😎 si nebkuj'
  );
  expect(unicode('jukben is 😎 and 🤓').length).toBe(17);
});

it('flag and keycap and text between', () => {
  expect(unicode('🇨🇿 is 🔟').chars).toEqual([
    '🇨🇿',
    ' ',
    'i',
    's',
    ' ',
    '🔟',
  ]);
  expect(unicode('🇨🇿 is 🔟').reverse()).toEqual('🔟 si 🇨🇿');
  expect(unicode('🇨🇿 is 🔟').length).toBe(6);
});

it('simple string', () => {
  expect(unicode('hello world').chars).toEqual([
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
  expect(unicode('hello world').reverse()).toEqual('dlrow olleh');
  expect(unicode('hello world').length).toBe(11);
});
