import { EtatIntervention } from './../model/etat-intervention.model';
import { MateraialIntervention } from './../model/materaial-intervention.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Intervention } from './../model/intervention.model';
import { StockService } from './stock-service.service';
import { Conseils } from '../model/conseils.model';
import { InterventionVo } from '../model/intervention-vo.model';
import { InterventionMembreEquipe } from '../model/intervention-membre-equipe.model';
import { UserService } from './user.service';
import {environment} from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InterventionService {
  private _editDialg: boolean;
  constructor(
    private http: HttpClient,
    private stockService: StockService,
    private userService: UserService
  ) {}
  get conseilIntervention(): Conseils {
    if (this._conseilIntervention == null) {
      this._conseilIntervention = new Conseils();
    }
    return this._conseilIntervention;
  }

  set conseilIntervention(value: Conseils) {
    this._conseilIntervention = value;
  }

  get iteams(): Conseils {
    if (this._iteams == null) {
      this._iteams = new Conseils();
    }
    return this._iteams;
  }

  set iteams(value: Conseils) {
    this._iteams = value;
  }

  get conseilInterventions(): Array<Conseils> {
    if (this._conseilInterventions == null) {
      this._conseilInterventions = new Array<Conseils>();
    }

    return this._conseilInterventions;
  }

  set conseilInterventions(value: Array<Conseils>) {
    this._conseilInterventions = value;
  }
  get interventionVo(): InterventionVo {
    if (this._interventionVo == null) {
      this._interventionVo = new InterventionVo();
    }
    return this._interventionVo;
  }

  set interventionVo(value: InterventionVo) {
    this._interventionVo = value;
  }

  get materialInterventions(): Array<MateraialIntervention> {
    if (this._materialInterventions == null) {
      this._materialInterventions = new Array<MateraialIntervention>();
    }
    return this._materialInterventions;
  }

  set materialInterventions(value: MateraialIntervention[]) {
    this._materialInterventions = value;
  }

  get materialIntervention(): MateraialIntervention {
    if (this._materialIntervention == null) {
      this._materialIntervention = new MateraialIntervention();
    }
    return this._materialIntervention;
  }

  set materialIntervention(value: MateraialIntervention) {
    this._materialIntervention = value;
  }
  get collaborateur(): InterventionMembreEquipe {
    if (this._collaborateur == null) {
      // this._collaborateur.collaborateur = new Collaborateur();
      this._collaborateur = new InterventionMembreEquipe();
    }
    return this._collaborateur;
  }

  set collaborateur(value: InterventionMembreEquipe) {
    this._collaborateur = value;
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
  get editDialg(): boolean {
    return this._editDialg;
  }

  set editDialg(value: boolean) {
    this._editDialg = value;
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

  get selectes(): Array<Intervention> {
    return this._selectes;
  }

  set selectes(value: Array<Intervention>) {
    this._selectes = value;
  }
  get collaborateurs(): Array<InterventionMembreEquipe> {
    if (this._collaborateurs == null) {
      this._collaborateurs = new Array<InterventionMembreEquipe>();
    }
    return this._collaborateurs;
  }

  set collaborateurs(value: Array<InterventionMembreEquipe>) {
    this._collaborateurs = value;
  }
  get selection(): InterventionMembreEquipe {
    if (this._selection == null) {
      this._selection = new InterventionMembreEquipe();
    }
    return this._selection;
  }

  set selection(value: InterventionMembreEquipe) {
    this._selection = value;
  }

  get materials(): Array<MateraialIntervention> {
    if (this._materials == null) {
      this._materials = new Array<MateraialIntervention>();
    }
    return this._materials;
  }

  set materials(value: Array<MateraialIntervention>) {
    this._materials = value;
  }

  get etatIntervention(): EtatIntervention {
    if (this._etatIntervention == null) {
      this._etatIntervention = new EtatIntervention();
    }
    return this._etatIntervention;
  }

  set etatIntervention(value: EtatIntervention) {
    this._etatIntervention = value;
  }

  get selected(): Intervention {
    if (this._selected == null) {
      this._selected = new Intervention();
    }
    return this._selected;
  }

  set selected(value: Intervention) {
    this._selected = value;
  }


  get interv(): Intervention {
    if (this._interv == null){
      this._interv = new Intervention();
    }
    return this._interv;
  }

  set interv(value: Intervention) {
    this._interv = value;
  }

  get items(): Array<Intervention> {
    if (this._items == null) {
      this._items = new Array<Intervention>();
    }
    return this._items;
  }

  set items(value: Array<Intervention>) {
    this._items = value;
  }
  private _selection: InterventionMembreEquipe;
  private urlmaterial = environment.baseUrl + '/MaterialIntervention-api/Materialintervention' ;
  public _selected: Intervention;
  public _items: Array<Intervention>;
  private _collaborateurs = this.selected.interventionMembreEquipe;
  private _collaborateur: InterventionMembreEquipe;
  private _codeCollaborateur =
    this.collaborateur.membreEquipe.collaborateur.codeCollaborateur;
  private _materialInterventions = this.selected.materaialInterventions;
  private _materialIntervention: MateraialIntervention;
  private _conseilIntervention: Conseils;
  private _iteams: Conseils;
  private _conseilInterventions: Array<Conseils>;
  private url = environment.baseUrl + '/Intervention-api/intervention';
  private _selectes: Array<Intervention>;
  private _index: number;
  private _createDialog: boolean;
  private _editDialog: boolean;
  private _viewDialog: boolean;
  private _submitted: boolean;
  private _interv: Intervention;
  urlmembre =
    environment.baseUrl +
    '/Collaborateurintervention-api/Collaborateurintervention';
  urlCriteria = 'http://localhost:8036/Intervention-api/intervention/criteria';
  private _interventionVo: InterventionVo;

  private _materials: Array<MateraialIntervention>;
  private _etatIntervention: EtatIntervention;
  urlconsigne = environment.baseUrl + '/GMAO/Conseils-api';

  public findByCriteria() {
    this.http
      .post<Array<Intervention>>(this.urlCriteria, this.interventionVo)
      .subscribe(
        (data) => {
          this.items = data;
        },
        (error) => {
          console.log(error);
        }
      );
  }
  saveCollaboraateur() {
    if (this.findIndexByRef(this.collaborateur.membreEquipe.collaborateur.codeCollaborateur, this.collaborateur.equipe.ref) === -1)
    {
      this.collaborateur.intervention = this.selected;
      if (!this.editDialg) {
        this.collaborateurs.push(this._collaborateur);
      }
      this._codeCollaborateur =
          this.collaborateur.membreEquipe.collaborateur.codeCollaborateur;
      this.selected.interventionMembreEquipe = this.collaborateurs;
      console.log(this.collaborateurs)
    }
    this.collaborateur = null;
  }
  saveStock() {
    this.materialIntervention.intervention = this.selected;
    this.materialIntervention.collaborateur.codeCollaborateur =
      this._codeCollaborateur;
    if (!this.editDialg )
    {
      this.materialInterventions.push(this._materialIntervention);
    }
    this.selected.materaialInterventions = this.materialInterventions;
    this.stockService.selected = null;
    // this.materialIntervention.push(this.materialIntervention);
  }
  saveConseil() {
    this.conseilIntervention.intervention = this.selected;
    this.conseilIntervention.collaborateur.codeCollaborateur =
      this._codeCollaborateur;
    if (!this.editDialg) {
     this.conseilInterventions.push(this._conseilIntervention);
    }
    this.selected.conseils = this.conseilInterventions;
    this._conseilIntervention = null;
  }
  public edit(): Observable<Intervention> {
    // this.selected.interventionMembreEquipe = this.collaborateurs;
    // this.selected.materaialInterventions = this.materialInterventions;
    // this.selected.conseils = this.conseilInterventions;
    console.log(this.selected);
    const stringifi = JSON.stringify(this.selected, this.getCircularReplacer());
    return this.http.put<Intervention>(this.url + '/code/' + this.selected.code,  JSON.parse(stringifi));
  }
  getCircularReplacer = () => {
    const seen = new WeakSet();
    return (key, value) => {
      if (typeof value === 'object' && value !== null) {
        if (seen.has(value)) {
          return;
        }
        seen.add(value);
      }
      return value;
    };
  }

  public save(): Observable<Intervention> {
    const stringifi = JSON.stringify(this.selected, this.getCircularReplacer());
    console.log(this.selected);
    return this.http.post<Intervention>(this.url + '/', JSON.parse(stringifi));
  }
  // public update(index: numb0er, intervention: Intervention) {
  //   this.selected = this.selected;
  //   this._index = index;
  // }
  // public findAll(){
  //   if (this.userService.User.role === 'admin') {
  //     this.http.get<Array<Intervention>>(this.url + '/').subscribe(
  //       data => {
  //         this.items = data;
  //       }
  //       // }, error => {
  //       //   console.log(error); }
  //     );
  //   }
  //   else {// (this.userService.User.role === 'collaborateur')
  // this.http.get<Array<Intervention>>(this.url + '/codeCollan/' + this.userService.User.collaborateur.codeCollaborateur).subscribe(
  //   data => {
  //     this.items = data;
  //   }
  // );
  //   }
  // }
  public findAll(): Observable<Array<Intervention>> {
    return this.http.get<Array<Intervention>>(this.url + '/');
  }

  deleteByCode() {
    return this.http.delete<number>(
      this.url + '/deleteCode/' + this.selected.code
    );
  }
  public deleteIndexById(id: number) {
    this.items.splice(this.findIndexById(id), 1);
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
    return this.http.post<number>(
      this.url + 'delete-multiple-by-reference',
      this.selectes
    );
  }
  public deleteMultipleIndexById() {
    for (const item of this.selectes) {
      this.deleteIndexById(item.id);
    }
  }

  public findByCode(code: string) {
    return this.http.get<Intervention>(this.url + '/findCode/' + code);
  }
  // public addMembres() {
  //   console.log(this.collaborateurs)
  //   this.collaborateurs.push(this.cloneMembre(this.collaborateur));
  //     console.log(this.collaborateurs)
  //     this.collaborateur = new InterventionMembreEquipe();
  //   }

  // private cloneMembre(membre: any) {
  //   const myCloneMembre = new InterventionMembreEquipe();
  //   myCloneMembre.membreEquipe.collaborateur.codeCollaborateur = membre.membreEquipe.collaborateur.codeCollaborateur;
  //   myCloneMembre.membreEquipe.collaborateur.fullname = membre.membreEquipe.collaborateur.fullname;
  //   myCloneMembre.membreEquipe.equipe.ref = membre.membreEquipe.equipe.ref;
  //   return myCloneMembre;
  // }
  findByInterventionCode(code: string) {
    return this.http.get<Array<InterventionMembreEquipe>>(
      this.urlmembre + '/intervcode/' + code
    );
  }

  findIndexByRef(codeCollaborateur: string, ref: string): number {
    let index = -1;
    for (let i = 0; i < this.collaborateurs.length; i++) {
      if (
        this.collaborateurs[i].membreEquipe.collaborateur.codeCollaborateur ===
          codeCollaborateur &&
        this.collaborateurs[i].equipe.ref === ref
      ) {
        index = i;
        break;
      }
    }
    return index;
  }
  findIndexByRefs(referenceMAg: string, Mat: string): number {
    let index = -1;
    console.log(this.materialInterventions.length);
    for (let i = 0; i < this.materialInterventions.length; i++) {
      if (
          this.materialInterventions[i].magasin.reference === referenceMAg &&
          this.materialInterventions[i].material.reference === Mat
      ) {
        index = i;
        break;
      }
    }
    return index;
  }
  delete(interv: string , codeCollaborateur: string, ref: string) {
    return this.http.delete<number>(
      this.urlmembre +
        '/CollaborateurCod/' +
        codeCollaborateur +
        '/Equipe/' +
        ref + '/interv/' + interv
    );
  }

    findByCodeInterv(code: string) {
        return this.http.get<Array<MateraialIntervention>>(this.urlmaterial + '/intervention/' + code);
    }

    deleteMaterial(interv: string , Mag: string , Mat: string) {
        return this.http.delete(this.urlmaterial + '/material/' + Mat + '/Mag/' + Mag + '/interv/' + interv);
    }
  findByCodeIntervention(code: string) {
    return this.http.get<Array<Conseils>>(this.urlconsigne + '/intervention/' + code);
  }

  findIndexByRefa(message: string, codeCollaborateur: string) {
    let index = -1;
    for (let i = 0; i < this.conseilInterventions.length; i++) {
      if (
          this.conseilInterventions[i].message === message &&
          this.conseilInterventions[i].collaborateur.codeCollaborateur === codeCollaborateur
      ) {
        index = i;
        break;
      }
    }
    return index;
  }

  deletes(interv: string, codeCollaborateur: string, message: string) {
    return this.http.delete(this.urlconsigne + '/code/' + codeCollaborateur + '/message/' + message + '/interv/' + interv);
  }

  findByCodeChef(code : string) : Observable<InterventionMembreEquipe>{
   return  this.http.get<InterventionMembreEquipe>(this.urlmembre + '/code/' + code);
  }
}
