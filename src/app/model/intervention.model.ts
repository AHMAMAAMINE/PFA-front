import { EtatIntervention } from "./etat-intervention.model";
import { MateraialIntervention } from "./materaial-intervention.model";
import { Conseils } from "./conseils.model";
import { InterventionMembreEquipe } from "./intervention-membre-equipe.model";

export class Intervention {
  public id: number;
  public dateDeProbleme: Date;
  public dateDebut: string;
  public dateFin: string;
  public description: string;
  public libelle: string;
  public code: string;
  public etatIntervention = new EtatIntervention();
  public interventionMembreEquipe = new Array<InterventionMembreEquipe>();
  public materaialInterventions = new Array<MateraialIntervention>();
  public conseils = new Array<Conseils>();
}
