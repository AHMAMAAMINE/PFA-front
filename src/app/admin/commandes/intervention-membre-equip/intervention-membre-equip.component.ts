import { Component, OnInit } from '@angular/core';
import {InterventionService} from '../../../service/intervention.service';
import {Intervention} from '../../../model/intervention.model';
import {InterventionMembreEquipe} from '../../../model/intervention-membre-equipe.model';
import {EquipesService} from '../../../service/equipes.service';
import {MembreEquipe} from '../../../model/membre-equipe.model';
import { Equipe } from 'src/app/model/equipe.model';


@Component({
  selector: 'app-intervention-membre-equip',
  templateUrl: './intervention-membre-equip.component.html',
  styleUrls: ['./intervention-membre-equip.component.scss']
})
export class InterventionMembreEquipComponent implements OnInit {
  constructor( private serviceinterv: InterventionService, private service: EquipesService) { }


  get collaborateur(): InterventionMembreEquipe {
    return this.serviceinterv.collaborateur;
  }
  set collaborateur(valeur: InterventionMembreEquipe)  {
    this.serviceinterv.collaborateur = valeur;
  }
  get Membres(): Array<MembreEquipe> {
    return this.service.membres;
  }
  get MembresEquipe(): Array<InterventionMembreEquipe> {
    return  this.serviceinterv.collaborateurs;
  }
  cols: any[];
  value: any;
  values: any;
  public edit(commande: InterventionMembreEquipe) {
    this.values = commande.equipe.ref;
    this.service.findByRef(this.values).subscribe(data => this.membres = data.membres );
    this.value = commande.membreEquipe.collaborateur.codeCollaborateur;
    this.selection = commande;
    this.editDialg = true;
  }

  ngOnInit(): void {
    this.service.findAll().subscribe(data => this.equipes = data );
  }
  get Equipe(): Array<Equipe>{
    return this.service.equipes;
  }
  set equipes(value: Array<Equipe>) {
    this.service.equipes = value;
  }
  saveCollaboraateur() {
    if (this.serviceinterv.findIndexByRef(this.collaborateur.membreEquipe.collaborateur.codeCollaborateur, this.collaborateur.equipe.ref) !== -1 && this.MembresEquipe.length !== 0) {
      alert('donner un membre equipe qui n est pas deja sauvegarder');
    }
    else {
      this.serviceinterv.saveCollaboraateur();
      this.value = '---select value-----';
      this.values = '---select value-----';
    }
  }
  get editDialog(): boolean {
    return this.serviceinterv.editDialog;
  }

  set editDialog(value: boolean) {
    this.serviceinterv.editDialog = value;
  }
  get editDialg(): boolean {
    return this.serviceinterv.editDialg;
  }

  set editDialg(value: boolean) {
    this.serviceinterv.editDialg = value;
  }
  set membres(value: Array<MembreEquipe>) {
    this.service.membres = value;
  }
  isSelected($event: any) {
    this.collaborateur.membreEquipe.collaborateur.codeCollaborateur = $event.target.value;
  }
  get selectes(): Array<Intervention> {
    return this.serviceinterv.selectes;
  }

  set selectes(value: Array<Intervention>) {
    this.serviceinterv.selectes = value;
  }

  isEmpty() {
    return this.collaborateur.equipe.ref == null && this.collaborateur.membreEquipe.collaborateur.codeCollaborateur == null;
  }

  isSelecteds($event: any) {
    this.collaborateur.equipe.ref = $event.target.value;
    this.service.findByRef(this.collaborateur.equipe.ref).subscribe(data => this.membres = data.membres );
  }


  editliste(collaborateur: InterventionMembreEquipe) {
    if (this.serviceinterv.findIndexByRef(collaborateur.membreEquipe.collaborateur.codeCollaborateur, collaborateur.equipe.ref) !== -1 && this.MembresEquipe.length !== 0) {
      alert('donner un membre equipe qui n est pas deja sauvegarder');
    }
    else if (collaborateur.membreEquipe.collaborateur.codeCollaborateur && collaborateur.equipe.ref) {
      this.serviceinterv.saveCollaboraateur();
      if(this.editDialg)
      {
        this.MembresEquipe[this.serviceinterv.findIndexByRef(this.selection.membreEquipe.collaborateur.codeCollaborateur, this.selection.equipe.ref)] = collaborateur;
      }
      this.editDialg = false;
      this.value = '---select value-----';
      this.values = '---select value-----';
      }

  }
  get selection(): InterventionMembreEquipe {

    return this.serviceinterv.selection;
  }

  set selection(value: InterventionMembreEquipe) {
    this.serviceinterv.selection = value;
  }

  delete(membresEquipe: InterventionMembreEquipe) {
    console.log(membresEquipe);
    this.serviceinterv.delete(membresEquipe.intervention.code, membresEquipe.membreEquipe.collaborateur.codeCollaborateur, membresEquipe.equipe.ref).subscribe(
        data => {
          if (data > 0){
            this.MembresEquipe.splice(this.serviceinterv.findIndexByRef(membresEquipe.membreEquipe.collaborateur.codeCollaborateur, membresEquipe.equipe.ref)) ;
          }
        }
    );
  }
  get viewDialog(): boolean {
    return this.serviceinterv.viewDialog;
  }

  set viewDialog(value: boolean) {
    this.serviceinterv.viewDialog = value;
  }
}
