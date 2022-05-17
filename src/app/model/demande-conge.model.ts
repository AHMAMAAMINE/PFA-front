import {EtatDemandeConge} from './etat-demande-conge.model';
import {Collaborateur} from './collaborateur.model';

export class DemandeConge {
  public id: number;
  public code: string;
  public  dateDepart: string;
  public  dateFin: string;
  public  collaborateur = new Collaborateur();
  public  etatDemandeConge: boolean;
  public messageCollaborateur: string;
  public action: string;


}

