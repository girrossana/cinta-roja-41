// primer punto del challenge

let mypeguin = {
    
    personaje:'misha',
    origin:'Death and the Penguin, Penguin Lost',
    author: 'Andrey Kurkov',
    notes: 'A cheeky penguin who gets in over his head in mafia affairs and political intrigue.',

    
}
console.log('Hola, soy un pingüino y mi nombre es', mypeguin.personaje)
console.log(mypeguin.origin, mypeguin.author, mypeguin.notes);
// segundo punto del challenge
mypeguin = {
    poderes:'puede volar',
    vuelo(habilidad){
        if(habilidad)
        {console.log('tiene aletas', mypeguin.poderes);
        return false;
        }
    },
       
}


