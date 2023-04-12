import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Continents } from "../continents";
import { ContinentsService } from "./continents.service";

@Injectable({
  providedIn: 'root'
})
export class ContinentsResolver implements Resolve<Continents[]> {

  constructor(
    private service: ContinentsService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Continents[] | Observable<Continents[]> | Promise<Continents[]> {
    return this.service.list()
  }
}
