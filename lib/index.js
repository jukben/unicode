'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var isRegionalIndicator = function isRegionalIndicator(prev, curr) {
  return (/^(?:\uD83C[\uDDE6-\uDDFF]){2}$/.test('' + prev + curr)
  );
};
var isKeyKap = function isKeyKap(prev, curr) {
  return (/^[#-9]\u20E3$/.test('' + prev + curr)
  );
};
var isFitzpatric = function isFitzpatric(prev, curr) {
  return (/(?:\uD83C[\uDFFB-\uDFFF])$/.test('' + prev + curr)
  );
};

var unicode10 = function unicode10(string) {
  var chars = [].concat(_toConsumableArray(string)).reduce(function (a, v, i, arr) {
    var prev = a[a.length - 1];
    var curr = arr[i];

    if (!prev) {
      a.push(curr);
      return a;
    }

    isRegionalIndicator(prev, curr) || isKeyKap(prev, curr) || isFitzpatric(prev, curr) ? a.splice(a.length - 1, 1, '' + prev + curr) : a.push(curr);

    return a;
  }, []);

  var reverse = function reverse() {
    return chars.reverse().join('');
  };

  var charCodeAt = function charCodeAt(place) {
    return chars[place];
  };

  var hexCodeAt = function hexCodeAt(place) {
    if (!chars[place]) return undefined;

    return [].concat(_toConsumableArray(chars[place])).map(function (a) {
      return a.codePointAt(0).toString(16);
    }).join('-');
  };

  return {
    reverse: reverse,
    chars: chars,
    length: chars.length,
    charCodeAt: charCodeAt,
    hexCodeAt: hexCodeAt
  };
};

exports.default = unicode10;
