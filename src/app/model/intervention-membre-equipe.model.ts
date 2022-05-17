import { Intervention } from './intervention.model';
import {MembreEquipe} from './membre-equipe.model';
import {Equipe} from './equipe.model';
export class InterventionMembreEquipe {
  public id: number;
  public membreEquipe = new MembreEquipe();
  public intervention = new Intervention();
  public equipe = new Equipe();
}
