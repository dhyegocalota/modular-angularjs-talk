## Dependency Injection Example

![Dependency Injection done example](img/dependency-injection-done-example.jpg)

```javascript
angular.module('app', [])
  .controller('GreetingController', function($scope) {
    $scope.name = 'John Doe';
    $scope.greet = function() {
      alert('Hello ' + $scope.name);
    };
  });
```
