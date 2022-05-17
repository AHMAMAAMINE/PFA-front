import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {EtatDemandeConge} from '../model/etat-demande-conge.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EtatDemandeCongeService {
  private url = environment.baseUrl + 'etatdemandeconge/';
  private _items: Array<EtatDemandeConge>;
  private _selected: EtatDemandeConge;
  private _selectes: Array<EtatDemandeConge>;

  private _createDialog: boolean;
  private _editDialog: boolean;
  private _viewDialog: boolean;
  private _submitted: boolean;
  constructor(private http: HttpClient) { }

  public findAll(): Observable<Array<EtatDemandeConge>> {
    return this.http.get<Array<EtatDemandeConge>>(this.url);
  }
  public findByCode(code: string): Observable<EtatDemandeConge>{
    return this.http.get<EtatDemandeConge>(this.url + 'code/' + code);
  }
  get items(): Array<EtatDemandeConge> {
    return this._items;
  }

  set items(value: Array<EtatDemandeConge>) {
    this._items = value;
  }

  get selected(): EtatDemandeConge {
    return this._selected;
  }

  set selected(value: EtatDemandeConge) {
    this._selected = value;
  }

  get selectes(): Array<EtatDemandeConge> {
    return this._selectes;
  }

  set selectes(value: Array<EtatDemandeConge>) {
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
