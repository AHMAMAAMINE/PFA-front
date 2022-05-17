import { Component, OnInit } from '@angular/core';

import {animate, state, style, transition, trigger} from '@angular/animations';
import {ChefEquipeMainComponent} from '../chef-equipe-main/chef-equipe-main.component';
import {AppComponent} from '../../app.component';

@Component({
  selector: 'app-chef-equipe-menu',
  templateUrl: './chef-equipe-menu.component.html',
  animations: [
    trigger('inline', [
      state('hidden', style({
        height: '0px',
        overflow: 'hidden'
      })),
      state('visible', style({
        height: '*',
      })),
      state('hiddenAnimated', style({
        height: '0px',
        overflow: 'hidden'
      })),
      state('visibleAnimated', style({
        height: '*',
      })),
      transition('visibleAnimated => hiddenAnimated', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
      transition('hiddenAnimated => visibleAnimated', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
    ])
  ]
})
export class ChefEquipeMenuComponent implements OnInit {

  model: any[];

  constructor(public app: AppComponent, public appMain: ChefEquipeMainComponent) { }

  ngOnInit() {
    this.model = [
      {
        label: 'demande Conge', icon: 'pi pi-fw pi-tablet', routerLink: ['chef-equipe-conge']
      } ,
      {
        label: 'tache', icon: 'pi pi-fw pi-tablet', routerLink: ['chef-equipe-tache']
      } ,
      {
        label: 'collaborateur', icon: 'pi pi-fw pi-tablet', routerLink: ['collaborateur']
      } ,
    ];
  }

  onMenuClick(event) {
    this.appMain.onMenuClick(event);
  }

}
