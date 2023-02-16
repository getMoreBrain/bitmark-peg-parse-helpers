const
    parser = require('./peg-parser');

exports.parse = function (input, options) {
    return parser.parse(input, options);
};