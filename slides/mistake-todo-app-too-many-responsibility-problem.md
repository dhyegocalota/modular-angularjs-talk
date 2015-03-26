## Never
### Let controllers do a lot of *other things*
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
