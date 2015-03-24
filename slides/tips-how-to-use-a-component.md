## How to use a component?

Download or Install the component
```bash
bower install --save angular-material
```

Load the component files
```html
<link href="angular-material.min.css" rel="stylesheet">
<script src="angular-material.min.js">
```

Set as a module dependency
```javascript
angular.module('app', [
  'ngMaterial'
]);
```

note:
  Script tag in the example is just [issue (#797)](https://github.com/hakimel/reveal.js/issues/797) in the official [reveal repository](https://github.com/hakimel/reveal.js/)
