function add(){
    return Object.values(arguments).reduce((total,next) => total + next, 0);
}

console.log(add(14,4,6));