import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StarshipDto } from 'app/api/models';
import { Observable } from 'rxjs';

import { ApiConfiguration } from '../api.config';
import { BaseService } from '../base-service';

@Injectable({
  providedIn: 'root'
})
export class StarshipsService extends BaseService {
  readonly starshipsPath = '/starships';

  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  getStarship(id: number): Observable<StarshipDto> {
    const url = `${this.rootUrl}${this.starshipsPath}/${id}`;
    return this.http.get<StarshipDto>(url);
  }

  getStarshipsPage(): Observable<any> {
    const url = `${this.rootUrl}${this.starshipsPath}`;
    return this.http.get<any>(url);
  }
}
