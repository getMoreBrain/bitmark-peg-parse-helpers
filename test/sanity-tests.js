const
    parser = require('../index'),
    assert = require('assert'),
    { describe } = require('mocha');

describe('Sanity tests', () => {
    it('Must parse a simple string', () => {
        const resp = (parser.parse('hello'))[0].content[0];
        console.log(resp);
        assert.equal(resp.text, 'hello');
        assert.equal(resp.type, 'text');
    });
});
