export class StringGenerator {
    static transformaMayusculaPrimeraLetra(palabra: string): string {
        return palabra[0].toUpperCase() + palabra.slice(1, palabra.length);
    }

    static encriptaPassword(password: string): string {
        return "passwordencrypted" + this.name
    }
}


export class Matematica {
    static pi = 3.1416;

    static areaCirculo(radio: number): number {
        return Matematica.pi * radio;
    }
}

console.log(StringGenerator.transformaMayusculaPrimeraLetra("lkjasldkjdlks"));
console.log(Matematica.areaCirculo(33));



// const util = new Utils();
// util.