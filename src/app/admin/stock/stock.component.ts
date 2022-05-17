
import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import {DatePipe} from '@angular/common';
import {DemandeConge} from '../../model/demande-conge.model';
import {EquipesService} from '../../service/equipes.service';
import {InterventionService} from '../../service/intervention.service';
import {CollaborateurService} from '../../service/collaborateur.service';
import {DemandeCongeService} from '../../service/demande-conge.service';
import {Intervention} from '../../model/intervention.model';


@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss'],
  providers: [DatePipe]
})
export class StockComponent implements OnInit {
  constructor(
      private datePipe: DatePipe,
      private equipeService: EquipesService,
      private interventionService: InterventionService,
      private collaborateurService: CollaborateurService,
      private demandeCongeService: DemandeCongeService
  ) {}
  public fullcalendarOptions: any;
  public events: any;
  public intervetions: Array<Intervention>;
  public encoursInterventions: number;

  public numColaborateur: number;

  public badInterventions: number;
  public goodInterventions: number;
  public totalInterventions: number;

  public data: any;

  public numEquipes: number;
  public interventionDto = {
    data: [],
  };

  convertInterventions(I) {
    let i = 0;
    this.intervetions.forEach((elem) => {
      ++i;
      let color = '';
      switch (elem.etatIntervention.couleur) {
        case 'rouge':
          color = 'red';
          break;
        case 'vert':
          color = 'green';
          break;

        default:
          color = 'orange';
          break;
      }
      const obj = {
        id: i,
        color,
        title: elem.libelle,
        start: elem.dateDebut.slice(0, 10),
        end: elem.dateFin.slice(0, 10),
      };
      this.interventionDto.data.push(obj);
    });
  }
  get selected(): DemandeConge {
    return this.demandeCongeService.selected;
  }

  set selected(value: DemandeConge) {
    this.demandeCongeService.selected = value;
  }


  get items(): Array<DemandeConge> {
    return this.demandeCongeService.items;
  }

  set items(value: Array<DemandeConge>) {
    this.demandeCongeService.items = value;
  }

  ngOnInit(): void {
    this.equipeService.findAll().subscribe((data) => {
    this.numEquipes = data.length;
    });
    this.demandeCongeService.findAll().subscribe(data => this.items = data);
    this.collaborateurService.findAll().subscribe((data) => {
      this.numColaborateur = data.length;
    });

    this.interventionService.findAll().subscribe((data) => {
      if (data) {
        this.intervetions = data;
        this.totalInterventions = data.length;

        this.goodInterventions = data.filter((elem) => {
          return elem.etatIntervention.couleur === 'vert';
        }).length;

        this.encoursInterventions = data.filter((elem) => {
          return elem.etatIntervention.couleur === 'orange';
        }).length;

        this.badInterventions = data.filter((elem) => {
          return elem.etatIntervention.couleur === 'rouge';
        }).length;

        this.data = {
          labels: ['ongoing', 'completed', 'cancelled'],
          datasets: [
            {
              data: [
                this.encoursInterventions,
                this.goodInterventions,
                this.badInterventions,
              ],
              backgroundColor: ['orange', 'green', 'red'],
              hoverBackgroundColor: ['orange', 'green', 'red'],
            },
          ],
        };

        this.convertInterventions(data);
        this.events = this.interventionDto.data;
        console.log(this.interventionDto);
      }
    });
    const now = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    this.fullcalendarOptions = {
      plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
      defaultDate: now,
      // defaultDate: "2021-05-31",
      header: {
        left: 'prev,next',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay',
      },
      editable: true,
    };
  }

  time(dateDepart: string, dateFin: string) {

      const date = new Date(dateDepart);
      const date1 = new Date(dateFin);
      const dates = date1.getTime() - date.getTime();
      const diffDays = Math.ceil(dates / (1000 * 3600 * 24));
      return diffDays;

  }
}
