// PARA REPASO (Funcionalidad del ToDoList)

// console.log('hola desde app');

// const model = {
//     toDos: [ { toDo: 'tarea'} ],
// };

// const view = {
//     // Start render (empty list)
//     clearList: function() {
//         const toDoList = document.querySelector('#todo-list');
//         toDoList.innerHTML = '';
//     },

//     render: function() {
//         // De este objeto esta clearList (this)
//         this.clearList();

//         const toDoList = document.querySelector('#todo-list');
//         for (let i = 0; i < model.toDos.length; i++) {
//             console.log(model.toDos[i]);
//         }
//         document.querySelector('#btnAdd').addEventListener('submit', this.addItem)
//     },

//     addItem: function(e) {
//         e.preventDefault();
//         const addItemInput = document.querySelector('#theTask')
//         if (addItemInput.value != '' && addItemInput.value != ' ') {
//             controller.addItem(addItemInput.value);
//         }     
        
//     }
// };

// const controller = {
//     init: function() {
//         view.render();
//     },
//     addItem: function(item) {
//         const newListItem = { toDo: item, completed: false }
//         model.toDos.push(newListItem)
//         document.querySelector('#theTask').value = ''
//     }
// };

// controller.init()
// view.render();