import {TacheIntervention} from './tache-intervention.model';

export class EtatTache {
    public  id: number;
    public  libelle: string;
    public  code: string;
    public  description: string;
    public tacheIntervention: TacheIntervention;
}
