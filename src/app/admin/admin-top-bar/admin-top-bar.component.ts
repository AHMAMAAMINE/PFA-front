import { Component, OnInit } from '@angular/core';
import {AdminInterfaceComponent} from '../admin-interface/admin-interface.component';
import {AppComponent} from '../../app.component';
import {UserComponent} from '../../user/user.component';

@Component({
  selector: 'app-admin-top-bar',
  templateUrl: './admin-top-bar.component.html',
  styleUrls: ['./admin-top-bar.component.scss']
})
export class AdminTopBarComponent implements OnInit {

  constructor(public app: AppComponent,public user:UserComponent, public appMain: AdminInterfaceComponent) {}




  ngOnInit(): void {
  }

    sedeconnecte() {
        this.user.onLogOut();
    }

}
