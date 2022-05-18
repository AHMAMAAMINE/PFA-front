import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import {EquipesService} from '../../../service/equipes.service';
import {Equipe} from '../../../model/equipe.model';
import {MembreEquipe} from '../../../model/membre-equipe.model';


@Component({
  selector: 'app-equipe-view',
  templateUrl: './equipe-view.component.html',
  styleUrls: ['./equipe-view.component.scss']
})
export class EquipeViewComponent implements OnInit {

  constructor(private messageService: MessageService, private service: EquipesService) { }

  get selectevEquipe(): Equipe {
    return this.service.selectevEquipe;
  }

  set selectevEquipe(value: Equipe) {
    this.service.selectevEquipe = value;
  }

  get editDialog(): boolean {
    return this.service.editDialog;
  }

  set editDialog(value: boolean) {
    this.service.editDialog = value;
  }

  get submitted(): boolean {
    return this.service.submitted;
  }

  set submitted(value: boolean) {
    this.service.submitted = value;
  }

  get equipes(): Array<Equipe> {
    return this.service.equipes;
  }

  set equipes(value: Array<Equipe>) {
    this.service.equipes = value;
  }

  get membreEquipe(): MembreEquipe {
    return this.service.membre;
  }
  set membreEquipe(value: MembreEquipe) {
    this.service.membre = value;
  }
  get membres(): Array<MembreEquipe> {

    return this.service.membres;
  }

  set membres(value: Array<MembreEquipe>) {
    this.service.membres = value;
  }
  ngOnInit(): void {
  }
  public hideViewDialog() {
    this.viewDialog = false;
  }

  get selectedEquipe(): Equipe {
    return this.service.selectedEquipe;
  }

  set selectedEquipe(value: Equipe) {
    this.service.selectedEquipe = value;
  }

  get viewDialog(): boolean {
    return this.service.viewDialog;
  }

  set viewDialog(value: boolean) {
    this.service.viewDialog = value;
  }


}
