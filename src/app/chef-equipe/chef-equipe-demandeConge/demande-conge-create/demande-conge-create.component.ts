import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';
import {CollaborateurService} from '../../../service/collaborateur.service';
import {EtatDemandeCongeService} from '../../../service/etat-demande-conge.service';
import {Collaborateur} from '../../../model/collaborateur.model';
import {DemandeConge} from '../../../model/demande-conge.model';
import {DemandeCongeService} from '../../../service/demande-conge.service';
import {EtatDemandeConge} from '../../../model/etat-demande-conge.model';


@Component({
  selector: 'app-demande-conge-create',
  templateUrl: './demande-conge-create.component.html',
  styleUrls: ['./demande-conge-create.component.scss']
})
export class DemandeCongeCreateComponent implements OnInit {

  constructor(private demandeCongeService: DemandeCongeService,
              private messageService: MessageService,
              private collaborateurService: CollaborateurService,
              private etatDemandeCongeService: EtatDemandeCongeService) { }

  ngOnInit(): void {
    this.etatDemandeCongeService.findAll().subscribe(data => this.itemset = data);
    this.collaborateurService.findAll().subscribe(data => this.collaborateurs = data);

  }
  set collaborateurs(value: Array<Collaborateur>) {
    this.collaborateurService.collaborateurs = value;
  }

  public hideCreateDialog() {
    this.createDialog = false;
    this.submitted = false;
  }

  public save() {
    this.submitted = true;
    console.log('http://localhost:8036/conge/');
    console.log(this.selected);
    this.demandeCongeService.save().subscribe(data => {
        if (data == null){
          this.messageService.add({
            severity: 'error',
            summary: 'Error Message',
            detail: 'Unsaved holiday request',
          });
        }else{
          this.selected = data;

          this.items.push({...data});
          this.messageService.add({
              severity: 'success',
              summary: 'Successful',
              detail: 'Holiday Requesr created',
              life: 3000
            });
          this.messageService.add({
              severity: 'success',
              summary: 'Successful',
              detail: 'Holiday Requesr created',
              life: 3000
            });
          }
      });
    this.createDialog = false;
    this.selected = new DemandeConge();
  }

  get selected(): DemandeConge {
    return this.demandeCongeService.selected;
  }

  set selected(value: DemandeConge) {
    this.demandeCongeService.selected = value;
  }

  get createDialog(): boolean {
    return this.demandeCongeService.createDialog;
  }

  set createDialog(value: boolean) {
    this.demandeCongeService.createDialog = value;
  }

  get submitted(): boolean {
    return this.demandeCongeService.submitted;
  }

  set submitted(value: boolean) {
    this.demandeCongeService.submitted = value;
  }

  get items(): Array<DemandeConge> {
    return this.demandeCongeService.items;
  }

  set items(value: Array<DemandeConge>) {
    this.demandeCongeService.items = value;
  }
  get selectes(): Array<Collaborateur> {
    return this.collaborateurService.selectes;
  }

  set selectes(value: Array<Collaborateur>) {
    this.collaborateurService.selectes = value;
  }

  get collaborateurs(): Array<Collaborateur> {
    return this.collaborateurService.collaborateurs;
  }
  get itemset(): Array<EtatDemandeConge> {
    return this.etatDemandeCongeService.items;
  }

  set itemset(value: Array<EtatDemandeConge>) {
    this.etatDemandeCongeService.items = value;
  }

  isSelected($event: any) {
    this.selected.collaborateur.codeCollaborateur = $event.target.value;
    console.log(this.selected.collaborateur.codeCollaborateur);
  }
}
