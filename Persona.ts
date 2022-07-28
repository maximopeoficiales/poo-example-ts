export class Persona {

    constructor(
        public dni: string,
        public firstName: string,
        public lastName: string,
        public heightCm: number,
        public weight: number,
    ) {

    }

    public eat(): void {
        console.log("esta comiendo carne");

    }


    public respire(): void {
        console.log("estoy respirando");
    }


}


