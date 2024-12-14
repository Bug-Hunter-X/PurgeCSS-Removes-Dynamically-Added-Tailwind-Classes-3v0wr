```javascript
//Example of how to configure PurgeCSS within your `tailwind.config.js` to include dynamically added classes. 

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ 
    './index.html', //Add other files as needed 
    './src/**/*.{js,ts,jsx,tsx}',
    { raw:  ['.bg-red-500'] } //Include the class directly in config
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```