import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../../../app.component';
import {CollaborateurMainComponent} from '../collaborateur-main/collaborateur-main.component';
import {CollaborateurService} from '../../../controller/service/collaborateur.service';
import {Collaborateur} from '../../../controller/model/collaborateur.model';
import {UserService} from '../../../controller/service/user.service';
import {User} from '../../../controller/model/user.model';

@Component({
  selector: 'app-collaborateur-top-bar',
  templateUrl: './collaborateur-top-bar.component.html',
  styleUrls: ['./collaborateur-top-bar.component.scss']
})
export class CollaborateurTopBarComponent implements OnInit {

  constructor(public app: AppComponent, public appMain: CollaborateurMainComponent, private service: CollaborateurService, private userService: UserService) {}


  get collaborateur(): Collaborateur {
    return this.service.collaborateur;
  }

  set collaborateur(value: Collaborateur) {
    this.service.collaborateur = value;
  }
  get user(): User{
    return  this.userService.User;
  }
  set user(value: User){
    this.userService.User = value;
  }
  ngOnInit(): void {
  }

    disconnect() {
      localStorage.removeItem('Array');
      localStorage.removeItem('Arrays');
      localStorage.removeItem('collaborateur');
      this.user.login = null;
      this.user.password = null;
      this.user.role=null;
    }
}
