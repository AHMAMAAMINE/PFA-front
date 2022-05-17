import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';
import {DemandeCongeService} from '../../../service/demande-conge.service';
import {DemandeConge} from '../../../model/demande-conge.model';

@Component({
  selector: 'app-demande-conge-view',
  templateUrl: './demande-conge-view.component.html',
  styleUrls: ['./demande-conge-view.component.scss']
})
export class DemandeCongeViewComponent implements OnInit {

  constructor(private messageService: MessageService, private service: DemandeCongeService) {
  }

  ngOnInit(): void {
  }

  public hideViewDialog() {
    this.viewDialog = false;
  }

  get selected(): DemandeConge {
    return this.service.selected;
  }

  set selected(value: DemandeConge) {
    this.service.selected = value;
  }

  get viewDialog(): boolean {
    return this.service.viewDialog;
  }

  set viewDialog(value: boolean) {
    this.service.viewDialog = value;
  }
  isvalide(etatDemandeConge: boolean) {
    if (etatDemandeConge === null){
      return true;
    }
    if (etatDemandeConge === true){
      return true;
    }
    if (etatDemandeConge === false){
      return false;
    }

  }

  isvalides(etatDemandeConge: any) {
    if (etatDemandeConge === null){
      return false;
    }
    if (etatDemandeConge === true){
      return true;
    }
    if (etatDemandeConge === false){
      return false;
    }
  }
}
