app.js
```javascript
angular.module('app', ['app.controllers']);
```

controllers.js
```javascript
angular.module('app.controllers')
  .controller('TodoController', ['$scope', function($scope) {
    $scope.tasks = [];
    $scope.addTask = function() { // ... };
    $scope.remaining = function() { // ... };
    $scope.archive = function() { // ... };
  }])
  .controller('OtherController', ['$scope', function($scope) {
    // ...
  }]);
```
