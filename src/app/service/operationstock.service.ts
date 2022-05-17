import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StockService } from './stock-service.service';
import { OperationStock } from '../model/operationStock.model';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Intervention} from '../model/intervention.model';

@Injectable({
  providedIn: 'root',
})
export class OperationstockService {

//  private url = environment.baseUrl + 'operationStock';


  private _createDialog: boolean;
  private _editDialog: boolean;
  private _viewDialog: boolean;
  private _submitted: boolean;
  private _index: number;

     constructor(private http: HttpClient, private stockservice: StockService) {}
  get selected(): OperationStock {
    if (this._selected == null) {
      this._selected = new OperationStock();
    }
    return this._selected;
  }

  set selected(value: OperationStock) {
    this._selected = value;
  }

  get selecteds(): Array<OperationStock> {
       if (this._selecteds == null) {
         this._selecteds = new Array<OperationStock>();
       }
       return this._selecteds;
  }

  set selecteds(value: Array<OperationStock>) {
    this._selecteds = value;
  }
  private url = environment.baseUrl + '/Stock/OperationStockBean';
  private _selected: OperationStock;
  private _items: Array<OperationStock>;
  private _selecteds: Array<OperationStock>;



  // findByCritere(qteMax: number, qteMin: number) {
  //   this.http.post<Array<OperationStock>>(this.urlBase+this.url+'/criteria',qte)
  // }

    deleteByRef() {
    }
  public save() {
      console.log(this.selected);
      return this.http.post(this.url + '/', this.selected);
  }
  public update(index: number, operationStock: OperationStock) {
    this.selected = this.selected;
    this._index = index;
  }
  public findAll(): Observable<Array<OperationStock>> {
    return this.http.get<Array<OperationStock>>(this.url + '/');
  }







  get items(): Array<OperationStock> {
    if (this._items == null) {
      this._items = new Array<OperationStock>();
    }
    return this._items;
  }

  set items(value: Array<OperationStock>) {
    this._items = value;
  }
  public deleteIndexById(id: number) {
    this.items.splice(this.findIndexById(id), 1);
  }
  public edit(): Observable<OperationStock> {
      console.log(this.selected.id);
      return this.http.put<OperationStock>(this.url + '/update/' + this.selected.id , this.selected);
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
  deleteMultipleByReference() {
    return this.http.post<number>(this.url + 'delete-multiple-by-reference' , this.selecteds);
  }
  public deleteMultipleIndexById() {
    for (const item of this.selecteds){
      this.deleteIndexById(item.id);
    }
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

  get submitted(): boolean {
    return this._submitted;
  }

  set submitted(value: boolean) {
    this._submitted = value;
  }

  get viewDialog(): boolean {
    return this._viewDialog;
  }

  set viewDialog(value: boolean) {
    this._viewDialog = value;
  }

  deleteById() {
    return this.http.delete(this.url + '/idde/' + this.selected.id);
  }
}
