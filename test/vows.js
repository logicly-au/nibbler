var vows = require('vows');
var assert = require('assert');
var Nibbler = require('../src/nibbler');

/**
 * Nibbler - Multi-Base Encoder
 *
 * version 2013-04-24
 *
 * Options:
 *   dataBits: The number of bits in each character of unencoded data.
 *   codeBits: The number of bits in each character of encoded data.
 *   keyString: The characters that correspond to each value when encoded.
 *   pad (optional): The character to pad the end of encoded output.
 *   arrayData (optional): If truthy, unencoded data is an array instead of a string.
 *
 * Example:
 *
 * var base64_8bit =  * base64_8bit.encode("Hello, World!");  // returns "SGVsbG8sIFdvcmxkIQ=="
 * base64_8bit.decode("SGVsbG8sIFdvcmxkIQ==");  // returns "Hello, World!"
 *
 * var base64_7bit = new Nibbler({
 *     dataBits: 7,
 *     codeBits: 6,
 *     keyString: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
 *     pad: '='
 * });
 * base64_7bit.encode("Hello, World!");  // returns "kZdmzesQV9/LZkQg=="
 * base64_7bit.decode("kZdmzesQV9/LZkQg==");  // returns "Hello, World!"
 *
 */

vows.describe('Nibbler').addBatch({
    'An instance of 8 bit Nibbler': {
        topic: new Nibbler({
            dataBits: 8,
            codeBits: 6,
            keyString: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
            pad: '='
        }),
        'Should correctly encode a string': function(nibbler) {
            assert.equal(nibbler.encode('Hello, World!'), 'SGVsbG8sIFdvcmxkIQ==');
        },
        'Should correctly decode a string': function(nibbler){
            assert.equal(nibbler.decode('SGVsbG8sIFdvcmxkIQ=='), 'Hello, World!');
        }
    }, 
}).run();
