import { Injectable } from "@angular/core";
import { Zapatilla } from "../models/zapatilla";

@Injectable()

export class ZapatillaService {
    public zapatillas: Array<Zapatilla>;

    constructor(){
        this.zapatillas = [
            new Zapatilla('Reebook Clasic','Reebook','Blanco',40,true),
            new Zapatilla('Reebook Spartan','Reebook','Negras',120,true),
            new Zapatilla('Nike Runner MD','Nike','Negras',60,true),
            new Zapatilla('Adidas Yeezy','Adidas','Gris',180,false),
            new Zapatilla('Nike Air Max','Nike','Rojas',190,true)
        ];
    }

    getTexto(){
        return "Hola mundo desde un servicio";
    }
    getZapatillas(): Array<Zapatilla>{
        return this.zapatillas;
    }
}