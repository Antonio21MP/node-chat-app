class Users {

    constructor(){
        this.users = [];
    }

    addUsers (id, name, room) {
        var user = {id, name, room};
        this.users.push(user);
        return user;
    }

    removeUser (id) {

    }

    getUser (id) {

    }

    getUsersList (room) {
        var users = this.users.filter((user) => user.room === room);
        var namesArray = users.map((user) => user.name);

        return namesArray;
    }
}

module.exports = {Users};