function add() {
    return Object.values(arguments).reduce((total, next) => total + next, 0);
}

exports = add;