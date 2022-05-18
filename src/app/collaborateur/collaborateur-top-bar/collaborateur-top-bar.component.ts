import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../../app.component';
import {CollaborateurMainComponent} from '../collaborateur-main/collaborateur-main.component';
import {CollaborateurService} from '../../service/collaborateur.service';
import {Collaborateur} from '../../model/collaborateur.model';
import {UserService} from '../../service/user.service';
import {UserComponent} from '../../user/user.component';


@Component({
  selector: 'app-collaborateur-top-bar',
  templateUrl: './collaborateur-top-bar.component.html',
  styleUrls: ['./collaborateur-top-bar.component.scss']
})
export class CollaborateurTopBarComponent implements OnInit {

  constructor(public app: AppComponent, public appMain: CollaborateurMainComponent
              , private service: CollaborateurService, private user:UserComponent) {}


  get collaborateur(): Collaborateur {
    return this.service.collaborateur;
  }

  set collaborateur(value: Collaborateur) {
    this.service.collaborateur = value;
  }

  ngOnInit(): void {
  }

    disconnect() {

      this.user.onLogOut();
    }
}
