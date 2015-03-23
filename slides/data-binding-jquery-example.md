## Data-binding jQuery example
![Hello world](img/data-binding-example.jpg)

```javascript
$('#input-name').on('change', function() {
  $('#greeting-name').text(this.value);
});
```
