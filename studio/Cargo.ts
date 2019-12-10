interface Payload {
    massKg: number;
}

export class Cargo {
    massKg: number;
    material: string;
    constructor(massKg: number, material: string){
        this.massKg = massKg;
        this.material = material;
    }
}