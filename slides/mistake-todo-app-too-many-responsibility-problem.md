## Never
### Let controllers do other lot of things
#### (like persist) 

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
