import { Stock } from "./Stock.model";
import { TypeMagasin } from "./type-magasin.model";

export class Magasin {
  public  id:number;
  public reference:string;
  public adresse:string;
  public stocks=new Array<Stock>();
  public  typemagasin=new TypeMagasin();

  trim() {
    return false;
  }
}
