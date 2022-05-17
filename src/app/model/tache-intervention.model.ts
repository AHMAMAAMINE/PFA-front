import {EtatTache} from './etat-tache.model';
import {Intervention} from './intervention.model';
import {MembreEquipe} from './membre-equipe.model';

export class TacheIntervention {
    public  id: number;
    public  code: string;
    public  description: string;
    public date: Date;
    public etatTache: boolean;
    public intervention = new Intervention();
    public membreEquipe = new MembreEquipe();
}
