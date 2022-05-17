import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-chef-equipe',
  templateUrl: './chef-equipe.component.html',
  providers: [MessageService],
})
export class ChefEquipeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
