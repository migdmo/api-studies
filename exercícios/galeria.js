const fs = require('fs');

const url = 'https://jsonplaceholder.typicode.com/photos?_limit=10';


(async () => {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    console.log(JSON.stringify(data, null, 2)); // prints to console
    for(let i = 0; i < data.length; i++){
        console.log(data[i].title);
        
    }
    fs.writeFileSync('photos.json', JSON.stringify(data, null, 2), 'utf8');
    console.log('Saved photos.json');
  } catch (err) {
    console.error('Fetch error:', err);
    process.exit(1);
  }
})();