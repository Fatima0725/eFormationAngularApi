import { Diplome } from "./diplome.model";
import { Niveaux } from "./niveaux.model";
import { Pays } from "./pays.model";

export class Apprenant {
    constructor(
        public pays_id?:Pays,
        public nom?:any,
        public prenom?:any,
        public email?:any,
        public password?:any,
        public tel?:any,
        public pseudo?:any,
        public date_naissance?:any,
        public niveaux_id?:Niveaux,
        public diplome_id?:Diplome,
    ){}
    

}
