# Modular AngularJS Talk
Making your life independent

## Introduction
This talk has the objective to show how powerful modules are specially combined with AngularJS.

## Roadmap
- Study a lot
- Build slides
  - Title + little introduction
  - About me *(contacts)*
  - What are the modular term and why do it
  - Ask audience: **Who has already used any plugin before?**
  - Talk about a plugin UI (GitHub repositories as jQuery plugin)
    - Show the code using a **linked** JS plugin *(non-semantically)*
    - Show the code using directive *(semantically)*
  - Ask audience: **Who know AngularJS?**
  - Show AngularJS **always using the best practices**
  - Explain what AngularJS is
  - Tell a little bit about directives
  - Show a *Hello World* sample and how to use it
  - Explain how do AngularJS modules work
  - Show how does the GitHub component work **(directive + service)**
  - Explain each one of the directive attributes *(with examples if possible)*
  - How to make your own custom directive
    - Search before build one
    - About generators
    - How to publish in [bower packages](http://bower.io/search/)
  - Show materials to get continue studying
  - The end
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
