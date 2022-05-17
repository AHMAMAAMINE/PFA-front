import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Equipe } from 'src/app/controller/model/equipe.model';
import { EquipesService } from 'src/app/controller/service/equipes.service';
import {Collaborateur} from '../../../../controller/model/collaborateur.model';
import {CollaborateurService} from '../../../../controller/service/collaborateur.service';
import {MembreEquipe} from '../../../../controller/model/membre-equipe.model';

@Component({
  selector: 'app-equipe-edit',
  templateUrl: './equipe-edit.component.html',
  styleUrls: ['./equipe-edit.component.scss']
})
export class EquipeEditComponent implements OnInit {

  constructor(private messageService: MessageService, private service: EquipesService, private collaborateurService: CollaborateurService) { }
get selectedEquipe(): Equipe {
    return this.service.selectedEquipe;
}

set selectedEquipe(value: Equipe) {
    this.service.selectedEquipe = value;
}
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
    private values: string;
    private valeur: string;
    private valorant: string;

  ngOnInit(): void {
  }
  public edit() {
    this.submitted = true;
    this.selectedEquipe.ref = this.selectevEquipe.ref;
    this.selectedEquipe.code = this.selectevEquipe.code;
    this.selectedEquipe.libelle = this.selectevEquipe.libelle;
    this.selectedEquipe.membres = this.membres;
    this.equipes[this.service.findIndexById(this.selectedEquipe.id)] = this.selectedEquipe;
    this.service.edit().subscribe(data => {
                this.selectedEquipe = data;
                this.messageService.add({
                    severity: 'success',
                    summary: 'Successful',
                    detail: 'Equipe Updated',
                    life: 3000
                });
            });
    this.editDialog = false;
    this.selectedEquipe = new Equipe();
}

public hideEditDialog() {
this.editDialog = false;


}
    isSelected($event: any) {
        this.membreEquipe.collaborateur.codeCollaborateur = $event.target.value ;
    }
    public saveMembre() {
        this.valeur = this.selectevEquipe.ref;
        this.values = this.selectevEquipe.libelle;
        this.valorant = this.selectevEquipe.code;
        this.membres.push(this.membreEquipe);
        this.membreEquipe = null;
        console.log(this.membres);
        // this.service.selectesEquipe.push(this.selectedEquipe);
    }
    checkCheckBoxvalue(event: any){
        this.selectedEquipe.chefEquipe.collaborateur.codeCollaborateur = event.collaborateur.codeCollaborateur;
    }

}
