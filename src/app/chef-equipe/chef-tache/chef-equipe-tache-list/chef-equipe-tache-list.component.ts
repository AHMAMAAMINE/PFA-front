import { Component, OnInit } from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {TacheIntervention} from '../../../model/tache-intervention.model';
import {TacheInterventionService} from '../../../service/tache-intervention.service';


@Component({
  selector: 'app-chef-equipe-tache-list',
  templateUrl: './chef-equipe-tache-list.component.html',
  providers: [MessageService, ConfirmationService ],
  styleUrls: ['./chef-equipe-tache-list.component.scss']
})
export class ChefEquipeTacheListComponent implements OnInit {


  cols: any[];

  constructor(private messageService: MessageService, private confirmationService: ConfirmationService,
              private service: TacheInterventionService) {
  }

  ngOnInit(): void {
    this.service.findAll().subscribe(data => this.items = data);
    this.initCol();
  }
  public openCreate() {
    this.selected = new TacheIntervention();
    this.submitted = false;
    this.createDialog = true;
  }

  public edit(tache: TacheIntervention) {
    this.selected = {...tache};
    this.editDialog = true;
  }
  public view(tache: TacheIntervention) {
    this.selected = {...tache};
    this.viewDialog = true;
  }

  private initCol() {
    this.cols = [
      {field: 'libelle', header: 'Libelle'},
      {field: 'dateDebut', header: 'Date debut'},
      {field: 'dateFin', header: 'Date fin'},
    ];
  }

  get selected(): TacheIntervention {
    return this.service.selected;
  }
  set selected(value: TacheIntervention) {
    this.service.selected = value;
  }

  get items(): Array<TacheIntervention> {
    return this.service.items;
  }

  set items(value: Array<TacheIntervention>) {
    this.service.items = value;
  }

  get submitted(): boolean {
    return this.service.submitted;
  }

  set submitted(value: boolean) {
    this.service.submitted = value;
  }

  get createDialog(): boolean {
    return this.service.createDialog;
  }

  set createDialog(value: boolean) {
    this.service.createDialog = value;
  }

  get editDialog(): boolean {
    return this.service.editDialog;
  }

  set editDialog(value: boolean) {
    this.service.editDialog = value;
  }

  get viewDialog(): boolean {
    return this.service.viewDialog;
  }

  set viewDialog(value: boolean) {
    this.service.viewDialog = value;
  }

  get selectes(): Array<TacheIntervention> {
    return this.service.selectes;
  }

  set selectes(value: Array<TacheIntervention>) {
    this.service.selectes = value;
  }
}
