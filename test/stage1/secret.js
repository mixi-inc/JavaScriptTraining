'use strict';

function secret(str) {
  return Array.prototype.map.call(str, function(char) {
    if(!char.match(/[A-Za-z]/)) return char;

    var charCode = char.charCodeAt(0);
    if(charCode < 97) {
      charCode = (charCode - 52) % 26 + 65;
    } else {
      charCode = (charCode - 84) % 26 + 97;
    }
    return String.fromCharCode(charCode);
  }).join('');
};
