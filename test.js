var Nibbler = require('./src/nibbler');

var crockford = new Nibbler({
  dataBits: 8,
  codeBits: 5,
  keyString: '0123456789ABCDEFGHJKMNPQRSTVWXYZ',
  pad: ''
});

console.log(crockford);
