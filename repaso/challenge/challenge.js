// primer punto del challenge

let mypeguin = {
    
    personaje:'misha',
    origin:'Death and the Penguin, Penguin Lost',
    author: 'Andrey Kurkov',
    notes: 'A cheeky penguin who gets in over his head in mafia affairs and political intrigue.',

    
};
//paso 2
console.log('Hola, soy un pingüino y mi nombre es', mypeguin.personaje);
console.log(mypeguin.origin, mypeguin.author, mypeguin.notes);
// segundo punto del challenge
// mypeguin = {
//     poderes:'puede volar',
//     vuelo(habilidad){
//         if(habilidad)
//         {console.log('tiene aletas', mypeguin.poderes);
//         return false;
//         }
//     },
       
// }
// paso 3
mypeguin.puedevolar = false;
// paso 4
mypeguin.graznar = function graznar(){
    console.log('kaww kaww!!');
// alert('kaww kaww!!')
};
// haces llamar a la funcion y asi se imprime en clg
mypeguin.graznar();

// paso 5
//parte dificil, funcional pero el reto es con objeto lineal
// class Animal {
    
//     constructor(saludo){
        
//         this.saludo = saludo;
//     }

//     getSaludo(){
//         return this.saludo;
//     }
// }
// const mensaje = new Animal("Hola, soy un pingüino y mi nombre es " + mypeguin.personaje);
// console.log(mensaje.getSaludo());

// como debe ser -mali
mypeguin.saludar = function () {
    console.log("¡Hola, soy un pingüino y mi nombre es " + this.personaje + "!");
};
mypeguin.saludar();
//para llamar un atributo o caracteristica de tu objeto que esta anteriormente puedes colocar el fomosos "this"

// // paso 6
// manera dificl de hacerlo pero funciona
// const mensaje1 = new Animal("Hola, soy un pingüino y mi nombre es " );
// mypeguin.personaje = 'gus gus',
// console.log(mensaje1.getSaludo() + mypeguin.personaje);
        // manera correcta -mali 
mypeguin.personaje ='Señor Pingu';
mypeguin.saludar();
//para cambiar un atributo basta llamarlo nuemavente y colocarle lo nuevp, y para llamar una funcion que ya esta solo basta con colocar la classe y el nombre de la funcion.pd: seguido del atrib que se quiera cambiar va el signo de =
// paso 7
mypeguin.Volar = true
if (mypeguin.Volar) {
console.log('puedo volar');
}else {
    console.log('no puedo volar');
}
// mypeguin.volar = true

//     if (puedevolar){ console.log('no puedo volar');
//     } else if  (!puedevolar) { console.log(' puedo volar'); }
//     // if (israin) {alert ('lleva sombrilla')}
//     // else if (!israin){alert ('disfruta tu caminata')}


// Animal.volar = function volar(){
// if (volar){
//     console.log('puedo volar');
//             return true;
//     }
// }
// console.log('no puedo volar');
//     return false;
// paso 8
                                                                        // mypeguin.puedevolar = true;
// // mypeguin.Volar();

// tengo es una condicional

// paso 9
let Mole = {
    nombre: 'Mole',
    porciones: 'porciones: ' + 2,
    ingredientes:'ingredientes: ' + ['canela ', 'comino ', 'cocoa '],

}
console.log(Mole.nombre);
console.log(Mole.porciones);
console.log(Mole.ingredientes);
// paso 10
let libro = { 
    nombre:['guia de estudio para el examen cenegal', 'largo petalo del mar', '100 años de soledad'],
    autor:['sergio olvera', 'isabe allende', ' gabriel garcia marquez'],
    leido: true,

}
console.log(libro.nombre[0], libro.autor[0], libro.leido);

