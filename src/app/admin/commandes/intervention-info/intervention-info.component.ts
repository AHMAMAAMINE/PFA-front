import { Component, OnInit } from '@angular/core';
import {InterventionService} from '../../../service/intervention.service';
import {Intervention} from '../../../model/intervention.model';

@Component({
  selector: 'app-intervention-info',
  templateUrl: './intervention-info.component.html',
  styleUrls: ['./intervention-info.component.scss']
})
export class InterventionInfoComponent implements OnInit {

  constructor(private service: InterventionService) {

  }
  get editDialog(): boolean {
    return this.service.editDialog;
  }

  get intervention(): Intervention {
    return this.service.selected;
  }
  get interventions(): Array<Intervention> {
    return this.service.items;
  }

  ngOnInit(): void {

  }
  get selected(): Intervention {
    return this.service.selected;
  }
  get submitted(): boolean {
    return this.service.submitted;
  }
  get viewDialog(): boolean {
    return this.service.viewDialog;
  }

  set viewDialog(value: boolean) {
    this.service.viewDialog = value;
  }

  set submitted(value: boolean) {
    this.service.submitted = value;
  }


}
