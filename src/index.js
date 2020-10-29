import './styles.css';
import './styles.css';

// import{Todo} from './classes/todo.class';
// import{TodoList} from './classes/todo-list.class';
import {Todo,TodoList} from './classes';
import { crearTodoHtml } from './js/componentes';
export const todolist=new TodoList();


todolist.todos.forEach(todo => crearTodoHtml(todo));

// const newTodo=new Todo('aprender cocinar');
// todolist.nuevoTodo(newTodo);
// todolist.todos[0].imprimirClase();

// newTodo.imprimirClase();

console.log('todos: ',todolist.todos);
//tambien se podria escribir cuando el argumento el el elemento que del array(todo)
//todolist.todos.forEach(crearTodoHtml);


// localStorage.setItem('mi-key','abc123');
// sessionStorage.setItem('mi-key','abc123');
// localStorage.removeItem('mi-key')







