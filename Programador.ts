import { Empleado } from "./Empleado";
import { Persona } from "./Persona";

interface IProgramador {
    workingBackend(): void;
    nickName: string;
}

export class Programador extends Empleado implements IProgramador {
    nickName: string = "ramdom";

    constructor(empleado: Empleado) {
        super(empleado);
    }

    workingBackend(): void {
        console.log("Starting workingBackend");

    }
    public work(): void {
        console.log("estoy desarrollando un app");
    }


}
const nuevaPersona = new Persona("321321", "lkasjdlk", "laksjdlksdja", 564, 120);

const nuevoEmpleado = new Empleado(nuevaPersona);
nuevoEmpleado.job = "contabilidad";

const nuevoProgramador = new Programador(nuevoEmpleado);


// nuevoProgramador.eat();

// console.log(nuevaPersona);
// console.log(nuevoEmpleado);
// console.log(nuevoProgramador);



