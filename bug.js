```javascript
//Example of an uncommon Tailwind CSS bug related to PurgeCSS and dynamically added classes.

//In your main app.js file
function addDynamicClass(element, className){   
  element.classList.add(className);
}

//In your main component
<button onclick={ ()=> addDynamicClass(document.getElementById('myElement'),'bg-red-500') }>Add Class</button>
<div id="myElement"></div>
```