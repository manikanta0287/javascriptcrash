const todos = [
    {
        id: 1,
        text: 'Take some thing',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Take some thing2',
        isCompleted: true

    },
    {
        id: 3,
        text: 'Take some thing3',
        isCompleted: false
    }
];

// for (let i = 0; i <= todos.length; i++){
//     console.log(todos[i].text);
// }

// let i = 0;

// while(i<10) {
//     console.log(`while loop number is :${i}`)
//     i++;
// }

for (let todo of todos) {
    console.log(todo.id, todo.text)
}

//forEach, map, filter

// todos.forEach(function(todo) {
//     console.log(todo.text);
// });


const todoText = todos.map(function(todo) {
    console.log( todo.text)
});
console.log(todoText);


const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted === true
}).map(function(todo){
    return todo.text
})

console.log(todoCompleted);

