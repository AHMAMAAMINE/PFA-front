import { Component, OnInit } from '@angular/core';
import {ChefEquipeMainComponent} from '../chef-equipe-main/chef-equipe-main.component';
import {AppComponent} from '../../app.component';
import {ChefEquipeService} from '../../service/chef-equipe.service';
import {ChefEquipe} from '../../model/chef-equipe.model';
import {UserService} from '../../service/user.service';
import {User} from '../../model/user';
import {UserComponent} from '../../user/user.component';


@Component({
  selector: 'app-chef-equipe-top-bar',
  templateUrl: './chef-equipe-top-bar.component.html',
  styleUrls: ['./chef-equipe-top-bar.component.scss']
})
export class ChefEquipeTopBarComponent implements OnInit {


  constructor(public app: AppComponent, public appMain: ChefEquipeMainComponent, private service: ChefEquipeService, private userComponent: UserComponent) {}


  get selected(): ChefEquipe {
    return this.service.selected;
  }

  set selected(value: ChefEquipe) {
    this.service.selected = value;
  }



  ngOnInit(): void {
  }

    sedeconnecter() {
      this.userComponent.onLogOut();
    }
}
