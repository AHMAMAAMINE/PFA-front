import { Component, OnInit } from '@angular/core';
import {InterventionService} from '../../../service/intervention.service';
import {Intervention} from '../../../model/intervention.model';
import {DatePipe} from '@angular/common';
import {InterventionVo} from '../../../model/intervention-vo.model';

@Component({
  selector: 'app-search-intervention',
  templateUrl: './search-intervention.component.html',
  styleUrls: ['./search-intervention.component.scss'],
  providers:[DatePipe]
})
export class SearchInterventionComponent implements OnInit {
  constructor(private service: InterventionService, public datepipe: DatePipe) { }
  date: Date;
  date1: Date;
  date2: Date;
  ngOnInit(): void {
    this.service.findAll().subscribe(data => this.items = data);
  }
  public findByCriteria() {
    this.interventionVo.dateDeProbleme = this.datepipe.transform(this.date, 'yyyy-MM-dd');
    this.interventionVo.dateDebut = this.datepipe.transform(this.date1, 'yyyy-MM-dd');
    this.interventionVo.dateFin = this.datepipe.transform(this.date2, 'yyyy-MM-dd');
    this.service.findByCriteria();
    console.log(this.interventionVo.dateDeProbleme);
    console.log(this.interventionVo.dateFin);

  }
  get interventionVo(): InterventionVo {

    return this.service.interventionVo;
  }
  set  interventionVo(value: InterventionVo){
    this.service.interventionVo = value;
  }

  get selected(): Intervention {
    return this.service.selected;
}

set selected(value: Intervention) {
    this.service.selected = value;
}

get items(): Array<Intervention> {
    return this.service.items;
}

set items(value: Array<Intervention>) {
    this.service.items = value;
}

  clear() {
    this.interventionVo = null;
    this.date2=null;
    this.date=null;
    this.date1=null;
    this.service.findAll().subscribe(data => this.service.items = data);
  }
}
