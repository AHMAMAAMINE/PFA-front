import { Intervention } from './intervention.model';
import { Collaborateur } from './collaborateur.model';
import { Magasin } from './magasin.model';
import { Material } from './material.model';

export class MateraialIntervention {
  public id: number;
  public material = new Material();
  public magasin = new Magasin();
  public qte: number;
  public collaborateur = new Collaborateur();
  public intervention = new Intervention();
}
