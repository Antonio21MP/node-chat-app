var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

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
        });
    });
});

describe('generateLocationMessage', () => {
    it('should generate correct location object', () =>{
        var msg ={
            from: 'Alexa',
            url: 'http://www.google.com/maps?q=255,400'
        }
        var res =generateLocationMessage('Alexa', 255, 400);
        expect(res.createAt).toBeA('number');
        expect(res).toInclude({
            from: msg.from,
            url: msg.url
        });
    });
});