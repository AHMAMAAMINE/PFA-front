import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';

import {DatePipe} from '@angular/common';
import {TacheInterventionService} from '../../../service/tache-intervention.service';
import {InterventionService} from '../../../service/intervention.service';
import {EtatTacheService} from '../../../service/etat-tache.service';
import {EquipesService} from '../../../service/equipes.service';
import {ChefEquipeService} from '../../../service/chef-equipe.service';
import {UserService} from '../../../service/user.service';


@Component({
  selector: 'app-chef-equipe-tache-create',
  templateUrl: './chef-equipe-tache-create.component.html',
  styleUrls: ['./chef-equipe-tache-create.component.scss'],
  providers: [DatePipe]
})
export class ChefEquipeTacheCreateComponent implements OnInit {

  constructor(private messageService: MessageService,
              private service: TacheInterventionService,
              private interventionService: InterventionService,
              private etatTacheService: EtatTacheService,
              private equipeService: EquipesService,
              private chefEquipeService: ChefEquipeService,
              private datePipe: DatePipe, private userService: UserService
              ) {
  }

  ngOnInit(): void {
    this.interventionService.findByCodeChef(this.User.collaborateur.codeCollaborateur).subscribe(data => this.intervention = data.intervention);
    this.equipeService.findByCodeCollaborateur(this.User.collaborateur.codeCollaborateur).subscribe(data => this.membres = data.membres);
    // this.membres.splice()
  }
  get User(): User {
    return this.userService.User;
  }

  set User(value: User) {
    this.userService.User = value;
  }


  get membres(): Array<MembreEquipe> {
    return this.equipeService.membres;
  }
  get intervention(): Intervention {
    return this.interventionService.selected;
  }
  set membres(value: Array<MembreEquipe>){
    this.equipeService.membres = value;
  }
  set intervention(value: Intervention){
    this.interventionService.selected = value;
  }

  // set chef(value: ChefEquipe) {
  //   this._selected = value;
  // }
  public hideCreateDialog() {
    this.createDialog = false;
    this.submitted = false;
  }

  public save() {
    const date = new Date();
    const dates = this.datePipe.transform(date, 'yyyy-MM-dd');
    const dater = new Date(dates);
    this.selected.intervention.code = this.intervention.code;
    this.selected.date = dater;
    this.submitted = true;
    if (this.selected.code.trim()) {
      console.log(this.selected)
      this.service.save().subscribe(data => {
        console.log(this.selected)
          console.log(data);
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Tache Created',
          life: 3000
        });
      });
      this.createDialog = false;
      this.selected = new TacheIntervention();
    }
  }
  // get collaborateur(): Collaborateur {
  //   return this.collaborateurService.collaborateur;
  // }
  // set collaborateur(value: Collaborateur) {
  //   this.collaborateurService.collaborateur = value;
  // }
  // get collaborateurs(): Array<Collaborateur> {
  //   return this.collaborateurService.collaborateurs;
  // }

  get selected(): TacheIntervention {
    return this.service.selected;
  }
  set selected(value: TacheIntervention) {
    this.service.selected = value;
  }
  get createDialog(): boolean {
    return this.service.createDialog;
  }

  set createDialog(value: boolean) {
    this.service.createDialog = value;
  }

  get submitted(): boolean {
    return this.service.submitted;
  }

  set submitted(value: boolean) {
    this.service.submitted = value;
  }

  get items(): Array<TacheIntervention> {
    return this.service.items;
  }

  isSelected($event: any) {
    this.selected.membreEquipe.collaborateur.codeCollaborateur = $event.target.value;
  }
  isSelect($event: any){
    this.selected.intervention.code = $event.target.value;
  }
}
