import { Component, OnInit } from '@angular/core';
import {InterventionService} from '../../../service/intervention.service';
import {Intervention} from '../../../model/intervention.model';
import {StockService} from '../../../service/stock-service.service';
import {MagasinService} from '../../../service/magasin.service';
import {MaterialService} from '../../../service/material.service';
import {Stock} from '../../../model/Stock.model';
import {Material} from '../../../model/material.model';
import {Magasin} from '../../../model/magasin.model';
import {MateraialIntervention} from '../../../model/materaial-intervention.model';

@Component({
  selector: 'app-intervention-stock',
  templateUrl: './intervention-stock.component.html',
  styleUrls: ['./intervention-stock.component.scss'],
})
export class InterventionStockComponent implements OnInit {
  index: any;
  cols: any[];
  valeur: any;
  velues: any;
  constructor(
    private stockService: StockService,
    private service: InterventionService,
    private materialService: MaterialService,
    private magasinService: MagasinService
  ) {
    // if (!this.editDialog){
    //   this.stock.qte = null;
    // }
  }

  get selectes(): Array<Intervention> {
    return this.service.selectes;
  }
  set selectes(value: Array<Intervention>) {
    this.service.selectes = value;
  }
  get intervention(): Intervention {
    return this.service.selected;
  }
  get stock(): Stock {
    return this.stockService.selected;
  }
  get stocks(): Array<Stock> {
    return this.stockService.items;
  }
  get materials(): Array<Material> {
    return this.materialService.materials;
  }
  get material(): Material {
    return this.materialService.material;
  }
  get magasins(): Array<Magasin> {
    return this.magasinService.magasins;
  }
  get submitted(): boolean {
    return this.service.submitted;
  }

  set submitted(value: boolean) {
    this.service.submitted = value;
  }
  get selection(): MateraialIntervention {
    return this.stockService.selection;
  }

  set selection(value: MateraialIntervention) {
    this.stockService.selection = value;
  }
  ngOnInit(): void {
    this.materialService.findAll();
    this.magasinService.findAll();
    this.stock.qte=null;
  }

  // value() {
  //   console.log(this.materialService.materials);
  //   for (let i = 0; i < this.materials.length; i++) {
  //     console.log(this.materials[i].reference);
  //     this.values.push(this.materials[i].reference);
  //     console.log(this.values[0]);
  //   }
  //   return this.values;
  // }
  isupdateable() {
    // return this.stock.id != null;
  }
  get viewDialog(): boolean {
    return this.service.viewDialog;
  }

  set viewDialog(value: boolean) {
    this.service.viewDialog = value;
  }
  public Save() {
    return this.stockService.save();
  }
  empty() {}

  evaluate() {
    if (this.intervention.code == null) {
      this.Save();
    } else {
      this.valeur = '---select value-----';
      this.velues = '---select value-----';
      const materialintervention = new MateraialIntervention();
      materialintervention.material = this.stock.material;
      materialintervention.magasin = this.stock.magasin;
      materialintervention.qte = this.stock.qte;
      this.service.materialIntervention = materialintervention;
      this.service.saveStock();
    }
  }
  isSelected($event: any) {
    this.stock.magasin.reference = $event.target.value;
  }
  isSelecte($event: any) {
    this.stock.material.reference = $event.target.value;
  }
  get materialInterventions(): Array<MateraialIntervention> {
    return this.service.materialInterventions;
  }

  set materialInterventions(value: MateraialIntervention[]) {
    this.service.materialInterventions = value;
  }
  get editDialg(): boolean {
    return this.service.editDialg;
  }

  set editDialg(value: boolean) {
    this.service.editDialg = value;
  }
  get editDialog(): boolean {
    return this.service.editDialog;
  }

  set editDialog(value: boolean) {
    this.service.editDialog = value;
  }
  public edit(commande: MateraialIntervention) {
    console.log(commande.magasin.reference);
    this.velues = commande.magasin.reference;
    this.valeur = commande.material.reference;
    this.stock.qte = commande.qte;
    this.selection = commande;
    this.editDialg = true;

  }

  editliste(collaborateur: Stock) {
    if (this.service.findIndexByRefs(collaborateur.magasin.reference, collaborateur.material.reference) !== -1 && this.materialInterventions.length !== 0) {
      alert('donner un membre equipe qui n est pas deja sauvegarder');
    }
    else if ( collaborateur.magasin.reference && collaborateur.material.reference) {
      const materialintervention = new MateraialIntervention();
      materialintervention.material = collaborateur.material;
      materialintervention.magasin = collaborateur.magasin;
      materialintervention.qte = collaborateur.qte;
      this.service.materialIntervention = materialintervention;
      this.service.saveStock();
      const v = this.service.findIndexByRefs(this.selection.magasin.reference, this.selection.material.reference);
      if (v > -1)
      {
        this.materialInterventions[v].qte = collaborateur.qte;
        this.materialInterventions[v].magasin.reference = collaborateur.magasin.reference;
        this.materialInterventions[v].material.reference = collaborateur.material.reference;
        this.valeur = '---select value-----';
        this.velues = '---select value-----';
      }
      this.editDialg = false;
    }
  }

  delete(stock: MateraialIntervention) {
    this.service.deleteMaterial(stock.intervention.code, stock.magasin.reference, stock.material.reference).subscribe(
        data => {
          if (data > 0) {
            this.materialInterventions.splice(this.service.findIndexByRefs(stock.magasin.reference, stock.material.reference));
          }
        }
    );
  }
}
