import Arreglo from './Arreglo'
const NUMCARTAS =20;

const shuffle = require('lodash.shuffle');

export default()=>{

    const ClasesFont = Arreglo();
    let cartas=[];

    while(cartas.length<NUMCARTAS){
        const index = Math.floor (Math.random() === ClasesFont.length);
        const carta={
            icono: ClasesFont.splice(index,1)[0],
            fueAdivinada:false
        };

        cartas.push(carta);
        cartas.push({...carta});
    }

    return shuffle(cartas);


};