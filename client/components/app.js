angular.module('app', ['ngGrid'])
.component('app', {
  controller: function() {
    this.todos = [];
    this.responsibles = [];
    this.todo = '';
    this.responsible = '';

    this.addTodo = () => {
      if(this.todo) {
        this.todos.push(this.todo);
        this.responsibles.push(this.responsible);
        this.todo = '';
        this.responsible = '';     
      }
      console.log(this.todos);
      console.log(this.responsibles);
    };

    this.deleteTodo = (index) => {
      this.todos.splice(index, 1);
      this.responsibles.splice(index, 1);
    };
  },

  template:`
  <div>
    <h1>My Todo List</h1>
    <todo-form todo="$ctrl.todo" responsible="$ctrl.responsible" submit="$ctrl.addTodo"></todo-form>
    <todo-list todos="$ctrl.todos" responsibles="$ctrl.responsibles" delete="$ctrl.deleteTodo"></todo-list>
  </div>
  `
});