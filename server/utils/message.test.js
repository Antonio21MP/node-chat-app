var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        var msg = {
            from: 'Yossy',
            text: 'Hello ;).'
        }
        var res = generateMessage('Yossy', 'Hello ;).');
        expect(res.createAt).toBeA('number');
        expect(res).toInclude({
            from: msg.from,
            text: msg.text
        })

    });
});