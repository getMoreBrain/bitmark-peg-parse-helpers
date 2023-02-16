const
    parser = require('./peg-parser');

exports.parse = function (input) {
    return parser.parse(input);
};