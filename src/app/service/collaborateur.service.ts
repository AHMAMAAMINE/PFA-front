import { Collaborateur } from './../model/collaborateur.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Equipe} from '../model/equipe.model';
import {MembreEquipe} from '../model/membre-equipe.model';
import {newArray} from '@angular/compiler/src/util';
import {MembreEquipeService} from './membre-equipe.service';

@Injectable({
  providedIn: 'root',
})
export class CollaborateurService {
  constructor(private _http: HttpClient, private membreService: MembreEquipeService) {}
  private url = environment.baseUrl + '/collaborateur';
  public _collaborateur: Collaborateur;
  public _collaborateurs: Array<Collaborateur>;
  private _selectes: Array<Collaborateur>;
  private _membre: Array<MembreEquipe>;
  private _createDialog: boolean;
  private _editDialog: boolean;
  private _viewDialog: boolean;
  private _submitted: boolean;


  get membre(): Array<MembreEquipe> {
    if (this._membre == null){
      this._membre = new Array<MembreEquipe>();
    }
    return this._membre;
  }

  set membre(value: Array<MembreEquipe>) {
    this._membre = value;
  }

  get viewDialog(): boolean {
    return this._viewDialog;
  }

  set viewDialog(value: boolean) {
    this._viewDialog = value;
  }

  get createDialog(): boolean {
    return this._createDialog;
  }

  set createDialog(value: boolean) {
    this._createDialog = value;
  }

  get submitted(): boolean {
    return this._submitted;
  }

  set submitted(value: boolean) {
    this._submitted = value;
  }

  get editDialog(): boolean {
    return this._editDialog;
  }

  set editDialog(value: boolean) {
    this._editDialog = value;
  }

  findAll() {
    return this._http.get<Array<Collaborateur>>(this.url + '/');
  }
  filter(){
    this.membreService.findAll().subscribe(data => this.membre = data);
    this.findAll().subscribe(data => {
      for (let i = 0; i < this.membre.length; i++){
        data.splice(this.findIndexById(this.membre[i].collaborateur.id));
      }
      this.collaborateurs = data;
    });
  }
  public save(): Observable<Collaborateur> {
    console.log(this.collaborateur);
    return this._http.post<Collaborateur>(this.url + '/', this.collaborateur);
  }
  get collaborateur(): Collaborateur {
    if (this._collaborateur == null) {
      this._collaborateur = new Collaborateur();
    }
    return this._collaborateur;
  }

  get collaborateurs(): Array<Collaborateur> {
    if (this._collaborateurs == null) {
      this._collaborateurs = new Array<Collaborateur>();
    }
    return this._collaborateurs;
  }
  set collaborateur(value: Collaborateur) {
    this._collaborateur = value;
  }

  set collaborateurs(value: Array<Collaborateur>) {
    this._collaborateurs = value;
  }

  get selectes(): Array<Collaborateur> {
    return this._selectes;
  }

  set selectes(value: Array<Collaborateur>) {
    this._selectes = value;
  }

  public signin(): Observable<Collaborateur> {
    return this._http.get<Collaborateur>(this.url + '/signin/' + this.collaborateur.login + '/password/' + this.collaborateur.password);
  }
  //   addCollaborateur(collaborateur: Collaborateur) {
  //     this.http.post(this.url + '/', collaborateur).subscribe(
  //       (data) => {
  //         if (data == 1) {

  //         }
  //       },
  //       (error) => {}
  //     );
  //   }

  public edit(): Observable<Collaborateur> {
      return this._http.put<Collaborateur>(this.url, this.collaborateur);
  }

  public deleteByCodeCollaborateur(): Observable<number> {
    return this._http.delete<number>(
        this.url + 'ref/' + this.collaborateur.codeCollaborateur
    );
  }

  public deleteMultipleByCodeCollaborateur(): Observable<number> {
    return this._http.post<number>(
        this.url + 'delete-multiple-by-codeCollaborateur',
        this.collaborateur
    );
  }

  public findIndexById(id: number): number {
    let index = -1;
    for (let i = 0; i < this.collaborateurs.length; i++) {
      if (this.collaborateurs[i].id === id) {
        index = i;
        break;
      }
    }
    return index;
  }

  public deleteIndexById(id: number) {
    this.collaborateurs.splice(this.findIndexById(id), 1);
  }
  public findByLogin(login: string): Observable<Collaborateur>{
    return this._http.get<Collaborateur>(this.url + '/login/' + login);
  }
 public findByUserUsername(Username:string):Observable<Collaborateur>{
    return this._http.get<Collaborateur>(this.url+'/login/'+Username);
 }
  }
