import { Persona } from "./Persona";

export class Empleado extends Persona {

    public job: string = "no trabajo mis padres me mantienen"

    constructor(
        persona: Persona,
    ) {
        super(persona.dni, persona.firstName, persona.lastName, persona.heightCm, persona.weight);
    }

    public work(): void {
        console.log("estoy trabajando en " + this.job);
    }
    // public eat(): void {
    //     console.log("carne fina");  
    // }
}

const nuevaPersona = new Persona("321321", "lkasjdlk", "laksjdlksdja", 564, 120);

const nuevoEmpleado = new Empleado(nuevaPersona);
nuevoEmpleado.job = "contabilidad";

// nuevoEmpleado.respire();
// nuevoEmpleado.work();
