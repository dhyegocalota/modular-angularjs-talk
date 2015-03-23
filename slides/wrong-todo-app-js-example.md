app.js
```javascript
angular.module('app', ['app.controllers']);
```

controllers.js
```javascript
angular.module('app.controllers', []);
```

controllers/todo.js
```javascript
angular.module('app.controllers')
  .controller('TodoController', ['$scope', function($scope) {
    $scope.todos = [];
    $scope.addTodo = function() { // ... };
    $scope.remaining = function() { // ... };
    $scope.archive = function() { // ... };
  }]);
```
