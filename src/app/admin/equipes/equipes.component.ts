import { Component, OnInit } from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';

@Component({
  selector: 'app-equipes',
  templateUrl: './equipes.component.html',
  styleUrls: ['./equipes.component.scss'],
  providers: [MessageService, ConfirmationService]
})
export class EquipesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
