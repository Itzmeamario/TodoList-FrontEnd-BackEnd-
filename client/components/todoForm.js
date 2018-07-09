angular.module('app')
.component('todoForm', {
  bindings: {
    todo: "=",
    responsible: "=",
    submit: "<"
  },

  template: `
  <div>
    <form ng-submit="$ctrl.submit()">
      Todo: <input ng-model="$ctrl.todo"></input>
      Responsible: <input ng-model="$ctrl.responsible"></input>
      <button>Add</button>
    </form>
  </div>
  `
});