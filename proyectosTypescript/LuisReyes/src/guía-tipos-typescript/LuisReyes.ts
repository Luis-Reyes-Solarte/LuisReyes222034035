interface tipoVehiculo {
    tipo: string;
    marca: string;
    modelo: string;
    cilindraje: number;
    numPuertas: number;
    arrancarVehiculo: () => void;
    cEspeciales: caracteristicasEspeciales[];
};
interface caracteristicasEspeciales {
    velocidad: number;
    suspension: boolean;
    agregarSuspension: () => void;
};
interface testArray {
    modelos:number[];
    característicasArray: Array<string[]>;
};
const miVehiculo: tipoVehiculo = {
    tipo: 'tesla',
    marca: 'tesla',
    modelo: 'N/A',
    cilindraje: 134,
    numPuertas: 0,
    arrancarVehiculo(){
        console.log('El vehiculo arranco con un motor de ', this.cilindraje,' cc');
    },
    cEspeciales: []
};
const miSegundoVehiculo: caracteristicasEspeciales = {
    velocidad: 0,
    suspension: false,
    agregarSuspension(){
        if (this.suspension==true){
            console.log(' Tu vehiculo tiene suspensión');
        }else{
            console.log('Tu vehiculo no tiene suspensión');
        }
    }
};
const miTercerVehiculo: testArray = {
    modelos: [1,2,3,4,5],
    característicasArray: [
        ['azul','verde'],
        ['Rin 15', 'Rin 17'],
        ['2 puertas','4 puertas']
    ]
}
console.log({miVehiculo});
miVehiculo.arrancarVehiculo();
miSegundoVehiculo.agregarSuspension();
console.log({miSegundoVehiculo});
console.log({miTercerVehiculo});
console.log(miTercerVehiculo.característicasArray[0][0]);
console.log(miTercerVehiculo.característicasArray[2][1]);
console.log('');

miTercerVehiculo.característicasArray.forEach((caracteristica) => {
    console.log(caracteristica[0]);
})