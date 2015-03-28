## Always
### Separate modules by their component name

todo/todo.controller.js
```javascript
angular.module('todo')
  .controller('TodoController', ['$scope', function($scope) {
    $scope.tasks = [];
    $scope.addTask = function() { // ... };
    $scope.remaining = function() { // ... };
    $scope.archive = function() { // ... };
  }]);
```

app.module.js
```javascript
angular.module('app', [
  'todo'
]);
```
