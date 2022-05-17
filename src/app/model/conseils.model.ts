import {Collaborateur} from './collaborateur.model';
import {Equipe} from './equipe.model';
import {Intervention} from './intervention.model';

export class Conseils {
  public  id: number;
  public  collaborateur = new Collaborateur();
  // public  equipe = new Equipe();
  public message: string;
  public dateDeMessage: Date ;
  public  intervention = new Intervention();
}
