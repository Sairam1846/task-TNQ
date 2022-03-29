async function info(){
    const result = await fetch('db.json')
    const name = await result.json()
    console.log(name);
    
}
info()