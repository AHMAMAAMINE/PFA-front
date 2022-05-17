import { Component, OnInit } from '@angular/core';
import {DemandeCongeService} from '../../../service/demande-conge.service';
import {DemandeConge} from '../../../../controller/model/demande-conge.model';

@Component({
  selector: 'app-collaborateur-demande-conge-view',
  templateUrl: './collaborateur-demande-conge-view.component.html',
  styleUrls: ['./collaborateur-demande-conge-view.component.scss']
})
export class CollaborateurDemandeCongeViewComponent implements OnInit {

  constructor(private  demandeCongeService: DemandeCongeService) { }

  ngOnInit(): void {
  }


  public hideViewDialog() {
    this.viewDialog = false;
  }

  get selected(): DemandeConge {
    return this.demandeCongeService.selected;
  }

  set selected(value: DemandeConge) {
    this.demandeCongeService.selected = value;
  }

  get viewDialog(): boolean {
    return this.demandeCongeService.viewDialog;
  }

  set viewDialog(value: boolean) {
    this.demandeCongeService.viewDialog = value;
  }
}
