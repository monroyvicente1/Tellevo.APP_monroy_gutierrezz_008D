
export interface IAnimalitos{
    id:Number;
    nombre:String;
    tipoMascota: String;
    raza: String;

}


export interface IAnimalito{
    nombre:String;
    tipoMascota: String;
    raza: String;
}


export interface Users{
    id:number;
    username: string;
    password: string;
    role: string;
    isactive: boolean
}