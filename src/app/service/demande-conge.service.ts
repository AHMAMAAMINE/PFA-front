import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {DemandeConge} from '../model/demande-conge.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Equipe} from '../model/equipe.model';



@Injectable({
  providedIn: 'root'
})
export class DemandeCongeService {
  private url = environment.baseUrl + '/conge/';
  private _items: Array<DemandeConge>;
  private _selected: DemandeConge;
  private _selectes: Array<DemandeConge>;
  private _createDialog: boolean;
  private _editDialog: boolean;
  private _viewDialog: boolean;
  private _submitted: boolean;
  constructor(private http: HttpClient) { }

  findAll() {
    return this.http.get<Array<DemandeConge>>(this.url);
  }

  public save(){
    return this.http.post<DemandeConge>(this.url, this.selected);

  }
  public edit(): Observable<DemandeConge> {
    return this.http.put<DemandeConge>(this.url + 'code/' + this.selected.code, this.selected);
  }
  public deleteByCode(): Observable<number> {
    return this.http.delete<number>(this.url + 'code/' + this.selected.code);
  }
  public deleteMultipleByCode(): Observable<number> {
    return this.http.post<number>(this.url + 'delete-multiple-by-code' , this.selectes);
  }
  public findIndexById(id: number): number {
    let index = -1;
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].id === id) {
        index = i;
        break;
      }
    }
    return index;
  }

  public deleteIndexById(id: number) {
    this.items.splice(this.findIndexById(id), 1);
  }
  public deleteMultipleIndexById() {
    for (const item of this.selectes){
      this.deleteIndexById(item.id);
    }
  }
    get items(): Array<DemandeConge> {
    if (this._items == null){
      this._items = new Array<DemandeConge>();
    }
    return this._items;
  }

  set items(value: Array<DemandeConge>) {
    this._items = value;
  }

  get selected(): DemandeConge {
    if (this._selected == null){
      this._selected = new DemandeConge();
    }
    return this._selected;
  }
  set selected(value: DemandeConge) {
    this._selected = value;
  }

  get selectes(): Array<DemandeConge> {
    if (this._selectes == null){
      this._selectes = new Array<DemandeConge>();
    }
    return this._selectes;
  }

  set selectes(value: Array<DemandeConge>) {
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

  findByCollaborateur(ref:string): Observable<Array<DemandeConge>> {
    console.log(this.selected.collaborateur.codeCollaborateur)
    return this.http.get<Array<DemandeConge>>(this.url + 'collaborateur/' + ref);
  }
}
