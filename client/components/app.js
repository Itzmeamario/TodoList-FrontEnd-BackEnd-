angular.module('app', [])
.component('app', {
  controller: function() {
    // Server information
    this.server = 'http://127.0.0.1:3000/todos';
    // 
    this.todos = [];
    this.responsibles = [];
    this.todo = '';
    this.responsible = '';
    
    this.$onInit = function() {
      this.fetch();
      console.log('in init todos = ', this.todos)
    };

    this.addTodo = () => {
      if(this.todo) {
        this.responsibles.push(this.responsible);

        axios.post(this.server + '/todos', {
          text: this.todo,
          name: 'Mario'
        })
        // We could show a message saying information has been posted or something
        // but we don't need that right now
        /*.then(function(res) {
          console.log('res1:',res);
        })*/
        .then(() => {
          console.log('we in here', this.todos) 
          this.fetch()
        })
        .catch(function(err) {
          console.log({err});
        });
        
      }
      this.todo = '';
      this.responsible = '';
    };

    this.fetch = () => {
      this.todos = [];
      console.log('inside fetch');
      axios.get(this.server + '/todos')
      .then((res) => (/*this.todos = */res.data.map((pair) => {
        console.log('res.data ', res.data)
        console.log('this.todo', this.todos)
        console.log('pair.text ', pair.text)
        /*return*/ this.todos.push(pair.text);
      })))
      .catch(function(err) {
        console.log({err});
      });
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