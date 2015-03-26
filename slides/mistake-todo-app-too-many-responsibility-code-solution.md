todo/todo.controller.js
```javascript
angular.module('todo')
  .controller('TodoController', ['$scope', 'Todo', function($scope) {
    $scope.todos = Todo.get();
    $scope.addTodo = function() { Todo.add(); };
    $scope.remaining = function() { Todo.count(); };
    $scope.archive = function() { Todo.archive(); };
  }]);
```

todo/todo.service.js
```javascript
angular.module('todo')
  .factory('Todo', ['$http', function($http) {
    return {
      get: function() { // ... },
      add: function() { // ... },
      count: function() { // ... },
      archive: function() { // ... }
    };
  }]);
```
