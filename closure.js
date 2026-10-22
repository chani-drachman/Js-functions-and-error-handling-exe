function spellFactory(){
    let count=1;
    return(name) => {count++; console.log(`${name} level ${count}`)    
}}

const power = spellFactory()
const power1 =spellFactory()



power("fire-ball");
power("snow-ball");
power("flowers");
