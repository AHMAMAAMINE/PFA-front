import { Injectable } from '@angular/core';
import {Admin} from '../model/admin.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private _items: Array<Admin>;
  private _selected: Admin;
  private _selectes: Array<Admin>;
  private url = environment.baseUrl + '/admin/';
  constructor(private http: HttpClient) {
  }


  get items(): Array<Admin> {
    return this._items;
  }

  set items(value: Array<Admin>) {
    this._items = value;
  }

  get selected(): Admin {
    if (this._selected == null) {
      this._selected = new Admin();
    }
    return this._selected;
  }

  set selected(value: Admin) {
    this._selected = value;
  }

  get selectes(): Array<Admin> {
    return this._selectes;
  }

  set selectes(value: Array<Admin>) {
    this._selectes = value;
  }

  public seConnecter(): Observable<Admin> {
    console.log(this._selected);
    return this.http.post<Admin>(this.url + 'seconnecter', this._selected);
  }
}
