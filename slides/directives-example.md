## Directives example

Hello Dhyego

```html
<greet name="Dhyego"></greet>
```

```javascript
// ...
module.directive('greet', function() {
  return {
    restrict: 'E',
    scope: {
      name: '@'
    },
    template: '<p>Hello {{name}}</p>'
  };
});
```
