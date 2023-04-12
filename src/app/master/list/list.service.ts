import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Character } from "../character";

@Injectable({
  providedIn: "root",
})
export class ListService {
  URL = environment.api + "/Characters";

  constructor(
    private http: HttpClient,
  ) { }

  list(): Observable<Character[]> {
    return this.http.get<Character[]>(this.URL);
  }
}
