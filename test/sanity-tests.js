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

    it('Must succeed in parsing bitmarkPlusPlus rule', () => {
        const resp = parser.parse(`Eine andere Variante von Gesten sind die Handschläge zur Begrüssung oder zum Abschied. |image:https://docs.bitmark.cloud/bit-books/swiss_life_select/kommunikation/web-resources/images/08_handschlag.jpg|@caption:Abbildung 8: Handschlag| Gerade im Berufsalltag findet diese Geste zu Beginn einer vielleicht wichtigen beruflichen Bekanntschaft statt. Da diese so früh stattfindet, übt sie einen nicht unwichtigen Einfluss auf den ersten Eindruck einer Person aus. ....`,
            { startRule: 'bitmarkPlusPlus' });
    });
});
