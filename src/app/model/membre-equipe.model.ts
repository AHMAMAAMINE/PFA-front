import {Collaborateur} from './collaborateur.model';
import {Equipe} from './equipe.model';

export class MembreEquipe {
  public  id: number;
  public  collaborateur = new Collaborateur();
   // public  equipe = new Equipe();
  public  activer: boolean;
}
