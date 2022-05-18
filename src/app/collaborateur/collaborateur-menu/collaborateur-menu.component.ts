import { Component, OnInit } from "@angular/core";
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";

import { CollaborateurMainComponent } from "../collaborateur-main/collaborateur-main.component";
import {AppComponent} from '../../app.component';

@Component({
  selector: "app-collaborateur-menu",
  templateUrl: "./collaborateur-menu.component.html",
  providers: [CollaborateurMainComponent],
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
export class CollaborateurMenuComponent implements OnInit {
  model: any[];

  constructor(
    public app: AppComponent,
    public appMain: CollaborateurMainComponent
  ) {}

  ngOnInit() {
    this.model = [
      {
        label: "conge",
        icon: "pi pi-fw pi-tablet",
        routerLink: ["collaborateur/demande/conge"],
      },
      {
        label: "Operation Stock",
        icon: "pi pi-fw pi-check-square",
        routerLink: ["view/operation"],
      },
    ];
  }

  onMenuClick(event) {
    this.appMain.onMenuClick(event);
  }
}
