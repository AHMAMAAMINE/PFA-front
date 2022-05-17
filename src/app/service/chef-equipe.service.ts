import { Injectable } from '@angular/core';
import {ChefEquipe} from '../model/chef-equipe.model';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Admin} from '../model/admin.model';

@Injectable({
  providedIn: 'root'
})
export class ChefEquipeService {
  private url = environment.baseUrl + '/chef-equipe/';
  private _items: Array<ChefEquipe>;
  private _selected: ChefEquipe;
  private _selectes: Array<ChefEquipe>;
  private _createDialog: boolean;
  private _editDialog: boolean;
  private _viewDialog: boolean;
  private _submitted: boolean;

  constructor(private http: HttpClient) { }

  public save(): Observable<ChefEquipe> {
    return this.http.post<ChefEquipe>(this.url, this.selected);
  }
  public findAll(): Observable<Array<ChefEquipe>>{
    return this.http.get<Array<ChefEquipe>>(this.url);
  }
  public seConnecter(): Observable<ChefEquipe> {
    console.log(this._selected);
    return this.http.get<ChefEquipe>(this.url + 'seconnecter/' + this.selected.login + '/password/' + this.selected.password);
  }
  get items(): Array<ChefEquipe> {
    return this._items;
  }

  set items(value: Array<ChefEquipe>) {
    this._items = value;
  }

  get selected(): ChefEquipe {
    if (this._selected == null){
      this._selected = new ChefEquipe();
    }
    return this._selected;
  }

  set selected(value: ChefEquipe) {
    this._selected = value;
  }

  get selectes(): Array<ChefEquipe> {
    return this._selectes;
  }

  set selectes(value: Array<ChefEquipe>) {
    this._selectes = value;
  }

  get createDialog(): boolean {
    return this._createDialog;
  }

  set createDialog(value: boolean) {
    this._createDialog = value;
  }

  get editDialog(): boolean {
    return this._editDialog;
  }

  set editDialog(value: boolean) {
    this._editDialog = value;
  }

  get viewDialog(): boolean {
    return this._viewDialog;
  }

  set viewDialog(value: boolean) {
    this._viewDialog = value;
  }

  get submitted(): boolean {
    return this._submitted;
  }

  set submitted(value: boolean) {
    this._submitted = value;
  }

}
