## Never
### Let controllers do a lot of *other things*
#### (like persist) 

controllers.js
```javascript
angular.module('app.controllers')
  .controller('TodoController', ['$scope', function($scope) {
    $scope.tasks = [];
    $scope.addTask = function() { // ... };
    $scope.remaining = function() { // ... };
    $scope.archive = function() { // ... };
  }])
...
```
