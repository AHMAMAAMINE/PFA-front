import {Magasin} from './magasin.model';
import {Material} from './material.model';

export class OperationStock {
  public  id: number;
  public  magasinSource = new Magasin();
  public magasinDestination = new Magasin();
  public  material = new Material();
  public  qte: number;
//  public QteMin: number;
//  public QteMax: number;
}
