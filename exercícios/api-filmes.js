

const url = "https://www.omdbapi.com/?i=tt3896198&apikey=104edb60";
async function f(url) {
    try{
        const res = await fetch(url);
        if(!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        return data
    }catch(err){
        console.error('fetch error: ', err);
        process.exit(1);
    }
}


async function main() {
    let items = await f(url)
    console.log(items);
    
}

main().catch(console.error);