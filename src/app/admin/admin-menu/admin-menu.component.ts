import { Component, OnInit } from "@angular/core";
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";
import {AppComponent} from '../../app.component';
import {AdminInterfaceComponent} from '../admin-interface/admin-interface.component';


@Component({
  selector: "app-admin-menu",
  templateUrl: "./admin-menu.component.html",
  animations: [
    trigger("inline", [
      state(
        "hidden",
        style({
          height: "0px",
          overflow: "hidden",
        })
      ),
      state(
        "visible",
        style({
          height: "*",
        })
      ),
      state(
        "hiddenAnimated",
        style({
          height: "0px",
          overflow: "hidden",
        })
      ),
      state(
        "visibleAnimated",
        style({
          height: "*",
        })
      ),
      transition(
        "visibleAnimated => hiddenAnimated",
        animate("400ms cubic-bezier(0.86, 0, 0.07, 1)")
      ),
      transition(
        "hiddenAnimated => visibleAnimated",
        animate("400ms cubic-bezier(0.86, 0, 0.07, 1)")
      ),
    ]),
  ],
})
export class AdminMenuComponent implements OnInit {
  model: any[];

  constructor(public app: AppComponent, public appMain: AdminInterfaceComponent) {}

  ngOnInit() {
    this.model = [
      {
        label: "Interventions",
        icon: "pi pi-fw pi-tablet white",
        routerLink: ["view/commande"],
      },
      {
        label: "Stocks",
        icon: "pi pi-fw pi-tablet",
        routerLink: ["view/stock-jadid"],
      },
      {
        label: "Equipes",
        icon: "pi pi-fw pi-check-square",
        routerLink: ["view/equipes"],
      },
      {
        label: "Collaborateur",
        icon: "pi pi-fw pi-check-square",
        routerLink: ["view/admin-collaborateur"],
      },
    ];
  }

  onMenuClick(event) {
    this.appMain.onMenuClick(event);
  }
}
