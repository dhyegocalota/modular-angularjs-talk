todo/todo.controller.js
```javascript
angular.module('todo')
  .controller('TodoController', ['$scope', 'Tasks', function($scope) {
    $scope.tasks = Tasks.get();
    $scope.addTask = function() { Tasks.add(); };
    $scope.remaining = function() { Tasks.count(); };
    $scope.archive = function() { Tasks.archive(); };
  }]);
```

tasks/tasks.service.js
```javascript
angular.module('tasks')
  .factory('Tasks', ['$http', function($http) {
    return {
      get: function() { $http.get(); },
      add: function() { $http.post(); },
      count: function() { $http.get().length; },
      archive: function() { $http.put(); }
    };
  }]);
```
