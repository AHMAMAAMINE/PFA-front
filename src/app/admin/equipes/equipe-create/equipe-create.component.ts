import { Component, OnInit } from "@angular/core";
import { MessageService } from "primeng/api";
import { DatePipe } from "@angular/common";
import {EquipesService} from '../../../service/equipes.service';
import {CollaborateurService} from '../../../service/collaborateur.service';
import {Equipe} from '../../../model/equipe.model';
import {Collaborateur} from '../../../model/collaborateur.model';
import {MembreEquipe} from '../../../model/membre-equipe.model';

@Component({
  selector: "app-equipe-create",
  templateUrl: "./equipe-create.component.html",
  styleUrls: ["./equipe-create.component.scss"],
  providers: [DatePipe],
})
export class EquipeCreateComponent implements OnInit {
  private valorant: string;
  constructor(
    private messageService: MessageService,
    private service: EquipesService,
    private collaborateurService: CollaborateurService,
    private datePipe: DatePipe
  ) {
    this.date = this.datePipe.transform(this.myDate, "yyyy-MM-dd");
  }
  get selectedEquipe(): Equipe {
    return this.service.selectedEquipe;
  }

  set selectedEquipe(value: Equipe) {
    this.service.selectedEquipe = value;
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

  get equipes(): Array<Equipe> {
    return this.service.equipes;
  }

  set equipes(value: Array<Equipe>) {
    this.service.equipes = value;
  }
  get collaborateurs(): Array<Collaborateur> {
    return this.collaborateurService.collaborateurs;
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
  myDate = new Date();
  date: string;
  valeur: string;
  added = false;
  private values: string;
  ngOnInit(): void {
    this.collaborateurService.filter();
      // .subscribe((data) => (this.collaborateurService.collaborateurs = data));
  }
  public hideCreateDialog() {
    this.createDialog = false;
    this.submitted = false;
  }
  public saveMembre() {
    this.valeur = this.selectedEquipe.ref;
    this.values = this.selectedEquipe.libelle;
    this.valorant = this.selectedEquipe.code;
    this.membres.push(this.membreEquipe);
    this.membreEquipe = null;
    console.log(this.membres);
    // this.service.selectesEquipe.push(this.selectedEquipe);
    this.added = true;
  }

  public save() {
    this.submitted = true;
    this.selectedEquipe.ref = this.valeur;
    this.selectedEquipe.libelle = this.values;
    this.selectedEquipe.membres = this.membres;
    this.service.save().subscribe((data) => {
      console.log({ ...this.selectedEquipe });
      this.messageService.add({
        severity: "success",
        summary: "Successful",
        detail: "Equipe Created",
        life: 3000,
      });
    });
    this.createDialog = false;
    this.equipes.push(this.selectedEquipe);
    this.selectedEquipe = new Equipe();
  }

  isSelected($event: any) {
    this.membreEquipe.collaborateur.codeCollaborateur = $event.target.value;
  }
  checkCheckBoxvalue(event: any) {
    this.selectedEquipe.chefEquipe.collaborateur.codeCollaborateur =
      event.collaborateur.codeCollaborateur;
  }
}
