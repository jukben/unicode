"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * Let's define helper functions
 */
var isRegionalIndicator = function isRegionalIndicator(prev, curr) {
  return (/^(?:\uD83C[\uDDE6-\uDDFF]){2}$/.test("" + prev + curr)
  );
};
var isKeyKap = function isKeyKap(curr) {
  return (/^[#-9]\u20E3$/.test(curr)
  );
};
var isFitzpatric = function isFitzpatric(curr) {
  return (/(?:\uD83C[\uDFFB-\uDFFF])$/.test(curr)
  );
};
var isJoiner = function isJoiner(prev, curr) {
  return (/\u200D$/.test(prev) || /\u200D$/.test(curr)
  );
};
var isSex = function isSex(prev) {
  return (/[\u2640\u2642]$/.test(prev)
  );
};

var unicode = function unicode(string) {
  var chars = [].concat(_toConsumableArray(string)).reduce(function (a, v, i, arr) {
    var prev = a[a.length - 1];
    var curr = arr[i];

    if (!prev) {
      a.push(curr);
      return a;
    }

    if (isJoiner(prev, curr)) {
      a.splice(a.length - 1, 1, "" + a[a.length - 1] + curr);
      return a;
    }

    if (isSex(prev)) {
      a.splice(a.length - 1, 1, "" + a[a.length - 1] + curr);
      return a;
    }

    isRegionalIndicator(prev, curr) || isKeyKap(curr) || isFitzpatric(curr) ? a.splice(a.length - 1, 1, "" + prev + curr) : a.push(curr);

    return a;
  }, []);

  var reverse = function reverse() {
    return chars.reverse().join("");
  };

  var charAt = function charAt(place) {
    return chars[place];
  };

  var hexCodeAt = function hexCodeAt(place) {
    if (!chars[place]) return undefined;

    return [].concat(_toConsumableArray(chars[place])).map(function (a) {
      return a.codePointAt(0).toString(16);
    }).join("-");
  };

  return {
    reverse: reverse,
    chars: chars,
    charAt: charAt,
    hexCodeAt: hexCodeAt,
    length: chars.length
  };
};

exports.default = unicode;
