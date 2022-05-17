import { Component, OnInit } from '@angular/core';
import {DemandeCongeService} from '../../../controller/service/demande-conge.service';
import {TacheInterventionService} from '../../../controller/service/tache-intervention.service';
import {CollaborateurService} from '../../../controller/service/collaborateur.service';
import {DatePipe} from '@angular/common';
import {DemandeConge} from '../../../controller/model/demande-conge.model';
import {TacheIntervention} from '../../../controller/model/tache-intervention.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [DatePipe]
})
export class DashboardComponent implements OnInit {

  constructor(
      private datePipe: DatePipe,
      private demandeCongeService: DemandeCongeService,
      private tacheService: TacheInterventionService,
      private collabService: CollaborateurService
  ) { }
  private demandesNum: number;
  private tacheNum: number;
  private collabNum: number;
  private taches: Array<TacheIntervention>;

  get items(): Array<DemandeConge> {
    return this.demandeCongeService.items;
  }
  set items(value: DemandeConge[]){
     this.demandeCongeService.items = value;
  }

  ngOnInit(): void {
    this.demandeCongeService.findAll().subscribe((data) => {
      this.demandesNum = data.length;
      this.items = data;
    });
    this.tacheService.findAll().subscribe(data => {
      this.taches = data;
      this.tacheNum = data.length;
    });
    this.collabService.findAll().subscribe(data => {
      this.collabNum = data.length;
    });
  }

  time(dateDepart: string, dateFin: string) {

    const date = new Date(dateDepart);
    const date1 = new Date(dateFin);
    const dates = date1.getTime() - date.getTime();
    const diffDays = Math.ceil(dates / (1000 * 3600 * 24));
    return diffDays;

  }
}
