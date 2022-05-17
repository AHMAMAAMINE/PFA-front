import { Injectable } from "@angular/core";
import { Magasin } from "../model/magasin.model";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class MagasinService {
  constructor(private http: HttpClient) {}
  private _magasin: Magasin;
  private _magasins: Array<Magasin>;
  private UrlBase = "http://localhost:8036/GMAO/Magasin-api";
  get magasin(): Magasin {
    return this._magasin;
  }

  set magasin(value: Magasin) {
    this._magasin = value;
  }

  get magasins(): Array<Magasin> {
    return this._magasins;
  }

  set magasins(value: Array<Magasin>) {
    this._magasins = value;
  }
  findAll() {
    this.http.get<Array<Magasin>>(this.UrlBase + "/").subscribe((data) => {
      this.magasins = data;
    });
  }
}
