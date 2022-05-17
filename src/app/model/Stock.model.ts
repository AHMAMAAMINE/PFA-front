import { Magasin } from "./magasin.model";
import { Material } from "./material.model";

export class Stock {
  public  id:number;
  public  material=new Material();
  public  magasin=new Magasin();
  public  qte :number;
}
