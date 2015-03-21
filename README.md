# Modular AngularJS Talk
Making your life independent

## Introduction
This talk has the objective to show how powerful modules are specially combined with AngularJS.

## Roadmap
- Study a lot
- Build slides
  - Title + little introduction
  - About me *(contacts)*
  - Ask audience: **Who has already used any plugin before? Or maybe a jQuery plugin?**
  - **1 -** Talk about a plugin UI (GitHub repositories as jQuery plugin)
    - Show the code using a **jQuery** plugin *(non-semantically)*
    - Show the code using directive *(semantically)*
  - Ask audience: **Who know AngularJS?**
  - **2 -** Explain what AngularJS is (concept of extended HTML)
  - Show AngularJS **always using the best practices**
  - **3 -** Introduction to AngularJS directives
  - Show a *Hello World* sample
  - How to use it (with dependency injection)
  - **4 -** Introduction to AngularJS modules
  - Show how does the GitHub component work **(directive + service)**
  - Explain each one of the directive attributes *(with examples if possible)*
  - **5 -** Introduction to app structure
  - **6 -** How to make your own component
      - Search before build one
      - About generators (like Yeoman)
  - **7 -** How to use dependencies management with [bower.io](http://bower.io/) *(download and dependency injection)*
  - **8 -** How to publish as a [bower package](http://bower.io/search/)
  - **9 -** Introduction to keep learning AngularJS modularization
  - Show the AngularJS book
  - Show the new AngularJS 2.0 *(and tell them to get study)*
  - **10 -** The end
- Study a lot the slides
- Rehearse a lot more

### GitHub component premisses
- Use ``angular.directive`` and ``angular.service``
- Service to access GitHub API
- Directive to configure the UI widget
- ~~Use unit tests~~
- Be published in bower
- **UPDATE:** Good option, could be this repo: [lucasconstantino/angular-github-repo](https://github.com/lucasconstantino/angular-github-repo)

### Directive options
More resources can be found in:
- https://docs.angularjs.org/guide/directive
- https://docs.angularjs.org/api/ng/service/$compile
```javascript
{
  restrict: 'A',
  template: '<div></div>',
  templateUrl: 'directive.html',
  replace: false,
  priority: 0,
  transclude: false,
  scope: false,
  terminal: false,
  require: false,
  controller: function($scope, $element, $attrs, $transclude, otherInjectables) { ... },
  controllerAs: "controllerAlias",
  compile: function compile(tElement, tAttrs, transclude) {
    return {
      pre: function preLink(scope, iElement, iAttrs, controller) { ... },
      post: function postLink(scope, iElement, iAttrs, controller) { ... }
    }
  },
  link: function postLink(scope, iElement, iAttrs) { ... }
}
```
