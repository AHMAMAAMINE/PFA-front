import { Component, OnInit } from '@angular/core';
import {ChefEquipeMainComponent} from '../chef-equipe-main/chef-equipe-main.component';
import {AppComponent} from '../../app.component';


@Component({
  selector: 'app-chef-equipe-right-menu',
  templateUrl: './chef-equipe-right-menu.component.html',
  styleUrls: ['./chef-equipe-right-menu.component.scss']
})
export class ChefEquipeRightMenuComponent implements OnInit {
  model: any[];

  constructor(public app: AppComponent, public appMain: ChefEquipeMainComponent) { }

  ngOnInit() {
    this.model = [
      {
        label: 'Favorites', icon: 'pi pi-fw pi-home', routerLink: ['/']
      },
      {
        label: 'Interventions', icon: 'pi pi-fw pi-tablet', routerLink: ['view/commande']
      } ,
      {
        label: 'stock', icon: 'pi pi-fw pi-briefcase', routerLink: ['view/stock']
      } ,
      {
        label: 'equipes', icon: 'pi pi-fw pi-check-square', routerLink: ['view/equipes']
      } ,
      {
        label: 'operation stock', icon: 'pi pi-fw pi-tablet', routerLink: ['view/operation']
      },

    ];
  }

  onMenuClick(event) {
    this.appMain.onMenuClick(event);
  }


}
