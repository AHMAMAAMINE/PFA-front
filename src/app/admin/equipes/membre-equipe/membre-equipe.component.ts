import { Component, OnInit } from '@angular/core';
import {EquipesService} from '../../../../controller/service/equipes.service';
import {CollaborateurService} from '../../../../controller/service/collaborateur.service';
import {MembreEquipe} from '../../../../controller/model/membre-equipe.model';
import {Collaborateur} from '../../../../controller/model/collaborateur.model';
import {Equipe} from '../../../../controller/model/equipe.model';

@Component({
  selector: 'app-membre-equipe',
  templateUrl: './membre-equipe.component.html',
  styleUrls: ['./membre-equipe.component.scss']
})
export class MembreEquipeComponent implements OnInit {
  constructor(private  equipeService: EquipesService,
              collaborateurService: CollaborateurService) { }
  cols: any[];
  ngOnInit(): void {
  }

  get membre(): MembreEquipe {
    return this.equipeService.membre;
  }

  set membres(value: Array<MembreEquipe>) {
    this.equipeService.membres = value;
  }
  get membres(): Array<MembreEquipe> {
    return this.equipeService.membres ;
  }

  get createDialog(): boolean {
    return this.equipeService.createDialog;
  }

  set createDialog(value: boolean) {
    this.equipeService.createDialog = value;
  }

  get submitted(): boolean {
    return this.equipeService.submitted;
  }

  set submitted(value: boolean) {
    this.equipeService.submitted = value;
  }
  get selectedEquipe(): Equipe {
    return this.equipeService.selectedEquipe;
  }

  get equipes(): Array<Equipe> {
    return this.equipeService.equipes;
  }

  get selectesEquipe(): Array<Equipe> {
    return this.equipeService.selectesEquipe;
  }

  set selectesEquipe(value: Array<Equipe>) {
    this.equipeService.selectesEquipe = value;
  }
}
