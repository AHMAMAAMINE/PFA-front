import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import { DemandeConge } from '../model/demande-conge.model';
import { TacheIntervention } from '../model/tache-intervention.model';
import { Equipe } from '../model/equipe.model';
import { HttpClient } from '@angular/common/http';
import { CollaborateurService } from './collaborateur.service';
import { Collaborateur } from '../model/collaborateur.model';
import { InterventionService } from './intervention.service';
import { Observable } from 'rxjs';
import { User } from '../model/user.model';
import { UserService } from './user.service';
import {Conseils} from '../model/conseils.model';

@Injectable({
  providedIn: 'root',
})
export class TacheInterventionService {
  get conciels(): Array<Conseils> {
    if (this._conciels == null) {
      return new Array<Conseils>();
    }
    return this._conciels;
  }

  set conciels(value: Array<Conseils>) {
    this._conciels = value;
  }
  get vos() {
    return this._vos;
  }

  set vos(value: any[]) {
    this._vos = value;
  }
  private url = environment.baseUrl + '/tacheIntervention';
  private url2 =
    environment.baseUrl +
    '/Collaborateurintervention-api/Collaborateurintervention/code/';
  private _items: Array<TacheIntervention>;
  private _selected: TacheIntervention;
  private _selectes: Array<TacheIntervention>;
  private _createDialog: boolean;
  private _editDialog: boolean;
  private _viewDialog: boolean;
  private _submitted: boolean;
  private _vos = Array();
  private _conciels: Array<Conseils>;
  private _events = {
    data: []
  };

  private interventionVo = new Map<string, string>();

  get selected(): TacheIntervention {
    return this._selected;
  }

  set selected(value: TacheIntervention) {
    this._selected = value;
  }

  get selectes(): Array<TacheIntervention> {
    return this._selectes;
  }

  set selectes(value: Array<TacheIntervention>) {
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

  constructor(
    private http: HttpClient,
    private collaborateurService: UserService,
    private interventionService: InterventionService
  ) {}
  public save() {
    // this.selected = this.selected;
    // this.items.push(this.selected);
    // this.selected = null;
    return this.http.post<number>(this.url + '/', this.selected);
  }

  public getInterventionConseils(){
    this.http.get<Array<Conseils>>(environment.baseUrl + '/GMAO/Conseils-api/intervention/' + localStorage.getItem('codeIntervention'))
        .subscribe(data => {
          if (data){
            this.conciels = data;
          }
        });
  }

  public getEventsVo(data: Array<TacheIntervention>) {
    let i = 0;
    this.events.data = [];
    data.forEach((tache) => {
      i++;
      const vo = {
        id: i,
        title: tache.description,
        start: tache.intervention.dateDebut,
        end: tache.intervention.dateFin,
      };
      this.events.data.push(vo);
    });
  }


  public getTacheVo(
    data: Array<TacheIntervention>,
    codeInterventions: Map<string, string>
  ) {
    const vos = new Array();

    for (const s of codeInterventions.keys()) {
      const taches = data.filter((item) => {
        return item.intervention.code === s;
      });
      const vo = {
        libelle: codeInterventions.get(s),
        taches,
      };
      vos.push(vo);
    }
    return vos;
  }

  public findAllInterventions() {
    console.log('s' + localStorage.getItem('codeCollaborateur'));
    this.http
      .get<Array<TacheIntervention>>(
        this.url +
          '/collaborateur/code/' +
          localStorage.getItem('codeCollaborateur')
      )
      .subscribe(
        (data) => {
          console.log(data);
          localStorage.setItem('codeIntervention', data[0].intervention.code);
          data.forEach((item) => {
            this.interventionVo.set(
              item.intervention.code,
              item.intervention.libelle
            );
          });
          this.vos = this.getTacheVo(data, this.interventionVo);
          this.getEventsVo(data);
          console.log(this.events);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  get items(): Array<TacheIntervention> {
    return this._items;
  }

  set items(value: Array<TacheIntervention>) {
    this._items = value;
  }

  completerTache(s: string) {
    return this.http.get<number>(this.url + '/completerTache/' + s);
  }

  get events(): any {
    if (this._events === null) { return { data: [] }; }
    return this._events;
  }
  set events(value: any) {
    this._events = value;
  }

  findAll(): Observable<Array<TacheIntervention>> {
    return this.http.get<Array<TacheIntervention>>(this.url + '/');
  }



}
