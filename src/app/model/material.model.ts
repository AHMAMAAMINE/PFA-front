import { CategoryMaterial } from "./category-material.model";
import { TypeMaterial } from "./type-material.model";

export class Material {
  public  id:number;
  public reference:string;
  public  typeMaterial=new TypeMaterial();
  public  libelle:string;
  public  categoryMaterial=new CategoryMaterial() ;
}
