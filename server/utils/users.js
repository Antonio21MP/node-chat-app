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
        var users = this.users.filter((user) => user.id != id);
        //console.log(users);
        return users;
    }

    getUser (id) {
        var users = this.users.filter((user) => user.id === id);
        //console.log(users);
        return users;
    }

    getUsersList (room) {
        var users = this.users.filter((user) => user.room === room);
        var namesArray = users.map((user) => user.name);

        return namesArray;
    }
}

module.exports = {Users};