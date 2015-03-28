index.html
```html
...
<div ng-controller="TodoController">
  <span>{{remaining()}} of {{tasks.length}} remaining</span>
  [ <a href="" ng-click="archive()">archive</a> ]
  <ul>
    <li ng-repeat="task in tasks">
      <input type="checkbox" ng-model="task.done">
      <span class="done-{{task.done}}">{{task.text}}</span>
    </li>
  </ul>
  <form ng-submit="addTask()">
    <input type="text" ng-model="taskText">
    <input type="submit" value="add">
  </form>
</div>
...
```
