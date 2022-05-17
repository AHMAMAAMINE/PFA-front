import { Component, OnInit } from '@angular/core';
import {ConfirmationService, MessageService} from "primeng/api";
import {CssKeyframeDefinitionAst} from 'codelyzer/angular/styles/cssAst';

@Component({
  selector: 'app-commandes',
  templateUrl: './commandes.component.html',
  styleUrls: ['./commandes.component.scss'],
  providers: [MessageService, ConfirmationService]
})
export class CommandesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


}
