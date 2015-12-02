# Eyejs
This library is for an SPA (Single Page Application) page, as a learning project.

# IIFE design pattern
I am using the IIFE pattern, which is an immediately invoked function expression.

## Advantages
With this pattern we are going to...

### Prevents the hoisting.
```javascript
var x = 1;
var func = (function(x) {
	return x; // returns 1
})(x);
x = 6;
console.log(func); // 1
```

### Protects the data.
```javascript
var func = (function() {
	var x = 6;
	var obj = {
		getX: function() { return x; }
	};
	return obj;
})();
console.log(func.x); // 6
func.x = 8; // Creating a property in the object, but our property is on the function itselft.
console.log(func.x); // 6
```

### Prevent the overcalling (Call more than once the files).
```javascript
var func = (function() {
	var x = 6;
	var obj = {
		getX: function() { return x; }
	};
	if (typeof window.obj === 'undefined')
		window.obj = window.$ = obj;
	else
		console.log('obj already exists!');
})();
```
