const expect = require('expect');
const {Users} = require('./users');

describe('Users', () => {
    var users;
    beforeEach(() => {
        users = new Users();
        users.users = [{
                id: '1',
                name: 'Antonio',
                room: 'Devs'   
            },
            {
                id: '2',
                name: 'Eduardo',
                room: 'Production'   
            },
            {
                id: '3',
                name: 'Alfredo',
                room: 'Production'   
            },
            {
                id: '4',
                name: 'Alejandra',
                room: 'Devs'   
            },
        ]
    });
    it('should add new user', () => {
        var users = new Users();
        var user = {
            id: '123',
            name: 'Antonio',
            room: 'DEVs'
        }

        var resUser = users.addUsers(user.id, user.name, user.room);
        expect(users.users).toEqual([user]);
    });

    it('should return names for Production', () => {
        var userList = users.getUsersList('Production');

        expect(userList).toEqual(['Eduardo','Alfredo']);
    });

    it('should remove a user', () => {
        var updateList = [ 
            { id: '2', name: 'Eduardo', room: 'Production' },
            { id: '3', name: 'Alfredo', room: 'Production' },
            { id: '4', name: 'Alejandra', room: 'Devs' } 
        ];
        var resUsers = users.removeUser('1');
        expect(resUsers).toEqual(updateList);
    });

    it('should not remove a user', () => {
        var resUser = users.removeUser('5');
        expect(resUser).toEqual(users.users);
    });

    it('should find user', () => {
        var user =  {
            id: '4',
            name: 'Alejandra',
            room: 'Devs'   
        };
        var resUser = users.getUser('4');
        expect(resUser).toEqual([user]);
    });
    it('should not find user', () => {
        var resUser = users.getUser('5');
        expect(resUser).toEqual([]);
    });
});

