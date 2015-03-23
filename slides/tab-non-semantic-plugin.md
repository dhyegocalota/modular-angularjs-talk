## Non-Semantic tab plugin
```html
<div id="tab">
  <ul class="tab-head">
    <li><a href="#content-1">Title 1</a></li>
    <li><a href="#content-2">Title 2</a></li>
    <li><a href="#content-3">Title 3</a></li>
  </ul>
  <div id="content-1" class="tab-content">
    <p>Content 1 goes here</p>
  </div>
  <div id="content-2" class="tab-content">
    <p>Content 2 goes here</p>
  </div>
  <div id="content-3" class="tab-content">
    <p>Content 3 goes here</p>
  </div>
</div>
```
```javascript
$('#tab').tab();
```
