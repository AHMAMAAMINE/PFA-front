import { Injectable } from '@angular/core';
import {EtatTache} from '../model/etat-tache.model';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EtatTacheService {
  private url = environment.baseUrl + 'etatTache/';
  private _items: Array<EtatTache>;

  constructor(private http: HttpClient) {
  }

  public findAll(): Observable<Array<EtatTache>> {
    return this.http.get<Array<EtatTache>>(this.url);
  }

  get items(): Array<EtatTache> {
    return this._items;
  }

  set items(value: Array<EtatTache>) {
    this._items = value;
  }
}
