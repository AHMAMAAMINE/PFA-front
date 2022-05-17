import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../../../app.component';
import {AdminMainComponent} from '../../admin/admin-main/admin-main.component';
import {CollaborateurMainComponent} from '../collaborateur-main/collaborateur-main.component';

@Component({
  selector: 'app-collaborateur-right-menu',
  templateUrl: './collaborateur-right-menu.component.html',
  providers: [CollaborateurMainComponent],
  styleUrls: ['./collaborateur-right-menu.component.scss']
})
export class CollaborateurRightMenuComponent implements OnInit {
  model: any[];

  constructor(public app: AppComponent, public appMain: CollaborateurMainComponent) { }

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
