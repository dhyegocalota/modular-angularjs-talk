## Dependency Injection Example

```html
<div ng-app="app" ng-controller="GreetingController">
  <form ng-submit="greet()">
    <input type="text" ng-model="name">
    <button type="submit">Greet</button>
  </form>
</div>
```

```javascript
angular.module('app', [])
  .controller('GreetingController', function($scope) {
    $scope.name = 'John Doe';
    $scope.greet = function() {
      alert('Hello ' + $scope.name);
    };
  });
```
