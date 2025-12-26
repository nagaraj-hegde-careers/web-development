const user = {
    firstName: "John",
    lastName: "Doe",
    getFullName: function () {
        return this.firstName + " " + this.lastName;
    }
};
console.log(user.getFullName());