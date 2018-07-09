angular.module('app')
.component('todoList', {
  bindings: {
    todos: '<',
    responsibles: '<',
    delete: '<'
  },

  controller: function($scope) {
    $scope.data=[
      {Name: 'Prakash',Age: 26, Number: 9800775544},
      {Name: 'Sushil',Age: 27, Number: 9800774433},
      {Name: 'Sagar',Age: 25, Number: 9800777787}
      ];
      
      $scope.gridOptions = { data: 'data' };
  },

  template:`
  <div>
    <br\>
    <div ng-repeat="todo in $ctrl.todos track by $index">
    <button ng-click="$ctrl.delete($index)">&#10004</button>
    Todo:{{todo}}, Responsible:{{$ctrl.responsibles[$index]}}
    </div>
    
  </div>
  <div class="gridStyle" ng-grid="gridOptions"></div>
  `
});
