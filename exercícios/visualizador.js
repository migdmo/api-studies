const fs = require('fs')


const url = 'https://jsonplaceholder.typicode.com/posts';

async function f(url) {
    try {
        const res = await fetch(url);
        if(!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        return data;  // Return inside try block where data is in scope
    } catch (err) {
        console.error('fetch error: ', err);
        process.exit(1);
    }
}

// Need to use await when calling an async function
async function main() {
    let infos = await f(url);
    console.log(infos[0]);
    
    infos.forEach(element => {
        console.log(`título: ${element.title}\nbody: ${element.body}`);
        console.log('\n');
        
        
    });
}

main().catch(console.error);
