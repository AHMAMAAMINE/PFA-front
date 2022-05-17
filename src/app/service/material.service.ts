import { Injectable } from '@angular/core';
import {Material} from '../model/material.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  constructor(private http: HttpClient) { }
  private _material: Material;
  private _materials: Array<Material>;
  private UrlBase = 'http://localhost:8036/Gmao/Material-api';
  get material(): Material {
    return this._material;
  }

  set material(value: Material) {
    this._material = value;
  }

  get materials(): Array<Material> {
    return this._materials;
  }

  set materials(value: Array<Material>) {
    this._materials = value;
  }
  findAll(){
    this.http.get<Array<Material>>(this.UrlBase+'/').subscribe(
      data => {
        this.materials = data;
      }
    );
  }
}
