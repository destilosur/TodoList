import { Todo } from "./todo.class";


export class TodoList{
    constructor(){
        // this.todos=[];
        this.cargarLocalStorage();
    }

    nuevoTodo(todo){
        this.todos.push(todo);
        this.guardarLocalStorage();
    }

    eliminaTodo(id){        
        this.todos=this.todos.filter(todo => todo.id!=id);
        this.guardarLocalStorage();
       }

    marcarCompletado(id){
        for(const todo of this.todos ){

            if(todo.id== id){
              todo.completado=!todo.completado;              
              this.guardarLocalStorage();
              break;
            }


        }

    }

    eliminarCompletados(){       

        // for(let i=0;i<this.todos.length;i++){        
        //     if(this.todos[i].completado) this.todos.splice(i,1);             
        // }
        // for (const i in this.todos) {            
        //     if(this.todos[i].completado) this.todos.splice(i,1);             
        // }         
         
         this.todos=this.todos.filter(todo => !todo.completado);
         this.guardarLocalStorage();
    }

     guardarLocalStorage(){
        //convierte objeto a String y lo guarda en un JSON
        localStorage.setItem('todo',  JSON.stringify(this.todos));
    }
    cargarLocalStorage(){
        // if(localStorage.getItem('todo')){
        //     //parse convierte JSON.stringify a JSON
        //     this.todos= JSON.parse(  localStorage.getItem('todo'));
        //     console.log('cargar Local: ',this.todos);
        //     console.log(typeof(this.todos));
           
        // }else{
        //     this.todos=[];
        // }

        this.todos=(localStorage.getItem('todo'))?
                              JSON.parse(localStorage.getItem('todo')):
                              this.todos=[];
                              
        // this.todos=this.todos.map(obj=> Todo.fromJson(obj));
        this.todos=this.todos.map(Todo.fromJson);

    }
}