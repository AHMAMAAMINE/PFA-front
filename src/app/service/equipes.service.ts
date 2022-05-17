import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Equipe } from "../model/equipe.model";
import { MembreEquipe } from "../model/membre-equipe.model";

@Injectable({
  providedIn: "root",
})
export class EquipesService {
  items: Equipe[];
  private _selectevEquipe: Equipe;
  constructor(private http: HttpClient) {}
  //   private urlbase = 'http://localhost:8036';
  //   private url = 'http://localhost:8036/equipe/';
  //   private urlEquipe = 'http://localhost:8036/membreEquipe/';
  //   private urlEquipeRef = 'http://localhost:8036/membreEquipe/equipe/ref/'
  public _selectedEquipe: Equipe;
  public _equipes: Array<Equipe>;
  private _selectesEquipe: Array<Equipe>;
  private _membre: MembreEquipe;
  private _membres: Array<MembreEquipe>;
  private baseUrl = "http://localhost:8036";
  private url = environment.baseUrl + "/equipe/";

  private _index: number;
  private _createDialog: boolean;
  private _editDialog: boolean;
  private _viewDialog: boolean;
  private _submitted: boolean;

  public findAll(): Observable<Array<Equipe>> {
    return this.http.get<Array<Equipe>>(this.url);
  }
  public findByRef(ref: string): Observable<Equipe> {
    return this.http.get<Equipe>(this.url + "/reference/" + ref);
  }
  public save() {
    return this.http.post<Equipe>(this.url, this.selectedEquipe);
  }

  // public save(): Observable<Equipe> {
  // return this.http.post<Equipe>(this.url, this.selectedEquipe);
  // }
  saveMembre() {}
  private _ref: string;

  get ref(): string {
    return this._ref;
  }

  set ref(value: string) {
    this._ref = value;
  }

  public edit(): Observable<Equipe> {
    return this.http.put<Equipe>(
      this.url + "ref/" + this.ref,
      this.selectedEquipe
    );
  }

  public deleteByRef() {
    return this.http.delete(this.url + "reference/" + this.selectedEquipe.ref);
  }

  public deleteMultipleByRef(): Observable<number> {
    return this.http.post<number>(
      this.url + "delete-multiple-by-ref",
      this.selectesEquipe
    );
  }

  public findIndexById(id: number): number {
    let index = -1;
    for (let i = 0; i < this.equipes.length; i++) {
      if (this.equipes[i].id === id) {
        index = i;
        break;
      }
    }
    return index;
  }

  public deleteIndexById(id: number) {
    this.equipes.splice(this.findIndexById(id), 1);
  }

  public deleteMultipleIndexById() {
    for (const equipes of this.selectesEquipe) {
      this.deleteIndexById(equipes.id);
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

  get selectesEquipe(): Array<Equipe> {
    if (this._selectesEquipe == null) {
      this._selectesEquipe = new Array<Equipe>();
    }
    return this._selectesEquipe;
  }

  set selectesEquipe(value: Array<Equipe>) {
    this._selectesEquipe = value;
  }
  get selectevEquipe(): Equipe {
    if (this._selectevEquipe == null) {
      this._selectevEquipe = new Equipe();
    }
    return this._selectevEquipe;
  }

  set selectevEquipe(value: Equipe) {
    this._selectevEquipe = value;
  }
  get selectedEquipe(): Equipe {
    if (this._selectedEquipe == null) {
      this._selectedEquipe = new Equipe();
    }
    return this._selectedEquipe;
  }

  set selectedEquipe(value: Equipe) {
    this._selectedEquipe = value;
  }
  get equipes(): Array<Equipe> {
    if (this._equipes == null) {
      this._equipes = new Array<Equipe>();
    }
    return this._equipes;
  }

  set equipes(value: Array<Equipe>) {
    this._equipes = value;
  }
  get membres(): Array<MembreEquipe> {
    if (this._membres == null) {
      this._membres = new Array<MembreEquipe>();
    }
    return this._membres;
  }

  set membres(value: Array<MembreEquipe>) {
    this._membres = value;
  }
  get membre(): MembreEquipe {
    if (this._membre == null) {
      this._membre = new MembreEquipe();
    }
    return this._membre;
  }

  set membre(value: MembreEquipe) {
    this._membre = value;
  }

  findByCodeCollaborateur(code: string) {
    return this.http.get<Equipe>(this.url + "/Chef/Collaborateur/nom/" + code);
  }
}
