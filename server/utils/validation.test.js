const expect = require('expect');

var {isRealString} = require('./validation');

describe('isRealString', () => {
    it('should reject non-string values', () => {
        var name = '';
        var room = '';
        var isStringName = isRealString(name);
        var isStringRoom = isRealString(room);

        expect(isStringName).toBeFalsy();
        expect(isStringRoom).toBeFalsy();

    });
    
    it('should reject string with only spaces', () => {
        var name = '     ';
        var room = '     ';
        var isStringName = isRealString(name);
        var isStringRoom = isRealString(room);

        expect(isStringName).toBeFalsy();
        expect(isStringRoom).toBeFalsy();
        
    });

    it('should allow string with non-space characters', () => {
        var name = ' Antonio  ';
        var room = ' Developers   Room   ';
        var isStringName = isRealString(name);
        var isStringRoom = isRealString(room);

        expect(isStringName).toBeTruthy();
        expect(isStringRoom).toBeTruthy();

    });
});